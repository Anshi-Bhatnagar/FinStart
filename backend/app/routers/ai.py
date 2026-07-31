from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from app.models.user import User

from app.ai.context_builder import build_user_context
from app.ai.prompt_builder import build_chat_prompt

from app.schemas.ai import (
    ChatRequest,
    ChatResponse,
    RiskProfileRequest,
    ScamDetectionRequest,
    TradeFeedbackRequest,
)

from app.ai.ai_service import (
    generate_risk_profile,
    analyze_scam,
    generate_trade_feedback,
)
from app.ai.orchestrator import generate_ai_response

from app.crud.chat_history import (
    save_message,
    get_recent_messages,
)

router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


# =====================================================
# AI CHAT
# =====================================================

@router.post("/chat", response_model=ChatResponse)
def ai_chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    # Build personalized financial context
    context = build_user_context(
        db,
        current_user.id,
    )

    # Fetch recent chat history
    history = get_recent_messages(
        db,
        current_user.id,
    )

    # Build prompt
    prompt = build_chat_prompt(
        context,
        request.message,
        history,
    )

    # Save user's message first
    save_message(
        db,
        current_user.id,
        "user",
        request.message,
    )

    # Generate AI response
    response = generate_ai_response(prompt,request.message)

    # Save only the assistant's actual reply
    assistant_message = (
        response.get("message")
        if isinstance(response, dict)
        else str(response)
    )

    save_message(
        db,
        current_user.id,
        "assistant",
        assistant_message,
    )

    return {
        "reply": response
    }


# =====================================================
# RISK PROFILE
# =====================================================

@router.post("/risk-profile")
def risk_profile(
    request: RiskProfileRequest,
):
    return generate_risk_profile(
        request.questionnaire
    )


# =====================================================
# SCAM DETECTION
# =====================================================

@router.post("/scam-detection")
def scam_detection(
    request: ScamDetectionRequest,
):
    return analyze_scam(
        request.message
    )


# =====================================================
# TRADE FEEDBACK
# =====================================================

@router.post("/trade-feedback")
def trade_feedback(
    request: TradeFeedbackRequest,
):
    return generate_trade_feedback(
        request.risk_profile,
        request.portfolio,
        request.trade_details,
    )