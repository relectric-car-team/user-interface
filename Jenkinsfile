pipeline {
    agent none
    stages {
        stage('Build') { 
            agent {
                docker {
                    image 'node:14.16.0-alpine'
                }
            }
            steps {
                sh 'yarn' 
                sh 'yarn build' 
                stash(name: 'build', includes: 'build/**')
            }
        }
    }
}
