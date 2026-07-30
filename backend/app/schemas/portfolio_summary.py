from pydantic import BaseModel


class PortfolioSummaryResponse(BaseModel):
    wallet_balance: float
    total_investment: float
    current_value: float
    total_profit_loss: float
    total_profit_loss_percent: float
    number_of_holdings: int