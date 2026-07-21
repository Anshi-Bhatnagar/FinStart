from sqlalchemy import Column, Integer, String,Boolean,DateTime
from sqlalchemy.sql import func
from app.database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    profile = relationship("Profile", back_populates="user", uselist=False)
    full_name = Column(String,nullable=False)
    email = Column(String, unique=True, index=True ,nullable=False)
    hashed_password = Column(String,nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, server_default=func.now())