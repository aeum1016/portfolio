import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Skill from "./Skill";

const Databases = () => {
  return (
    <Flex w="75%" maxW="1200px" direction="column" align="center">
      <Heading
        py="2vh"
        fontSize={{ base: "16pt", md: "18pt", lg: "36pt" }}
        fontWeight="700"
        color="beach.800"
        alignSelf="flex-start"
      >
        Databases
      </Heading>
      <SimpleGrid
        w="90%"
        columns={{ base: 2 }}
        spacing="40px"
        alignContent="center"
      >
        <Skill skill="Firebase" projects={["Fast Feedback"]} />
        <Skill skill="MongoDB" projects={["DoSomeMath"]} />
      </SimpleGrid>
    </Flex>
  );
};

export default Databases;
