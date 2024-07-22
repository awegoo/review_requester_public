import { defineFunction } from '@aws-amplify/backend';

export const sendReviewRequest = defineFunction({
    name:'sendReviewRequest',
    entry:'./handler.ts',
    environment:{
        // SP_API_HOST: "",
        // STRING_CONNECTION: ""
    }
})
