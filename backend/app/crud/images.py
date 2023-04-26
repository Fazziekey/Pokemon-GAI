import os
import random


import requests
from sqlalchemy.orm import Session

from .. import models, schemas
from ..schemas.images import ImageCreate

UPLOAD_ACCOUT = os.environ['UPLOAD_ACCOUT']
UPLOAD_TOKEN = os.environ['UPLOAD_TOKEN']


def get_images(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Image).offset(skip).limit(limit).all()


def create_user_image(db: Session, image: ImageCreate, user_id: int):

    property = random.choice([
        "NORMAL", "FIRE", "WATER", "ELECTRIC", "GRASS", "ICE", "FIGHTING", "POISON", "GROUND", "FLYING", "PSYCHIC",
        "BUG", "ROCK", "GHOST", "DARK", "DRAGON", "STEEL", "FAIRY"
    ])
    hp = random.randint(80, 150)
    attack = random.randint(10, 20)
    star = random.randint(1, 5)
    IQ = random.randint(50, 100)
    MBTI = random.choice([
        "ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ",
        "ENFJ", "ENTJ"
    ])
    db_image = models.Image(**image.dict(),
                            owner_id=user_id,
                            property=property,
                            hp=hp,
                            attack=attack,
                            star=star,
                            IQ=IQ,
                            MBTI=MBTI)

    db.add(db_image)
    db.commit()
    db.refresh(db_image)
    return db_image



def upload_image(image_bytes: bytes):
    UPLOAD_ACCOUT = "12a1yAh"
    UPLOAD_TOKEN = "public_12a1yAh7zfTDJApRabziBTAnG77C"

    url = f'https://api.upload.io/v2/accounts/{UPLOAD_ACCOUT}/uploads/binary'
    headers = {'Authorization': f"Bearer {UPLOAD_TOKEN}", 'Content-Type': 'image/png'}
    data = image_bytes
    response = requests.post(url, headers=headers, data=data).json()

    return response.get('fileUrl')
