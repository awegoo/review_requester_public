import { useEffect, useState } from "react";
// import {Schema} from "../amplify/data/resource";
import { generateClient, head } from "aws-amplify/data";
// import {handler} from '../../../amplify/functions/checkReviewRequest/handler';
import {fetchDatafromApi} from '../../utils/fetchData';

/**
 * @type {import('aws-amplify/data').Client<import('../../../amplify/data/resource').Schema>}
 */

const client = generateClient();

function FetchData() {

  const [reviews_data, setReviews] = useState([]);

  useEffect(() => {
    fetchDatafromApi()
  }, [])

  //test
  // async function writeAllReviews(){
  //   const items = await handler();
  //   console.log(items);
  //   setReviews(items);
  // };

  return(
    <main>
      <h1>My data</h1>
    <ul>
    {/* {reviews_data.map((reviews, review_id) => 
      (<li key={review_id}>{review_id} {reviews.amazon_oreder_id} {reviews.purchase_date}</li>))} */}
    </ul>
    </main>
  );
}

export default FetchData;
