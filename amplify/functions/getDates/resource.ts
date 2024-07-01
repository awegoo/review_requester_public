import { defineFunction } from '@aws-amplify/backend';

export const getDates = defineFunction({
    name:'getDates',
    entry:'./handler.ts',
})