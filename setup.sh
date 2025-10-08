#!/bin/bash

# Model Validator Setup Script

echo "Building Docker image..."
docker build -t my-node-app:latest .

if [ $? -ne 0 ]; then
    echo "Build failed"
    exit 1
fi

echo "Stopping existing container..."
docker stop my-node-app 2>/dev/null || true
docker rm my-node-app 2>/dev/null || true

echo "Starting container..."
docker run -d -p 8080:8080 --name my-node-app my-node-app:latest

if [ $? -eq 0 ]; then
    echo "Application running at http://localhost:8080"
else
    echo "Failed to start container"
    exit 1
fi
