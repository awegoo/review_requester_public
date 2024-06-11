import { defineFunction } from '@aws-amplify/backend';

export const postSendedReviewToDataBase = defineFunction({
    name:'postSendedReviewToDataBase',
    entry:'./handler.ts',
})