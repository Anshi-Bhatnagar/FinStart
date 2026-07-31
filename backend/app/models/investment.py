from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.database import Base


class Investment(Base):
    __tablename__ = "investments"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False
    )

    sip_name = Column(String, nullable=False)

    description = Column(String, nullable=True)

    risk_level = Column(String, nullable=True)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    user = relationship(
        "User",
        back_populates="investments"
    )

    holdings = relationship(
        "InvestmentHolding",
        back_populates="investment",
        cascade="all, delete-orphan"
    )

    transactions = relationship(
        "InvestmentTransaction",
        back_populates="investment",
        cascade="all, delete-orphan"
    )
    holdings = relationship(
    "InvestmentHolding",
    back_populates="investment",
    cascade="all, delete-orphan"
    )