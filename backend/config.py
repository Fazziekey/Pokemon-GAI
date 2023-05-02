from functools import lru_cache

from pydantic import BaseSettings


class Settings(BaseSettings):
    model: str = "https://api-inference.huggingface.co/models/Fazzie/PokemonGAI"
    model_3d: str = "https://api-inference.huggingface.co/models/Timmahw/SD2.1_Pokemon3D"

    space: str = "https://fazzie-pokemongai.hf.space/run/predict"
    space_3d: str = "https://fazzie-timmahw-sd2-1-pokemon3d.hf.space/run/predict"

    hf_token: str = ''


@lru_cache()
def get_settings() -> Settings:
    """get_settings provides the settings from a dependency, instead of
    having a global object with settings that is used everywhere.

    This could be especially useful during testing,
    as it's very easy to override a dependency with your own custom settings.

    More to see https://fastapi.tiangolo.com/advanced/settings/#pydantic-settings
    """
    return Settings()
