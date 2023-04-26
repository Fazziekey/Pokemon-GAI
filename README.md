# Pokemon GAI

**Pokemon GAI** is a Web-based application based on generative artificial intelligence technology, specially designed to generate Pokémon for players. Users can generate information about the Pokémon such as attributes, names, and values, including attack, defense, and health. Each generated Pokémon will have a unique NFT token.

* Login and Registration Function: AI Web App Generator requires users to log in or register to use all the features.
Image Storage and Personal Cloud Space Function: Pokemon GAI provides a personal cloud space, which includes the user's personal profile, level, and number of Pokémon. The Pokémon warehouse can be either public or private.

* Friends and Contacts Function: Pokemon GAI allows users to battle with friends. Users can add friends and save them to their contacts.

* Sharing Function: Pokemon GAI provides multiple sharing methods, including Twich, Telegram, Facebook, Instagram, WeChat, etc.

In general, Pokemon GAI is a feature-rich Web-based application that brings players a variety of experiences, including generating Pokémon, image storage, battling with friends, sharing, etc.

## install

### create conda env
```
conda create -n pokemon python==3.9.12
```

### install python requirements

```
pip install -r requirements.txt
```

### init pre-commit
```
pre-commit install
```

## install js modules

```
cd frontend
yarn install
```


## Config

you must modified the `.env` to make your own config

- OPENAI_API_KEY: your openai api key
- STABILITY_API_KEY: your stability api key
- HF_TOKEN: your huggingface token
- SPACE: your huggingface space, example: https://fazzie-pokemongai.hf.space/run/predict
- SPACE_3D: your huggingface 3D space, example: https://fazzie-pokemongai.hf.space/run/predict
- MODEL: your huggingface model
- MODEL_3D: your huggingface 3D model
- FRONTEND_PORT: default 3000
- BACKEND_PORT: default 8000
- CHAT_PORT: default 7680
- BATTLE_PORT: default 7681


## Run
## Run backend and frontend only

```
python start.py
```
### run with chat and battle

```
python start.py --chat --battle
```

### run frontend only

```
python start.py --frontend_only
```

### run backend only

```
python start.py --backend_only
```

### run chat only

```
python start.py --chat_only
```

### run battle only

```
python start.py --battle_only
```

## use docker

### build docker
```
docker build -t pokemon:0.0.1  .
```

### docker run
```
docker run -it --rm \
    ubuntu:18.04 \
    bash
```
