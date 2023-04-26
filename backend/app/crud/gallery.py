from sqlalchemy.orm import Session

from .. import models


def get_gallery(db: Session, user_id: str):
    return db.query(models.Image).filter(models.Image.owner_id == user_id).all()
