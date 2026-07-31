from pydantic import BaseModel


class PortfolioResponse(BaseModel):
    id: int
    stock_symbol: str
    company_name: str
    quantity: int
    average_buy_price: float

    current_price: float
    investment: float
    current_value: float
    profit_loss: float
    profit_loss_percent: float

    class Config:
        from_attributes = True