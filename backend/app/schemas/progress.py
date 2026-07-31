from pydantic import BaseModel


# =====================================================
# COMPLETE LESSON
# =====================================================

class CompleteLessonRequest(BaseModel):
    lesson_id: int
    score: int = 100


# =====================================================
# PROGRESS RESPONSE
# =====================================================

class ProgressResponse(BaseModel):
    completed_lessons: int
    total_lessons: int
    completion_percentage: float
    next_lesson_id: int | None