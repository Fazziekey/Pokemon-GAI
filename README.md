# Pokemon GAI

**Pokemon GAI** is a Web-based application based on generative artificial intelligence technology, specially designed to generate Pokémon for players. Users can generate information about the Pokémon such as attributes, names, and values, including attack, defense, and health. Each generated Pokémon will have a unique NFT token.

* Login and Registration Function: AI Web App Generator requires users to log in or register to use all the features.
Image Storage and Personal Cloud Space Function: Pokemon GAI provides a personal cloud space, which includes the user's personal profile, level, and number of Pokémon. The Pokémon warehouse can be either public or private.

* Friends and Contacts Function: Pokemon GAI allows users to battle with friends. Users can add friends and save them to their contacts.

* Sharing Function: Pokemon GAI provides multiple sharing methods, including Twich, Telegram, Facebook, Instagram, WeChat, etc.

In general, Pokemon GAI is a feature-rich Web-based application that brings players a variety of experiences, including generating Pokémon, image storage, battling with friends, sharing, etc.

## install 

```
pip install "fastapi[all]"

pip install -r requirements.txt
```

## render frontend

```
yarn install
yarn start
```

## Down load the datasets(which will in MySQL infuture)
```
mkdir datasets
cd datasets
wget https://huggingface.co/spaces/Fazzie/Pokemon-GAI/blob/main/datasets/pregenerated_pokemon.h5
```
## Run the backend sever

```
python backend/main.py
```

## request get image from hf

```
python ai/space.py 
```

### get 3D image 
```
python ai/space3D.py 
```

## run the total project 

```
python start.py
```