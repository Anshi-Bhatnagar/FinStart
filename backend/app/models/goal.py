from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship

from app.database import Base


class Goal(Base):
    __tablename__ = "goals"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    title = Column(String, nullable=False)

    target_amount = Column(Integer, nullable=False)

    current_amount = Column(Integer, default=0)

    target_date = Column(Date)

    status = Column(String, default="Active")

    user = relationship("User",back_populates="goals")