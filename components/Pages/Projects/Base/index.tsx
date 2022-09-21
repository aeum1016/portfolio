import {
  Flex,
  Spacer,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Link,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import NextLink from "next/link";

export interface ProjectComponents {
  photoURL: string;
  title: string;
  cat: string;
  startDate: string;
  endDate: string;
  desc: JSX.Element;
  side: JSX.Element;
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
      h="400px"
      w="100%"
      maxW="600px"
      bg="white"
      boxShadow="2xl"
      borderRadius="4px"
      whileHover={{ scale: "1.03", transition: "linear 0.3s" }}
      cursor="pointer"
      onClick={onOpen}
    >
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="outside"
        size="6xl"
        isCentered
      >
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
            <Text fontSize="12pt" fontWeight="600" pb="10px">
              {project.startDate} - {project.endDate}
            </Text>
            <Flex direction="row" align="center">
              <Image
                src={project.photoURL}
                borderRadius="2px"
                borderColor="beach.400"
                w="60%"
                objectFit="cover"
              />
              <Flex direction="column" align="flex-end">
                {project.side}
              </Flex>
            </Flex>
            <Flex w="60%">{project.desc}</Flex>
          </Flex>
        </ModalContent>
      </Modal>
      <Box
        w="100%"
        h="280px"
        backgroundImage={project.photoURL}
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
