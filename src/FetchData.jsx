import { useEffect, useState } from "react";
// import {Schema} from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

const client = generateClient();

function FetchData() {
    const [reviews_data, setReviews] = useState([]);

    // useEffect(() => {
    //     client.models.test_reviews.observeQuery().subscribe({
    //       next: (data) => setReviews([...data.items]),
    //     });
    //   }, []);

  // Data client
    const fetchDataFunc = async () => {
    // const { data: reviews, errors } = await client.models.test_reviews.list();
    const { data: reviews, errors } = await client.models.test_reviews.get({review_id: '1',}); //success
    setReviews(reviews);
    // console.log(errors);
    // console.log(reviews);
  };

  useEffect(() => {
    fetchDataFunc();
  }, []);

//   console.log(reviews_data)
  return (
    <main>
      <h1>My data</h1>
      <p>{reviews_data.review_id.toString()}, {reviews_data.review_text.toString()}, {reviews_data.review_stars.toString()}</p>
      {/* <ul>
        {reviews_data.map(({ review_id, review_text, review_stars }) => (
          <li key={review_id}>{review_text}, {review_stars}</li>
        ))}
      </ul> */}
    </main>
  );
}

export default FetchData;
