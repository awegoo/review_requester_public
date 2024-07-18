import { defineFunction } from "@aws-amplify/backend";

export const getRatings = defineFunction({
  name: "getRatings",
  entry: "./handler.ts",
  environment: {
    URL: import.meta.env.VITE_URL,
    SELLER_ID:  import.meta.env.VITE_SELLER_ID,
    STRING_CONNECTION: import.meta.env.VITE_CONNECTION_STRING,
  },
});
