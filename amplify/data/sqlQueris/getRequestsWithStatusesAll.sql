SELECT 
    COALESCE(o.amazon_order_id, s.amazon_order_id) AS amazon_order_id,
    CASE 
        WHEN s.amazon_order_id IS NULL THEN 'Pending'
        ELSE 'Sent'
    END AS amazon_order_status,
     o.product_name,
     o.quantity,
    COALESCE(o.purchase_date::date, s.purchase_date::date) AS purchase_date
FROM orders_ca_short o
LEFT JOIN sent_requests_ca s 
    ON o.amazon_order_id = s.amazon_order_id
    AND s.sent_success = TRUE 
    order by amazon_order_status desc; 