import { Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import HomePage from "../components/Pages/Home";
import ProjectsPage from "../components/Pages/Projects";

const Home = () => {
  return (
    <Flex direction="column">
      <NavBar />
      <HomePage />
      <ProjectsPage />
    </Flex>
  );
};

export default Home;
