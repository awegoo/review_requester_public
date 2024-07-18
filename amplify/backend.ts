import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import {
  AuthorizationType,
  CognitoUserPoolsAuthorizer,
  LambdaIntegration,
  RestApi,
} from "aws-cdk-lib/aws-apigateway";
import { Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { getAccessToken } from "./functions/getAccessToken/resource";
import { checkReviewRequest } from "./functions/checkReviewRequest/resource";
import { sendReviewRequest } from "./functions/postReviewRequest/resource";
import { getDates } from "./functions/getDates/resource";
import { getRatings } from "./functions/getRatings/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  getAccessToken,
  checkReviewRequest,
  sendReviewRequest,
  getDates,
  getRatings,
});

const apiStack = backend.createStack("api-stack");

const myRestApi = new RestApi(apiStack, "RestApi", {
  restApiName: "reviewRequest",
  deploy: true,
  defaultCorsPreflightOptions: {
    allowOrigins: ["*"],
    allowMethods: ["OPTIONS", "GET", "POST"],
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "X-Amz-Date",
      "x-amz-access-token",
      "x-amz-security-token",
      "X-Api-Key",
    ],
  },
});

const lambdaGetToken = new LambdaIntegration(
  backend.getAccessToken.resources.lambda
);

const lambdaGetDates = new LambdaIntegration(backend.getDates.resources.lambda);

const lambdaPostRequest = new LambdaIntegration(
  backend.sendReviewRequest.resources.lambda
);

// const cognitoAuth = new CognitoUserPoolsAuthorizer(apiStack, "CognitoAuth", {
//   cognitoUserPools: [backend.auth.resources.userPool],
// });

const tokenPath = myRestApi.root.addResource("gettoken");
const datesPath = myRestApi.root.addResource("getdates");
const sendRequest = myRestApi.root.addResource("sendrequest");

// !поменять на авторизацию IAM для aws console.
tokenPath.addMethod("GET", lambdaGetToken,{authorizationType:AuthorizationType.NONE});

// !поменять на авторизацию IAM для aws console.
datesPath.addMethod("GET", lambdaGetDates,{authorizationType:AuthorizationType.NONE});

sendRequest.addMethod("POST", lambdaGetDates,{authorizationType:AuthorizationType.NONE});

tokenPath.addProxy({
  anyMethod: true,
  defaultIntegration: lambdaGetToken,
});

datesPath.addProxy({
  anyMethod: true,
  defaultIntegration: lambdaGetDates,
});

sendRequest.addProxy({
  anyMethod: true,
  defaultIntegration: lambdaPostRequest,
});

const apiRestPolicy = new Policy(apiStack, "RestApiPolicy", {
  statements: [
    new PolicyStatement({
      actions: ["execute-api:Invoke"],
      resources: [
        `${myRestApi.arnForExecuteApi("gettoken")}`,
        `${myRestApi.arnForExecuteApi("getdates")}`,
        `${myRestApi.arnForExecuteApi("sendrequest")}`,
      ],
    }),
  ],
});

backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(
  apiRestPolicy
);
backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(
  apiRestPolicy
);

backend.addOutput({
  custom: {
    API: {
      [myRestApi.restApiName]: {
        endpoint: myRestApi.url,
        region: Stack.of(myRestApi).region,
        apiName: myRestApi.restApiName,
      },
    },
  },
});
