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
import { checkReviewRequest } from "./functions/sendReviewRequest/resource";
import { postSendedReviewToDataBase } from "./functions/postReviewRequest/resource";
import { getDates } from "./functions/getDates/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  getAccessToken,
  checkReviewRequest,
  postSendedReviewToDataBase,
  getDates,
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

const cognitoAuth = new CognitoUserPoolsAuthorizer(apiStack, "CognitoAuth", {
  cognitoUserPools: [backend.auth.resources.userPool],
});

const tokenPath = myRestApi.root.addResource("gettoken");
const datesPath = myRestApi.root.addResource("getdates");

// !поменять на авторизацию IAM для aws console.
tokenPath.addMethod("GET", lambdaGetToken, {
  authorizationType: AuthorizationType.COGNITO,
  authorizer: cognitoAuth,
});

// !поменять на авторизацию IAM для aws console.
datesPath.addMethod("GET", lambdaGetDates, {
  authorizationType: AuthorizationType.COGNITO,
  authorizer: cognitoAuth,
});

tokenPath.addProxy({
  anyMethod: true,
  defaultIntegration: lambdaGetToken,
});

datesPath.addProxy({
  anyMethod: true,
  defaultIntegration: lambdaGetDates,
});

const apiRestPolicy = new Policy(apiStack, "RestApiPolicy", {
  statements: [
    new PolicyStatement({
      actions: ["execute-api:Invoke"],
      resources: [
        `${myRestApi.arnForExecuteApi("gettoken")}`,
        `${myRestApi.arnForExecuteApi("getdates")}`,
        `${myRestApi.arnForExecuteApi("getorders")}`,
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
