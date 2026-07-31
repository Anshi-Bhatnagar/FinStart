from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database import Base


class LearnCategory(Base):
    __tablename__ = "learn_categories"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(
        String,
        nullable=False,
        unique=True,
    )

    description = Column(String)

    icon = Column(String)

    lessons = relationship(
        "Lesson",
        back_populates="category",
        cascade="all, delete-orphan",
    )