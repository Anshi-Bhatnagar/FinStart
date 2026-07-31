from pydantic import BaseModel
from typing import Optional
from datetime import datetime


# ---------- SIP ----------

class InvestmentCreate(BaseModel):
    sip_name: str
    description: Optional[str] = None
    risk_level: Optional[str] = None


class InvestmentUpdate(BaseModel):
    sip_name: Optional[str] = None
    description: Optional[str] = None
    risk_level: Optional[str] = None


class InvestmentResponse(BaseModel):
    id: int
    sip_name: str
    description: Optional[str]
    risk_level: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True


# ---------- BUY / SELL ----------

class BuySellRequest(BaseModel):
    stock_symbol: str
    company_name: str
    sector: str | None = None
    exchange: str | None = None
    quantity: int


# ---------- Holding ----------

class HoldingResponse(BaseModel):
    id: int
    stock_symbol: str
    company_name: str
    sector: Optional[str]
    exchange: Optional[str]

    quantity: int

    average_buy_price: float

    current_price: float

    market_value: float

    profit_loss: float

    profit_loss_percentage: float

    class Config:
        from_attributes = True

# ---------- Transaction ----------

class TransactionResponse(BaseModel):
    id: int
    transaction_type: str
    stock_symbol: str
    company_name: str
    quantity: int
    price: float
    total_amount: float
    created_at: datetime

    class Config:
        from_attributes = True

class PerformanceResponse(BaseModel):
    total_investment: float
    current_value: float
    profit_loss: float
    profit_loss_percent: float
    total_holdings: int