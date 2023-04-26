import os

import requests

API_URL = os.environ.get("SPACE_3D")
hf_token = os.environ.get("HF_TOKEN")

if hf_token is None:
    print("HF_TOKEN environment variable is missing")
    hf_token = input("Enter your Hugging Face token: ")
    os.environ["HF_TOKEN"] = hf_token

headers = {f"Authorization": "Bearer {hf_token}"}

response = requests.post(API_URL, headers=headers, json={
    "data": ["dragon armored eevee, blue, ((wings)), claws",]
}).json()

data = response["data"][0]

import base64
from io import BytesIO

from PIL import Image

# print(data)
image_data = data.split(",")[1]
# Assume 'base64_image' is the base64-encoded string representing the image
image_data = base64.b64decode(image_data)
image = Image.open(BytesIO(image_data))

# save the image
image.save("image_space.png")
