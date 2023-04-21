from pydantic import BaseModel
from typing import Union, List
from .items import Item


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Union[str, None] = None


class UserBase(BaseModel):
    username: str
    email: str
    full_name: Union[str, None] = None
    is_active: Union[bool, None] = None


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id : int
    hashed_password: str
    items: List[Item] = []

    class Config:
        orm_mode = True