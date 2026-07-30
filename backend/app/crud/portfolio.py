from sqlalchemy.orm import Session

from app.models.portfolio import Portfolio


def get_portfolio(db: Session, user_id: int):
    return (
        db.query(Portfolio)
        .filter(Portfolio.user_id == user_id)
        .all()
    )
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