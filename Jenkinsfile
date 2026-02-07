pipeline{
  agent any
  stages{
    stage('checkout'){
      steps{
        git branch: 'main',url:'git@github.com:bethireddyrajesh123/jenkins-webhook-lab.git'
      }}
    stage('Build'){
      steps{
        echo "Build stage- static website, no build needed"
      }
    }
    stage('Test'){
      steps{
        echo "Test stage-basic validation"
      }
    }
    stage('Deploy'){
      steps{
        echo "Deploy stage- deployment simulated"
      }
    }
  }
}
