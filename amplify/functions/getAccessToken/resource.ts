import { defineFunction } from '@aws-amplify/backend';

export const getAccessToken = defineFunction({
    name:'getAccessToken',
    entry:'./handler.ts',
    // ! for dev
    environment:{
        REFRESH_TOKEN: 'Atzr|IwEBIM6pfjjXGEPDhe0Y23Bo0tmLzTsxj3H829DchYPesoM9dea3d7IUUUAjLgqJRY_dmDvlEEw8YHr-gbsCQi7zE-lvSbAtPhdjD5Ph4rLa_rIZHGPobdWTcFM-WiHH8gYtcOfh_N1lDShAJoJ5MVrJjPx6F8nCL9Ez5-Y3RlO0Whps_MnUVt6oajMI_PV4E0U9SbUDyoN50M7S6IuqLrsD4K5Jfmyc-YAaUcD37j99_o99lZGROHS8fF3QTshig06q7y9Wm5m0fcBBc87cLXOSOZf4HBD8wEzlkc7Om9I9Hh_GvW8AvSCfZa7hBy38s7zZKeMbjDS-pcM0T-_2ehKsJUVN', //import.meta.env.VITE_LWA_REFRESH_TOKEN,
        LWA_APP_ID: 'amzn1.application-oa2-client.153a3f456f2543fcbbe724ea21baa1c9', //import.meta.env.VITE_LWA_APP_ID,
        LWA_CLIENT_SECRET: "amzn1.oa2-cs.v1.a23507f4cad48378cba3d1be18d3da4079ca6f9104094624af519f8f1c92af75", //import.meta.env.VITE_LWA_CLIENT_SECRET,
        BASE_URL: 'https://api.amazon.com/auth/o2/token' //import.meta.env.VITE_BASE_URL,
    }
})