import { defineFunction } from '@aws-amplify/backend';

export const getAccessToken = defineFunction({
    name:'getAccessToken',
    entry:'./handler.ts',
    // ! for dev
    environment:{
        REFRESH_TOKEN: import.meta.env.VITE_LWA_REFRESH_TOKEN,
        LWA_APP_ID: import.meta.env.VITE_LWA_APP_ID,
        LWA_CLIENT_SECRET: import.meta.env.VITE_LWA_CLIENT_SECRET,
        BASE_URL:import.meta.env.VITE_BASE_URL,
    }
})