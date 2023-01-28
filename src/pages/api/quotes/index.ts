import { getAllQuotes } from "@/libs/utils/getQuotes";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const resData = {
    status: "success",
    content: {
      quotes: getAllQuotes(),
    },
  };

  res.status(200).json(resData);
}
