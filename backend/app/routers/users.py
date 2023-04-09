from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.orm import Session

from ..database import fake_users_db
from ..dependencies import get_current_active_user, get_db, get_password_hash
from ..schemas.users import UserCreate, User
from ..crud.users import get_user, get_users, get_user_by_email, get_user_by_username, create_new_user
from .. import models


router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


@router.get("/", response_model=List[User])
async def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = get_users(db, skip=0, limit=100)
    return users


@router.get("/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user


@router.get("/{username}", response_model=User)
async def read_user(username: str, db: Session = Depends(get_db)):
    db_user = get_user(db, username)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@router.post("/", response_model=User)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already taken")
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_new_user(db=db, user=user)


@router.put("/{username}")
async def update_user(username: str):
    return {"error": "Not implemented"}




