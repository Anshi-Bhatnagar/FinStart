from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    ForeignKey,
)

from sqlalchemy.orm import relationship

from app.database import Base


class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True)

    category_id = Column(
        Integer,
        ForeignKey("learn_categories.id", ondelete="CASCADE"),
        nullable=False,
    )

    title = Column(
        String,
        nullable=False,
    )

    description = Column(String)

    content = Column(Text)

    difficulty = Column(String)

    duration_minutes = Column(Integer)

    order_number = Column(Integer)

    category = relationship(
        "LearnCategory",
        back_populates="lessons",
    )

    progress = relationship(
        "LessonProgress",
        back_populates="lesson",
        cascade="all, delete-orphan",
    )