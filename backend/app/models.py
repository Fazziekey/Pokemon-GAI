from sqlalchemy import Boolean, Column, Integer, String, ForeignKey, LargeBinary
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    full_name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    images = relationship("Image", back_populates="owner")


class Image(Base):
    __tablename__ = "images"

    id = Column(Integer, primary_key=True, index=True)
    prompt = Column(String, index=True)
    pokeType = Column(String, index=True)
    pokeName = Column(String, index=True)
    description = Column(String, index=True)
    # attribute = Column(String, index=True)
    # hp = Column(Integer, index=True)
    # attack = Column(Integer, index=True)
    image_store = Column(LargeBinary)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="images")
