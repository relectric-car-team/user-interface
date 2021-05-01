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
                zip zipFile: 'relectric_ui_dist_static.zip', archive: false, dir: 'build'
                archiveArtifacts artifacts: 'relectric_ui_dist_static.zip', fingerprint: true
            }
        }
    }
}
