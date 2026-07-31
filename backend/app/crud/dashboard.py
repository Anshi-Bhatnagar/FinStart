from sqlalchemy.orm import Session

from app.crud.portfolio import get_portfolio_summary
from app.crud.trade import get_trades


def get_dashboard(db: Session, user_id: int):

    portfolio = get_portfolio_summary(db, user_id)

    trades = get_trades(db, user_id)

    recent_trades = sorted(
        trades,
        key=lambda trade: trade.created_at,
        reverse=True
    )[:5]

    return {
        "wallet": {
            "balance": portfolio["wallet_balance"]
        },
        "portfolio": {
            "total_investment": portfolio["total_investment"],
            "current_value": portfolio["current_value"],
            "total_profit_loss": portfolio["total_profit_loss"],
            "total_profit_loss_percentage": portfolio["total_profit_loss_percent"]
        },
        "recent_trades": [
            {
                "symbol": trade.stock_symbol,
                "trade_type": trade.trade_type,
                "quantity": trade.quantity,
                "price": trade.price,
                "created_at": trade.created_at.isoformat()
            }
            for trade in recent_trades
        ]
    }