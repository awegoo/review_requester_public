import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { schema as generatedSqlSchema } from "./schema.sql";

const sqlSchema = generatedSqlSchema
  .authorization((allow) => [allow.authenticated()])
  .renameModels(() => [
    ["orders_ca_short", "Orders"],
    ["sent_requests_ca", "SendedRequest"],
  ])
  .addToSchema({
    listAllOrders: a
      .query()
      .returns(a.ref("Orders").array())
      .handler(
        a.handler.inlineSql(`SELECT
  *
FROM orders_ca_short;`)
      ),
    listAllRequests: a
      .query()
      .returns(a.ref("SendedRequest").array())
      .handler(
        a.handler.inlineSql(`SELECT
      *
    FROM sent_requests_ca;`)
      ),
    getDateSortedOrders: a
      .query()
      .arguments({
        startDate: a.string(),
        endDate: a.string(),
      })
      .returns(a.ref("Orders").array())
      .handler(
        a.handler.inlineSql(`SELECT *
      FROM orders_ca_short
      WHERE last_updated_date::date BETWEEN :startDate::date AND :endDate::date
      ORDER BY last_updated_date DESC;`)
//       .returns(a.ref("Requests").array())
//       .handler(
//         a.handler.inlineSql(`SELECT
//   *
// FROM sent_requests_ca;`)
      ),
  });

export type Schema = ClientSchema<typeof sqlSchema>;

export const data = defineData({
  schema: sqlSchema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
