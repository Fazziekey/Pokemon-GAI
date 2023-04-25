from fastapi import FastAPI, Depends, HTTPException, APIRouter

from ..core.chatbot import generate_response 
from ..schemas.chatbot import ChatRequest

router = APIRouter(
    prefix="/chat",
    tags=["chat"],
    responses={404: {"description": "Not found"}},
)


@router.post("/", status_code=200)
async def chat(content: str):
    response = generate_response(content)
    return {
        "status": 200,
        "response": response
    }
