from pydantic import BaseModel
from typing import Union, List
from .items import Item


class Profile(BaseModel):

    ID: str
    age: int
