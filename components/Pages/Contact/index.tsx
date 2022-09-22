import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import NextLink from "next/link";
import EmailForm from "../../EmailForm";

const ContactPage = () => {
  const MotionIcon = motion(FontAwesomeIcon);

  return (
    <Flex w="100%" position="sticky" top="0px">
      <Flex
        direction="column"
        w="100%"
        h="100vh"
        pt="60px"
        px="6vw"
        bgImage="/AJE01683.JPG"
        bgPosition="center"
        bgSize="cover"
      >
        <Heading
          color="beach.900"
          fontSize={{ base: "6vw", xl: "76.8px" }}
          fontWeight="700"
          pt="6vh"
        >
          Contact Me!
        </Heading>
        <EmailForm />
      </Flex>
    </Flex>
  );
};

export default ContactPage;
