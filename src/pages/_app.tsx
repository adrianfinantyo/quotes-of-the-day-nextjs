import "@/styles/globals.css";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

const styles = {
  a: {
    color: "blue.500",
    _hover: {
      textDecoration: "underline",
    },
  },
};

const components = {
  Link: {
    baseStyle: {
      _hover: {
        color: "blue.500",
        textDecoration: "none",
      },
    },
  },
};

const theme = extendTheme({ styles, components });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>QuotesOfTheDay</title>
        <meta name="description" content="QuotesOfTheDay is a website that is used to genereate random quotes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.xl">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
