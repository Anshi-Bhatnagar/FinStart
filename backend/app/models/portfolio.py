from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship

from app.database import Base


class Portfolio(Base):
    __tablename__ = "portfolio"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    stock_symbol = Column(String, nullable=False)

    company_name = Column(String, nullable=False)

    quantity = Column(Integer, default=0)

    average_buy_price = Column(Float, default=0.0)

    user = relationship("User", back_populates="portfolio")