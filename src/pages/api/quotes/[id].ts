// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getQuoteById } from "@/libs/utils/getQuotes";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query;
  const { quote, author } = getQuoteById(Number(id));

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
