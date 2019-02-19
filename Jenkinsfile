pipeline {
    agent any

    environment {
        scannerHome = tool 'sonar'
    }

    stages {
        stage('build') { 
            steps {
                sh 'npm ci'
                sh 'npm run build'
                sh 'npm prune --production'
            }
        }
        stage('test') { 
            steps {
                sh 'npm run test'  
            }
        }
        stage('sonarqube') { 
            steps {
                withSonarQubeEnv('sonar') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }

        stage('quality gate') {
              steps {
                withSonarQubeEnv('sonar') {
                    timeout(time: 60, unit: 'SECONDS') {
                        waitForQualityGate abortPipeline: true
                    }
                }
            }
        }

        stage('iq') {
            steps{
                nexusPolicyEvaluation failBuildOnNetworkError: true, iqScanPatterns: [[scanPattern: '**/*.js']], iqApplication: manualApplication('super-secure'), iqStage: 'build', jobCredentialsId: ''
            }
        }
    }
}