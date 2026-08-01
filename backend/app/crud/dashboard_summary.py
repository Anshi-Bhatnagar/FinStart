from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.investment import Investment
from app.models.investment_holding import InvestmentHolding
from app.models.investment_transaction import InvestmentTransaction


def get_dashboard_summary(
    db: Session,
    user_id: int,
):
    investments = (
        db.query(Investment)
        .filter(Investment.user_id == user_id)
        .all()
    )

    investment_ids = [i.id for i in investments]

    if not investment_ids:
        return {
            "paper_trades": 0,
            "total_holdings": 0,
            "portfolio_value": 0,
            "profit_loss": 0,
        }

    paper_trades = (
        db.query(InvestmentTransaction)
        .filter(
            InvestmentTransaction.investment_id.in_(investment_ids)
        )
        .count()
    )

    holdings = (
        db.query(InvestmentHolding)
        .filter(
            InvestmentHolding.investment_id.in_(investment_ids)
        )
        .all()
    )

    total_holdings = len(holdings)

    portfolio_value = sum(
        h.quantity * h.average_buy_price
        for h in holdings
    )

    profit_loss = 0

    return {
        "paper_trades": paper_trades,
        "total_holdings": total_holdings,
        "portfolio_value": round(portfolio_value, 2),
        "profit_loss": round(profit_loss, 2),
    }