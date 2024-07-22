import { defineFunction } from "@aws-amplify/backend";

export const getRatings = defineFunction({
  name: "getRatings",
  entry: "./handler.ts",
  environment: {
   
  },
});
