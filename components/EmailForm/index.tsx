import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Flex, Input, Textarea, useToast } from "@chakra-ui/react";

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Message Sent",
            description: "Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Message Failed",
            description: "Please try again",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );

    e.currentTarget.reset();
  };

  return (
    <Flex direction="column" w="100%" align="center" py="40px">
      <Flex
        direction="column"
        color="island.700"
        bgColor="island.200"
        p="24px"
        borderRadius="4px"
        w={{ base: "90%", md: "75%", lg: "70%", xl: "65%" }}
        boxShadow="dark-lg"
      >
        <form ref={form} onSubmit={sendEmail}>
          <Input
            placeholder="Name"
            variant="filled"
            type="text"
            name="from_name"
            w="40%"
            maxW="300px"
            mr="20px"
            required
          />
          <Input
            placeholder="Email"
            variant="filled"
            type="email"
            name="email"
            w="40%"
            maxW="500px"
            required
          />
          <Textarea
            placeholder="Message"
            variant="filled"
            name="message"
            my="20px"
            h="20vh"
            required
          />
          <Button type="submit" value="Send">
            Send
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default EmailForm;
