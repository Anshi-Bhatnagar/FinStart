from pydantic import BaseModel


# =====================================================
# OPTION
# =====================================================

class QuizOption(BaseModel):
    id: int
    text: str


# =====================================================
# QUESTION
# =====================================================

class QuizQuestion(BaseModel):
    id: int
    question: str
    options: list[QuizOption]


# =====================================================
# QUIZ RESPONSE
# =====================================================

class QuizResponse(BaseModel):
    lesson_id: int
    title: str
    questions: list[QuizQuestion]


# =====================================================
# USER ANSWER
# =====================================================

class UserAnswer(BaseModel):
    question_id: int
    selected_option: int


# =====================================================
# SUBMIT REQUEST
# =====================================================

class SubmitQuizRequest(BaseModel):
    lesson_id: int
    answers: list[UserAnswer]


# =====================================================
# RESULT
# =====================================================

class QuizResult(BaseModel):
    score: int
    total_questions: int
    percentage: float
    passed: bool