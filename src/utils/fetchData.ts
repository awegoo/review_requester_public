import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";

type IArgumentsTotalMonth = {
  year: number;
  month: number;
};

const client = generateClient<Schema>();

// Function for fetching all existing orders from database
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

// !Function for fetch count of sended request in costume year
export async function fetchTotalRequestYear(year: number) {
  const { data: requests, errors } =
    await client.queries.getTotalSendedRequestYear({ year: year });
  if (errors !== undefined) {
    return errors;
  }
  return requests;
}

// !Function for fetch count of sended requests in costume month and costume year
export async function fetchTotalRequestInMonth(args: IArgumentsTotalMonth) {
  const { data: requests, errors } =
    await client.queries.getTotalSendedRequestMonth({
      year: args.year,
      month: args.month,
    });
  if (errors !== undefined) {
    return errors;
  }
  return requests;
}
console.log(fetchTotalRequestInMonth({year: 2024, month: 7}));

// !Function for fetch requests with statuses
export async function fetchRequestsWithStatusesAll() {
  const { data: requests, errors } =
    await client.queries.getRequestsWithStatusesAll();
  if (errors !== undefined) {
    return errors;
  }
  return requests;
}

// !Function for fetch requests with status in costume month and costume year
export async function fetchRequestsWithStatusMonth(args: IArgumentsTotalMonth) {
  const { data: requests, errors } =
    await client.queries.getRequestsWithStatusMonth({
      year: args.year,
      month: args.month,
    });
  if (errors !== undefined) {
    return errors;
  }
  return requests;
}

// !Function for fetch requests with status in costume year
export async function fetchRequestsWithStatusYear(args: IArgumentsTotalMonth) {
  const { data: requests, errors } =
    await client.queries.getRequestsWithStatusYear({
      year: args.year,
    });

  if (errors !== undefined) {
    return errors;
  }
  return requests;
}

//! Function for fetching all necessary data for graphs
export async function fetchDataForGraphs() {
  const { data: graphdata, errors } =
    await client.queries.listCountRequestsAndCountOrders();
  if (errors !== undefined) {
    return errors;
  }
  return graphdata;
}

// Function for fetch all skiped requests
export async function getSkipedRequests() {
  const { data: skipedRequests, errors } =
    await client.queries.getTotalSkipRequests();
  if (errors) {
    return errors;
  }
  return skipedRequests;
}

// Function for fetch all skiped requests in month
export async function getSkipedRequestsMonth(args: IArgumentsTotalMonth) {
  const { data: skipedRequests, errors } =
    await client.queries.getSkipedRequestsMonth({
      month: args.month,
      year: args.year,
    });
  if (errors) {
    return errors;
  }
  return skipedRequests;
}

export async function getRatingMax(args: IArgumentsTotalMonth) {
  const { data: rating, errors } = await client.queries.getRatingMax();
  if (errors) {
    return errors;
  }
  return rating;
}
