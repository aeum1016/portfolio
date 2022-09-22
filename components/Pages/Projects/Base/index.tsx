import { Flex, Text, Modal, useDisclosure, Link, Box } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import NextLink from "next/link";
import ProjectModal from "./modal";

export interface ProjectComponents {
  photoURLs: string[];
  title: string;
  cat: string;
  startDate: string;
  endDate: string;
  desc: JSX.Element;
  features: JSX.Element;
  githubURL?: string;
  projectURL?: string;
}

const ProjectBase: React.FC<ProjectComponents> = (project) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MotionIcon = motion(FontAwesomeIcon);
  const MotionFlex = motion(Flex);

  return (
    <MotionFlex
      flexDirection="column"
      bg="white"
      boxShadow="2xl"
      borderRadius="4px"
      whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
      cursor="pointer"
      onClick={onOpen}
    >
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="outside"
        size="6xl"
      >
        <ProjectModal
          photoURLs={project.photoURLs}
          title={project.title}
          cat={project.cat}
          startDate={project.startDate}
          endDate={project.endDate}
          desc={project.desc}
          features={project.features}
          githubURL={project.githubURL}
          projectURL={project.projectURL}
        />
      </Modal>
      <Box
        w="100%"
        h="280px"
        backgroundImage={project.photoURLs[0]}
        backgroundPosition="center"
        backgroundSize="cover"
        borderTopRadius="4px"
      />
      <Flex direction="column" w="100%" align="flex-start" p="12px">
        <Box
          fontSize="10pt"
          fontWeight="600"
          color="beach.900"
          bg="beach.200"
          px="4px"
          borderRadius="10px"
        >
          {project.cat}
        </Box>
        <Text fontSize="20pt" fontWeight="600" color="beach.700">
          {project.title}
        </Text>
        <Text fontSize="12pt" fontWeight="700" color="beach.700">
          {project.startDate} - {project.endDate}
        </Text>
        <Flex gap="3">
          {project.githubURL ? (
            <NextLink href={project.githubURL} passHref>
              <Link isExternal>
                <MotionIcon
                  icon={faGithub}
                  whileHover={{ scale: 1.1 }}
                  color="beach.700"
                />
              </Link>
            </NextLink>
          ) : (
            <></>
          )}
          {project.projectURL ? (
            <NextLink href={project.projectURL} passHref>
              <Link isExternal>
                <MotionIcon
                  icon={faUpRightFromSquare}
                  whileHover={{ scale: 1.1 }}
                  color="beach.700"
                />
              </Link>
            </NextLink>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    </MotionFlex>
  );
};

export default ProjectBase;
