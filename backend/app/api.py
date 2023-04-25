from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

from .routers import users, image_generation, items, login, register, profile, chatbot
from .database import engine
from . import models

models.Base.metadata.create_all(bind=engine)

# app = FastAPI(dependencies=[Depends(get_query_token)])
app = FastAPI()


app.include_router(users.router)
app.include_router(items.router)
app.include_router(login.router)
app.include_router(register.router)
app.include_router(profile.router)
app.include_router(image_generation.router)
app.include_router(chatbot.router)

origins = [
    "http://localhost:3000",
    "https://localhost:3000",
    "localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to PokemanGAI!"}

