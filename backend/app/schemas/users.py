from typing import List, Union

from pydantic import BaseModel

from .images import Image


class UserBase(BaseModel):
    username: str = None
    email: str = None
    full_name: Union[str, None] = None
    is_active: Union[bool, None] = True


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    hashed_password: str
    images: List[Image] = []

    class Config:
        orm_mode = True
