from sqlalchemy.orm import Session

from .. import models


def get_friend(db: Session, user_id: int):
    friend_ids = db.query(models.Friend).filter(models.Friend.owner_id == user_id).all().map(lambda x: x.friend_id)
    return db.query(models.User).filter(models.User.id.in_(friend_ids)).all()


def create_friend(db: Session, user_id: int, friend_id: int):
    db_friend = models.Friend(owner_id=user_id, friend_id=friend_id)
    db.add(db_friend)
    db.commit()
    db.refresh(db_friend)
    return db_friend


def get_friend_gallery(db: Session, user_id: int):
    return db.query(models.Image).filter(models.Image.owner_id == user_id).all()


def remove_friend(db: Session, user_id: int, friend_id: int):
    db_friend = db.query(
        models.Friend).filter(models.Friend.owner_id == user_id).filter(models.Friend.friend_id == friend_id).first()
    db.delete(db_friend)
    db.commit()
