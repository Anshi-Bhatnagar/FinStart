from collections import defaultdict


from sqlalchemy.orm import Session

from app.models.wallet import Wallet
from app.models.investment import Investment
from app.models.investment_holding import InvestmentHolding
from app.models.investment_transaction import InvestmentTransaction

from app.ai.tools.market_data import get_stock_price


def get_dashboard_analytics(
    db: Session,
    user_id: int,
):
    

    # ==========================================
    # WALLET
    # ==========================================

    wallet = (
        db.query(Wallet)
        .filter(Wallet.user_id == user_id)
        .first()
    )

    wallet_balance = wallet.balance if wallet else 0

    # ==========================================
    # USER INVESTMENTS
    # ==========================================

    investments = (
        db.query(Investment)
        .filter(Investment.user_id == user_id)
        .all()
    )

    investment_ids = [i.id for i in investments]
    
    price_cache = {}
    holdings = (
        db.query(InvestmentHolding)
        .filter(
            InvestmentHolding.investment_id.in_(investment_ids)
        )
        .all()
    )
    

    transactions = (
        db.query(InvestmentTransaction)
        .filter(
            InvestmentTransaction.investment_id.in_(investment_ids)
        )
        .order_by(
            InvestmentTransaction.created_at.desc()
        )
        .all()
    )
   

    # ==========================================
    # SUMMARY
    # ==========================================

    invested_amount = 0.0
    portfolio_value = 0.0

    for holding in holdings:

        invested_amount += (
            holding.quantity *
            holding.average_buy_price
        )

        if holding.stock_symbol not in price_cache:

            stock = get_stock_price(
                holding.stock_symbol
            )

            if stock.get("status") in ("error", "unsupported_request"):
                price_cache[holding.stock_symbol] = holding.average_buy_price
            else:
                price_cache[holding.stock_symbol] = float(
                    stock["current_price"]
                )

        current_price = price_cache[
            holding.stock_symbol
        ]

        portfolio_value += (
            holding.quantity *
            current_price
        )

    profit_loss = (
        portfolio_value -
        invested_amount
    )

    profit_percentage = (
        (profit_loss / invested_amount) * 100
        if invested_amount > 0
        else 0
    )

    summary = {
        "wallet_balance": round(wallet_balance, 2),
        "invested_amount": round(invested_amount, 2),
        "portfolio_value": round(portfolio_value, 2),
        "profit_loss": round(profit_loss, 2),
        "profit_loss_percentage": round(
            profit_percentage,
            2,
        ),
    }

    # ==========================================
    # SECTOR DISTRIBUTION
    # ==========================================

    sector_map = defaultdict(float)

    for holding in holdings:

        current_price = price_cache[
            holding.stock_symbol
        ]

        sector_map[
            holding.sector or "Others"
        ] += (
            holding.quantity *
            current_price
        )

    sector_distribution = []

    for sector, value in sector_map.items():

        sector_distribution.append({
            "sector": sector,
            "value": round(value, 2),
        })

    # ==========================================
    # MONTHLY INVESTMENT
    # ==========================================

    monthly = defaultdict(float)

    for txn in transactions:

        if txn.transaction_type != "BUY":
            continue

        month = txn.created_at.strftime("%b")

        monthly[month] += txn.total_amount

    monthly_investment = []

    for month, amount in monthly.items():

        monthly_investment.append({
            "month": month,
            "amount": round(amount, 2),
        })

    # ==========================================
    # RECENT ACTIVITY
    # ==========================================

    recent_activity = []

    for txn in transactions[:10]:

        recent_activity.append({
            "stock_symbol": txn.stock_symbol,
            "transaction_type": txn.transaction_type,
            "quantity": txn.quantity,
            "total_amount": txn.total_amount,
            "created_at": txn.created_at.strftime("%Y-%m-%d"),
        })

    return {
        "summary": summary,
        "sector_distribution": sector_distribution,
        "monthly_investment": monthly_investment,
        "recent_activity": recent_activity,
    }