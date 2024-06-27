import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { schema as generatedSqlSchema } from "./schema.sql";


const sqlSchema = generatedSqlSchema
  .authorization((allow) => [allow.authenticated()])
  .renameModels(() => [
    ["orders_ca_short", "Orders"],
    ["sent_requests_ca", "SentRequest"], //changed SendedRequest to SentRequest
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
      .returns(a.ref("SentRequest").array())
      .handler(
        a.handler.inlineSql(`SELECT
      *
    FROM sent_requests_ca;`)
      ),
    listCountRequestsAndCountOrders: a
      .query()
      .returns(a.ref("CountRequestsAndCountOrders").array()) //a.ref("SentRequest").array()
      .handler(
        a.handler.inlineSql(`select
	tbl_cnt_purchased_orders.*
	,coalesce(tbl_sent_requests.count_sent_requests, 0) as count_success_sent_requests
from
	(
		select distinct
			cast(purchase_date as date) as purchase_date
			,count(distinct amazon_order_id) as count_purchased_orders
		from public.orders_ca_short
		group by
			purchase_date
	) as tbl_cnt_purchased_orders
left join
	(
		select 
			purchase_date
			,count(amazon_order_id) as count_sent_requests
		from public.sent_requests_ca src 
		where
			src.sent_success = true 
		group by
			purchase_date
	) as tbl_sent_requests
on
	cast(tbl_cnt_purchased_orders.purchase_date as date) = tbl_sent_requests.purchase_date;`
    )),
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
      ),
    // Defines a custom type that matches the response shape of the query
    CountRequestsAndCountOrders: a.customType({
      purchase_date: a.date(),
      count_purchased_orders: a.integer(),
      count_success_sent_requests: a.integer(),
    })   
  });

export type Schema = ClientSchema<typeof sqlSchema>;

export const data = defineData({
  schema: sqlSchema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
