import { defineFunction } from "@aws-amplify/backend";
    
export const fetchDataFromDB = defineFunction({
  name: "fetchDataFromDB",
  entry: " ./handler.ts"
});