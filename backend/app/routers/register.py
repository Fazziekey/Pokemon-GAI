from fastapi import FastAPI, APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter(
    prefix="/register",
    tags=["register"],
    responses={404: {"description": "Not found"}},
)


def fake_register(email, username, password) -> str:
    # 实现注册逻辑，例如保存到数据库中
    user_id = email + username + password
    return user_id

@router.post("/", status_code=201)
async def register(    
    email: str, 
    username: str,
    password: str):
    user_id = fake_register(email=email, username=username, password=password)
    if not user_id:
        raise HTTPException(status_code=500, detail="Failed to register user")
    return {
        "status": 200,
        "message": "Successfully registered user",
        "userID": user_id
    }
