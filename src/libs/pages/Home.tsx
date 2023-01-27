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
} from "@chakra-ui/react";
import { quoteType } from "../types/quote";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoSunny, IoMoon } from "react-icons/io5";

const Home = (props: { data: quoteType }) => {
  const baseFontSize = props.data.quote.length > 100 ? 2 : 3;
  const router = useRouter();
  const { toggleColorMode } = useColorMode();

  return (
    <Box minH="100vh">
      <Flex as="nav" pos="absolute" py="2rem" alignItems="center" w="100%" gap="3rem">
        <Text as={Link} href="/" fontWeight="bold">
          QuotesOfTheDay
        </Text>
        <Spacer />
        <Text as={Link} href="/docs">
          API Docs
        </Text>
        <HStack>
          <Button onClick={() => router.replace("/")} colorScheme="blue">
            Go random
          </Button>
          <Button p={0} onClick={toggleColorMode}>
            <Icon as={useColorModeValue(IoMoon, IoSunny)} />
          </Button>
        </HStack>
      </Flex>
      <Flex pos="absolute" top="50%" w="100%" transform="translateY(-50%)" flexDir="column">
        <Heading
          className={styles.quote}
          textAlign="center"
          fontSize={{ base: `${baseFontSize}rem`, md: `${baseFontSize * 2}rem` }}
          py="1rem"
        >
          {props.data.quote}
        </Heading>
        <Heading className={styles.author} textAlign="center" fontSize="2xl" py="1rem">
          - {props.data.author} -
        </Heading>
      </Flex>
      <Text w="100%" as="footer" pos="absolute" bottom={0} py="2rem" textAlign="center" fontWeight="bold">
        Created with ❤️ by <ChakraLink href="https://adrianfinantyo.com">Adrian Finantyo</ChakraLink>
      </Text>
    </Box>
  );
};

export default Home;
