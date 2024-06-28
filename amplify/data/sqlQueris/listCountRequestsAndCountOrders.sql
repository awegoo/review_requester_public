select
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
	cast(tbl_cnt_purchased_orders.purchase_date as date) = tbl_sent_requests.purchase_date;