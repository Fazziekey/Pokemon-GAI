import os
import subprocess
import threading
from argparse import ArgumentParser

from dotenv import load_dotenv


def print_env():

    print("OPENAI_API_KEY:", os.environ["OPENAI_API_KEY"])
    print("API_HOST:", os.environ["API_HOST"])
    print("STABILITY_API_KEY:", os.environ["STABILITY_API_KEY"])
    print("HF_TOKEN:", os.environ["HF_TOKEN"])
    print("SPACE:", os.environ["SPACE"])
    print("SPACE_3D:", os.environ["SPACE_3D"])
    print("MODEL:", os.environ["MODEL"])
    print("MODEL_3D:", os.environ["MODEL_3D"])
    print("FRONTEND_PORT:", os.environ["FRONTEND_PORT"])
    print("BACKEND_PORT:", os.environ["BACKEND_PORT"])
    print("CHAT_PORT:", os.environ["CHAT_PORT"])
    print("BATTLE_PORT:", os.environ["BATTLE_PORT"])


def start_backend():
    command = "python3 backend/main.py"
    subprocess.run(command, shell=True, check=True)


def start_frontend():
    command = "cd frontend && yarn start --port " + os.environ["FRONTEND_PORT"]
    subprocess.run(command, shell=True, check=True)


def start_chat():
    command = "python3 ai/gradio_chatbot.py"
    subprocess.run(command, shell=True, check=True)


def start_battle():
    command = "python3 ai/gradio_battle.py"
    subprocess.run(command, shell=True, check=True)


def args():
    parser = ArgumentParser()
    parser.add_argument("--chat", action="store_true")
    parser.add_argument("--battle", action="store_true")
    parser.add_argument("--backend_only", action="store_true")
    parser.add_argument("--frontend_only", action="store_true")
    parser.add_argument("--chat_only", action="store_true")
    parser.add_argument("--battle_only", action="store_true")
    return parser.parse_args()


if __name__ == "__main__":

    args = args()

    # config env
    load_dotenv()
    print_env()

    if args.backend_only:
        start_backend()
        exit()

    if args.frontend_only:
        start_frontend()
        exit()

    if args.chat_only:
        start_chat()
        exit()

    if args.battle_only:
        start_battle()
        exit()

    # start services

    backend_thread = threading.Thread(target=start_backend)
    backend_thread.start()

    frontend_thread = threading.Thread(target=start_frontend)
    frontend_thread.start()

    if args.chat:
        chat_thread = threading.Thread(target=start_chat)
        chat_thread.start()

    if args.battle:
        battle_thread = threading.Thread(target=start_battle)
        battle_thread.start()

    backend_thread.join()
    frontend_thread.join()

    # start chatbot
    if args.chat:
        chat_thread.join()

    # start battle
    if args.battle:
        battle_thread.join()
