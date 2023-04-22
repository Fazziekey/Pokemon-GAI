from pydantic import BaseModel
from typing import Union, List
from .items import Item

class ProfileRequest(BaseModel):
    userID: str

class ProfileResponse(BaseModel):
    age: int
    role: str
    like: str
    motto: str
    contact: str
    avatar: str

class ProfileInfo(BaseModel):
    age: int = None
    role: str = None
    like: str = None
    motto: str = None
    contact: str = None

class ProfileAvatarRequest(BaseModel):
    userID: str
    avatar: str