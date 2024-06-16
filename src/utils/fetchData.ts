import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";
import { fetchAuthSession } from "aws-amplify/auth";
import {handler as getNotifications} from '../../amplify/functions/checkReviewRequest/handler';

const client = generateClient<Schema>();

// Function for fetching all existing reviews from database
export async function getAllOrders() {
  const { data: items, errors } = await client.queries.listAllOrders();
  if (errors) {
    return errors;
  }
  return items;
}

// Function for fetching sorted orders by dates
export async function getSortedOrders() {
  const { startDateString, endDateString } = await getDates();
  const { data: items, errors } = await client.queries.getDateSortedOrders({
    startDate: startDateString,
    endDate: endDateString,
  });
  if (errors) {
    return errors;
  }
  return items;
}

// Function for fetching single request from database by id
export async function getSingleRequest(id: string) {
  const { data: review, errors } = await client.models.Orders.get({
    amazon_order_id: id,
    sku: "",
    asin: "",
  });
  if (errors) {
    return errors;
  }
  return review;
}

export async function getDates() {
  const currentDate = new Date();
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - 5);
  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 25);

  const startDateString = startDate.toISOString().slice(0, 10);
  const endDateString = endDate.toISOString().slice(0, 10);

  return { startDateString, endDateString };
}

export async function fetchDatafromApi() {
  const {data:requests, errors} = await client.queries.listAllRequests();
  // const session = await fetchAuthSession();
  // const token = session.tokens?.idToken;
  // const response = await fetch(
  //   "https://vzln9d92l5.execute-api.ca-central-1.amazonaws.com/prod/gettoken",
  //   {
  //     headers: {
  //       Authorization: `${token}`,
  //     },
  //   }
  // );
  // const data = await response.json();

  // const context = {
  //   functionName: 'localTestFunction',
  //   memoryLimitInMB: '128',
  //   invokedFunctionArn: 'arn:aws:lambda:local:1:function:localTestFunction',
  //   awsRequestId: 'localTestRequestId',
  //   logGroupName: '/aws/lambda/localTestFunction',
  //   logStreamName: 'localTestLogStream',
  //   getRemainingTimeInMillis: () => 30000,
  //   done: () => null,
  //   fail: () => null,
  //   succeed: () => null,
  // };

  // const callback = (error: any, result: any) => {
  //   if (error) {
  //     console.error('Callback error:', error);
  //   } else {
  //     console.log('Callback result:', result);
  //   }
  // };
  // const data = await getNotifications({token},context,callback)
  // console.log(data);
}
