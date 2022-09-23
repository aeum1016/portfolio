import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export interface SkillComponents {
  skill: string;
  projects: string[];
}

const Skill: React.FC<SkillComponents> = (skill) => {
  return (
    <Flex direction="column" align="flex-start" color="beach.800">
      <Text
        fontWeight="600"
        fontSize={{ base: "14pt", md: "16pt", lg: "20pt" }}
        color="beach.800"
      >
        {skill.skill}
      </Text>
      <Text fontWeight="600" fontSize={{ base: "12pt", lg: "14pt" }} pl="12px">
        Projects:
      </Text>
      <Flex pl="24px" cursor="pointer">
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

export default Skill;
