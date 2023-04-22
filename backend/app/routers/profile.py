from fastapi import FastAPI, APIRouter, HTTPException
from pydantic import BaseModel

app = FastAPI()

router = APIRouter(
    prefix="/profile",
    tags=["profile"],
    responses={404: {"description": "Not found"}},
)

class ProfileRequest(BaseModel):
    userID: str

class ProfileResponse(BaseModel):
    age: int
    role: str
    like: str
    motto: str
    contact: str
    avatar: str

class ProfileInfoRequest(BaseModel):
    userID: str
    age: int = None
    role: str = None
    like: str = None
    motto: str = None
    contact: str = None

class ProfileAvatarRequest(BaseModel):
    userID: str
    avatar: str

def fake_get_profile(request: ProfileRequest) -> ProfileResponse:
    # 实现获取用户信息逻辑，例如从数据库中查询用户信息
    profile = ProfileResponse(age=18, role="user", like="reading", motto="never give up", contact="test@example.com", avatar="https://example.com/avatar.jpg")
    return profile

def fake_update_profile(request: ProfileInfoRequest) -> bool:
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
async def update_profile(request: ProfileInfoRequest):
    success = fake_update_profile(request)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to update profile")
    return {"status": 200, "message": "Successfully updated profile"}

@router.post("/avatar", status_code=200)
async def upload_avatar(request: ProfileAvatarRequest):
    success = fake_upload_avatar(request)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to upload avatar")
    return {"status": 200, "message": "Successfully uploaded avatar"}
