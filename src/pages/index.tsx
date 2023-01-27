import Home from "@/libs/pages/Home";
import { GetStaticProps } from "next";
import { getRandomQuote } from "./api/quotes/random";

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const quote = getRandomQuote();

  return {
    props: {
      data: quote,
    },
  };
};
