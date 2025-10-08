# syntax=docker/dockerfile:1
# Use Debian slim to avoid native-module headaches. Switch to alpine later if you prefer.
FROM node:20-bookworm-slim

# 1) Set workdir
WORKDIR /app

# 2) Install dependencies with better caching
COPY package*.json ./
# Install all dependencies (including dev dependencies for build)
RUN npm ci

# 3) Copy the rest of your app
COPY . .

# 4) Build the Next.js application
RUN npm run build

# 5) Remove dev dependencies to reduce image size
RUN npm prune --omit=dev

# 6) Set env & expose port
ENV NODE_ENV=production \
    PORT=8080
EXPOSE 8080

# 7) Start the app (uses your package.json "start" script)
CMD ["npm", "start"]
