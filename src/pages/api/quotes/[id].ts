// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import quoteData from "@/libs/const/data/quotes.json";

type quoteType = {
  quote: string;
  author: string;
};

const quotes: quoteType[] = quoteData.quotes;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query;
  const quote: quoteType = quotes[Number(id)];

  res.status(200).json(quote);
}
