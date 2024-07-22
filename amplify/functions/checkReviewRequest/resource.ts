import { defineFunction } from '@aws-amplify/backend';

export const checkReviewRequest = defineFunction({
    name:'checkReviewRequest',
    entry:'./handler.ts',
    environment:{
       
    }
})
