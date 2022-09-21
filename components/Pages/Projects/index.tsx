import { Flex, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import DSMProject from "./Projects/DSM";

const ProjectsPage = () => {
  return (
    <Flex
      id="projects"
      direction="column"
      w="100%"
      pb="80px"
      bg="beach.400"
      align="center"
      zIndex="1"
      scrollMargin="80px"
    >
      <Heading
        py="40px"
        fontSize={{ base: "24pt", md: "32pt", lg: "48pt" }}
        fontWeight="700"
        color="beach.800"
      >
        Projects
      </Heading>
      <SimpleGrid w="75%" maxW="1400px" minChildWidth="420px" spacing="80px">
        <DSMProject />
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectsPage;
