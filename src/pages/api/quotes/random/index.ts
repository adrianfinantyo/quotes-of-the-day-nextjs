// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import quoteData from "@/libs/const/data/quotes.json";
import { quoteType } from "@/libs/types/quote";

const quote: quoteType[] = quoteData.quotes;

export const getRandomQuote = () => {
  const randomQuote = quote[Math.floor(Math.random() * quote.length)];
  return randomQuote;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { quote, author } = getRandomQuote();

  const resData = {
    status: "success",
    content: {
      author,
      author_slug: author.toLowerCase().replace(" ", "-"),
      quote,
      quote_length: quote.length,
    },
  };

  res.status(200).json(resData);
}
