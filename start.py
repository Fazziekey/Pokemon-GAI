import subprocess
import threading
import os
# subprocess.run("uvicorn main:app --host 0.0.0.0 --port 8000", shell=True)

def config_env():
    os.environ["OPENAI_API_KEY"] = '' #your openai api key
    os.environ["API_HOST"] = 'https://api.stability.ai' #your openai api key
    os.environ["STABILITY_API_KEY"] = '' #your stability api key
    os.environ["HF_TOKEN"] = '' #your huggingface token
    os.environ["space_id"] = "" #your space id
    os.environ["space_id_3d"] = "" #your space id
    os.environ["model_id"] = "" #your model id
    os.environ["model_id_3d"] = "" #your model id


def start_backend():
    command = "python3 backend/main.py"
    subprocess.run(command, shell=True, check=True)

def start_frontend():
    command = "cd frontend && yarn start"
    subprocess.run(command, shell=True, check=True)

if __name__ == "__main__":

    config_env()

    backend_thread = threading.Thread(target=start_backend)
    frontend_thread = threading.Thread(target=start_frontend)

    backend_thread.start()
    frontend_thread.start()

    backend_thread.join()
    frontend_thread.join()
