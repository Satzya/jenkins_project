pipeline {
    agent any
    parameters {
        choice(name: 'VERSION', choices: ['1.1.0','1.1.1'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
    }
    stages {
        stage('build') {
            steps {
               echo "Build"
            }
        }
        stage('test') {
            when {
                expression {
                    // BRANCH_NAME == 'dev' || BRANCH_NAME ==  'master' 
                    params.executeTests
                }
            }
            steps {
                echo "Test"
            }
        }
        stage('deploy') {
            steps {
                echo "deploy"
                echo "deploying version ${VERSION}"
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
