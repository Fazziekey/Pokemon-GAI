from fastapi import APIRouter, Depends

from ..database import fake_users_db
from ..dependencies import get_current_active_user, get_password_hash
from ..models.users import User, UserCreate, UserInDB


router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


@router.get("/")
async def read_users():
    return fake_users_db


@router.get("/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user


@router.get("/{username}")
async def read_user(username: str):
    if username in fake_users_db:
        user_dict = fake_users_db[username]
        return user_dict
    return {"error": "User not found"}


@router.post("/", response_model=UserInDB)
async def create_user(user: UserCreate):
    hashed_password = get_password_hash(user.password)
    user_dict = user.dict()
    user_dict.update({"hashed_password": hashed_password})
    del user_dict["password"]
    fake_users_db[user.username] = user_dict
    return UserInDB(**user_dict)


@router.put("/{username}")
async def update_user(username: str):
    return {"error": "Not implemented"}




