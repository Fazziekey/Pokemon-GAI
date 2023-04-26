from typing import Union

from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    # username: Union[str, None] = None
    email: Union[str, None] = None
