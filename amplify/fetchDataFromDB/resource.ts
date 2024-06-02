import { defineFunction } from "@aws-amplify/backend";
    
export const myFirstFunction = defineFunction({
  name: "fetchDataFromDB",
  entry: " ./handler.ts"
});