import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { schema as generatedSqlSchema } from './schema.sql';

// Add a global authorization rule
const sqlSchema = generatedSqlSchema.authorization(allow => allow.authenticated("userPools"))
// .setRelationships((models) => [
//   models.orders_ca_short.relationships({
//     reviews: a.hasOne("reviews_data_ca", ["amazon_order_id", "asin", "sku"]), //primary keys
//   }),
//   models.reviews_data_ca.relationships({
//     orders: a.belongsTo("orders_ca_short", ["amazon_order_id", "asin", "sku"])
//   })
// ])
// .setAuthorization((models) => [
// Model-level authorization rules
  // models.orders_ca_short //.authorization((allow) => [allow.guest()]),
  // models.reviews_data_ca //.authorization((allow) => [allow.guest()])//allow.publicApiKey(), allow.guest()
// Field-level authorization rules
  // models.orders_ca_short.fields.amazon_order_id.authorization(allow => [allow.publicApiKey(), allow.guest()]),
  // models.orders_ca_short.fields.asin.authorization(allow => [allow.publicApiKey(), allow.guest()])
// ])

const combinedSchema = a.combine([sqlSchema]);

export type Schema = ClientSchema<typeof combinedSchema>;

export const data = defineData({
  schema: combinedSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  }
});