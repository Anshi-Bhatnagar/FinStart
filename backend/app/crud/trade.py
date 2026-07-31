from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.trade import Trade
from app.models.wallet import Wallet
from app.schemas.trade import TradeCreate
from app.crud.portfolio import get_stock, create_stock


def create_trade(db: Session, trade: TradeCreate, user_id: int):

    total_amount = trade.quantity * trade.price

    wallet = (
        db.query(Wallet)
        .filter(Wallet.user_id == user_id)
        .first()
    )

    if not wallet:
        raise HTTPException(
            status_code=404,
            detail="Wallet not found"
        )

    stock = get_stock(db, user_id, trade.stock_symbol)

    # ---------------- BUY ---------------- #

    if trade.trade_type.upper() == "BUY":

        if wallet.balance < total_amount:
            raise HTTPException(
                status_code=400,
                detail="Insufficient wallet balance"
            )

        wallet.balance -= total_amount

        if stock:

            new_quantity = stock.quantity + trade.quantity

            stock.average_buy_price = (
                (stock.average_buy_price * stock.quantity)
                + total_amount
            ) / new_quantity

            stock.quantity = new_quantity

        else:

            create_stock(
                db=db,
                user_id=user_id,
                symbol=trade.stock_symbol,
                company_name=trade.company_name,
                quantity=trade.quantity,
                price=trade.price
            )

    # ---------------- SELL ---------------- #

    elif trade.trade_type.upper() == "SELL":

        if not stock:
            raise HTTPException(
                status_code=400,
                detail="You don't own this stock"
            )

        if stock.quantity < trade.quantity:
            raise HTTPException(
                status_code=400,
                detail="Insufficient stock quantity"
            )

        wallet.balance += total_amount

        stock.quantity -= trade.quantity

        if stock.quantity == 0:
            db.delete(stock)

    else:
        raise HTTPException(
            status_code=400,
            detail="Invalid trade type"
        )

    # ---------------- SAVE TRADE ---------------- #

    new_trade = Trade(
        user_id=user_id,
        stock_symbol=trade.stock_symbol,
        company_name=trade.company_name,
        trade_type=trade.trade_type.upper(),
        quantity=trade.quantity,
        price=trade.price,
        total_amount=total_amount
    )

    db.add(new_trade)
    db.commit()
    db.refresh(new_trade)

    return new_trade


def get_trades(db: Session, user_id: int):
    return (
        db.query(Trade)
        .filter(Trade.user_id == user_id)
        .all()
    )


def get_trade(db: Session, trade_id: int, user_id: int):
    return (
        db.query(Trade)
        .filter(
            Trade.id == trade_id,
            Trade.user_id == user_id
        )
        .first()
    )