// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRandomQuote } from "@/libs/utils/getQuotes";

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
