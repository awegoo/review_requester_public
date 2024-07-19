import { Handler } from "aws-lambda";
import { load } from "cheerio";
import { Client } from "pg";
import { addRating } from "./sqlQuerys";
import { env } from "$amplify/env/getRatings";

interface IRate {
  seller_id: string;
  seller_name: string;
  avg_rating: string;
  rating_date: Date | string;
}

const client = new Client({
  connectionString: env.STRING_CONNECTION, //import.meta.env.STRING_CONNECTION, //env.STRING_CONNECTION,
  ssl: {
    rejectUnauthorized: false,
  },
});

// const client = new Client({
//   connectionString: import.meta.env.STRING_CONNECTION,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// }); - for development environment

export const handler: Handler = async (event) => {
  let isConnected = false;
  //   const url = import.meta.env.VITE_URL;
  const url = env.URL;

  try {
    if (!isConnected) {
      await client.connect();
      isConnected = true;
    }

    // Fetch html document from url
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from url: ${url}`);
    }
    const data = await res.text();

    // Loading html document to the dom formatt
    const $ = load(data);

    const ratingObject: IRate = {
      seller_id: env.SELLER_ID,
      //   seller_id: import.meta.env.VITE_SELLER_ID as string - for development environment,
      seller_name: "",
      avg_rating: "",
      rating_date: new Date(),
    };

    // Grap dom element by queryselector
    $("#effective-timeperiod-rating-year-description").each((i, element) => {
      const nodeElement = $(element);
      const value = nodeElement.text();
      ratingObject.avg_rating = value;
    });

    // Grap dom element by queryselector
    $("#seller-name").each((i, element) => {
      const nodeElement = $(element);
      const value = nodeElement.text();
      ratingObject.seller_name = value;
    });

    if (
      ratingObject.avg_rating.length !== 0 &&
      ratingObject.seller_name.length !== 0
    ) {
      // Saving data to the data base
      const db = await client.query(addRating, [
        ratingObject.seller_id,
        ratingObject.seller_name,
        ratingObject.avg_rating,
        ratingObject.rating_date,
      ]);
      return "Scrapping rating successfuly saved to the data base";
    }
    return "Cant scrapping url";
  } catch (error: any) {
    if (error instanceof Error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: `getRating function: ${error.message}`,
        }),
      };
    }
  } finally {
    await client.end();
    isConnected = false;
  }
};
