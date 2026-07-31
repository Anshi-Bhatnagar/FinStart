from datetime import date

from pydantic import BaseModel, ConfigDict


class GoalCreate(BaseModel):
    title: str
    target_amount: int
    target_date: date


class GoalUpdate(BaseModel):
    title: str
    target_amount: int
    current_amount: int
    target_date: date
    status: str


class GoalResponse(BaseModel):
    id: int
    user_id: int
    title: str
    target_amount: int
    current_amount: int
    target_date: date
    status: str

    model_config = ConfigDict(from_attributes=True)