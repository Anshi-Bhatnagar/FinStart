from sqlalchemy.orm import Session

from app.models.lesson import Lesson
from app.models.lesson_progress import LessonProgress


# =====================================================
# COMPLETE LESSON
# =====================================================

def complete_lesson(
    db: Session,
    user_id: int,
    lesson_id: int,
    score: int,
):

    progress = (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == user_id,
            LessonProgress.lesson_id == lesson_id,
        )
        .first()
    )

    if progress:

        progress.completed = True
        progress.score = score

    else:

        progress = LessonProgress(
            user_id=user_id,
            lesson_id=lesson_id,
            completed=True,
            score=score,
        )

        db.add(progress)

    db.commit()

    return progress


# =====================================================
# GET PROGRESS
# =====================================================

def get_progress(
    db: Session,
    user_id: int,
):

    total_lessons = db.query(Lesson).count()

    completed = (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == user_id,
            LessonProgress.completed == True,
        )
        .count()
    )

    percentage = 0

    if total_lessons:

        percentage = round(
            completed / total_lessons * 100,
            2,
        )

    completed_ids = {
        p.lesson_id
        for p in db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == user_id,
            LessonProgress.completed == True,
        )
        .all()
    }

    next_lesson = (
        db.query(Lesson)
        .filter(~Lesson.id.in_(completed_ids))
        .order_by(Lesson.order_number)
        .first()
    )

    return {
        "completed_lessons": completed,
        "total_lessons": total_lessons,
        "completion_percentage": percentage,
        "next_lesson_id": next_lesson.id if next_lesson else None,
    }