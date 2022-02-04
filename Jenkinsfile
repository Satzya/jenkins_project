pipeline {
    agent any
    stages {
        stage('build') {
            steps {
               echo "Build"
               dir
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
