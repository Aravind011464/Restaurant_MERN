pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS 23' 
        SONAR_SCANNER_PATH = '/Users/senthilvelmuthupandy/Downloads/sonar-scanner-6.2.1.4610-macosx-aarch64/bin'
        PATH = "${NODEJS_HOME}/bin:${SONAR_SCANNER_PATH}:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm 
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install --prefix client' 
            }
        }

        stage('SonarQube Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonar-token') 
            }
            steps {
                sh '''
                echo "Starting SonarQube analysis..."
                sonar-scanner -Dsonar.projectKey=MERN_Trial1 \
                  -Dsonar.sources=. \
                  -Dsonar.host.url=http://localhost:9000 \
                  -Dsonar.login=$SONAR_TOKEN
                '''
            }
        }

        // stage('Start Application') {
        //     steps {
        //         sh 'npm run dev --prefix client' 
        //     }
        // }
    }

    post {
        success {
            echo 'Application started successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
