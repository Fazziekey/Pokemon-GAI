from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from .. import crud
from ..dependencies import get_db
from ..schemas.users import UserCreate
from .login import create_access_token

router = APIRouter(
    prefix="/register",
    tags=["register"],
    responses={404: {
        "description": "Not found"
    }},
)

ACCESS_TOKEN_EXPIRE_MINUTES = 30


@router.post("/")
async def register(email: str, form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):

    db_user = crud.users.get_user_by_username(db, username=form_data.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already taken")
    db_user = crud.users.get_user_by_email(db, email=email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = UserCreate(email=email, username=form_data.username, password=form_data.password)
    new_user = crud.users.create_new_user(db=db, user=user)
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
    # data={"sub": user.username}, expires_delta=access_token_expires
        data={"sub": user.email},
        expires_delta=access_token_expires)
    return {
        "message": "Successfully registered user",
        "userID": new_user.id,
        "access_token": access_token,
        "token_type": "bearer"
    }
