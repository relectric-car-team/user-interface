pipeline {
    agent {
        docker {
            image 'node:14.16.0-alpine'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn' 
                sh 'yarn build' 
                stash(name: 'build', includes: 'build')
            }
        }
    }
}
