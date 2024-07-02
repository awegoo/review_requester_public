SELECT COUNT(amazon_order_id) AS requests_count
FROM sent_requests_ca
WHERE sent_success = FALSE;