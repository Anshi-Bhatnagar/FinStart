from sqlalchemy.orm import Session
from app.models.wallet import Wallet
from app.models.portfolio import Portfolio
from app.utils.market import get_current_price


def get_portfolio(db: Session, user_id: int):

    portfolio = (
        db.query(Portfolio)
        .filter(Portfolio.user_id == user_id)
        .all()
    )

    result = []

    for stock in portfolio:

        current_price = get_current_price(stock.stock_symbol)

        investment = stock.quantity * stock.average_buy_price

        current_value = stock.quantity * current_price

        profit_loss = current_value - investment

        if investment == 0:
            profit_loss_percent = 0
        else:
            profit_loss_percent = (profit_loss / investment) * 100

        result.append({
            "id": stock.id,
            "stock_symbol": stock.stock_symbol,
            "company_name": stock.company_name,
            "quantity": stock.quantity,
            "average_buy_price": round(stock.average_buy_price, 2),
            "current_price": round(current_price, 2),
            "investment": round(investment, 2),
            "current_value": round(current_value, 2),
            "profit_loss": round(profit_loss, 2),
            "profit_loss_percent": round(profit_loss_percent, 2)
        })

    return result


def get_stock(db: Session, user_id: int, symbol: str):
    return (
        db.query(Portfolio)
        .filter(
            Portfolio.user_id == user_id,
            Portfolio.stock_symbol == symbol
        )
        .first()
    )


def create_stock(
    db: Session,
    user_id: int,
    symbol: str,
    company_name: str,
    quantity: int,
    price: float
):
    stock = Portfolio(
        user_id=user_id,
        stock_symbol=symbol,
        company_name=company_name,
        quantity=quantity,
        average_buy_price=price
    )

    db.add(stock)
    db.flush()
    db.refresh(stock)

    return stock
def get_portfolio_summary(db: Session, user_id: int):

    portfolio = (
        db.query(Portfolio)
        .filter(Portfolio.user_id == user_id)
        .all()
    )

    wallet = (
        db.query(Wallet)
        .filter(Wallet.user_id == user_id)
        .first()
    )

    total_investment = 0
    current_value = 0

    for stock in portfolio:

        current_price = get_current_price(stock.stock_symbol)

        total_investment += stock.quantity * stock.average_buy_price

        current_value += stock.quantity * current_price

    total_profit_loss = current_value - total_investment

    if total_investment == 0:
        total_profit_loss_percent = 0
    else:
        total_profit_loss_percent = (
            total_profit_loss / total_investment
        ) * 100

    return {
        "wallet_balance": round(wallet.balance, 2),
        "total_investment": round(total_investment, 2),
        "current_value": round(current_value, 2),
        "total_profit_loss": round(total_profit_loss, 2),
        "total_profit_loss_percent": round(total_profit_loss_percent, 2),
        "number_of_holdings": len(portfolio)
    }