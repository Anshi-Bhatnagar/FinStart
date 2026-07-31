from app.schemas.quiz import QuizResult

QUIZZES = {
    1: {
        "lesson_id": 1,
        "title": "What is SIP?",
        "questions": [
            {
                "id": 1,
                "question": "What does SIP stand for?",
                "options": [
                    {"id": 1, "text": "Systematic Investment Plan"},
                    {"id": 2, "text": "Secure Income Plan"},
                    {"id": 3, "text": "Savings Insurance Policy"},
                    {"id": 4, "text": "Stock Investment Process"},
                ],
                "correct": 1,
            },
            {
                "id": 2,
                "question": "SIP is mainly used for?",
                "options": [
                    {"id": 1, "text": "Buying property"},
                    {"id": 2, "text": "Regular mutual fund investing"},
                    {"id": 3, "text": "Opening bank accounts"},
                    {"id": 4, "text": "Paying taxes"},
                ],
                "correct": 2,
            },
        ],
    }
}


# =====================================================
# GET QUIZ
# =====================================================

def get_quiz(lesson_id: int):

    quiz = QUIZZES.get(lesson_id)

    if quiz is None:
        return None

    questions = []

    for q in quiz["questions"]:
        questions.append(
            {
                "id": q["id"],
                "question": q["question"],
                "options": q["options"],
            }
        )

    return {
        "lesson_id": quiz["lesson_id"],
        "title": quiz["title"],
        "questions": questions,
    }


# =====================================================
# SUBMIT QUIZ
# =====================================================

def submit_quiz(request):

    quiz = QUIZZES.get(request.lesson_id)

    if quiz is None:
        return None

    correct = 0

    answer_map = {
        ans.question_id: ans.selected_option
        for ans in request.answers
    }

    for question in quiz["questions"]:

        if answer_map.get(question["id"]) == question["correct"]:
            correct += 1

    total = len(quiz["questions"])

    percentage = round(correct / total * 100, 2)

    return QuizResult(
        score=correct,
        total_questions=total,
        percentage=percentage,
        passed=percentage >= 60,
    )