import quoteData from "@/libs/const/data/quotes.json";
import { quoteType } from "@/libs/types/quote";

const quote: quoteType[] = quoteData.quotes;

export const getAllQuotes = () => quote;

export const getRandomQuote = () => {
  const randomQuote = quote[Math.floor(Math.random() * quote.length)];
  return randomQuote;
};

export const getQuoteById = (id: number) => {
  const quoteById = quote[id];
  return quoteById;
};
