from typing import Union

from pydantic import BaseModel


class ImageBase(BaseModel):
    prompt: str
    pokeType: str
    pokeName: str
    description: Union[str, None] = None
    image_store: Union[bytes, None] = None
    image_url: Union[str, None] = None


class ImageCreate(ImageBase):
    pass


class Image(ImageBase):
    id: int
    owner_id: int
    property: Union[str, None] = None
    hp: Union[int, None] = None
    attack: Union[int, None] = None
    star: Union[int, None] = None
    IQ: Union[int, None] = None
    MBTI: Union[str, None] = None

    class Config:
        orm_mode = True
