from pydantic import BaseModel


class PortfolioResponse(BaseModel):
    id: int
    stock_symbol: str
    company_name: str
    quantity: int
    average_buy_price: float

    class Config:
        from_attributes = True