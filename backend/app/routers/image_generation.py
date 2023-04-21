from fastapi import APIRouter, Request, Response
import requests
from pydantic import BaseModel
from typing import Optional
from PIL import Image
import io

router = APIRouter(
    prefix="/imagen",
    tags=["imagen"],
    responses={404: {"description": "Not found"}},
)

URL = {
    '2D': "https://api-inference.huggingface.co/models/Fazzie/PokemonGAI",
    '3D': "https://api-inference.huggingface.co/models/Timmahw/SD2.1_Pokemon3D",
}

headers = {"Authorization": "Bearer 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"}

class Payload(BaseModel):
    inputs: str

# def query(payload: Payload, type: str = '2D'):
#     url = URL[type]
#     response = requests.post(url, headers=headers, json=payload.dict())
#     if response.status_code != 200:
#         raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, payload))
#     return response.content

def query(prompt: str, type: str, name: str):
    url = URL[type]
    response = requests.post(url, headers=headers, json={"inputs": f"{prompt}"})
    if response.status_code != 200:
        raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, {'prompt': prompt, 'type': type, 'name': name}))
    return response.content


@router.get("/generate_image")
async def generate_image(
        prompt: str = 'fire greninja, wings, (fire claws), smoke, cityscape',
        type: str = '2D',
        name: str = 'pokemon'
    ) -> Response:

    image_bytes = query(prompt, type, name)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(f"{name}.png")

    return {
        "status": 200,
        "message": f"Image saved as {name}.png"
    }
