import { Handler } from "aws-lambda";
import { env } from "$amplify/env/getAccessToken";

// !For dev
// const baseAuthUrl = import.meta.env.VITE_BASE_URL as string;
// const body = {
//   grant_type: "refresh_token",
//   refresh_token: import.meta.env.VITE_LWA_REFRESH_TOKEN as string,
//   client_id: import.meta.env.VITE_LWA_APP_ID as string,
//   client_secret: import.meta.env.VITE_LWA_CLIENT_SECRET as string,
// };

export const handler: Handler = async (event): Promise<any> => {
  
  // !For dev
  // const baseAuthUrl = import.meta.env.VITE_BASE_URL as string;
  // const body = {
  //   grant_type: "refresh_token",
  //   refresh_token: import.meta.env.VITE_LWA_REFRESH_TOKEN as string,
  //   client_id: import.meta.env.VITE_LWA_APP_ID as string,
  //   client_secret: import.meta.env.VITE_LWA_CLIENT_SECRET as string,
  // };
  
  //AWS
  const baseAuthUrl = env.BASE_URL as string;
  const body = {
     grant_type: "refresh_token",
     refresh_token: env.REFRESH_TOKEN as string,
     client_id: env.LWA_APP_ID as string,
     client_secret: env.LWA_CLIENT_SECRET as string,
   };
  
  try {
    const response = await fetch(baseAuthUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      cache: "no-cache",
      body: new URLSearchParams(body),
    });

    if (!response.ok) {
      throw new Error("Can't fetch token");
    }

    const data = await response.json();
    const accessToken = data.access_token;
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({
        message: "Token fetched successfully",
        accessToken: accessToken,
      }),
    };
  } catch (error: unknown | Error) {
    if (error instanceof Error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: `Error fetching access token: ${error.message}`,
        }),
      };
    } else {
      console.error("Unexpected error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Unexpected error",
        }),
      };
    }
  }
};
