pipeline {
    agent any
    stages {
        stage('build') {
            steps {
               cho "Build" 
            }
        }
        stage('test') {
            steps {
                echo "Test"
            }
        }
        stage('deploy') {
            steps {
                echo "deploy"
            }
        }
    }
    post {
        success {
            echo 'success'
        }
        failure {
            echo 'failure'
        }
    }
}
