import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";
import { Handler } from 'aws-lambda';

const client = generateClient<Schema>();

export const getAllReviews: Handler = async (event, context) => {
    const { data: items, errors } = await client.queries.listItems();
    if (errors) {
        return errors;
    }
    return items;
  };
  

// // Function for fetching all existing reviews from database
// export async function getAllReviews() {
//   const { data: items, errors } = await client.queries.listItems();
//   if (errors) {
//     return errors;
//   }
//   return items;
// }