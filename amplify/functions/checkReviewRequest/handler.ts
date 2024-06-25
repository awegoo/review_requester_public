import { Handler } from "aws-lambda";
import { addQuery, sortOrdersQuery } from "./sqlQuerys";
import { addRequestToQueue } from "../../utils/queuesRequests";
import { env } from "$amplify/env/checkReviewRequest";
import { Client } from "pg";

interface ISendedRequest {
  amazon_order_id: string;
  purchase_date: string;
  request_sent_date?: Date | string;
  sent_success: boolean;
}

const client = new Client({
  connectionString: env.STRING_CONNECTION, //import.meta.env.STRING_CONNECTION, //env.STRING_CONNECTION,
  ssl: {
    rejectUnauthorized: false,
  },
});

// const client = new Client({
//   connectionString: import.meta.env.STRING_CONNECTION,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });


// Function for save new request to data base
async function addRequest(data: ISendedRequest) {
  try {
    const res = await client.query(addQuery, [
      data.amazon_order_id,
      data.purchase_date,
      data.request_sent_date,
      data.sent_success,
    ]);
    const result = await res.rows[0];
    return result;
  } catch (error) {
    if (error instanceof Error) {
      return { error: `add request to db: ${error.message}` };
    }
  }
}

// Function for checking notifications and pass orders data to the addRequest function if solicications of notifications is available
export const handler: Handler = async (event) => {
  await client.connect();
  // const sp_api_host = import.meta.env.VITE_SP_API_HOST;
  const sp_api_host = env.SP_API_HOST;

  try {
    const spApiToken = await fetch(
      "https://vzln9d92l5.execute-api.ca-central-1.amazonaws.com/prod/gettoken"
    );

    const accessToken = await spApiToken.json();

    const resDates = await fetch(
      "https://vzln9d92l5.execute-api.ca-central-1.amazonaws.com/prod/getdates"
    );
    const dates = await resDates.json();

    // fetch sorted orders from postgres Data base
    const data = await client.query(sortOrdersQuery);

    const orders = await data.rows;
    if (!Array.isArray(orders) || orders.length === 0) {
      await client.end();
      return "No orders to process";
    }

    if (Array.isArray(orders) && orders !== null && orders.length !== 0) {
      for (const element of orders) {
        if (element !== null && element !== undefined) {
          const content: any = await addRequestToQueue(
            element.amazon_order_id,
            accessToken["accessToken"]
          );

          if (content._links.actions.length === 0) {
            const request: ISendedRequest = {
              amazon_order_id: element.amazon_order_id,
              purchase_date: element.purchase_date as string,
              request_sent_date: new Date().toISOString().slice(0, 10),
              sent_success: false,
            };

            const result = await addRequest(request);
          }
          const body = {
            amazon_order_id: element.amazon_order_id,
            accessToken: accessToken.accessToken,
          };
          const senRequest = await fetch(
            "https://vzln9d92l5.execute-api.ca-central-1.amazonaws.com/prod/sendrequest",
            {
              method: "POST",
              body: JSON.stringify(body),
            }
          );
          if (senRequest.ok) {
            const request: ISendedRequest = {
              amazon_order_id: element.amazon_order_id,
              purchase_date: element.purchase_date as string,
              request_sent_date: new Date().toISOString().slice(0, 10),
              sent_success: true,
            };
            const result = await addRequest(request);
          }
        }
      }
      await client.end();
      return "Requests sended successfully";
    }
  } catch (error: any) {
    if (error instanceof Error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: `check notifications: ${error.message}`,
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
};
