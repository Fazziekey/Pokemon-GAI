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

    #TODO: Implement real authentication logic
    
    if email is not None and password is not None:
        return True

    if email == "user@example.com" and password == "password":
        return True
    
    return False


@router.post("/", status_code=200)
async def login(email: EmailStr, password: str):
    is_authenticated = fake_authentication(email, password)
    
    if not is_authenticated:
        return {
            "status": 400,
            "message": "Failed to login"
        }
    
    return {
        "status": 200,
        "message": "Successfully logged in"
    }

