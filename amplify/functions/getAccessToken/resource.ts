import { defineFunction } from '@aws-amplify/backend';

export const getAccessToken = defineFunction({
    name:'getAccessToken',
    entry:'./handler.ts',
    // ! for dev
    environment:{
       
    }
})