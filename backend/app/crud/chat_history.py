from sqlalchemy.orm import Session

from app.models.chat_history import ChatHistory


def save_message(
    db: Session,
    user_id: int,
    role: str,
    message: str,
):
    chat = ChatHistory(
        user_id=user_id,
        role=role,
        message=message,
    )

    db.add(chat)
    db.commit()
    db.refresh(chat)

    return chat


def get_recent_messages(
    db: Session,
    user_id: int,
    limit: int = 10,
):
    messages = (
        db.query(ChatHistory)
        .filter(ChatHistory.user_id == user_id)
        .order_by(ChatHistory.created_at.desc())
        .limit(limit)
        .all()
    )

    return list(reversed(messages))