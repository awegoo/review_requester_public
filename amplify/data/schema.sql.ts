/* eslint-disable */
/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import { a } from "@aws-amplify/data-schema";
import { configure } from "@aws-amplify/data-schema/internals";
import { secret } from "@aws-amplify/backend";

export const schema = configure({
    database: {
        identifier: "IDB0WLa1aLebyW0HvAs5JA",
        engine: "postgresql",
        connectionUri: secret("SQL_CONNECTION_STRING"),
        vpcConfig: {
            vpcId: "vpc-189bc370",
            securityGroupIds: [
                "sg-09c7cfc33586f0dea"
            ],
            subnetAvailabilityZones: [
                {
                    subnetId: "subnet-2383647c",
                    availabilityZone: "ca-central-1d"
                },
                {
                    subnetId: "subnet-4f831935",
                    availabilityZone: "ca-central-1b"
                },
                {
                    subnetId: "subnet-7fda9417",
                    availabilityZone: "ca-central-1a"
                }
            ]
        }
    }
}).schema({
    "orders_ca_short": a.model({
        amazon_order_id: a.string().required(),
        merchant_order_id: a.string(),
        purchase_date: a.string(),
        last_updated_date: a.string(),
        sku: a.string().required(),
        asin: a.string().required(),
        product_name: a.string(),
        order_status: a.string(),
        item_status: a.string(),
        quantity: a.integer(),
        fulfillment_channel: a.string(),
        sales_channel: a.string(),
        order_channel: a.string(),
        ship_service_level: a.string(),
        currency: a.string(),
        item_price: a.float(),
        item_tax: a.float(),
        shipping_price: a.float(),
        shipping_tax: a.float(),
        gift_wrap_price: a.float(),
        gift_wrap_tax: a.float(),
        item_promotion_discount: a.float(),
        ship_promotion_discount: a.float(),
        promotion_ids: a.string(),
        is_business_order: a.boolean(),
        purchase_order_number: a.integer(),
        price_designation: a.string(),
        partition_0: a.string(),
        partition_1: a.string()
    }).identifier([
        "amazon_order_id",
        "sku",
        "asin"
    ]),
    "ratings_ca": a.model({
        seller_id: a.string().required(),
        seller_name: a.string(),
        avg_rating: a.string(),
        rating_date: a.date().required()
    }).identifier([
        "rating_date",
        "seller_id"
    ]),
    "sent_requests_ca": a.model({
        amazon_order_id: a.string().required(),
        purchase_date: a.date(),
        request_sent_date: a.date(),
        sent_success: a.boolean()
    }).identifier([
        "amazon_order_id"
    ])
});
