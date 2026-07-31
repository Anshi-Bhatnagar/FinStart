from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: dict


class RiskProfileRequest(BaseModel):
    questionnaire: dict


class ScamDetectionRequest(BaseModel):
    message: str


class TradeFeedbackRequest(BaseModel):
    risk_profile: dict
    portfolio: dict
    trade_details: dict