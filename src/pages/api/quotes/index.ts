import type { NextApiRequest, NextApiResponse } from "next";

import quoteData from "@/libs/const/data/quotes.json";
import { quoteType } from "@/libs/types/quote";

const quote: quoteType[] = quoteData.quotes;

export const getRandomQuote = () => {
  const randomQuote = quote[Math.floor(Math.random() * quote.length)];
  return randomQuote;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const resData = {
    status: "success",
    quote_length: quote.length,
    quote,
  };

  res.status(200).json(resData);
}
