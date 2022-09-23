import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import SkillBar from "./SkillBar";

const Languages = () => {
  return (
    <Flex w="75%" maxW="1200px" direction="column" align="center">
      <Heading
        py="2vh"
        fontSize={{ base: "16pt", md: "18pt", lg: "36pt" }}
        fontWeight="700"
        color="beach.800"
        alignSelf="flex-start"
      >
        Languages
      </Heading>
      <SimpleGrid
        w="95%"
        columns={{ sm: 1, md: 2 }}
        spacing="40px"
        alignContent="center"
      >
        <SkillBar
          skill="C++"
          value={80}
          projects={["Competitive Programming"]}
        />
        <SkillBar
          skill="JavaScript"
          value={80}
          projects={["Portfolio", "DoSomeMath"]}
        />
        <SkillBar skill="Java" value={60} projects={["Uplift Robotics"]} />
      </SimpleGrid>
    </Flex>
  );
};

export default Languages;
