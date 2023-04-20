from fastapi import FastAPI, Request
import requests
from pydantic import BaseModel
from typing import Optional
from PIL import Image
import io

app = FastAPI()

URL = {
    '2D': "https://api-inference.huggingface.co/models/Timmahw/SD2.1_Pokemon2DSugimori",
    '3D': "https://api-inference.huggingface.co/models/Timmahw/SD2.1_Pokemon3D",
}

headers = {"Authorization": "Bearer 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"}

class Payload(BaseModel):
    inputs: str

def query(payload: Payload, type: str = '2D'):
    url = URL[type]
    response = requests.post(url, headers=headers, json=payload.dict())
    if response.status_code != 200:
        raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, payload))
    return response.content

@app.post("/generate_image", response_class=Optional[Image.Image])
async def generate_image(request: Request):
    payload = Payload(inputs=await request.json())
    image_bytes = query(payload)
    image = Image.open(io.BytesIO(image_bytes))
    return image

