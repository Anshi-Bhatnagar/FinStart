from sqlalchemy import Column, Integer, String, ForeignKey,DateTime,Float
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

class Trade(Base):
    __tablename__ = "trades"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    stock_symbol = Column(String, nullable=False)
    company_name = Column(String, nullable=False)
    trade_type = Column(String, nullable=False)  # 'buy' or 'sell'
    quantity = Column(Float, nullable=False)
    price = Column(Float, nullable=False)
    total_amount = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="trades")
