from fastapi import APIRouter


router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    },
    "alice": {
        "username": "alice",
        "full_name": "Alice Chains",
        "email": "alicechains@example.com",
        "hashed_password": "$2b$12$gSvqqUPvlXP2tfVFaWK1Be7DlH.PKZbv5H8KnzzVgXXbVxpva.pFm",
        "disabled": True,
    },
}


@router.get("/")
async def read_users() -> dict:
    return fake_users_db


@router.get("/users/me")
async def read_user_me() -> dict:
    return fake_users_db["johndoe"]


@router.get("/{username}")
async def read_user(username: str) -> dict:
    if username in fake_users_db:
        user_dict = fake_users_db[username]
        return user_dict
    return {"error": "User not found"}


@router.post("/")
async def create_user() -> dict:
    return {"error": "Not implemented"}


@router.put("/{username}")
async def update_user(username: str) -> dict:
    return {"error": "Not implemented"}




