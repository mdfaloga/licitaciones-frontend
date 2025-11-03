// src/aws-config.js
const awsConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'tu-user-pool-id',
    userPoolWebClientId: 'tu-client-id',
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
};

export default awsConfig;