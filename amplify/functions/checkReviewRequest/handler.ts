import { Handler } from "aws-lambda";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../data/resource";
import { getDates } from "../../utils/getDates";
import { get } from "aws-amplify/api";

const client = generateClient<Schema>();

interface ISendedRequest {
  amazon_order_id: string;
  last_updated_date: string;
  sent_success: boolean;
}

// ! Необходимо привести функцию в порядок, для использования на фронте и клауде

// export const handler: Handler = async (event) => {
//   const sp_api_host = import.meta.env.VITE_SP_API_HOST;
//   const { headers } = event.arguments;
//   const { startDateString, endDateString } = await getDates();

//   try {
//     const { data: orders, errors } = await client.queries.getDateSortedOrders({
//       startDate: startDateString,
//       endDate: endDateString,
//     });
//     if (errors || orders === null) {
//       return errors;
//     } else {
//       let result: ISendedRequest[] = [];
//       orders.forEach(async (element) => {
//         if (element !== null) {
//           const url_get = `${sp_api_host}/solicitations/v1/orders/${element.amazon_order_id}?marketplaceIds=A2EUQ1WTGCTBG2`;
//           const response = await fetch(url_get, headers);

//           if (!response.ok) {
//             throw new Error(`Order does not exist: ${response.status}`);
//           }
//           const content = await response.json();
//           if (content._links.actions.length === 0) {
//             throw new Error("No solicitation actions are available");
//           }
//           const requestObject = {
//             amazon_order_id: element.amazon_order_id,
//             purchase_date: element.purchase_date as string,
//           };
//           result.push(requestObject);
//         }
//       });
//       return result;
//     }
//   } catch (error: any) {
//     throw new Error(`Checker of solicitation: ${error.message}`);
//   }
// };

//! В аргументы передается amazon_id

export const handler: Handler = async (event) => {
  const sp_api_host = import.meta.env.VITE_SP_API_HOST;
  const { reqHeaders, amazon_order_id, last_updated_date } = event;
  let result: ISendedRequest[] = [];
  try {
    const url_get = `${sp_api_host}/solicitations/v1/orders/${amazon_order_id}?marketplaceIds=A2EUQ1WTGCTBG2`;
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
        amazon_order_id: amazon_order_id as string,
        last_updated_date: last_updated_date as string,
        sent_success: false,
      };
      result.push(requestObject);
      return result;
    }
    const requestObject = {
      amazon_order_id: amazon_order_id as string,
      last_updated_date: last_updated_date as string,
      sent_success: true,
    };
    result.push(requestObject);
    return result;
  } catch (error: any) {
    throw new Error(`Checker of solicitation: ${error.message}`);
  }
};
