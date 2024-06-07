import { Handler } from "aws-lambda";
import { env } from "$amplify/env/getAccessToken";

const baseAuthUrl = import.meta.env.VITE_BASE_URL as string;
const body = {
  grant_type: "refresh_token",
  refresh_token: import.meta.env.VITE_LWA_REFRESH_TOKEN as string,
  client_id: import.meta.env.VITE_LWA_APP_ID as string,
  client_secret: import.meta.env.VITE_LWA_CLIENT_SECRET as string,
};

export const handler: Handler = async (event): Promise<any> => {
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
    const reQheaders = {
      "Content-Type": "application/json",
      "x-amz-access-token": accessToken,
    };
    event = {reQheaders:reQheaders}
    return {reQheaders, event};
  } catch (error: unknown | Error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching access token:", ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
      return error;
    }
  }
};
