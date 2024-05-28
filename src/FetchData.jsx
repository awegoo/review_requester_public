import { useEffect, useState } from "react";
// import {Schema} from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

const client = generateClient({
    authMode: 'userPool',
  });

function FetchData() {
    // const [reviews_data, setReviews] = useState<Array<Schema["Reviews"]["type"]>>([]);
    const [reviews_data, setReviews] = useState([]);

    // useEffect(() => {
    //     client.models.reviews_data_ca.observeQuery().subscribe({
    //       next: (data) => setReviews([...data.items]),
    //     });
    //   }, []);

  // Data client
    const fetchDataFunc = async () => {
    const { data: reviews, errors } = await client.models.reviews_data_ca.list();
    setReviews(reviews)
    console.log(errors)
    console.log(reviews)
  };

  useEffect(() => {
    fetchDataFunc();
  }, []);

  console.log(reviews_data)
  return (
    <main>
      <h1>My data</h1>
      <ul>
        {reviews_data.map(({ amazon_order_id }) => (
          <li>{amazon_order_id}</li>
        ))}
      </ul>
    </main>
  );
}

export default FetchData;
