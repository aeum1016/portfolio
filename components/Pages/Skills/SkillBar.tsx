import { Flex, List, ListItem, Progress, Spacer, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export interface SkillComponents {
  skill: string;
  value: number;
  projects: string[];
}

const SkillBar: React.FC<SkillComponents> = (skill) => {
  return (
    <Flex direction="column" align="flex-start" color="beach.800">
      <Text
        fontWeight="600"
        fontSize={{ base: "14pt", md: "16pt", lg: "20pt" }}
        color="beach.800"
      >
        {skill.skill}
      </Text>
      <Progress w="100%" colorScheme="beach" value={skill.value} />
      <Text fontWeight="600" fontSize={{ base: "12pt", lg: "14pt" }}>
        Projects:
      </Text>
      <Flex pl="12px" cursor="pointer">
        {skill.projects.map((project) => {
          if (skill.projects[skill.projects.length - 1] !== project)
            return (
              <NextLink href={"/#".concat(project)} key={project}>
                <Text>
                  {project.concat(" |")}
                  &nbsp;
                </Text>
              </NextLink>
            );
          else
            return (
              <NextLink href={"/#".concat(project)} key={project}>
                <Text>{project}&nbsp;</Text>
              </NextLink>
            );
        })}
      </Flex>
    </Flex>
  );
};

export default SkillBar;
