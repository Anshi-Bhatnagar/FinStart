from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from app.models.user import User

from app.crud import learn as learn_crud

from app.schemas.learn import (
    CategoryResponse,
    LessonResponse,
    DashboardResponse,
)

router = APIRouter(
    prefix="/learn",
    tags=["Learn"],
)


# =====================================================
# DASHBOARD
# =====================================================

@router.get(
    "/dashboard",
    response_model=DashboardResponse,
)
def dashboard(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return learn_crud.get_dashboard(
        db,
        current_user.id,
    )


# =====================================================
# CATEGORIES
# =====================================================

@router.get(
    "/categories",
    response_model=list[CategoryResponse],
)
def categories(
    db: Session = Depends(get_db),
):
    return learn_crud.get_categories(db)


# =====================================================
# LESSONS
# =====================================================

@router.get(
    "/lessons",
    response_model=list[LessonResponse],
)
def lessons(
    db: Session = Depends(get_db),
):
    return learn_crud.get_lessons(db)


# =====================================================
# SINGLE LESSON
# =====================================================

@router.get(
    "/lesson/{lesson_id}",
    response_model=LessonResponse,
)
def lesson(
    lesson_id: int,
    db: Session = Depends(get_db),
):
    lesson = learn_crud.get_lesson(
        db,
        lesson_id,
    )

    if lesson is None:
        raise HTTPException(
            status_code=404,
            detail="Lesson not found",
        )

    return lesson