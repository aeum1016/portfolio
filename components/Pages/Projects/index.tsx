import { Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import DSMProject from "./Projects/DSM";
import FFProject from "./Projects/FF";
import PortfolioProject from "./Projects/Portfolio";
import QK65Project from "./Projects/QK65";
import UpliftProject from "./Projects/Uplift";

export interface ProjectRef {
  pRef: any;
}

const ProjectsPage: React.FC<ProjectRef> = ({ pRef }) => {
  return (
    <Flex
      id="projects"
      ref={pRef}
      direction="column"
      w="100%"
      pb="120px"
      bg="beach.400"
      align="center"
      zIndex="2"
      scrollMargin="60px"
    >
      <Heading
        py="40px"
        fontSize={{ base: "24pt", lg: "48pt" }}
        fontWeight="700"
        color="beach.800"
      >
        Projects
      </Heading>
      <SimpleGrid
        w="70%"
        maxW="1200px"
        columns={{ sm: 1, lg: 2 }}
        spacing="40px"
        alignContent="center"
      >
        <PortfolioProject />
        <QK65Project />
        <FFProject />
        <DSMProject />
        <UpliftProject />
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectsPage;
