from pydantic import BaseModel


class StreakResponse(BaseModel):
    current_streak: int
    longest_streak: int
    last_active_date: str | None