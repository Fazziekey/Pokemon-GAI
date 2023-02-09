import requests



url = "https://lambdalabs-text-to-pokemon.hf.space/run/predict"

payload = {
    "text_input": "blue dog"
}

# headers = {
#     'Content-Type': 'application/json'
# }

response = requests.post(url, json=payload)
if response.status_code == 200:
    data = response.json()
    # Do something with the data
else:
    print("Request failed with status code: {}".format(response.status_code))
