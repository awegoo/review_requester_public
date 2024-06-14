import { Handler, APIGatewayProxyHandler } from "aws-lambda";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../data/resource";

const client = generateClient<Schema>();

// !FOR AWS need to change FOR API
export const handler: APIGatewayProxyHandler = async (event) => {
  const requestBody = event.body;
  if (requestBody !== null) {
    const sendedReview = await JSON.parse(requestBody);
    try {
      if (Array.isArray(sendedReview)) {
        let dataArr = [];
        for (const element of sendedReview) {
          const { errors, data: newRequest } =
            await client.models.SendedRequest.create({
              amazon_order_id: element.amazon_order_id,
              purchase_date: element.purchase_date,
              request_sent_date: element.request_sent_date,
              sent_success: element.sent_success,
            });
          dataArr.push(newRequest);
        }
        return {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
          body: JSON.stringify({
            message: "Sended requests saved successfully",
            data: dataArr,
          }),
        };
      }
      const { errors, data: newRequest } =
        await client.models.SendedRequest.create({
          amazon_order_id: sendedReview.amazon_order_id,
          purchase_date: sendedReview.purchase_date,
          request_sent_date: sendedReview.request_sent_date,
          sent_success: sendedReview.sent_success,
        });
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify({
          message: "Sended requests saved successfully",
          data: newRequest,
        }),
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          statusCode: 500,
          body: JSON.stringify({
            error: `Error saved sended request to the db: ${error.message}`,
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
