import { defineFunction } from '@aws-amplify/backend';

export const checkReviewRequest = defineFunction({
    name:'checkReviewRequest',
    entry:'./handler.ts',
    environment:{
        // SP_API_HOST: "",
        // STRING_CONNECTION: "",
    }
})
