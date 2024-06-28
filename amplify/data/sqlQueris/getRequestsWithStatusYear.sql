SELECT 
    COALESCE(o.amazon_order_id, s.amazon_order_id) AS amazon_order_id,
    COALESCE(o.purchase_date::date, s.purchase_date::date) AS purchase_date,
    CASE 
        WHEN s.amazon_order_id IS NULL THEN 'PENDING'
        ELSE 'SENT'
    END AS amazon_order_status
FROM orders_ca_short o
LEFT JOIN sent_requests_ca s 
    ON o.amazon_order_id = s.amazon_order_id
    AND EXTRACT(YEAR FROM COALESCE(s.purchase_date, o.purchase_date::date)::date) = :year
    AND s.sent_success = TRUE 
    AND EXTRACT(YEAR FROM s.purchase_date::date) = :year
    order by amazon_order_status desc;