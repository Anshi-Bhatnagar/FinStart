from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.database import Base


class InvestmentHolding(Base):
    __tablename__ = "investment_holdings"

    id = Column(Integer, primary_key=True, index=True)

    investment_id = Column(
        Integer,
        ForeignKey("investments.id", ondelete="CASCADE"),
        nullable=False
    )

    stock_symbol = Column(String, nullable=False)

    company_name = Column(String, nullable=False)

    sector = Column(String, nullable=True)

    exchange = Column(String, nullable=True)

    quantity = Column(Integer, nullable=False)

    average_buy_price = Column(Float, nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    investment = relationship(
        "Investment",
        back_populates="holdings"
    )

    transactions = relationship(
        "InvestmentTransaction",
        back_populates="holding",
        cascade="all, delete-orphan"
    )