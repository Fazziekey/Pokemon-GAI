import os

import requests

API_URL = os.environ.get("MODEL", "https://api-inference.huggingface.co/models/Fazzie/PokemonGAI")
hf_token = os.environ.get("HF_TOKEN")

if hf_token is None:
    print("HF_TOKEN environment variable is missing")
    hf_token = input("Enter your Hugging Face token: ")
    os.environ["HF_TOKEN"] = hf_token

headers = {f"Authorization": "Bearer {hf_token}"}    # Add your own Hugging Face token here or in the .env file


def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    if response.status_code != 200:
        raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, payload))
    return response.content


image_bytes = query({
    "inputs": "dragon armored (eevee), wings, (fire claws), smoke, cityscape",
})
# You can access the image with PIL.Image for example
import io

from PIL import Image

image = Image.open(io.BytesIO(image_bytes))

# save the image
image.save("image2.png")
