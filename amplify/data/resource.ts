import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { schema as generatedSqlSchema } from "./schema.sql";

const sqlSchema = generatedSqlSchema
  .authorization((allow) => [allow.authenticated()])
  .renameModels(() => [["orders_ca_short", "Orders"], ["sent_requests_ca", "Requests"]])
  .addToSchema({
    listItems: a
      .query()
      .returns(a.ref("Requests").array())
      .handler(
        a.handler.inlineSql(`SELECT
  *
FROM sent_requests_ca;`)
      ),
  });

export type Schema = ClientSchema<typeof sqlSchema>;

export const data = defineData({
  schema: sqlSchema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
