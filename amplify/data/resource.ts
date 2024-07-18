import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { schema as generatedSqlSchema } from "./schema.sql";

const sqlSchema = generatedSqlSchema
  .authorization((allow) => [allow.authenticated()])
  .renameModels(() => [
    ["orders_ca_short", "Orders"],
    ["sent_requests_ca", "SentRequest"],
  ])
  .addToSchema({
    listAllOrders: a
      .query()
      .returns(a.ref("Orders").array())
      .handler(a.handler.sqlReference("./sqlQueris/listAllOrders.sql")),
    listAllRequests: a
      .query()
      .returns(a.ref("SentRequest").array())
      .handler(a.handler.sqlReference("./sqlQueris/listAllRequests.sql")),
    listCountRequestsAndCountOrders: a
      .query()
      .returns(a.ref("CountRequestsAndCountOrders").array())
      .handler(
        a.handler.sqlReference(
          "./sqlQueris/listCountRequestsAndCountOrders.sql"
        )
      ),
    getTotalSendedRequestYear: a
      .query()
      .arguments({ year: a.integer() })
      .returns(a.ref("TotalRequestsYearandMonth").array())
      .handler(
        a.handler.sqlReference("./sqlQueris/getTotalSendedRequestsInYear.sql")
      ),
    getTotalSendedRequestMonth: a
      .query()
      .arguments({ month: a.integer(), year: a.integer() })
      .returns(a.ref("TotalRequestsYearandMonth").array())
      .handler(
        a.handler.sqlReference("./sqlQueris/getTotalSendedRequestsInMonth.sql")
      ),
    getTotalSkipRequests: a
      .query()
      .returns(a.ref("TotalRequestsYearandMonth").array())
      .handler(a.handler.sqlReference("./sqlQueris/getTotalSkipRequests.sql")),
    getSkipedRequestsMonth: a
      .query()
      .arguments({ month: a.integer(), year: a.integer() })
      .returns(a.ref("TotalRequestsYearandMonth").array())
      .handler(
        a.handler.sqlReference("./sqlQueris/getSkipedRequestsMounth.sql")
      ),
    getRatingMax: a
      .query()
      .returns(a.ref("RatingMax").array())
      .handler(a.handler.sqlReference("./sqlQueris/getRatingsMax.sql")),
    getRequestsWithStatusesAll: a
      .query()
      .returns(a.ref("RequestsWithStatusesAll").array())
      .handler(
        a.handler.sqlReference("./sqlQueris/getRequestsWithStatusesAll.sql")
      ),
    getRequestsWithStatusYear: a
      .query()
      .arguments({ year: a.integer() })
      .returns(a.json().array())
      .handler(
        a.handler.sqlReference("./sqlQueris/getRequestsWithStatusYear.sql")
      ),
    getRequestsWithStatusMonth: a
      .query()
      .arguments({ year: a.integer(), month: a.integer() })
      .returns(a.ref("RequestsWithStatus").array())
      .handler(
        a.handler.sqlReference("./sqlQueris/getRequestsWithStatusMonth.sql")
      ),
    RequestsWithStatus: a.customType({
      amazon_order_id: a.string(),
      amazon_order_status: a.string(),
      product_name: a.string(),
      quantity: a.integer(),
      purchase_date: a.date(),
    }),
    RequestsWithStatusesAll: a.customType({
      amazon_order_id: a.string(),
      amazon_order_status: a.string(),
      product_name: a.string(),
      quantity: a.integer(),
      purchase_date: a.date(),
    }),
    CountRequestsAndCountOrders: a.customType({
      purchase_date: a.date(),
      count_purchased_orders: a.integer(),
      count_success_sent_requests: a.integer(),
    }),
    TotalRequestsYearandMonth: a.customType({
      requests_count: a.integer(),
    }),
    RatingMax: a.customType({
      avg_rating: a.string(),
      rating_date: a.date(),
    }),
  });

export type Schema = ClientSchema<typeof sqlSchema>;

export const data = defineData({
  schema: sqlSchema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
