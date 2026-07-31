from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from app.models.user import User

from app.schemas.progress import (
    CompleteLessonRequest,
    ProgressResponse,
)

from app.crud.progress import (
    complete_lesson,
    get_progress,
)

router = APIRouter(
    prefix="/progress",
    tags=["Learning Progress"],
)


# =====================================================
# COMPLETE LESSON
# =====================================================

@router.post("/complete")
def complete(
    request: CompleteLessonRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    complete_lesson(
        db,
        current_user.id,
        request.lesson_id,
        request.score,
    )

    return {
        "message": "Lesson marked as completed."
    }


# =====================================================
# GET PROGRESS
# =====================================================

@router.get(
    "/",
    response_model=ProgressResponse,
)
def progress(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return get_progress(
        db,
        current_user.id,
    )