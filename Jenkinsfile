pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'yakir1992/usd-rate-app' 
    }
    
    stages {
        stage('Build') {
            steps {
                // Checkout code from GitHub
                git 'https://github.com/yakir1992/usd-rate-app' 
                
                // Build Docker image
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        
        stage('Test') {
            steps {
                // Your test steps here
                echo 'Testing...'
            }
        }
        
        stage('Deploy') {
            steps {
                // Push Docker image to Docker Hub
                script {
                    sh "docker login -u yakir1992 -p dckr_pat_M_UTfzLwRZGGTr-57u4Qnik8NGw"
                    sh "docker push ${DOCKER_IMAGE}"
                }
            }
        }
    }
}