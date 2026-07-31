from sqlalchemy.orm import Session

from app.models.lesson_progress import LessonProgress
from app.models.investment import Investment
from app.models.investment_transaction import InvestmentTransaction


def get_achievements(
    db: Session,
    user_id: int,
):

    lessons_completed = (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == user_id,
            LessonProgress.completed == True,
        )
        .count()
    )

    investments = (
        db.query(Investment)
        .filter(
            Investment.user_id == user_id,
        )
        .all()
    )

    investment_ids = [i.id for i in investments]
    trades = 0

    if investment_ids:
        trades = (
            db.query(InvestmentTransaction)
            .filter(
                InvestmentTransaction.investment_id.in_(investment_ids)
            )
            .count()
        )

    quiz_master = (
    db.query(LessonProgress)
    .filter(
        LessonProgress.user_id == user_id,
        LessonProgress.score == 100,
    )
    .first()
    ) is not None

    achievements = [
        {
            "title": "First Lesson",
            "description": "Complete your first lesson.",
            "unlocked": lessons_completed >= 1,
        },
        {
            "title": "Learning Starter",
            "description": "Complete 5 lessons.",
            "unlocked": lessons_completed >= 5,
        },
        {
            "title": "Learning Expert",
            "description": "Complete 10 lessons.",
            "unlocked": lessons_completed >= 10,
        },
        {
            "title": "Quiz Master",
            "description": "Score 100% in a quiz.",
            "unlocked": quiz_master,
        },
        {
            "title": "First Investment",
            "description": "Buy your first stock.",
            "unlocked": trades >= 1,
        },
        {
            "title": "Active Investor",
            "description": "Complete 5 trades.",
            "unlocked": trades >= 5,
        },
    ]

    return {
        "achievements": achievements
    }