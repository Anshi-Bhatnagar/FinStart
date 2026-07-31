from pydantic import BaseModel
from typing import Optional


# =====================================================
# CATEGORY
# =====================================================

class CategoryResponse(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    icon: Optional[str] = None

    model_config = {
        "from_attributes": True
    }


# =====================================================
# LESSON
# =====================================================

class LessonResponse(BaseModel):
    id: int
    category_id: int
    title: str
    description: Optional[str] = None
    content: Optional[str] = None
    difficulty: Optional[str] = None
    duration_minutes: Optional[int] = None
    order_number: Optional[int] = None

    model_config = {
        "from_attributes": True
    }


# =====================================================
# USER PROGRESS
# =====================================================

class LessonProgressResponse(BaseModel):
    lesson_id: int
    completed: bool
    score: int

    model_config = {
        "from_attributes": True
    }


# =====================================================
# DASHBOARD CARD
# =====================================================

class DashboardLesson(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    difficulty: Optional[str] = None
    duration_minutes: Optional[int] = None
    progress: int

    model_config = {
        "from_attributes": True
    }


# =====================================================
# DASHBOARD RESPONSE
# =====================================================

class DashboardResponse(BaseModel):
    categories: list[CategoryResponse]
    lessons: list[DashboardLesson]
    completed_lessons: int
    total_lessons: int
    completion_percentage: float