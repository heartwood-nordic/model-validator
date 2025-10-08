# Model Validator - Next.js Application

This is a [Next.js](https://nextjs.org) project for model validation and analysis.

## 🚀 Quick Start Guide

### Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your machine
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 📋 Step-by-Step Setup

### Option 1: Docker (Recommended - Easiest)

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd model-validator
   ```

2. **Build the Docker image**
   ```bash
   docker build -t my-node-app:latest .
   ```

3. **Run the container**
   ```bash
   docker run --rm -p 8080:8080 --name my-node-app my-node-app:latest
   ```

4. **Share with coworkers using localtunnel**
   ```bash
   npx localtunnel --port 8080
   ```
   
   This will give you a public URL like `https://abc123.loca.lt` that you can share with anyone!

### Option 2: Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Share with coworkers**
   ```bash
   npx localtunnel --port 3000
   ```

## 🌐 Sharing Your Application

### Method 1: localtunnel (Instant Sharing)
```bash
npx localtunnel --port 8080
```
- Copy the generated URL (e.g., `https://abc123.loca.lt`)
- **Note**: First-time visitors will need to enter a password shown in your terminal
- Share both the URL and password with your coworkers
- Works as long as your application is running

**Alternative with custom subdomain (easier to remember):**
```bash
npx localtunnel --port 8080 --subdomain model-validator
```
This creates: `https://model-validator.loca.lt`

### Method 2: ngrok (No Password Required)
1. Sign up at [ngrok.com](https://dashboard.ngrok.com/signup)
2. Get your authtoken from [dashboard](https://dashboard.ngrok.com/get-started/your-authtoken)
3. Configure ngrok:
   ```bash
   ngrok config add-authtoken YOUR_TOKEN_HERE
   ```
4. Create tunnel:
   ```bash
   ngrok http 8080
   ```
   Or use the provided script:
   ```bash
   ./share-ngrok.sh
   ```

### Method 3: Deploy to Vercel (Permanent)
```bash
npm i -g vercel
vercel --prod
```

## 🐳 Docker Commands Reference

```bash
# Build the image
docker build -t my-node-app:latest .

# Run the container
docker run --rm -p 8080:8080 --name my-node-app my-node-app:latest

# Run in background (detached)
docker run -d -p 8080:8080 --name my-node-app my-node-app:latest

# Stop the container
docker stop my-node-app

# Remove the container
docker rm my-node-app

# View running containers
docker ps

# View container logs
docker logs my-node-app
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
model-validator/
├── src/
│   └── app/
│       ├── page.tsx              # Home page
│       ├── layout.tsx            # Root layout
│       ├── globals.css           # Global styles
│       └── projects/             # Project pages
│           ├── page.tsx          # Projects overview
│           ├── analysis/         # Analysis page
│           ├── quantity-takeoff/ # Quantity takeoff page
│           └── quote/            # Quote page
├── public/                       # Static assets
├── Dockerfile                    # Docker configuration
├── .dockerignore                 # Docker ignore file
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🚨 Troubleshooting

### Docker Issues
- **"Dockerfile cannot be empty"**: Make sure `Dockerfile` is not in `.dockerignore`
- **Build fails**: Check that all dependencies are properly installed
- **Port already in use**: Stop other services using port 8080 or change the port

### Sharing Issues
- **localtunnel not working**: Try a different port or restart the tunnel
- **ngrok authentication error**: Sign up for a free ngrok account and add your authtoken
- **Site not accessible**: Ensure your Docker container is running

### Development Issues
- **Dependencies not found**: Run `npm install`
- **Build errors**: Check for TypeScript/ESLint errors and fix them
- **Port conflicts**: Use a different port with `npm run dev -- -p 3001`

## 📞 Getting Help

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure all prerequisites are installed
3. Verify your Docker container is running: `docker ps`
4. Check container logs: `docker logs my-node-app`

## 🎯 Quick Commands Summary

```bash
# Complete setup (Docker)
docker build -t my-node-app:latest .
docker run --rm -p 8080:8080 --name my-node-app my-node-app:latest
npx localtunnel --port 8080

# Complete setup (Local)
npm install
npm run dev
npx localtunnel --port 3000
```

Your application will be available at:
- **Local**: http://localhost:8080 (Docker) or http://localhost:3000 (local dev)
- **Public**: The URL provided by localtunnel (e.g., `https://abc123.loca.lt`)

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Docker Documentation](https://docs.docker.com/) - learn about Docker containerization.