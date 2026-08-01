from pydantic import BaseModel


class Achievement(BaseModel):
    title: str
    description: str
    unlocked: bool


class AchievementResponse(BaseModel):
    xp: int
    badges: int
    unlocked: int
    total: int
    achievements: list[Achievement]