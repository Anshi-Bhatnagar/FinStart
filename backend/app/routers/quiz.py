from fastapi import APIRouter, HTTPException

from app.schemas.quiz import (
    QuizResponse,
    SubmitQuizRequest,
    QuizResult,
)

from app.crud import quiz as quiz_crud

router = APIRouter(
    prefix="/quiz",
    tags=["Quiz"],
)


# =====================================================
# GET QUIZ
# =====================================================

@router.get(
    "/{lesson_id}",
    response_model=QuizResponse,
)
def get_quiz(lesson_id: int):

    quiz = quiz_crud.get_quiz(lesson_id)

    if quiz is None:
        raise HTTPException(
            status_code=404,
            detail="Quiz not found",
        )

    return quiz


# =====================================================
# SUBMIT QUIZ
# =====================================================

@router.post(
    "/submit",
    response_model=QuizResult,
)
def submit_quiz(request: SubmitQuizRequest):

    result = quiz_crud.submit_quiz(request)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Quiz not found",
        )

    return result