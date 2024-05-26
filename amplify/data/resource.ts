import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { schema as generatedSqlSchema } from './schema.sql';

// Add a global authorization rule
const sqlSchema = generatedSqlSchema.authorization(allow => allow.guest())
// .renameModels(() => [
//   //⌄⌄⌄⌄⌄ existing model name based on table name
//   ['reviews_data_ca', 'reviews_data_ca']
//   //        ^^^^^^ renamed data model name
// ])
.setRelationships((models) => [
  models.orders_ca_short.relationships({
    reviews: a.hasOne("reviews_data_ca", ["amazon_order_id", "asin", "sku"]), //primary keys
  }),
  models.reviews_data_ca.relationships({
    orders: a.belongsTo("orders_ca_short", ["amazon_order_id", "asin", "sku"])
  })
])
.setAuthorization((models) => [
// Model-level authorization rules
  models.orders_ca_short.authorization((allow) => [allow.guest()]),
  models.reviews_data_ca.authorization((allow) => [allow.guest()])//allow.publicApiKey(), allow.guest()
// Field-level authorization rules
  // models.orders_ca_short.fields.amazon_order_id.authorization(allow => [allow.publicApiKey(), allow.guest()]),
  // models.orders_ca_short.fields.asin.authorization(allow => [allow.publicApiKey(), allow.guest()])
])
// .addToSchema({
//   listEventsWithDecodedLatLong: a.query()
//     // reference custom types added to the schema
//     .returns(a.ref("EventWithDecodedCoord").array())
//     .handler(a.handler.inlineSql(
//         `SELECT
//           id,
//           name,
//           address,
//           ST_X(geom) AS longitude,
//           ST_Y(geom) AS latitude
//         FROM locations;`
//     ))
//     .authorization(allow => [allow.guest()]),
//     // Define custom types to provide end-to-end typed results
//     // for custom queries / mutations
//     EventWithDecodedCoord: a.customType({
//       id: a.integer(),
//       name: a.string(),
//       address: a.string(),
//       longitude: a.float(),
//       latitude: a.float(),
//     })
// })


// Relational database sources can coexist with DynamoDB tables managed by Amplify.
// const schema = a.schema({
//   Todo: a.model({
//     content: a.string(),
//   }).authorization(allow => [allow.guest()])
// });

// Use the a.combine() operator to stitch together the models backed by DynamoDB
// and the models backed by Postgres or MySQL databases.
const combinedSchema = a.combine([sqlSchema]);

// Don't forget to update your client types to take into account the types from
// both schemas.
export type Schema = ClientSchema<typeof combinedSchema>;

export const data = defineData({
  // Update the data definition to use the combined schema, instead of just
  // your DynamoDB-backed schema
  schema: combinedSchema
});