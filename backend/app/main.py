from fastapi import FastAPI, Depends
from app.models.user import User
from app.models.profile import Profile
from app.routers import auth,wallet,portfolio,ai,dashboard,investment,learn,quiz,dashboard_analytics,progress,achievement
from app.utils.dependencies import get_current_user
from app.routers.goal import router as goal_router
from app.routers.trade import router as trade_router
from app.routers import streak,dashboard_analytics
from fastapi.middleware.cors import CORSMiddleware


app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth.router)
app.include_router(wallet.router)   
app.include_router(goal_router)
app.include_router(trade_router)
app.include_router(portfolio.router)
app.include_router(ai.router)
app.include_router(investment.router)
app.include_router(learn.router)
app.include_router(dashboard.router)
app.include_router(quiz.router)
app.include_router(
    dashboard_analytics.router
)
app.include_router(progress.router)
app.include_router(
    achievement.router
)
app.include_router(streak.router)
app.include_router(
    dashboard_analytics.router
)


@app.get("/")
def root():
    return {"message":"FinStart API is running"}


# protected endpoint
@app.get("/profile")
def profile(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "full_name": current_user.full_name,
        "email": current_user.email
    }


