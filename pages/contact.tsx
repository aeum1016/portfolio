import { Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ContactPage from "../components/Pages/Contact";
import HomePage from "../components/Pages/Home";
import ProjectsPage from "../components/Pages/Projects";

const Home = () => {
  return (
    <Flex direction="column">
      <NavBar />
      <ContactPage />
    </Flex>
  );
};

export default Home;
