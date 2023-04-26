from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..crud.gallery import get_gallery
from ..dependencies import get_db

router = APIRouter(
    prefix="/gallery",
    tags=["gallery"],
    responses={404: {
        "description": "Not found"
    }},
)


@router.get("/")
async def read_gallery(user_id: int, db: Session = Depends(get_db)):
    return get_gallery(db, user_id)
