import { Handler } from "aws-lambda";
import { env } from "$amplify/env/checkReviewRequest";
import { Client } from "pg";

interface ISendedRequest {
  amazon_order_id: string;
  purchase_date: string;
  request_sent_date?: Date | string;
  sent_success: boolean;
}

const client = new Client({
  connectionString: env.STRING_CONNECTION,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Function for save new request to data base
async function addRequest(data: ISendedRequest) {
  await client.connect();
  const addQuery = `
    INSERT INTO sent_requests_ca (amazon_order_id, purchase_date, request_sent_date, sent_success)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  try {
    const res = await client.query(addQuery, [
      data.amazon_order_id,
      data.purchase_date,
      data.request_sent_date,
      data.sent_success,
    ]);
    await client.end();
    return res.rows[0];
  } catch (error) {
    if (error instanceof Error) {
      return { error: `add request to db: ${error.message}` };
    }
  }
}

// Function for checking notifications and pass orders data to the addRequest function if solicications of notifications is available
export const handler: Handler = async (event) => {
  const { token } = event;
  const sortOrdersQuery = `
  SELECT *
      FROM orders_ca_short
      WHERE last_updated_date::date BETWEEN $1::date AND $2::date
      ORDER BY last_updated_date DESC;
`;
  await client.connect();
  const sp_api_host = import.meta.env.VITE_SP_API_HOST;
  // const sp_api_host = env.SP_API_HOST;

  try {
    const resToken = await fetch(
      "https://vzln9d92l5.execute-api.ca-central-1.amazonaws.com/prod/gettoken",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const accessToken = await resToken.json();

    const resDates = await fetch(
      "https://vzln9d92l5.execute-api.ca-central-1.amazonaws.com/prod/getdates",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const dates = await resDates.json();
    const res = await client.query(sortOrdersQuery, [
      dates.startDateString,
      dates.endDateString,
    ]);
    await client.end();
    const orders = res.rows;

    if (Array.isArray(orders) && orders !== null && orders.length !== 0) {
      for (const element of orders) {
        if (element !== null && element !== undefined) {
          const url_get = `${sp_api_host}/solicitations/v1/orders/${element.amazon_order_id}?marketplaceIds=A2EUQ1WTGCTBG2`;
          const response = await fetch(url_get, {
            method: "GET",
            headers: new Headers({
              "Content-Type": "application/json",
              "x-amz-access-token": accessToken,
            }),
          });
          if (!response.ok) {
            throw new Error(`Order does not exist: ${response.status}`);
          }
          const content = await response.json();
          if (content._links.actions.length === 0) {
            const request: ISendedRequest = {
              amazon_order_id: element.amazon_order_id,
              purchase_date: element.purchase_date as string,
              request_sent_date: new Date().toISOString().slice(0, 10),
              sent_success: false,
            };

            const result = await addRequest(request);
            return result;
          }
          const request: ISendedRequest = {
            amazon_order_id: element.amazon_order_id,
            purchase_date: element.purchase_date as string,
            request_sent_date: new Date().toISOString().slice(0, 10),
            sent_success: true,
          };
          const result = await addRequest(request);
          return result;
        }
      }
    }
    return "No exist orders for sending review requests";
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
