import { APIGatewayProxyHandler } from "aws-lambda";
import { env } from "$amplify/env/sendReviewRequest";
// import { generateClient } from "aws-amplify/data";
// import { type Schema } from "../../data/resource";
// import { env } from "$amplify/env/sendReviewRequest"; 

// !FOR AWS need to change FOR API
export const handler: APIGatewayProxyHandler = async (event) => {
  // const sp_api_host = import.meta.env.VITE_SP_API_HOST;
  const sp_api_host = env.SP_API_HOST;
  const requestBody = event.body;
  if (requestBody !== null) {
    const body = JSON.parse(requestBody);
    try {
      const url_post = `${sp_api_host}/solicitations/v1/orders/${body.amazon_order_id}/solicitations/productReviewAndSellerFeedback?marketplaceIds=A2EUQ1WTGCTBG2`;
      const response = await fetch(url_post, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "x-amz-access-token": body.accessToken,
        }),
      });
      if (!response.ok) {
        throw new Error("Can't send solicitations to the buyer");
      }
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify({
          message: "Solicication sent successfully",
        }),
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          statusCode: 500,
          body: JSON.stringify({
            error: `Error sent solicication to the buyer: ${error.message}`,
          }),
        };
      } else {
        console.error("Unexpected error:", error);
        return {
          statusCode: 500,
          body: JSON.stringify({
            error: "Unexpected error",
          }),
        };
      }
    }
  }
  return {
    statusCode: 500,
    body: JSON.stringify({
      error: `Request body is null`,
    }),
  };
};
