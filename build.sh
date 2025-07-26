#!/bin/bash

# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Build the React app
npm run build

echo "Build completed successfully!" 