pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Downloading source code from GitHub'
                checkout scm
            }
        }

        stage('Deploy') {
            steps {
                echo 'Preparing for Docker deployment'
            }
        }
    }
}
