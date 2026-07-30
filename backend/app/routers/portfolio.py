from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.crud.portfolio import get_portfolio
from app.schemas.portfolio import PortfolioResponse
from app.utils.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/portfolio",
    tags=["Portfolio"]
)


@router.get("/", response_model=list[PortfolioResponse])
def read_portfolio(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return get_portfolio(db, current_user.id)