import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Skill from "./Skill";

const Frameworks = () => {
  return (
    <Flex w="75%" maxW="1200px" direction="column" align="center">
      <Heading
        py="2vh"
        fontSize={{ base: "16pt", md: "18pt", lg: "36pt" }}
        fontWeight="700"
        color="beach.800"
        alignSelf="flex-start"
      >
        Frameworks
      </Heading>
      <SimpleGrid
        w="90%"
        columns={{ base: 2 }}
        spacing="40px"
        alignContent="center"
      >
        <Skill skill="Nextjs" projects={["Portfolio"]} />
        <Skill skill="Nodejs" projects={["DoSomeMath"]} />
      </SimpleGrid>
    </Flex>
  );
};

export default Frameworks;
