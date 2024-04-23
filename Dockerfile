# Use a base image of your choice
FROM ubuntu:latest

# Set the working directory inside the container
WORKDIR /home/yakyak/Desktop/DevOps Projects/usd-rate-app

# Copy your files from your local directory into the container
COPY . /home/yakyak/Desktop/DevOps Projects/usd-rate-app/

# Add any additional setup or configuration commands here

# Specify a default command to run when the container starts (optional)
CMD ["bash"]