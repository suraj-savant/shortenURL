# Stage 1: Build the frontend using Vite
FROM node:18-alpine AS frontend-builder

# Set the working directory
WORKDIR /app/frontend

# Copy frontend files
COPY ./frontend/package*.json ./
RUN npm install

# Copy other frontend files and build
COPY ./frontend .
RUN npm run build

# Stage 2: Setup the backend and serve the frontend
FROM node:18-alpine

# Set working directory for backend
WORKDIR /app/backend

# Copy backend package.json and install dependencies
COPY ./backend/package*.json ./
RUN npm install

# Copy backend files
COPY ./backend .

# Copy the frontend build from Stage 1
COPY --from=frontend-builder /app/frontend/dist ./dist

# Expose the backend port (adjust according to your backend app)
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
