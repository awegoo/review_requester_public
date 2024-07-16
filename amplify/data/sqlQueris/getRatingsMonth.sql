SELECT avg_rating
FROM public.ratings_ca
WHERE EXTRACT(MONTH FROM rating_date) = :month AND EXTRACT(YEAR FROM rating_date) = :year;