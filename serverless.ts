import type { AWS } from '@serverless/typescript';
import { classFunctions } from '@functions/class/functions.config';
import { userFunctions } from '@functions/user/functions.config';
import { bookFunctions } from '@functions/book/functions.config';
import { promptFunctions } from '@functions/prompt/functions.config';
import { feedbackFunctions } from '@functions/feedback/functions.config';
import { queryFunctions } from '@functions/query/functions.config';
import { processFilesFunctions } from '@functions/processFiles/functions.config';
import { adminFunctions } from '@functions/admin/functions.config';

const serverlessConfiguration: AWS = {
  service: 'file-search-backend-postgres',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-dotenv-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    vpc: {
      securityGroupIds: ['sg-04b035c022873d68c', 'sg-0bc26181aca663852'],
      subnetIds: ['subnet-6b06f330', 'subnet-4261c625'],
    },
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: [
          "s3:*",
          "bedrock:*"
        ],
        Resource: [
          '*',
        ]
      }
    ]
  },
  // import the function via paths
  functions: { 
    ...bookFunctions,
    ...classFunctions,
    ...promptFunctions,
    ...userFunctions,
    ...feedbackFunctions,
    ...adminFunctions,
    ...processFilesFunctions,
    ...queryFunctions
   },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
