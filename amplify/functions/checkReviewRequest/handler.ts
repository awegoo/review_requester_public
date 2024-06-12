import { Handler } from "aws-lambda";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../data/resource";
import { env } from "$amplify/env/checkReviewRequest";

const client = generateClient<Schema>();

interface ISendedRequest {
  amazon_order_id: string;
  purchase_date: string;
  request_sent_date?: Date;
  sent_success: boolean;
}

export const handler: Handler = async (event) => {
  const { token } = event;
  const sp_api_host = import.meta.env.VITE_SP_API_HOST;
  // const sp_api_host = env.SP_API_HOST;

  let result: ISendedRequest[] = [];
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

    const { data: orders, errors } = await client.queries.getDateSortedOrders({
      startDate: dates.startDateString,
      endDate: dates.endDateString,
    });
    if (errors) {
      return errors;
    }

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
            // !Сделать API endpoint к функции пост отзыва и вызывать тут метов ПОСТ
            const { errors, data: newRequest } =
              await client.models.SendedRequest.create({
                amazon_order_id: element.amazon_order_id,
                purchase_date: element.purchase_date,
                request_sent_date: new Date().toISOString().slice(0, 10),
                sent_success: false,
              });
            if (errors) {
              return errors;
            }
            result.push(newRequest as ISendedRequest);
            return result;
          }
          // !Сделать API endpoint к функции пост отзыва и вызывать тут метов ПОСТ
          const { errors, data: newRequest } =
            await client.models.SendedRequest.create({
              amazon_order_id: element.amazon_order_id,
              purchase_date: element.purchase_date,
              request_sent_date: new Date().toISOString().slice(0, 10),
              sent_success: true,
            });
          if (errors) {
            return errors;
          }
          result.push(newRequest as ISendedRequest);
        }
      }
      return result;
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
