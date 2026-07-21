from pydantic import BaseModel, ConfigDict


class ProfileCreate(BaseModel):
    age: int
    occupation: str
    monthly_income: int
    monthly_expenses: int
    investment_experience: str
    risk_appetite: str


class ProfileResponse(ProfileCreate):
    id: int
    user_id: int

    model_config = ConfigDict(from_attributes=True)