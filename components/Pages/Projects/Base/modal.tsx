import {
  Box,
  Flex,
  Image,
  Link,
  ModalContent,
  ModalOverlay,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import NextLink from "next/link";

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

const ProjectModal: React.FC<ProjectComponents> = (project) => {
  const MotionIcon = motion(FontAwesomeIcon);

  return (
    <>
      <ModalOverlay />
      <ModalContent
        color="beach.50"
        bg="beach.600"
        boxShadow="dark-lg"
        p="20px"
        w="60%"
      >
        <Flex direction="column">
          <Flex fontSize="20pt" fontWeight="700">
            {project.title}
            <Spacer />
            <Flex gap="4">
              {project.githubURL ? (
                <NextLink href={project.githubURL} passHref>
                  <Link isExternal>
                    <MotionIcon
                      icon={faGithub}
                      whileHover={{ scale: 1.1 }}
                      color="#CCD5D7"
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
                      color="#CCD5D7"
                    />
                  </Link>
                </NextLink>
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
          <Text fontSize="12pt" fontWeight="600">
            {project.startDate} - {project.endDate}
          </Text>
          <Flex direction="row" align="center">
            <Box
              fontSize="10pt"
              fontWeight="600"
              color="beach.900"
              bg="beach.200"
              px="4px"
              mt="4px"
              borderRadius="10px"
            >
              {project.cat}
            </Box>
            <Spacer />
          </Flex>
          <Flex direction="column" align="center">
            <Image
              src={project.photoURLs[0]}
              borderRadius="2px"
              borderColor="beach.400"
              w="80%"
              objectFit="cover"
            />
            <Flex direction="row" align="center" pt="18px">
              {project.desc}
              {project.features}
            </Flex>
          </Flex>
        </Flex>
      </ModalContent>
    </>
  );
};

export default ProjectModal;
