from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.wallet import WalletResponse
from app.crud.wallet import get_wallet
from app.utils.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/wallet",
    tags=["Wallet"]
)


@router.get("/", response_model=WalletResponse)
def read_wallet(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return get_wallet(db, current_user.id)