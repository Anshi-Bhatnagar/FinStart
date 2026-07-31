from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.learn_category import LearnCategory
from app.models.lesson import Lesson
from app.models.lesson_progress import LessonProgress


# =====================================================
# CATEGORIES
# =====================================================

def get_categories(db: Session):
    return (
        db.query(LearnCategory)
        .order_by(LearnCategory.name)
        .all()
    )


# =====================================================
# LESSONS
# =====================================================

def get_lessons(db: Session):
    return (
        db.query(Lesson)
        .order_by(
            Lesson.category_id,
            Lesson.order_number
        )
        .all()
    )


def get_lesson(
    db: Session,
    lesson_id: int,
):
    return (
        db.query(Lesson)
        .filter(Lesson.id == lesson_id)
        .first()
    )


# =====================================================
# USER PROGRESS
# =====================================================

def get_user_progress(
    db: Session,
    user_id: int,
):
    return (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == user_id
        )
        .all()
    )


# =====================================================
# DASHBOARD
# =====================================================

def get_dashboard(
    db: Session,
    user_id: int,
):
    categories = get_categories(db)

    lessons = get_lessons(db)

    progress = (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == user_id
        )
        .all()
    )

    progress_map = {
        p.lesson_id: p
        for p in progress
    }

    dashboard_lessons = []

    completed = 0

    for lesson in lessons:

        lesson_progress = progress_map.get(lesson.id)

        percent = 0

        if lesson_progress:

            if lesson_progress.completed:
                percent = 100
                completed += 1
            else:
                percent = lesson_progress.score

        dashboard_lessons.append(
            {
                "id": lesson.id,
                "title": lesson.title,
                "description": lesson.description,
                "difficulty": lesson.difficulty,
                "duration_minutes": lesson.duration_minutes,
                "progress": percent,
            }
        )

    total = len(lessons)

    completion = 0

    if total:
        completion = round(
            completed / total * 100,
            2,
        )

    return {
        "categories": categories,
        "lessons": dashboard_lessons,
        "completed_lessons": completed,
        "total_lessons": total,
        "completion_percentage": completion,
    }