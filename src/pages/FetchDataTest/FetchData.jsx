// import { useEffect, useState } from "react";
// // import {Schema} from "../amplify/data/resource";
// import { generateClient, head } from "aws-amplify/data";
// // import {handler} from '../../../amplify/functions/checkReviewRequest/handler';
// // import {fetchDatafromApi} from '../../utils/fetchData';
// import { fetchDataForGraphs } from '../../utils/fetchData';

// // /**
// //  * @type {import('aws-amplify/data').Client<import('../../../amplify/data/resource').Schema>}
// //  */

// // const client = generateClient();

// function FetchData() {

//   const [reviews_data, setReviews] = useState([]);

//   useEffect(() => {
//     writeAllReviews()
//   }, [])

//   //test
//   async function writeAllReviews(){
//     const items = await fetchDataForGraphs();
//     console.log(items);
//     setReviews(items);
//   };

//   return(
//     <main>
//       <h1>My data</h1>
//     <ul>
//     {reviews_data.map((reviews, review_id) => 
//       (<li key={review_id}>{review_id} {reviews.purchase_date} {reviews.count_purchased_orders} {reviews.count_success_sent_requests}</li>))}
//     </ul>
//     </main>
//   );
// }

// export default FetchData;
