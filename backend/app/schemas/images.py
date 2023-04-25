from typing import Union
from pydantic import BaseModel


class ImageBase(BaseModel):
    prompt: str
    pokeType: str
    pokeName: str
    description: Union[str, None] = None
    image_store: Union[bytes, None] = None


class ImageCreate(ImageBase):
    pass


class Image(ImageBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True