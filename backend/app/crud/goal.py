from sqlalchemy.orm import Session

from app.models.goal import Goal


def create_goal(db: Session, goal_data, user_id: int):
    goal = Goal(
        user_id=user_id,
        title=goal_data.title,
        target_amount=goal_data.target_amount,
        target_date=goal_data.target_date,
    )

    db.add(goal)
    db.commit()
    db.refresh(goal)

    return goal


def get_goals(db: Session, user_id: int):
    return (
        db.query(Goal)
        .filter(Goal.user_id == user_id)
        .all()
    )


def get_goal(db: Session, goal_id: int, user_id: int):
    return (
        db.query(Goal)
        .filter(
            Goal.id == goal_id,
            Goal.user_id == user_id
        )
        .first()
    )


def update_goal(db: Session, goal: Goal, goal_data):
    goal.title = goal_data.title
    goal.target_amount = goal_data.target_amount
    goal.current_amount = goal_data.current_amount
    goal.target_date = goal_data.target_date
    goal.status = goal_data.status

    db.commit()
    db.refresh(goal)

    return goal


def delete_goal(db: Session, goal: Goal):
    db.delete(goal)
    db.commit()