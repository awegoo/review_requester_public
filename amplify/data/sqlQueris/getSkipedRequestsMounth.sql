SELECT COUNT(amazon_order_id) AS requests_count
FROM sent_requests_ca
WHERE sent_success = FALSE
AND EXTRACT(MONTH FROM request_sent_date) = :month AND EXTRACT(YEAR FROM request_sent_date) = :year;