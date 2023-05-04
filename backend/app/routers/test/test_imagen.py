import unittest

from fastapi import FastAPI
from fastapi.testclient import TestClient

from .. import imagen

app = FastAPI()

app.include_router(imagen.router)

client = TestClient(app)


class TestImagen(unittest.TestCase):

    def test_imagen(self):
        response = client.get("/generate",)
        print(f"response: {response}")
