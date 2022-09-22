import { Link, Flex, Spacer, Button, Text } from "@chakra-ui/react";

import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useScrollPosition } from "../util/ScrollPosition";

const NavBar = () => {
  const route = useRouter();
  const scrollPosition = useScrollPosition();

  const [location, setLocation] = useState("home");

  useEffect(() => {
    if (route.asPath == "/contact") setLocation("contact");
    else if (scrollPosition > window.innerHeight / 2 + 100)
      setLocation("projects");
    else setLocation("home");
  }, [scrollPosition, route]);

  return (
    <Flex
      h="60px"
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
        <NextLink href="/#top">
          <Button
            bgColor={location == "home" ? "beach.100" : "transparent"}
            _hover={{ backgroundColor: "beach.200" }}
          >
            <Text>Home</Text>
          </Button>
        </NextLink>
        <NextLink href="/#projects">
          <Button
            bgColor={location == "projects" ? "beach.100" : "transparent"}
            _hover={{ backgroundColor: "beach.200" }}
          >
            <Text>Projects</Text>
          </Button>
        </NextLink>
        <NextLink href="/contact">
          <Button
            bgColor={location == "contact" ? "beach.100" : "transparent"}
            _hover={{ backgroundColor: "beach.200" }}
          >
            <Text>Contact</Text>
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default NavBar;
