from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from app.models.user import User

from app.crud.achievement import get_achievements

from app.schemas.achievement import AchievementResponse

router = APIRouter(
    prefix="/achievements",
    tags=["Achievements"],
)


# =====================================================
# GET ACHIEVEMENTS
# =====================================================

@router.get(
    "/",
    response_model=AchievementResponse,
)
def achievements(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return get_achievements(
        db,
        current_user.id,
    )