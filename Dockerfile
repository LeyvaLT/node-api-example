FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies (including devDependencies for local development)
RUN npm install

# Copy source code
COPY . .

# Expose API port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]
