import { Handler } from "aws-lambda";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../data/resource";

const client = generateClient<Schema>();

export const handler: Handler = async (event) => {
  const sendedReview = event;
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
      return dataArr;
    }
    const { errors, data: newRequest } =
      await client.models.SendedRequest.create({
        amazon_order_id: sendedReview.amazon_order_id,
        purchase_date: sendedReview.purchase_date,
        request_sent_date: sendedReview.request_sent_date,
        sent_success: sendedReview.sent_success,
      });
    return newRequest;
  } catch (error) {
    throw new Error("Cannot save new sended Review tothe data base");
  }
};
