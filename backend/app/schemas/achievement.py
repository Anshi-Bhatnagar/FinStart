from pydantic import BaseModel


class Achievement(BaseModel):
    title: str
    description: str
    unlocked: bool


class AchievementResponse(BaseModel):
    achievements: list[Achievement]