import { Handler } from "aws-lambda";

export const handler: Handler = async (event) => {
  const currentDate = new Date();
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - 5);
  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 25);

  const startDateString = startDate.toISOString().slice(0, 10);
  const endDateString = endDate.toISOString().slice(0, 10);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({
      startDateString: startDateString,
      endDateString: endDateString,
    }),
  };
};
