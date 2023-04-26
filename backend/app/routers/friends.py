from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..crud.friends import create_friend, get_friend, get_friend_gallery, remove_friend
from ..dependencies import get_db
from ..schemas.friends import FriendBase

router = APIRouter(
    prefix="/friend",
    tags=["friend"],
    responses={404: {
        "description": "Not found"
    }},
)


@router.get("/list")
async def read_friend(user_id: int, db: Session = Depends(get_db)):
    return get_friend(db, user_id)


@router.post("/add")
async def add_friend(user_id: int, friend_id: FriendBase, db: Session = Depends(get_db)):
    return create_friend(db, user_id, friend_id)


@router.get("/gallery")
async def read_friend_gallery(friend_id: int, db: Session = Depends(get_db)):
    return get_friend_gallery(db, friend_id)


@router.post("/delete")
async def delete_friend(user_id: int, friend_id: FriendBase, db: Session = Depends(get_db)):
    return remove_friend(db, user_id, friend_id)
