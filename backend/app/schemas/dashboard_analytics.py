from pydantic import BaseModel


# =====================================================
# SUMMARY
# =====================================================

class SummaryCard(BaseModel):
    wallet_balance: float
    invested_amount: float
    portfolio_value: float
    profit_loss: float
    profit_loss_percentage: float


# =====================================================
# SECTOR
# =====================================================

class SectorItem(BaseModel):
    sector: str
    value: float


# =====================================================
# MONTHLY INVESTMENT
# =====================================================

class MonthlyInvestment(BaseModel):
    month: str
    amount: float


# =====================================================
# RECENT ACTIVITY
# =====================================================

class RecentActivity(BaseModel):
    stock_symbol: str
    transaction_type: str
    quantity: int
    total_amount: float
    created_at: str


# =====================================================
# COMPLETE RESPONSE
# =====================================================

class DashboardAnalyticsResponse(BaseModel):
    summary: SummaryCard
    sector_distribution: list[SectorItem]
    monthly_investment: list[MonthlyInvestment]
    recent_activity: list[RecentActivity]