import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import {
  AuthorizationType,
  CognitoUserPoolsAuthorizer,

  LambdaIntegration,
  RestApi,
} from "aws-cdk-lib/aws-apigateway";
import { Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { myApiFunction } from "./functions/api-functions/resource";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { getAccessToken } from "./functions/getAccessToken/resource";
import { checkReviewRequest } from "./functions/checkReviewRequest/resource";
import { getSortedOrders } from "./functions/getSortedOrders/resource";
import { postSendedReviewToDataBase } from "./functions/postReviewRequest/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  getAccessToken,
  getSortedOrders,
  checkReviewRequest,
  postSendedReviewToDataBase,
  // myApiFunction,
});

// const apiStack = backend.createStack("api-stack");

// // create a new REST API
// const myRestApi = new RestApi(apiStack, "RestApi", {
//   restApiName: "myRestApi",
//   deploy: true,
//   defaultCorsPreflightOptions: {
//     allowOrigins: ["*"], // Restrict this to domains you trust
//     allowMethods: ["OPTIONS", "GET", "POST"], // Specify only the methods you need to allow
//     allowHeaders: [
//       "Content-Type",
//       "Authorization",
//       "X-Amz-Date",
//       "x-amz-access-token",
//       "x-amz-security-token",
//       "X-Api-Key",
//     ],
//   },
// });

// const lambdaIntegration = new LambdaIntegration(
//   backend.myApiFunction.resources.lambda
// );

// const ordersPath = myRestApi.root.addResource("orders", {
//   defaultMethodOptions: {
//     authorizationType: AuthorizationType.IAM,
//   },
// });

// ordersPath.addMethod("GET", lambdaIntegration);
// ordersPath.addMethod("POST", lambdaIntegration);

// ordersPath.addProxy({
//   anyMethod: true,
//   defaultIntegration: lambdaIntegration,
// });

// const cognitoAuth = new CognitoUserPoolsAuthorizer(apiStack, "CognitoAuth", {
//   cognitoUserPools: [backend.auth.resources.userPool],
// });

// // create a new resource path with Cognito authorization
// const booksPath = myRestApi.root.addResource("cognito-auth-path");
// booksPath.addMethod("GET", lambdaIntegration, {
//   authorizationType: AuthorizationType.COGNITO,
//   authorizer: cognitoAuth,
// });

// // create a new IAM policy to allow Invoke access to the API
// const apiRestPolicy = new Policy(apiStack, "RestApiPolicy", {
//   statements: [
//     new PolicyStatement({
//       actions: ["execute-api:Invoke"],
//       resources: [
//         `${myRestApi.arnForExecuteApi("orders")}`,
//         `${myRestApi.arnForExecuteApi("cognito-auth-path")}`,
//       ],
//     }),
//   ],
// });

// // attach the policy to the authenticated and unauthenticated IAM roles
// backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(
//   apiRestPolicy
// );
// backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(
//   apiRestPolicy
// );

// // add outputs to the configuration file
// backend.addOutput({
//   custom: {
//     API: {
//       [myRestApi.restApiName]: {
//         endpoint: myRestApi.url,
//         region: Stack.of(myRestApi).region,
//         apiName: myRestApi.restApiName,
//       },
//     },
//   },
// });
