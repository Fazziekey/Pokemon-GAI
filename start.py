import subprocess
import threading

# subprocess.run("uvicorn main:app --host 0.0.0.0 --port 8000", shell=True)

def start_backend():
    command = "python3 backend/main.py"
    subprocess.run(command, shell=True, check=True)

def start_frontend():
    command = "cd frontend && yarn start"
    subprocess.run(command, shell=True, check=True)

if __name__ == "__main__":
    backend_thread = threading.Thread(target=start_backend)
    frontend_thread = threading.Thread(target=start_frontend)

    backend_thread.start()
    frontend_thread.start()

    backend_thread.join()
    frontend_thread.join()
