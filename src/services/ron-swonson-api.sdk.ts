import axios from "axios";

const ronSwansonApiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

export enum ApiErrors {
  PARAMETER_ERROR = "PARAMETER_ERROR",
  NETWORK_ERROR = "NETWORK_ERROR",
}

export const getRonSwonsonQuotes = (url: string = ronSwansonApiUrl) => async (
  numberofQuotes: number = 10
): Promise<string[]> => {
  if (numberofQuotes < 1) {
    throw new Error(ApiErrors.PARAMETER_ERROR);
  }
  const requestUrl = `${ronSwansonApiUrl}/${numberofQuotes}`;
  try {
    const { data: quotes } = await axios.get(requestUrl);

    return quotes as string[];
  } catch (ex) {
    // Should probably handle different network errors but the next layer doesnt care
    throw new Error(ApiErrors.NETWORK_ERROR);
  }
};
