pipeline {
    agent any
    stages {
        stage('build') {
            steps {
               echo "Build" 
            }
        }
        stage('test') {
            when {
                expression {
                BRANCH_NAME == 'dev'
                }
            }
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
