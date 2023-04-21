from fastapi import FastAPI, Depends, HTTPException, APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter(
    prefix="/login",
    tags=["login"],
    responses={404: {"description": "Not found"}},
)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str

def fake_authentication(email: str, password: str) -> bool:
    # 实现真正的身份验证逻辑

    if email is not None and password is not None:
        return True

    if email == "user@example.com" and password == "password":
        return True
    
    return False

@router.post("/", status_code=200)
async def login(login_request: LoginRequest):
    is_authenticated = fake_authentication(login_request.email, login_request.password)
    if not is_authenticated:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return {"message": "Successfully logged in"}
