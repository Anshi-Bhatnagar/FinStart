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

    if data.price <= 0:
        raise HTTPException(
            status_code=400,
            detail="Price must be greater than 0",
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

    total_cost = data.quantity * data.price

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
            average_buy_price=data.price,
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
        price=data.price,
        total_amount=total_cost,
    )

    db.add(transaction)

    db.commit()

    db.refresh(wallet)
    db.refresh(holding)

    return holding

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

    if data.price <= 0:
        raise HTTPException(
            status_code=400,
            detail="Price must be greater than 0",
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

    total_amount = data.quantity * data.price

    holding.quantity -= data.quantity
    wallet.balance += total_amount

    transaction = InvestmentTransaction(
        investment_id=investment.id,
        holding_id=holding.id,
        transaction_type="SELL",
        stock_symbol=data.stock_symbol,
        company_name=data.company_name,
        quantity=data.quantity,
        price=data.price,
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
    return (
        db.query(InvestmentHolding)
        .filter(
            InvestmentHolding.investment_id == investment_id
        )
        .order_by(
            InvestmentHolding.company_name
        )
        .all()
    )


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

        # Placeholder for live price integration
        current_value += investment_amount

    profit_loss = current_value - total_investment

    profit_loss_percent = (
        (profit_loss / total_investment) * 100
        if total_investment > 0
        else 0
    )

    return {
        "total_investment": total_investment,
        "current_value": current_value,
        "profit_loss": profit_loss,
        "profit_loss_percent": round(
            profit_loss_percent,
            2,
        ),
        "total_holdings": len(holdings),
    }