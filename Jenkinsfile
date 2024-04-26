pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'yakir1992/usd-rate-app'
        DOCKERFILE_PATH = '/home/ubuntu/usd-rate-app/Dockerfile'
        dockerhub_credentials = '9cf7109a-6e06-43d3-8d0a-d72bec731005'
    }

    stages {
        stage('Build') {
            steps {
                // Checkout the code from GitHub
                git 'https://github.com/yakir1992/usd-rate-app'

                // Build the Docker image
                script {
                    docker.build("${DOCKER_IMAGE}", "--build-arg PORT=80 -f ${DOCKERFILE_PATH} .")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Push the Docker image to Docker Hub
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_credentials') {
                        docker.image("${DOCKER_IMAGE}").push()
                    }
                }
            }
        }
    } 
}