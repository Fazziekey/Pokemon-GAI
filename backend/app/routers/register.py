from fastapi import FastAPI, APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter(
    prefix="/register",
    tags=["register"],
    responses={404: {"description": "Not found"}},
)


def fake_register(email, username, password) -> str:

    # TODO: Implement real register logic
    user_id = email + username + password

    # TODO: If the email has been registered, return None

    return user_id


@router.post("/")
async def register(
    email: str,
    username: str,
    password: str
):

    user_id = fake_register(email=email, username=username, password=password)

    if not user_id:
        return {
            "status": 400,
            "message": "Failed to register user"
        }

    return {
        "status": 200,
        "message": "Successfully registered user",
        "userID": user_id
    }
