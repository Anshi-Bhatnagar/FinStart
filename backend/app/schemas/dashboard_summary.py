from pydantic import BaseModel


class DashboardSummaryResponse(BaseModel):
    paper_trades: int
    total_holdings: int
    portfolio_value: float
    profit_loss: float