import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Databases from "./Databases";

export interface SkillsRef {
  sRef: any;
}

const SkillsPage: React.FC<SkillsRef> = ({ sRef }) => {
  return (
    <Flex
      id="skills"
      ref={sRef}
      direction="column"
      w="100%"
      pb="120px"
      bg="beach.200"
      align="center"
      zIndex="1"
      scrollMargin="60px"
    >
      <Heading
        py="40px"
        fontSize={{ base: "24pt", lg: "48pt" }}
        fontWeight="700"
        color="beach.800"
      >
        Skills
      </Heading>
      <Languages />
      <SimpleGrid
        w="75%"
        maxW="1200px"
        columns={{ sm: 1, lg: 2 }}
        spacing="40px"
        alignContent="center"
      >
        <Frameworks />
        <Databases />
      </SimpleGrid>
    </Flex>
  );
};

export default SkillsPage;
