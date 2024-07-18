import { defineFunction } from "@aws-amplify/backend";

export const getRatings = defineFunction({
  name: "getRatings",
  entry: "./handler.ts",
  environment: {
    URL: "https://www.amazon.ca/sp?marketplaceID=A2EUQ1WTGCTBG2&seller=A1UN6Z7VPU7RJG", //import.meta.env.VITE_URL,
    SELLER_ID: "A1UN6Z7VPU7RJG",//import.meta.env.VITE_SELLER_ID,
    STRING_CONNECTION: "postgres://postgres:X8763590y@review-requester-test.cy87iea7j6qh.ca-central-1.rds.amazonaws.com/postgres" //import.meta.env.VITE_CONNECTION_STRING,
  },
});
