from fastapi import FastAPI, Depends
from app.models.user import User
from app.models.profile import Profile
from app.routers import auth,wallet,portfolio,ai,dashboard
from app.utils.dependencies import get_current_user
from app.routers.goal import router as goal_router
from app.routers.trade import router as trade_router



app=FastAPI()
app.include_router(auth.router)
app.include_router(wallet.router)   
app.include_router(goal_router)
app.include_router(trade_router)
app.include_router(portfolio.router)
app.include_router(ai.router)
app.include_router(dashboard.router)

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


