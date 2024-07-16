import { defineFunction } from '@aws-amplify/backend';

export const checkReviewRequest = defineFunction({
    name:'checkReviewRequest',
    entry:'./handler.ts',
    environment:{
        SP_API_HOST: "https://sellingpartnerapi-na.amazon.com", //import.meta.env.VITE_SP_API_HOST,
        STRING_CONNECTION: "postgres://postgres:X8763590y@review-requester-test.cy87iea7j6qh.ca-central-1.rds.amazonaws.com/postgres"//import.meta.env.VITE_CONNECTION_STRING,
    }
})