SELECT 
    COALESCE(o.amazon_order_id, s.amazon_order_id) AS amazon_order_id,
    CASE 
        WHEN s.amazon_order_id IS NULL THEN 'PENDING'
        ELSE 'SENT'
    END AS amazon_order_status,
     o.product_name,
     o.quantity,
    COALESCE(o.purchase_date::date, s.purchase_date::date) AS purchase_date
FROM orders_ca_short o
LEFT JOIN sent_requests_ca s 
    ON o.amazon_order_id = s.amazon_order_id
    AND EXTRACT(YEAR FROM COALESCE(s.purchase_date, o.purchase_date::date)::date) = :year and EXTRACT(MONTH FROM COALESCE(s.purchase_date, o.purchase_date::date)::date) = :month
    AND s.sent_success = TRUE 
    WHERE 
    (EXTRACT(YEAR FROM COALESCE(s.purchase_date::date, o.purchase_date::date)::date) = :year
    AND EXTRACT(MONTH FROM COALESCE(s.purchase_date::date, o.purchase_date::date)::date) = :month)
    order by amazon_order_status desc; 