from fastapi import FastAPI, APIRouter, HTTPException
from ..schemas.profile import ProfileRequest, ProfileResponse, ProfileInfo, ProfileAvatarRequest

app = FastAPI()

router = APIRouter(
    prefix="/profile",
    tags=["profile"],
    responses={404: {"description": "Not found"}},
)


def fake_get_profile(request: ProfileRequest) -> ProfileResponse:
    # 实现获取用户信息逻辑，例如从数据库中查询用户信息
    profile = ProfileResponse(age=18, role="user", like="reading", motto="never give up", contact="test@example.com", avatar="https://example.com/avatar.jpg")
    return profile

def fake_update_profile(userID: ProfileRequest, info: ProfileInfo) -> bool:
    # 实现更新用户信息逻辑，例如将用户信息保存到数据库中
    return True

def fake_upload_avatar(request: ProfileAvatarRequest) -> bool:
    # 实现上传用户头像逻辑，例如将头像保存到云存储中
    return True

@router.get("/", response_model=ProfileResponse)
async def get_profile(request: ProfileRequest):
    profile = fake_get_profile(request)
    return profile

@router.post("/info", status_code=200)
async def update_profile(userID: ProfileRequest, info: ProfileInfo):
    success = fake_update_profile(userID, info)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to update profile")
    return {"status": 200, "message": "Successfully updated profile"}

@router.post("/avatar", status_code=200)
async def upload_avatar(request: ProfileAvatarRequest):
    success = fake_upload_avatar(request)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to upload avatar")
    return {"status": 200, "message": "Successfully uploaded avatar"}
