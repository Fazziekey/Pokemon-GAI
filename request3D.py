import requests

API_URL = "https://api-inference.huggingface.co/models/Timmahw/SD2.1_Pokemon3D"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	if response.status_code != 200:
		raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, payload))
	return response.content
image_bytes = query({
	"inputs": "dragon armored eevee, red, ((wings)), claws",
})
# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes))

# save the image

image.save("image1.png")