from sqlalchemy import (
    Column,
    Integer,
    Boolean,
    ForeignKey,
)

from sqlalchemy.orm import relationship

from app.database import Base
from sqlalchemy import DateTime
from sqlalchemy.sql import func

class LessonProgress(Base):
    __tablename__ = "lesson_progress"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
    )

    lesson_id = Column(
        Integer,
        ForeignKey("lessons.id", ondelete="CASCADE"),
        nullable=False,
    )

    completed = Column(
        Boolean,
        default=False,
    )

    score = Column(
        Integer,
        default=0,
    )

    lesson = relationship(
        "Lesson",
        back_populates="progress",
    )

    user = relationship(
        "User",
        back_populates="lesson_progress",
    )

    completed_at = Column(
    DateTime(timezone=True),
    server_default=func.now(),
    )