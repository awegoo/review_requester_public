import { Handler } from "aws-lambda";

interface ISendedRequest {
  amazon_order_id: string;
  purchase_date: string;
  request_sent_date?: Date;
  sent_success: boolean;
}

// !Разбить функцию на две отдельные
export const handler: Handler = async (event) => {
  const sp_api_host = import.meta.env.VITE_SP_API_HOST;
  const { reqHeaders, orders } = event;
  let result: ISendedRequest[] = [];
  try {
    if (Array.isArray(orders) && orders !== null) {
      for (const element of orders) {
        const url_get = `${sp_api_host}/solicitations/v1/orders/${element.amazon_order_id}?marketplaceIds=A2EUQ1WTGCTBG2`;
        const response = await fetch(url_get, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            "x-amz-access-token": reqHeaders["x-amz-access-token"],
          }),
        });
        if (!response.ok) {
          throw new Error(`Order does not exist: ${response.status}`);
        }
        const content = await response.json();
        if (content._links.actions.length === 0) {
          const requestObject = {
            amazon_order_id: element.amazon_order_id as string,
            purchase_date: element.last_updated_date as string,
            sent_success: false,
          };
          result.push(requestObject);
          event = result;
          return { event, result };
        }

        const requestObject = {
          amazon_order_id: element.amazon_order_id as string,
          purchase_date: element.last_updated_date as string,
          request_sent_date: new Date(),
          sent_success: true,
        };
        result.push(requestObject);
        event = result;
      }
      return { event, result };
    }
  } catch (error: any) {
    throw new Error(`Checker of solicitation: ${error.message}`);
  }
};
