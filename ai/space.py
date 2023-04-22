# import requests

# response = requests.post("https://fazzie-timmahw-sd2-1-pokemon3d.hf.space/run/predict", json={
#   "data": [
#     "hello world",
# ]}).json()

# data = response["data"]

# import io
# from PIL import Image
# image = Image.open(io.BytesIO(data))

# # save the image

# image.save("image_space.png")

import requests

headers = {"Authorization": "Bearer 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"}

response = requests.post("https://fazzie-pokemongai.hf.space/run/predict", headers=headers, json={
  "data": [
    "dragon armored eevee, blue, ((wings)), claws",
]}).json()


data = response["data"][0]

import base64
from PIL import Image
from io import BytesIO

# print(data)
image_data = data.split(",")[1]
# Assume 'base64_image' is the base64-encoded string representing the image
image_data = base64.b64decode(image_data)
image = Image.open(BytesIO(image_data))

# save the image
image.save("image_space.png")