from sqlalchemy import Boolean, Column, ForeignKey, Integer, LargeBinary, String
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
    profiles = relationship("Profile", back_populates="owner")
    friends = relationship("Friend", back_populates="owner")


class Image(Base):
    __tablename__ = "images"

    id = Column(Integer, primary_key=True, index=True)
    prompt = Column(String, index=True)
    pokeType = Column(String, index=True)
    pokeName = Column(String, index=True)
    description = Column(String, index=True)
    property = Column(String, index=True)
    hp = Column(Integer, index=True)
    attack = Column(Integer, index=True)
    star = Column(Integer, index=True)
    IQ = Column(Integer, index=True)
    MBTI = Column(String, index=True)
    image_store = Column(LargeBinary)
    image_url = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="images")


class Profile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    age = Column(Integer, index=True)
    role = Column(String, index=True)
    like = Column(String, index=True)
    motto = Column(String, index=True)
    contact = Column(String, index=True)
    avatar = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="profiles")


class Friend(Base):
    __tablename__ = "friends"

    id = Column(Integer, primary_key=True, index=True)
    friend_id = Column(Integer, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="friends")
