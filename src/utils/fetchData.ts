import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";
import { fetchAuthSession } from "aws-amplify/auth";
import { handler as getNotifications } from "../../amplify/functions/checkReviewRequest/handler";

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

//! Function for fetch sended requests
export async function fetchDatafromApi() {
  const { data: requests, errors } = await client.queries.listAllRequests();
  if (errors !== undefined) {
    return errors;
  }
  return requests;
}
