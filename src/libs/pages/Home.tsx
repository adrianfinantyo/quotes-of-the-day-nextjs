import {
  Flex,
  Button,
  Heading,
  Link as ChakraLink,
  Spacer,
  Text,
  Box,
  HStack,
  Icon,
  useColorMode,
  useColorModeValue,
  Show,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Hide,
  Img,
  MenuDivider,
} from "@chakra-ui/react";
import { quoteType } from "../types/quote";
import styles from "@/styles/Home.module.css";
import { IoSunny, IoMoon, IoShareSocial } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getRandomQuote } from "@/libs/utils/getQuotes";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  const [quoteData, setQuoteData] = useState<quoteType>({ quote: "", author: "" });

  useEffect(() => {
    handleRandomQuote();
  }, []);

  const handleRandomQuote = useCallback(() => {
    setQuoteData(getRandomQuote());
  }, []);

  const handleShareQuote = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: "QuotesOfTheDay",
        text: `${quoteData.quote} - ${quoteData.author}`,
        url: "https://af-qotd.vercel.app/",
      });
    } else {
      navigator.clipboard.writeText(`${quoteData.quote} - ${quoteData.author}`);
    }
  }, [quoteData]);

  const baseFontSize = quoteData?.quote.length > 100 ? 2 : 3;
  const { toggleColorMode } = useColorMode();

  return (
    <Box minH="100vh" pos="relative">
      <Head>
        {quoteData.quote !== "" && (
          <>
            <title>QotD | {quoteData.quote}</title>
            <meta name="description" content={`${quoteData.author} said that ${quoteData.quote}`} />
          </>
        )}
      </Head>
      <Flex as="nav" pos="absolute" py="2rem" alignItems="center" w="100%" top={0} gap="3rem">
        <Flex alignItems="center" gap="0.5rem">
          <Img src="/favicon.ico" />
          <Text as={Link} href="/" fontWeight="bold">
            QuotesOfTheDay
          </Text>
        </Flex>
        <Show above="md">
          <Spacer />
          <ChakraLink href="https://kc.adrianfinantyo.com/docs/qotd">Docs</ChakraLink>
          <HStack>
            <Button onClick={handleRandomQuote}>Go random</Button>
            <Button onClick={handleShareQuote} rightIcon={<Icon as={IoShareSocial} />}>
              Share this quote
            </Button>
            <Button p={0} onClick={toggleColorMode} colorScheme="blue">
              <Icon as={useColorModeValue(IoMoon, IoSunny)} />
            </Button>
          </HStack>
        </Show>
        <Hide above="md">
          <Spacer />
          <Menu autoSelect>
            <MenuButton as={Button} p={0}>
              <Icon as={BsThreeDotsVertical} />
            </MenuButton>
            <MenuList>
              <MenuItem as={Button} onClick={handleRandomQuote}>
                Go random
              </MenuItem>
              <MenuItem as={Button} onClick={handleShareQuote} rightIcon={<Icon as={IoShareSocial} />}>
                Share this quote
              </MenuItem>
              <MenuItem as={Button}>
                <Link href="https://kc.adrianfinantyo.com/docs/qotd">Docs</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                as={Button}
                p={0}
                onClick={toggleColorMode}
                rightIcon={<Icon as={useColorModeValue(IoMoon, IoSunny)} />}
              >
                Toggle theme
              </MenuItem>
            </MenuList>
          </Menu>
        </Hide>
      </Flex>
      <Flex pos="absolute" top="50%" w="100%" transform="translateY(-50%)" flexDir="column" alignItems="center">
        <Heading
          className={styles.quote}
          textAlign="center"
          fontSize={{ base: `${baseFontSize * 0.8}rem`, md: `${baseFontSize * 1.2}rem`, xl: `${baseFontSize * 2}rem` }}
          py="1rem"
        >
          {quoteData?.quote}
        </Heading>
        <Heading className={styles.author} textAlign="center" fontSize={{ base: "lg", md: "xl", xl: "2xl" }} py="1rem">
          - {quoteData?.author} -
        </Heading>
      </Flex>
      <Text w="100%" as="footer" pos="absolute" bottom={0} py="2rem" textAlign="center" fontWeight="bold">
        Created with ❤️ by <ChakraLink href="https://adrianfinantyo.com">Adrian Finantyo</ChakraLink>
      </Text>
    </Box>
  );
};

export default Home;
