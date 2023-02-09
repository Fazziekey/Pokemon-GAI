from typing import Dict, List, Union
from time import gmtime, strftime

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from modules.details import Details, rand_details
from modules.dataset import get_image, get_stats

app = FastAPI(docs_url=None, redoc_url=None)

app.mount("/static", StaticFiles(directory="static"), name="static")

card_logs = []



@app.head('/')
@app.get('/')
def index() -> FileResponse:
    return FileResponse(path="static/index.html", media_type="text/html")


@app.get('/new_card')
def new_card(pull: int, saved: int) -> Dict[str, Union[Details, str]]:
    card_logs.append({
        "pull": pull,
        "saved": saved,
        "timestamp": strftime('%Y-%m-%dT%H:%M:%SZ', gmtime())
    })

    details: Details = rand_details()

    return {
        "details": details,
        "image": get_image(details["energy_type"]),
    }


@app.get('/stats.json')
def stats() -> Dict[str, Union[int, object]]:
    return {**get_stats(), **{"cards_served": len(card_logs)}}


@app.get('/logs.json')
def logs() -> List[str]:
    return card_logs
