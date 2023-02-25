pipeline{
    agent any
    stages{
        stage("Install Node npm"){
            steps{
                sh "npm install"
            }
        }
        stage("Check into tests folder"){
            steps{
                sh "cd ./src/tests"
            }
        }
        stage("Run test suites in Repo"){
            steps{
                sh "npm run test"
            }
        }
        stage("Build docker image of the app"){
            steps{
                sh "docker build -t munya141/simple-lottery:latest"
            }
        }
        stage("Upload image to docker hub"){
            steps{
                
            }
        }
        stage("Wait for 5 minutes to allow image upload"){
            sh "sleep 500"
        }
        stage("Update Kubernetes Deployment to new version of image"){
            
        }
    }
}