from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.models.wallet import Wallet
from app.models.investment import Investment
from app.models.investment_holding import InvestmentHolding
from app.models.investment_transaction import InvestmentTransaction

from app.schemas.investment import (
    InvestmentCreate,
    InvestmentUpdate,
    BuySellRequest,
)
from app.ai.tools.market_data import get_stock_price


# =====================================================
# SIP CRUD
# =====================================================

def create_investment(
    db: Session,
    user_id: int,
    investment: InvestmentCreate,
):
    new_investment = Investment(
        user_id=user_id,
        sip_name=investment.sip_name,
        description=investment.description,
        risk_level=investment.risk_level,
    )

    db.add(new_investment)
    db.commit()
    db.refresh(new_investment)

    return new_investment


def get_investments(
    db: Session,
    user_id: int,
):
    return (
        db.query(Investment)
        .filter(Investment.user_id == user_id)
        .order_by(Investment.created_at.desc())
        .all()
    )


def get_investment(
    db: Session,
    investment_id: int,
    user_id: int,
):
    return (
        db.query(Investment)
        .filter(
            Investment.id == investment_id,
            Investment.user_id == user_id,
        )
        .first()
    )


def update_investment(
    db: Session,
    investment: Investment,
    data: InvestmentUpdate,
):
    update_data = data.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(investment, key, value)

    db.commit()
    db.refresh(investment)

    return investment


def delete_investment(
    db: Session,
    investment: Investment,
):
    db.delete(investment)
    db.commit()


# =====================================================
# BUY STOCK
# =====================================================

def buy_stock(
    db: Session,
    investment: Investment,
    data: BuySellRequest,
):

    if data.quantity <= 0:
        raise HTTPException(
            status_code=400,
            detail="Quantity must be greater than 0",
        )
    stock_data = get_stock_price(data.stock_symbol)
    if stock_data.get("status") in ("error", "unsupported_request"):
        raise HTTPException(
        status_code=400,
        detail=stock_data["message"],
        )

    price = float(stock_data["current_price"])


    wallet = (
        db.query(Wallet)
        .filter(Wallet.user_id == investment.user_id)
        .first()
    )

    if wallet is None:
        raise HTTPException(
            status_code=404,
            detail="Wallet not found",
        )

    total_cost = data.quantity * price

    if wallet.balance < total_cost:
        raise HTTPException(
            status_code=400,
            detail="Insufficient wallet balance",
        )

    holding = (
        db.query(InvestmentHolding)
        .filter(
            InvestmentHolding.investment_id == investment.id,
            InvestmentHolding.stock_symbol == data.stock_symbol,
        )
        .first()
    )

    wallet.balance -= total_cost

    if holding:

        previous_cost = (
            holding.quantity *
            holding.average_buy_price
        )

        new_quantity = (
            holding.quantity +
            data.quantity
        )

        holding.average_buy_price = (
            previous_cost +
            total_cost
        ) / new_quantity

        holding.quantity = new_quantity

    else:

        holding = InvestmentHolding(
            investment_id=investment.id,
            stock_symbol=data.stock_symbol,
            company_name=data.company_name,
            sector=data.sector,
            exchange=data.exchange,
            quantity=data.quantity,
            average_buy_price=price,
        )

        db.add(holding)
        db.flush()

    transaction = InvestmentTransaction(
        investment_id=investment.id,
        holding_id=holding.id,
        transaction_type="BUY",
        stock_symbol=data.stock_symbol,
        company_name=data.company_name,
        quantity=data.quantity,
        price=price,
        total_amount=total_cost,
    )

    db.add(transaction)

    db.commit()

    db.refresh(wallet)
    db.refresh(holding)

    current_price = price

    market_value = holding.quantity * current_price

    profit_loss = (
        market_value -
        (holding.quantity * holding.average_buy_price)
    )

    profit_loss_percentage = (
        (profit_loss / (holding.quantity * holding.average_buy_price)) * 100
        if holding.quantity > 0
        else 0
    )

    return {
        "id": holding.id,
        "stock_symbol": holding.stock_symbol,
        "company_name": holding.company_name,
        "sector": holding.sector,
        "exchange": holding.exchange,
        "quantity": holding.quantity,
        "average_buy_price": round(holding.average_buy_price, 2),
        "current_price": round(current_price, 2),
        "market_value": round(market_value, 2),
        "profit_loss": round(profit_loss, 2),
        "profit_loss_percentage": round(profit_loss_percentage, 2),
    }

# =====================================================
# SELL STOCK
# =====================================================

