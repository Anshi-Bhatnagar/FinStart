from pydantic import BaseModel

class ChatRequest(BaseModel):
    message: str

class ScamRequest(BaseModel):
    text: str

class RiskAssessmentRequest(BaseModel):
    answers: dict