from functools import lru_cache

from pydantic import BaseSettings


class Settings(BaseSettings):
    model: str
    model_3d: str

    space: str
    space_3d: str

    hf_token: str
    api_host: str = "https://api.stability.ai"
    stability_api_key: str

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings() -> Settings:
    """get_settings provides the settings from a dependency, instead of
    having a global object with settings that is used everywhere.

    This could be especially useful during testing,
    as it's very easy to override a dependency with your own custom settings.

    More to see https://fastapi.tiangolo.com/advanced/settings/#pydantic-settings
    """
    return Settings()
