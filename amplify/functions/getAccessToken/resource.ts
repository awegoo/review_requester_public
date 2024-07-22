import { defineFunction } from '@aws-amplify/backend';

export const getAccessToken = defineFunction({
    name:'getAccessToken',
    entry:'./handler.ts',
    // ! for dev
    environment:{
        // REFRESH_TOKEN: '', 
        // LWA_APP_ID: '', 
        // LWA_CLIENT_SECRET: "",
        // BASE_URL: ''
    }
})