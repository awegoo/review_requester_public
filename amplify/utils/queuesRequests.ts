import { env } from "$amplify/env/sendReviewRequest";

interface IQueue {
  items: IItem[];
  addQueue: (item: IItem) => void;
  removeQueue: () => IItem;
  isEmpty: () => boolean;
  size: () => number;
}

interface IItem {
  id: string;
  resolve: (value: unknown) => void;
  reject: (value: any) => void;
}

// const sp_api_host = import.meta.env.VITE_SP_API_HOST;
const sp_api_host = "https://sellingpartnerapi-na.amazon.com" //env.SP_API_HOST;

export class Queue implements IQueue {
  items: IItem[];
  constructor() {
    this.items = [];
  }

  addQueue(item: IItem) {
    this.items.push(item);
  }

  removeQueue(): IItem {
    return this.items.shift() as IItem;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();
const maxCurrentRequest = 1;
let activeRequests = 0;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function processQueue(queue: IQueue, token: string) {
  while (!queue.isEmpty() && activeRequests < maxCurrentRequest) {
    const request = queue.removeQueue();
    const accessToken = token;
    activeRequests++;

    await delay(1000);
    const url_get = `${sp_api_host}/solicitations/v1/orders/${request.id}?marketplaceIds=A2EUQ1WTGCTBG2`;
    try {
      const response = await fetch(url_get, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "x-amz-access-token": accessToken,
        }),
      });
      const data = await response.json();
      request.resolve(data);
      if (!response.ok) {
        throw new Error("Cant fetch notidication from SP API");
      }
    } catch (error) {
      request.reject(error);
    } finally {
      activeRequests--;
    }
  }
}

export function addRequestToQueue(orderId: string, token: string) {
  return new Promise((resolve, reject) => {
    queue.addQueue({ id: orderId, resolve, reject });
    if (activeRequests < maxCurrentRequest) {
      processQueue(queue, token);
    }
  });
}
