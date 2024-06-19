import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

// Function for fetching all existing reviews from database
export async function getAllOrders() {
  const { data: items, errors } = await client.queries.listAllOrders();
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

//! Function for fetching sended requests
export async function fetchDatafromApi() {
  const { data: requests, errors } = await client.queries.listAllRequests();
  if (errors !== undefined) {
    return errors;
  }
  return requests;
}
