from sqlalchemy.orm import Session

from app.models.wallet import Wallet


def create_wallet(db: Session, user_id: int):
    wallet = Wallet(
        user_id=user_id,
        balance=1000000.0
    )

    db.add(wallet)
    db.commit()
    db.refresh(wallet)

    return wallet


def get_wallet(db: Session, user_id: int):
    return (
        db.query(Wallet)
        .filter(Wallet.user_id == user_id)
        .first()
    )