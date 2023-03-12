pipeline{
    agent any
    tools{
        nodejs "Node"
    }
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
                sh "docker build -t munya141/simple-lottery:latest ."
            }
        }
        stage("push to docker hub"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'DockerHubAuth', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh 'docker push munya141/simple-lottery:latest'
                }
            }
        }
    }
}