from fastapi import FastAPI, APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..dependencies import get_db
from ..schemas.profile import ProfileRequest, ProfileResponse, ProfileInfo, ProfileAvatarRequest
# from .. import crud
from ..crud.profiles import get_profile_by_id, update_profile_by_id, update_profile_avatar_by_id

app = FastAPI()

router = APIRouter(
    prefix="/profile",
    tags=["profile"],
    responses={404: {"description": "Not found"}},
)


@router.get("/")
async def get_profile(userID: str, db: Session = Depends(get_db)):
    profile = get_profile_by_id(db=db, user_id=userID)
    return profile


@router.post("/info")
async def update_profile(userID: str, profile_info: ProfileInfo,  db: Session = Depends(get_db)):
    success = update_profile_by_id(db=db, user_id=userID, profile_info=profile_info)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to update profile")
    return {"message": "Successfully updated profile"}


@router.post("/avatar")
async def upload_avatar(userID: str, avatar: ProfileAvatarRequest,  db: Session = Depends(get_db)):
    success = update_profile_avatar_by_id(db=db, user_id=userID, avatar=avatar)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to upload avatar")
    return {"message": "Successfully uploaded avatar"}
