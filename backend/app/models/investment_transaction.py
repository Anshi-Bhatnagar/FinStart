from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.database import Base


class InvestmentTransaction(Base):
    __tablename__ = "investment_transactions"

    id = Column(Integer, primary_key=True, index=True)

    investment_id = Column(
        Integer,
        ForeignKey("investments.id", ondelete="CASCADE"),
        nullable=False
    )

    holding_id = Column(
        Integer,
        ForeignKey("investment_holdings.id", ondelete="CASCADE"),
        nullable=False
    )

    transaction_type = Column(String, nullable=False)  # BUY / SELL

    stock_symbol = Column(String, nullable=False)

    company_name = Column(String, nullable=False)

    quantity = Column(Integer, nullable=False)

    price = Column(Float, nullable=False)

    total_amount = Column(Float, nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    investment = relationship(
        "Investment",
        back_populates="transactions"
    )

    holding = relationship(
        "InvestmentHolding",
        back_populates="transactions"
    )