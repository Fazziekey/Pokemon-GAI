import requests
from time import gmtime, strftime

url = "https://fazzie-pokemon-gai.hf.space/new_card?pull=1&saved=0"

payload = {
        "pull": 1,
        "saved": 1,
        "timestamp": strftime('%Y-%m-%dT%H:%M:%SZ', gmtime())
}


response = requests.post(url)
if response.status_code == 200:
    data = response.json()
    print(data)
    image = data["image"]
    # Do something with the data
else:
    print("Request failed with status code: {}".format(response.status_code))
