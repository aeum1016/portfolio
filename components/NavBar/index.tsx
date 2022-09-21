import { Link, Flex, Spacer, Button, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";
import NextLink from "next/link";

const NavBar = () => {
  const MotionIcon = motion(FontAwesomeIcon);

  return (
    <Flex
      h="80px"
      w="100%"
      px="20px"
      color="beach.800"
      bg="white"
      boxShadow="2xl"
      align="center"
      position="fixed"
      zIndex="5"
    >
      <Spacer />
      <Flex gap="1" align="center">
        <NextLink href="#top">
          <Button variant="ghost" _hover={{ backgroundColor: "beach.100" }}>
            <Text>Home</Text>
          </Button>
        </NextLink>
        <NextLink href="#projects">
          <Button variant="solid" _hover={{ backgroundColor: "beach.100" }}>
            <Text>Projects</Text>
          </Button>
        </NextLink>
        <NextLink href="/skills">
          <Button variant="ghost" _hover={{ backgroundColor: "beach.100" }}>
            <Text>Contact</Text>
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default NavBar;
