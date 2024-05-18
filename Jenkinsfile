pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checks out source code for both frontend and backend
                checkout scm
            }
        }

        stage('Build and Run Backend Docker Image') {
            steps {
                dir('weather-app-backend') {
                    // Building the Docker image
                    script {
                        sh 'docker build -t weather-backend .'
                    }
                    // Running the Docker container
                    script {
                        sh 'docker run -d --name weather-backend -p 5000:5000 weather-backend'
                    }
                }
            }
        }

        stage('Build and Run Frontend Docker Image') {
            steps {
                dir('weather-app-frontend') {
                    // Building the Docker image
                    script {
                        sh 'docker build -t weather-frontend .'
                    }
                    // Running the Docker container
                    script {
                        sh 'docker run -d --name weather-frontend -p 3000:3000 weather-frontend'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Containers are built and running successfully.'
        }
        failure {
            echo 'Failed to build or run one or more containers.'
        }
        always {
            // Clean up to ensure there are no conflicts or resource issues on subsequent builds
            sh 'docker rm -f weather-backend weather-frontend || true'
        }
    }
}
