pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh './build.sh'
            }
        }
        
        stage('Push') {
            steps {
                sh 'docker login -u deepan47 -p Deepan11032004'
                sh 'docker tag car-app deepan47/car-app'
                sh 'docker push deepan47/car-app'
            }
        }
        
                }
    }
}
