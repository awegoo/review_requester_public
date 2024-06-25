export const addQuery = `
INSERT INTO sent_requests_ca (amazon_order_id, purchase_date, request_sent_date, sent_success)
VALUES ($1, $2, $3, $4)
RETURNING *;
`;

export const sortOrdersQuery = `
SELECT *
    FROM orders_ca_short
    WHERE now()::date BETWEEN last_updated_date::date + interval ‘5’ day AND last_updated_date::date + interval ‘30’ day
    ORDER BY last_updated_date DESC
    LIMIT 50;
`;
