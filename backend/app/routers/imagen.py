from fastapi import APIRouter, Request, Response, Depends
from sqlalchemy.orm import Session
import requests
from pydantic import BaseModel
from typing import Optional
import base64
from PIL import Image
import io

from ..dependencies import get_db
from ..schemas.images import ImageCreate
# from .. import crud
from ..crud.images import create_user_image

router = APIRouter(
    prefix="/imagen",
    tags=["imagen"],
    responses={404: {"description": "Not found"}},
)

MODEL_URL = {
    '2D': "https://api-inference.huggingface.co/models/Fazzie/PokemonGAI",
    '3D': "https://api-inference.huggingface.co/models/Timmahw/SD2.1_Pokemon3D",
}

SPACE_URL = {
    '2D': "https://fazzie-pokemongai.hf.space/run/predict",
    '3D': "https://fazzie-timmahw-sd2-1-pokemon3d.hf.space/run/predict",
}

headers = {"Authorization": "Bearer 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"}

def query_model(prompt: str, type: str, name: str):
    url = MODEL_URL[type]
    response = requests.post(url, headers=headers, json={"inputs": f"{prompt}"})
    if response.status_code != 200:
        with open('.....assert/image.png', 'rb') as f:
            binary_data = f.read()
        return binary_data
        # raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, {'prompt': prompt, 'type': type, 'name': name}))
    return response.content

def query_space(prompt: str, type: str, name: str):
    url = SPACE_URL[type]

    response = requests.post(url, headers=headers, json={
    "data": [
        f"{prompt}",
    ]}).json()

    if response.status_code != 200:
        raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, {'prompt': prompt, 'type': type, 'name': name}))
    
    data = response["data"][0]
    image_data = data.split(",")[1]
    image_bytes = base64.b64decode(image_data)
    return image_bytes

class Imagen(BaseModel):
    prompt: str = 'fire greninja, wings, (fire claws), smoke, cityscape'
    pokeType: str = '2D'
    pokeName: str = 'pokemon'


@router.post("/generate/{user_id}")
async def generate_image(
        user_id: int,
        imagen: Imagen,
        db: Session = Depends(get_db)
    ) -> Response:

    try:
        image_bytes = query_space(imagen.prompt, imagen.pokeType, imagen.pokeName)
    except:
        try:
            image_bytes = query_model(imagen.prompt, imagen.pokeType, imagen.pokeName)
        except Exception as e:
            return {
                "status": 500,
                "message": str(e)
            }
    
    image = Image.open(io.BytesIO(image_bytes))
    image.save(f"{imagen.pokeName}.png")
    
    temp_image = ImageCreate(**imagen.dict(), image_store=image_bytes)
    db_image = create_user_image(db=db, image=temp_image, user_id=user_id)


    return {
        "message": f"Image saved as {imagen.pokeName}.png"
    }
