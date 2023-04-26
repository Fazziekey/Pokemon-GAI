from pydantic import BaseModel


class FriendBase(BaseModel):
    friend_id: int


class Friend(FriendBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True
