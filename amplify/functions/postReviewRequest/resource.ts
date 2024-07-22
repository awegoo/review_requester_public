import { defineFunction } from '@aws-amplify/backend';

export const sendReviewRequest = defineFunction({
    name:'sendReviewRequest',
    entry:'./handler.ts',
    environment:{
       
    }
})
