import { defineFunction } from '@aws-amplify/backend';

export const getSortedOrders = defineFunction({
    name:'getSortedOrders',
    entry:'./handler.ts',
})