def sell_stock(
    db: Session,
    investment: Investment,
    data: BuySellRequest,
):
    if data.quantity <= 0:
        raise HTTPException(
            status_code=400,
            detail="Quantity must be greater than 0",
        )



    holding = (
        db.query(InvestmentHolding)
        .filter(
            InvestmentHolding.investment_id == investment.id,
            InvestmentHolding.stock_symbol == data.stock_symbol,
        )
        .first()
    )

    if holding is None:
        raise HTTPException(
            status_code=404,
            detail="Stock not found in this SIP",
        )

    if holding.quantity < data.quantity:
        raise HTTPException(
            status_code=400,
            detail="Not enough shares to sell",
        )

    wallet = (
        db.query(Wallet)
        .filter(Wallet.user_id == investment.user_id)
        .first()
    )

    if wallet is None:
        raise HTTPException(
            status_code=404,
            detail="Wallet not found",
        )

    stock_data = get_stock_price(data.stock_symbol)
    if stock_data.get("status") in ("error", "unsupported_request"):
        raise HTTPException(
        status_code=400,
        detail=stock_data["message"],
        )

    price = float(stock_data["current_price"])
    total_amount = data.quantity * price

    holding.quantity -= data.quantity
    wallet.balance += total_amount

    transaction = InvestmentTransaction(
        investment_id=investment.id,
        holding_id=holding.id,
        transaction_type="SELL",
        stock_symbol=data.stock_symbol,
        company_name=data.company_name,
        quantity=data.quantity,
        price=price,
        total_amount=total_amount,
    )

    db.add(transaction)

    if holding.quantity == 0:
        db.delete(holding)

    db.commit()

    db.refresh(wallet)

    return transaction


# =====================================================
# HOLDINGS
# =====================================================

def get_holdings(
    db: Session,
    investment_id: int,
):
    holdings = (
        db.query(InvestmentHolding)
        .filter(
            InvestmentHolding.investment_id == investment_id
        )
        .order_by(
            InvestmentHolding.company_name
        )
        .all()
    )

    result = []

    for holding in holdings:

        stock_data = get_stock_price(
            holding.stock_symbol
        )

        if stock_data.get("status") in ("error", "unsupported_request"):
            current_price = holding.average_buy_price
        else:
            current_price = float(stock_data["current_price"])

        avg_price = round(float(holding.average_buy_price), 2)
        current_price = round(float(current_price), 2)

        market_value = round(
            holding.quantity * current_price,
            2,
        )

        invested_value = round(
            holding.quantity * avg_price,
            2,
        )

        profit_loss = round(
            market_value - invested_value,
            2,
        )

        profit_loss_percentage = (
            round((profit_loss / invested_value) * 100, 2)
            if invested_value > 0
            else 0
        )

        result.append({
            "id": holding.id,
            "stock_symbol": holding.stock_symbol,
            "company_name": holding.company_name,
            "sector": holding.sector,
            "exchange": holding.exchange,
            "quantity": holding.quantity,
            "average_buy_price": round(
                holding.average_buy_price,
                2,
            ),
            "current_price": round(
                current_price,
                2,
            ),
            "market_value": round(
                market_value,
                2,
            ),
            "profit_loss": round(
                profit_loss,
                2,
            ),
            "profit_loss_percentage": round(
                profit_loss_percentage,
                2,
            ),
        })

    return result


# =====================================================
# TRANSACTION HISTORY
# =====================================================

def get_transactions(
    db: Session,
    investment_id: int,
):
    return (
        db.query(InvestmentTransaction)
        .filter(
            InvestmentTransaction.investment_id == investment_id
        )
        .order_by(
            InvestmentTransaction.created_at.desc()
        )
        .all()
    )


# =====================================================
# PERFORMANCE
# =====================================================

def get_performance(
    db: Session,
    investment_id: int,
):
    holdings = (
        db.query(InvestmentHolding)
        .filter(
            InvestmentHolding.investment_id == investment_id
        )
        .all()
    )

    total_investment = 0.0
    current_value = 0.0

    for holding in holdings:

        investment_amount = (
            holding.quantity *
            holding.average_buy_price
        )

        total_investment += investment_amount

        stock_data = get_stock_price(
            holding.stock_symbol
        )

        if stock_data.get("status") in ("error", "unsupported_request"):
            current_price = holding.average_buy_price
        else:
            current_price = float(stock_data["current_price"])

        current_value += (
            holding.quantity *
            current_price
        )

    profit_loss = current_value - total_investment

    profit_loss_percent = (
        round((profit_loss / total_investment) * 100, 2)
        if total_investment > 0
        else 0
    )

    return {
        "total_investment": round(total_investment, 2),
        "current_value": round(current_value, 2),
        "profit_loss": round(profit_loss, 2),
        "profit_loss_percent": profit_loss_percent,
        "total_holdings": len(holdings),
    }