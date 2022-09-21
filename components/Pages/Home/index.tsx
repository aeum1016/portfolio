import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import NextLink from "next/link";

const HomePage = () => {
  const MotionIcon = motion(FontAwesomeIcon);

  return (
    <Flex pt="80px" w="100%" position="sticky" top="0px">
      <Flex
        direction="column"
        w="100%"
        h="35vw"
        px="6vw"
        pt="3vw"
        bgImage="/AJE01367.JPG"
        bgPosition="center"
        bgSize="cover"
      >
        <Heading
          color="beach.800"
          fontSize={{ base: "8vw", xl: "102.4px" }}
          fontWeight="700"
        >
          Alex Eum
        </Heading>
        <Heading
          color="beach.800"
          fontSize={{ base: "3vw", xl: "38.4px" }}
          fontWeight="700"
        >
          Student @ University of Florida
        </Heading>
        <Flex gap="4" mt="10px">
          <NextLink href="https://github.com/aeum1016" passHref>
            <Link isExternal>
              <MotionIcon
                icon={faGithub}
                color="beach.800"
                whileHover={{ scale: 1.2 }}
                size="2x"
              />
            </Link>
          </NextLink>
          <NextLink href="https://linkedin.com/in/aeum1016" passHref>
            <Link isExternal>
              <MotionIcon
                icon={faLinkedin}
                color="beach.800"
                whileHover={{ scale: 1.2 }}
                size="2x"
              />
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePage;
