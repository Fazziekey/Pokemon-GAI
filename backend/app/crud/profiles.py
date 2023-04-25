from sqlalchemy.orm import Session

from .. import models, schemas


def get_profile_by_id(db: Session, user_id: str):
    return db.query(models.Profile).filter(models.Profile.owner_id == user_id).first()


def update_profile_by_id(db: Session, profile_info: schemas.profile.ProfileInfo, user_id: str):
    db_profile = db.query(models.Profile).filter(models.Profile.owner_id == user_id).first()
    if db_profile:
        db_profile.age = profile_info.age
        db_profile.role = profile_info.role
        db_profile.like = profile_info.like
        db_profile.motto = profile_info.motto
        db_profile.contact = profile_info.contact
    else:
        new_profile = models.Profile(owner_id=user_id, age=profile_info.age, role=profile_info.role, like=profile_info.like, motto=profile_info.motto, contact=profile_info.contact)
        db.add(new_profile)
    db.commit()
    return db_profile


def update_profile_avatar_by_id(db: Session, avatar: schemas.profile.ProfileAvatarRequest, user_id: str):
    db_profile = db.query(models.Profile).filter(models.Profile.owner_id == user_id).first()
    if db_profile:
        db_profile.avatar = avatar.avatar
    else:
        new_profile = models.Profile(owner_id=user_id, avatar=avatar)
        db.add(new_profile)
    db.commit()
    return db_profile




