import os

import requests
from sqlalchemy.orm import Session

from .. import models, schemas
from ..schemas.images import ImageCreate

UPLOAD_ACCOUT = os.environ['UPLOAD_ACCOUT']
UPLOAD_TOKEN = os.environ['UPLOAD_TOKEN']


def get_images(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Image).offset(skip).limit(limit).all()


def create_user_image(db: Session, image: ImageCreate, user_id: int):
    db_image = models.Image(**image.dict(), owner_id=user_id)
    db.add(db_image)
    db.commit()
    db.refresh(db_image)
    return db_image


def up_load():

    url = f'https://api.upload.io/v2/accounts/{UPLOAD_ACCOUT}/uploads/binary'
    headers = {
        'Authorization': UPLOAD_TOKEN,
        'Content-Type': 'text/plain'    # change to match the file's MIME type
    }
    data = 'Example Data'    # to upload a file: open('file.jpg', 'rb').read()
    response = requests.post(url, headers=headers, data=data).json()

    return response.get('fileUrl')
