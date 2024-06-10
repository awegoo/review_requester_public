import type { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event) => {
  // const sp_api_host = import.meta.env.SP_API_HOST;
  // const bodyData: Record<string, any> = JSON.parse(event.body || '{}');
  // const { amazon_order_id, last_updated_date } = bodyData;
  // const{reqHeaders} = event.headers;
  // try {
  //   const url_get = `${sp_api_host}/solicitations/v1/orders/${amazon_order_id}?marketplaceIds=A2EUQ1WTGCTBG2`;
  //   const response = await fetch(url_get, {
  //     method: "GET",
  //     headers: reqHeaders as unknown as Headers,
  //   });

  //   if (!response.ok) {
  //     throw new Error(`Order does not exist: ${response.status}`);
  //   }

  //   const content = await response.json();
  //   const requestObject = {
  //     amazon_order_id,
  //     last_updated_date: last_updated_date,
  //     sent_success: content._links.actions.length > 0,
  //   };

  //   return {
  //     statusCode: 200,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
  //       "Access-Control-Allow-Headers":"*",
  //       "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  //     },
  //     body: JSON.stringify('Hello'),
  //   };
  // } catch (error) {
  //   return {
  //     statusCode: 500,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers":
  //         "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,x-amz-access-token",
  //       "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  //     },
  //     body: JSON.stringify({ message: error }),
  //   };
  // }
  console.log("event", event);
  return {
    statusCode: 200,
    // Modify the CORS settings below to match your specific requirements
    headers: {
      "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
      "Access-Control-Allow-Headers": "*", // Specify only the headers you need to allow
    },
    body: JSON.stringify("Hello from myFunction!"),
  };
};
