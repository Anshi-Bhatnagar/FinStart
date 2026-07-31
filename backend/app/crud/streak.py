from datetime import date, timedelta

from sqlalchemy.orm import Session

from app.models.lesson_progress import LessonProgress


def get_learning_streak(
    db: Session,
    user_id: int,
):

    progress = (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == user_id,
            LessonProgress.completed == True,
        )
        .order_by(LessonProgress.completed_at.asc())
        .all()
    )

    if not progress:
        return {
            "current_streak": 0,
            "longest_streak": 0,
            "last_active_date": None,
        }

    dates = sorted(
        {
            p.completed_at.date()
            for p in progress
            if p.completed_at
        }
    )

    # ---------- Longest Streak ----------
    longest = 1
    streak = 1

    for i in range(1, len(dates)):
        if dates[i] == dates[i - 1] + timedelta(days=1):
            streak += 1
        else:
            streak = 1

        longest = max(longest, streak)

    # ---------- Current Streak ----------
    today = date.today()
    last_date = dates[-1]

    # If the user hasn't completed a lesson today or yesterday,
    # their current streak has ended.
    if last_date not in (today, today - timedelta(days=1)):
        current = 0
    else:
        current = 1

        for i in range(len(dates) - 1, 0, -1):
            if dates[i] == dates[i - 1] + timedelta(days=1):
                current += 1
            else:
                break

    return {
        "current_streak": current,
        "longest_streak": longest,
        "last_active_date": last_date.isoformat(),
    }