from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from app.models.user import User

from app.schemas.dashboard_analytics import (
    DashboardAnalyticsResponse,
)

from app.crud.dashboard_analytics import (
    get_dashboard_analytics,
)

router = APIRouter(
    prefix="/dashboard-analytics",
    tags=["Dashboard Analytics"],
)


@router.get(
    "/",
    response_model=DashboardAnalyticsResponse,
)
def dashboard_analytics(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return get_dashboard_analytics(
        db,
        current_user.id,
    )