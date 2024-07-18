SELECT 
	avg_rating
	,rating_date 
FROM public.ratings_ca
where
	rating_date  = (select max(rating_date) from public.ratings_ca)