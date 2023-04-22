import base64
import os
import requests

engine_id = "stable-diffusion-v1-5"
api_host = os.getenv('API_HOST', 'https://api.stability.ai')
api_key = os.getenv("STABILITY_API_KEY", "sk-eAwLMN5A0w6Smlha3sBDULK5D6z5pWmzaujm1cnzmPTyNkNG")

if api_key is None:
    raise Exception("Missing Stability API key.")

response = requests.post(
    f"{api_host}/v1/generation/{engine_id}/text-to-image",
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Bearer {api_key}"
    },
    json={
        "text_prompts": [
            {
                "text": "dragon armored (eevee), wings, (fire claws), smoke, cityscape"
            }
        ],
        "cfg_scale": 7,
        "clip_guidance_preset": "FAST_BLUE",
        "height": 512,
        "width": 512,
        "samples": 1,
        "steps": 30,
    },
)

if response.status_code != 200:
    raise Exception("Non-200 response: " + str(response.text))

data = response.json()

for i, image in enumerate(data["artifacts"]):
    with open(f"v1_txt2img_{i}.png", "wb") as f:
        f.write(base64.b64decode(image["base64"]))
