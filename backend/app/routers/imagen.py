from fastapi import APIRouter, Request, Response
import requests
from pydantic import BaseModel
from typing import Optional
from PIL import Image
import io

from ..dependencies import get_db
from ..schemas.images import ImageCreate, Image
from ..crud.images import create_user_image

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


@router.get("/generate/{user_id}")
async def generate_image(
        prompt: str = 'fire greninja, wings, (fire claws), smoke, cityscape',
        pokeType: str = '2D',
        pokeName: str = 'pokemon'
    ) -> Response:

    try:
        image_bytes = query(prompt, pokeType, pokeName)
    except Exception as e:
        return {
            "status": 500,
            "message": str(e)
        }
    
    image = Image.open(io.BytesIO(image_bytes))
    image.save(f"{pokeName}.png")

    # db_image = ImageCreate()
    return {
        "status": 200,
        "message": f"Image saved as {pokeName}.png"
    }
