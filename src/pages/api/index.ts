// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const resData = {
    status: "success",
    data: "Hello World",
  };

  res.status(200).json(resData);
};

export default handler;
