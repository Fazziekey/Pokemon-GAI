from pydantic import BaseModel
from typing import Optional, Union


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Union[str, None] = None

class User(BaseModel):
    username: str
    email: Union[str, None] = None
    full_name: Union[str, None] = None
    disabled: Union[bool, None] = None

class UserCreate(User):
    password: str

class UserInDB(User):
    hashed_password: str