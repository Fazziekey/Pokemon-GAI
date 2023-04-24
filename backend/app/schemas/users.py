from pydantic import BaseModel
from typing import Union, List
from .items import Item


class UserBase(BaseModel):
    username: str
    email: str
    full_name: Union[str, None] = None
    is_active: Union[bool, None] = True


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id : int
    hashed_password: str
    items: List[Item] = []

    class Config:
        orm_mode = True