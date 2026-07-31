from pydantic import BaseModel
from typing import List


class WalletSummary(BaseModel):
    balance: float


class PortfolioSummary(BaseModel):
    total_investment: float
    current_value: float
    total_profit_loss: float
    total_profit_loss_percentage: float


class RecentTrade(BaseModel):
    symbol: str
    trade_type: str
    quantity: int
    price: float
    created_at: str


class DashboardResponse(BaseModel):
    wallet: WalletSummary
    portfolio: PortfolioSummary
    recent_trades: List[RecentTrade]