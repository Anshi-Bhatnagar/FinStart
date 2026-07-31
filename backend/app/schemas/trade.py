from pydantic import BaseModel, ConfigDict
from datetime import datetime

class TradeCreate(BaseModel):
    stock_symbol:str
    company_name: str
    trade_type: str  # 'buy' or 'sell'
    quantity: int
    price: float
    
class TradeResponse(BaseModel):
    id: int
    user_id: int
    stock_symbol: str
    company_name: str
    trade_type: str  # 'buy' or 'sell'
    quantity: int
    price: float
    total_amount: float
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)

    
