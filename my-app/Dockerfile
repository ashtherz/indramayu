# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies with clean npm cache
RUN npm ci --silent

# Copy the rest of the application
COPY . .

# Set environment variable to avoid issues with Create React App
ENV CI=false
ENV NODE_ENV=production

# Build the application
RUN npm run build

# Use a separate stage for serving
FROM node:18-alpine

WORKDIR /usr/src/app

# Install serve globally
RUN npm install -g serve

# Copy only the build files from previous stage
COPY --from=0 /usr/src/app/build ./build

# Expose the port your app runs on
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "build", "-l", "3000"]