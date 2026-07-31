from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.goal import GoalCreate, GoalUpdate, GoalResponse
from app.crud.goal import (
    create_goal,
    get_goals,
    get_goal,
    update_goal,
    delete_goal,
)
from app.utils.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/goals",
    tags=["Goals"]
)


@router.post("/", response_model=GoalResponse)
def create_new_goal(
    goal: GoalCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return create_goal(db, goal, current_user.id)


@router.get("/", response_model=list[GoalResponse])
def read_goals(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_goals(db, current_user.id)


@router.get("/{goal_id}", response_model=GoalResponse)
def read_goal(
    goal_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    goal = get_goal(db, goal_id, current_user.id)

    if not goal:
        raise HTTPException(
            status_code=404,
            detail="Goal not found"
        )

    return goal


@router.put("/{goal_id}", response_model=GoalResponse)
def edit_goal(
    goal_id: int,
    goal_data: GoalUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    goal = get_goal(db, goal_id, current_user.id)

    if not goal:
        raise HTTPException(
            status_code=404,
            detail="Goal not found"
        )

    return update_goal(db, goal, goal_data)


@router.delete("/{goal_id}")
def remove_goal(
    goal_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    goal = get_goal(db, goal_id, current_user.id)

    if not goal:
        raise HTTPException(
            status_code=404,
            detail="Goal not found"
        )

    delete_goal(db, goal)

    return {
        "message": "Goal deleted successfully"
    }