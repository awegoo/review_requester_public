import { useEffect, useState } from "react";
// import {Schema} from "../amplify/data/resource";
import { generateClient, head } from "aws-amplify/data";
import { getAllReviews } from '../../../amplify/fetchDataFromDB/handler'

/**
 * @type {import('aws-amplify/data').Client<import('../../../amplify/data/resource').Schema>}
 */

const client = generateClient();

function FetchData() {

  const [reviews_data, setReviews] = useState([]);

  useEffect(() => {
    writeAllReviews()
  }, [])

  async function writeAllReviews(){
    const items = await getAllReviews();
    console.log(items);
    setReviews(items);
  };

  return(
    <main>
      <h1>My data</h1>
    <ul>
    {reviews_data.map((reviews, review_id) => 
      (<li key={review_id}>{review_id} {reviews.review_text} {reviews.review_stars}</li>))}
    </ul>
    </main>
  );
}

export default FetchData;
