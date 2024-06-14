
# Docker Node.js Example

## Description

This repository provides an example of using Docker with a Node.js application. It demonstrates how to containerize a Node.js application using Docker, which is useful for developers looking to deploy their applications in a consistent and reproducible environment.

## Requirements

- Node.js
- Docker
- Docker Compose (optional)
- Yarn or npm for package management

## Mode of Use

1. Clone the repository:
   ```bash
   git clone https://github.com/ferrerallan/docker-nodejs-example.git
   ```
2. Navigate to the project directory:
   ```bash
   cd docker-nodejs-example
   ```
3. Ensure you have Docker installed on your machine.
4. Build the Docker image:
   ```bash
   docker build -t docker-nodejs-example .
   ```
5. Run the Docker container:
   ```bash
   docker run -d -p 3000:3000 docker-nodejs-example
   ```

## Implementation Details

- **Dockerfile**: Contains instructions for building the Docker image.
- **src/**: Contains the Node.js application source code.
- **docker-compose.yml**: Configuration file for Docker Compose to manage multi-container applications (if applicable).

### Example of Use

Here is an example of a simple Dockerfile for a Node.js application:

```dockerfile
# Use the official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
```

This Dockerfile sets up a Node.js application environment, installs dependencies, and runs the application.

## License

This project is licensed under the MIT License.

You can access the repository [here](https://github.com/ferrerallan/docker-nodejs-example).
