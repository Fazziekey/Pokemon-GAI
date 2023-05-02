import base64
import io
import os
from typing import Optional

import requests
from config import Settings, get_settings
from fastapi import APIRouter, Depends, Request, Response
from PIL import Image
from pydantic import BaseModel
from sqlalchemy.orm import Session

# from .. import crud
from ..crud.images import create_user_image, upload_image
from ..dependencies import get_db
from ..schemas.images import ImageCreate

router = APIRouter(
    prefix="/imagen",
    tags=["imagen"],
    responses={404: {
        "description": "Not found"
    }},
)


def query_model(prompt: str, type: str, name: str, settings: Settings):
    if type == '2D':
        url = settings.model
    elif type == '3D':
        url = settings.model_3d
    else:
        raise Exception(f"Invalid type {type}")

    response = requests.post(url,
                             headers={"Authorization": f"Bearer {settings.hf_token}"},
                             json={"inputs": f"{prompt}"})
    if response.status_code != 200:
        with open('.....assert/image.png', 'rb') as f:
            binary_data = f.read()
        return binary_data
        # raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, {'prompt': prompt, 'type': type, 'name': name}))
    return response.content


def query_space(prompt: str, type: str, name: str, settings: Settings):
    if type == '2D':
        url = settings.space
    elif type == '3D':
        url = settings.space_3d
    else:
        raise Exception(f"Invalid type {type}")

    response = requests.post(url,
                             headers={
                                 "Authorization": f"Bearer {settings.hf_token}"
                             },
                             json={
                                 "data": [f"{prompt}",]
                             }).json()

    if response.status_code != 200:
        raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, {
            'prompt': prompt,
            'type': type,
            'name': name
        }))

    data = response["data"][0]
    image_data = data.split(",")[1]
    image_bytes = base64.b64decode(image_data)
    return image_bytes


class Imagen(BaseModel):
    prompt: str = 'fire greninja, wings, (fire claws), smoke, cityscape'
    pokeType: str = '2D'
    pokeName: str = 'pokemon'


@router.post("/generate")
async def generate_image(
    user_id: int, imagen: Imagen, db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings)) -> Response:
    try:
        image_bytes = query_space(imagen.prompt, imagen.pokeType, imagen.pokeName, settings)
    except:
        try:
            image_bytes = query_model(imagen.prompt, imagen.pokeType, imagen.pokeName, settings)
        except Exception as e:
            return {"status": 500, "message": str(e)}

    image = Image.open(io.BytesIO(image_bytes))
    image.save(f"{imagen.pokeName}.png")

    image_url = upload_image(image_bytes)

    temp_image = ImageCreate(**imagen.dict(), image_store=image_bytes, image_url=image_url)

    db_image = create_user_image(db=db, image=temp_image, user_id=user_id)

    return {"message": f"Image saved as {imagen.pokeName}.png"}
