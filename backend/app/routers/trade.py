from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.trade import TradeCreate, TradeResponse
from app.crud.trade import create_trade, get_trades, get_trade
from app.utils.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/trades",
    tags=["Trades"]
)


@router.post("/", response_model=TradeResponse)
def add_trade(
    trade: TradeCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return create_trade(db, trade, current_user.id)


@router.get("/", response_model=list[TradeResponse])
def read_trades(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return get_trades(db, current_user.id)


@router.get("/{trade_id}", response_model=TradeResponse)
def read_trade(
    trade_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    trade = get_trade(db, trade_id, current_user.id)

    if not trade:
        raise HTTPException(
            status_code=404,
            detail="Trade not found"
        )

    return trade