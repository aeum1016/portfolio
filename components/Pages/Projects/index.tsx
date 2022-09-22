import { Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import DSMProject from "./Projects/DSM";
import PortfolioProject from "./Projects/Portfolio";
import QK65Project from "./Projects/QK65";
import UpliftProject from "./Projects/Uplift";

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
        fontSize={{ base: "18pt", md: "24pt", lg: "48pt" }}
        fontWeight="700"
        color="beach.800"
      >
        Projects
      </Heading>
      <SimpleGrid
        w="70%"
        maxW="1200px"
        minChildWidth={{ base: "75vw", lg: "30vw" }}
        spacing="40px"
        alignContent="center"
      >
        <PortfolioProject />
        <QK65Project />
        <DSMProject />
        <UpliftProject />
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectsPage;
