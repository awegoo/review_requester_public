import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

// Function for fetching all existing reviews from database
export async function getAllReviews() {
  const { data: items, errors } = await client.queries.listItems();
  if (errors) {
    return errors;
  }
  return items;
}

// Function for fetching single review from database by id
export async function getSingleReview(id: string) {
  const { data: review, errors } = await client.models.Requests.get({
    amazon_order_id: id,
  });
  if (errors) {
    return errors;
  }
  return review;
}
