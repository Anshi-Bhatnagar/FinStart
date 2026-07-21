from fastapi import FastAPI, Depends
from app.models.user import User
from app.routers import auth
from app.utils.dependencies import get_current_user

app=FastAPI()
app.include_router(auth.router)

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