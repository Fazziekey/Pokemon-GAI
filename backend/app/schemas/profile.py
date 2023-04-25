from pydantic import BaseModel
from typing import Union, List
from .images import Image

class ProfileRequest(BaseModel):
    userID: str = None

class ProfileResponse(BaseModel):
    age: int = None
    role: str = None
    like: str = None
    motto: str = None
    contact: str = None
    avatar: str = None


class ProfileInfo(BaseModel):
    age: Union[int, None] = None
    role: Union[str, None] = None
    like: Union[str, None] = None
    motto: Union[str, None] = None
    contact: Union[str, None] = None

    class Config:
        orm_mode = True


class ProfileAvatarRequest(BaseModel):
    avatar: str = None

    class Config:
        orm_mode = True