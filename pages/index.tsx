import { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import HomePage from "../components/Pages/Home";
import ProjectsPage from "../components/Pages/Projects";
import SkillsPage from "../components/Pages/Skills";

const Home = () => {
  const project = useRef();
  const skills = useRef();

  return (
    <Flex direction="column">
      <NavBar projectRef={project} skillsRef={skills} />
      <HomePage />
      <ProjectsPage pRef={project} />
      <SkillsPage sRef={skills} />
    </Flex>
  );
};

export default Home;
