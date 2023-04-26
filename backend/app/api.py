from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

from . import models
from .database import engine
from .routers import chatbot, imagen, login, profile, register, users

models.Base.metadata.create_all(bind=engine)

# app = FastAPI(dependencies=[Depends(get_query_token)])
app = FastAPI()

app.include_router(users.router)
app.include_router(login.router)
app.include_router(register.router)
app.include_router(profile.router)
app.include_router(imagen.router)
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
