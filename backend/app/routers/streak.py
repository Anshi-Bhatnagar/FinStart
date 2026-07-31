from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user
from app.models.user import User

from app.schemas.streak import StreakResponse
from app.crud.streak import get_learning_streak

router = APIRouter(
    prefix="/streak",
    tags=["Learning Streak"],
)


@router.get(
    "/",
    response_model=StreakResponse,
)
def learning_streak(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return get_learning_streak(
        db,
        current_user.id,
    )