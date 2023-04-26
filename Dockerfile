FROM ubuntu:18.04

# install git and curl
RUN apt-get update && apt-get install --no-install-recommends -y curl && apt-get -y install git && apt-get -y install libgl1

# Set environment variables
ENV PIP_NO_CACHE_DIR=yes \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

# Install the required python packages globally
ENV PATH="$PATH:/root/.local/bin"
COPY requirements.txt .

# install requirements
RUN python3 -m pip install --upgrade pip 
RUN pip install --no-cache-dir -r requirements.txt

# install js modules
RUN cd frontend && \
    yran install && \
    cd ..
