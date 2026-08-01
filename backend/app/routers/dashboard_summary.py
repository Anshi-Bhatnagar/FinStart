from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from app.models.user import User

from app.crud.dashboard_summary import (
    get_dashboard_summary,
)

from app.schemas.dashboard_summary import (
    DashboardSummaryResponse,
)

router = APIRouter(
    prefix="/dashboard-summary",
    tags=["Dashboard Summary"],
)


@router.get(
    "/",
    response_model=DashboardSummaryResponse,
)
def summary(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_dashboard_summary(
        db,
        current_user.id,
    )