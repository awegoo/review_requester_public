import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { schema as generatedSqlSchema } from "./schema.sql";

const sqlSchema = generatedSqlSchema
  .authorization((allow) => [allow.authenticated()])
  .renameModels(() => [["test_reviews", "Reviews"]])
  .addToSchema({
    listItems: a
      .query()
      .returns(a.ref("Reviews").array())
      .handler(
        a.handler.inlineSql(`SELECT
  *
FROM test_reviews;`)
      ),
  });

export type Schema = ClientSchema<typeof sqlSchema>;

export const data = defineData({
  schema: sqlSchema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
