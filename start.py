import subprocess

subprocess.run("uvicorn main:app --host 0.0.0.0 --port 8000", shell=True)
