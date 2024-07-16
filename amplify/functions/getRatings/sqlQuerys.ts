export const addRating = `
INSERT INTO public.ratings_ca (seller_id, seller_name, avg_rating, rating_date)
VALUES ($1, $2, $3, $4)
RETURNING *;
`;