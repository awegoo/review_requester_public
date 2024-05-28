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
    "test_reviews": a.model({
        review_id: a.string().required(),
        review_text: a.string(),
        review_stars: a.integer()
    }).identifier([
        "review_id"
    ])
});
