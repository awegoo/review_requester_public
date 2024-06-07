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
        const result = await client.models.SendedRequest.create(element);
        dataArr.push(result);
      }
      return dataArr;
    }
    const result = await client.models.SendedRequest.create(sendedReview);
    return result;
  } catch (error) {
    throw new Error("Cannot save new sended Review tothe data base");
  }
};
