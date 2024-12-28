pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS 23' // Replace 'NodeJS' with your Jenkins Node.js installation name
        SONAR_SCANNER_PATH = '/Users/senthilvelmuthupandy/Downloads/sonar-scanner-6.2.1.4610-macosx-aarch64/bin'
        PATH = "${NODEJS_HOME}/bin:${SONAR_SCANNER_PATH}:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm // Automatically checks out the repository configured in the Jenkins job
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install --prefix client' // Install frontend dependencies
            }
        }

        stage('SonarQube Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonar-token') // Use credentials for the SonarQube token
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

        stage('Start Application') {
            steps {
                sh 'npm run dev --prefix client' // Start the application in development mode
            }
        }
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
