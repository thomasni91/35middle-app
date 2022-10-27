pipeline {
    agent {
        docker {
            image 'node:16.16'
            args '-u 0:0'
        }
    }
    // agent any

    environment {
        // SERVER_BASE_URL = credentials('SERVER_BASE_URL')
        SERVER_BASE_URL = 'https://xxx.thomasp3.link'


        ENVIRONMENT = 'UAT'
        // change
//         BUCKET_NAME = 's3://uat-learn.jiangren.com.au'
        BUCKET_NAME = 'thomasp3.link'
//         BUCKET_NAME = '35middlefront'

        // WORKSPACE_PATH = '/var/jenkins_home/workspace/jr-dashboard-uat/dist'
        WORKSPACE_PATH = '/var/jenkins_home/workspace/Front-end/out'

    }

    stages {
        stage('Hello') {
            steps {
                echo 'env.BRANCH_NAME'
                echo "env.BRANCH_NAME"
                echo '${env.BRANCH_NAME}'
                echo "${env.BRANCH_NAME}"
                echo 'Hello World'
            }
        }
//         stage('Git checkout') {
//             steps{
//                 // Get source code from a GitHub repository
//                 // git branch:'develop', url:'https://github.com/35middle/35middle-app.git'
// //                 git branch:'develop', url:'https://github.com/thomasni91/35middle-app'
//             }
//         }
        stage('yarn install') {
            steps{
                // dir("./") {
                    sh 'node -v'

                    // sh 'npm -v'
                    // sh 'npm install -g cypress --unsafe-perm --silent'
                    // sh 'cypress cache clear'
                    // sh 'npm install cypress --save-dev'
                    // sh 'npm install'
                    sh 'apt update'
                    sh 'apt install sudo'
                    sh 'sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 23E7166788B63E1E'
                    sh 'echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list'
                    sh 'apt update'
                    sh 'apt install yarn -y'
                    // sh 'curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
                    // sh 'sudo apt-get install -y nodejs'
                    // sh 'sudo npm install -g yarn@1.22.17'
                    // sh 'yarn --version'
                // }
            }
        }
        stage('npm build') {
            steps{
                // dir("./") {
                    sh 'yarn'
                    sh 'yarn build'
                    sh 'yarn export'
                    // sh 'npm run build'
                    // sh 'npm run export'
                    echo 'bye'
                // }
            }
        }
        stage('install aws cli') {
            steps {
                echo " install aws cli"
                sh 'apt-get update'
                sh 'apt install python3-pip -y'
                sh 'pip3 install awscli --upgrade'
            }
        }
        stage('deploy') {
//             when {
//                 expression {
//                     env.BRANCH_NAME == "dev"
//                 }
//             }
//             when { branch 'dev' }
            steps{
                // dir("./") {
                deployToS3(ENVIRONMENT)
                echo "22"
                // }
            }
        }
    }
}


def deployToS3(environment) {
    echo 'deploy to ' + environment + '...'
    // withAWS(credentials: 'c4b84a7a-ce3s-3fad-b3j2-0033a3jj322', region: 'ap-southeast-2') {
    withAWS(credentials: 'AWS_Shengni', region: 'ap-southeast-2') {
        echo "${BUCKET_NAME}"
        sh 'aws --version'
        sh 'aws sts get-caller-identity'
        sh 'aws s3 ls "${BUCKET_NAME}"'
        sh 'aws s3 rm s3://"${BUCKET_NAME}" --recursive'
        // sh 'aws s3 cp "${WORKSPACE_PATH}" "${BUCKET_NAME}"'
        sh 'aws s3 cp "${WORKSPACE_PATH}" s3://"${BUCKET_NAME}" --recursive'
    }
}