import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import NextLink from "next/link";

const HomePage = () => {
  const MotionIcon = motion(FontAwesomeIcon);

  return (
      <Flex
        direction="column"
        w="100%"
        h="100vh"
        pt="60px"
        px="6vw"
        bgImage="/AJE01367.JPG"
        bgPosition="center"
        bgSize="cover"
        position="sticky"
        top="0px"
        transform="translateZ(-100px)"
      >
        <Heading
          color="beach.800"
          fontSize={{ base: "9vw", md: "69.12px" }}
          fontWeight="700"
          pt="6vh"
        >
          Alex Eum
        </Heading>
        <Heading
          color="beach.800"
          fontSize={{ base: "3vw", md: "23.04px" }}
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
  );
};

export default HomePage;
