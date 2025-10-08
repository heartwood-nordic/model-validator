#!/bin/bash

# Model Validator Share Script

if ! curl -s http://localhost:8080 > /dev/null; then
    echo "App is not running. Run ./setup.sh first."
    exit 1
fi

echo "Creating public tunnel..."
npx localtunnel --port 8080
