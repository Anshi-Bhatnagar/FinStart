from sqlalchemy.orm import Session

from app.models.wallet import Wallet
from app.models.investment import Investment
from app.models.investment_holding import InvestmentHolding
from app.models.goal import Goal

from app.crud.portfolio import get_portfolio_summary


def build_user_context(db: Session, user_id: int):

    wallet = (
        db.query(Wallet)
        .filter(Wallet.user_id == user_id)
        .first()
    )

    investments = (
        db.query(Investment)
        .filter(Investment.user_id == user_id)
        .all()
    )

    holdings = (
        db.query(InvestmentHolding)
        .join(Investment)
        .filter(Investment.user_id == user_id)
        .all()
    )

    goals = (
        db.query(Goal)
        .filter(Goal.user_id == user_id)
        .all()
    )

    portfolio_summary = get_portfolio_summary(
        db,
        user_id
    )

    context = {
        "wallet_balance": wallet.balance if wallet else 0,
        "portfolio_summary": portfolio_summary,
        "investments": [],
        "goals": [],
    }

    for investment in investments:
        context["investments"].append(
            {
                "id": investment.id,
                "sip_name": investment.sip_name,
                "description": investment.description,
                "risk_level": investment.risk_level,
            }
        )

    for goal in goals:

        context["goals"].append(
            {
                "title": goal.title,
                "target_amount": goal.target_amount,
                "current_amount": goal.current_amount,
            }
        )

    return context