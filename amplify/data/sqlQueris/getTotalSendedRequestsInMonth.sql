-- SELECT COUNT(amazon_order_id) AS requests_count
-- FROM sent_requests_ca
-- WHERE sent_success = TRUE 
--   AND EXTRACT(MONTH FROM request_sent_date) = :month AND EXTRACT(YEAR FROM request_sent_date) = :year;

 SELECT
 	COUNT(distinct ocs.amazon_order_id) AS requests_count
 FROM
 	public.orders_ca_short ocs
 LEFT JOIN
 	public.sent_requests_ca src
ON ocs.amazon_order_id = src.amazon_order_id  
WHERE
	src.sent_success = TRUE 
  	AND EXTRACT(MONTH FROM ocs.purchase_date::date) = :month AND EXTRACT(YEAR FROM ocs.purchase_date::date) = :year;