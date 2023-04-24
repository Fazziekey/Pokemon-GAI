from fastapi import Depends, HTTPException, APIRouter, status
from fastapi.security import OAuth2PasswordRequestForm
from jose import JWTError, jwt
from datetime import datetime, timedelta
from typing import Union
from sqlalchemy.orm import Session
# from pydantic import BaseModel, EmailStr

from ..schemas.login import Token, TokenData
from ..dependencies import pwd_context, get_db
from ..crud.users import get_user, get_user_by_email

router = APIRouter(
    prefix="/login",
    tags=["login"],
    responses={404: {"description": "Not found"}},
)


# class LoginRequest(BaseModel):
#      email: EmailStr
#      password: str


# def fake_authentication(email: str, password: str) -> bool:

#      #TODO: Implement real authentication logic

#      if email is not None and password is not None:
#          return True

#      if email == "user@example.com" and password == "password":
#          return True

#      return False



# @router.post("/", status_code=200)
# async def login(email: EmailStr, password: str):
#     is_authenticated = fake_authentication(email, password)

#     if not is_authenticated:
#         return {
#             "status": 400,
#             "message": "Failed to login"
#         }

#     return {
#         "status": 200,
#         "message": "Successfully logged in"
#     }


# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "5277ee28edc76a2810312a90ab8ab53a6d9fa16be8a4db446ad93e66b2444d02"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def authenticate_user(db, email: str, password: str):
    # user = get_user(db, username)
    user = get_user_by_email(db, email=email)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def decode_access_token(token: str):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        # username: str = payload.get("sub")
        email: str = payload.get("sub")
        # if username is None:
        if email is None:
            raise credentials_exception
        # token_data = TokenData(username=username)
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    return token_data


@router.post("/", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user_email = form_data.username
    user = authenticate_user(db, user_email, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        # data={"sub": user.username}, expires_delta=access_token_expires
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}




