pipeline {
    agent any
    stages {
        stage('build') {
            steps {
               echo "Build"
               bat "node"
               bat "1+1"
               bat "exit"
            }
        }
        stage('test') {
            when {
                expression {
                    BRANCH_NAME == 'dev' || BRANCH_NAME ==  'master'
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
