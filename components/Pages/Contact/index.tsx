import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
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
          fontSize={{ base: "9vw", md: "69.12px" }}
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
