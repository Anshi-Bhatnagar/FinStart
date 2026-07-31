from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from app.models.user import User

from app.schemas.investment import (
    InvestmentCreate,
    InvestmentUpdate,
    InvestmentResponse,
    BuySellRequest,
    HoldingResponse,
    TransactionResponse,
    PerformanceResponse
)

from app.crud import investment as investment_crud

router = APIRouter(
    prefix="/investment",
    tags=["Investment"],
)


# ======================================================
# CREATE SIP
# ======================================================

@router.post("/", response_model=InvestmentResponse)
def create_sip(
    investment: InvestmentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return investment_crud.create_investment(
        db,
        current_user.id,
        investment,
    )


# ======================================================
# GET ALL SIPS
# ======================================================

@router.get("/", response_model=list[InvestmentResponse])
def get_sips(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return investment_crud.get_investments(
        db,
        current_user.id,
    )


# ======================================================
# GET SINGLE SIP
# ======================================================

@router.get("/{investment_id}", response_model=InvestmentResponse)
def get_sip(
    investment_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    investment = investment_crud.get_investment(
        db,
        investment_id,
        current_user.id,
    )

    if not investment:
        raise HTTPException(
            status_code=404,
            detail="Investment SIP not found",
        )

    return investment


# ======================================================
# UPDATE SIP
# ======================================================

@router.put("/{investment_id}", response_model=InvestmentResponse)
def update_sip(
    investment_id: int,
    data: InvestmentUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    investment = investment_crud.get_investment(
        db,
        investment_id,
        current_user.id,
    )

    if not investment:
        raise HTTPException(
            status_code=404,
            detail="Investment SIP not found",
        )

    return investment_crud.update_investment(
        db,
        investment,
        data,
    )


# ======================================================
# DELETE SIP
# ======================================================

@router.delete("/{investment_id}")
def delete_sip(
    investment_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    investment = investment_crud.get_investment(
        db,
        investment_id,
        current_user.id,
    )

    if not investment:
        raise HTTPException(
            status_code=404,
            detail="Investment SIP not found",
        )

    investment_crud.delete_investment(
        db,
        investment,
    )

    return {"message": "Investment SIP deleted successfully"}


# ======================================================
# BUY STOCK
# ======================================================

@router.post("/{investment_id}/buy", response_model=HoldingResponse)
def buy_stock(
    investment_id: int,
    data: BuySellRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    investment = investment_crud.get_investment(
        db,
        investment_id,
        current_user.id,
    )

    if not investment:
        raise HTTPException(
            status_code=404,
            detail="Investment SIP not found",
        )

    return investment_crud.buy_stock(
        db,
        investment,
        data,
    )


# ======================================================
# SELL STOCK
# ======================================================

@router.post("/{investment_id}/sell")
def sell_stock(
    investment_id: int,
    data: BuySellRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    investment = investment_crud.get_investment(
        db,
        investment_id,
        current_user.id,
    )

    if not investment:
        raise HTTPException(
            status_code=404,
            detail="Investment SIP not found",
        )

    transaction = investment_crud.sell_stock(
        db,
        investment,
        data,
    )

    if transaction is None:
        raise HTTPException(
            status_code=400,
            detail="Invalid sell request",
        )

    return {
        "message": "Stock sold successfully",
        "transaction": transaction,
    }


# ======================================================
# GET HOLDINGS
# ======================================================

@router.get(
    "/{investment_id}/holdings",
    response_model=list[HoldingResponse],
)
def get_holdings(
    investment_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    investment = investment_crud.get_investment(
        db,
        investment_id,
        current_user.id,
    )

    if not investment:
        raise HTTPException(
            status_code=404,
            detail="Investment SIP not found",
        )

    return investment_crud.get_holdings(
        db,
        investment.id,
    )


# ======================================================
# GET HISTORY
# ======================================================

@router.get(
    "/{investment_id}/history",
    response_model=list[TransactionResponse],
)
def get_history(
    investment_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    investment = investment_crud.get_investment(
        db,
        investment_id,
        current_user.id,
    )

    if not investment:
        raise HTTPException(
            status_code=404,
            detail="Investment SIP not found",
        )

    return investment_crud.get_transactions(
        db,
        investment.id,
    )

# ======================================================
# PERFORMANCE
# ======================================================

@router.get(
    "/{investment_id}/performance",
    response_model=PerformanceResponse,
)
def get_performance(
    investment_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    investment = investment_crud.get_investment(
        db,
        investment_id,
        current_user.id,
    )

    if not investment:
        raise HTTPException(
            status_code=404,
            detail="Investment SIP not found",
        )

    return investment_crud.get_performance(
        db,
        investment.id,
    )