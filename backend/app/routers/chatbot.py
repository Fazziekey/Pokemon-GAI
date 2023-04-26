from fastapi import APIRouter, Depends, FastAPI, HTTPException

from ..core.chatbot import generate_response, get_memory
from ..schemas.chatbot import ChatRequest

router = APIRouter(
    prefix="/chat",
    tags=["chat"],
    responses={404: {
        "description": "Not found"
    }},
)


@router.post("/submit_message", status_code=200)
async def chat(content: str):
    response = generate_response(content)
    return {"response": response}


@router.get("/get_all_memory", status_code=200)
async def get_all_memory():
    response = get_memory()
    return {"response": response}
