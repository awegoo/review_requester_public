import { Handler } from "aws-lambda";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../data/resource";
import { getDates } from "../../utils/getDates";

const client = generateClient<Schema>();

export const handler: Handler = async (event) => {
  let result: any[] = [];
  const { reqHeaders } = event;
  const { startDateString, endDateString } = await getDates();
  const { data: orders, errors } = await client.queries.getDateSortedOrders({
    startDate: startDateString,
    endDate: endDateString,
  });
  if (errors) {
    return errors;
  }
  if (Array.isArray(orders) && orders !== null) {
    for (const element of orders) {
      if (element !== null) {
        const requestObject = {
          amazon_order_id: element!.amazon_order_id as string, //added ! for element, because of error
          purchase_date: element!.last_updated_date as string,
        };
        result.push(requestObject);
        event = {
          reqHeaders: reqHeaders,
          orders: result,
        };
        return result;
      }
    }
  } else {
    if (orders !== null) {
      result.push(orders);
      return result;
    }
  }
};
