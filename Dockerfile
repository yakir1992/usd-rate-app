# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /home/yakyak/Desktop/DevOps Projects/usd-rate-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory in the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Define the command to run your application
CMD ["node", "app.js"]