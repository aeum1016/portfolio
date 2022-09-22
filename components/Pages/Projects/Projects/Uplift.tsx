import { Flex, Text, List, ListItem, UnorderedList } from "@chakra-ui/react";

import ProjectBase from "../Base/index";

const UpliftDesc: JSX.Element = (
  <List fontSize="14px">
    <ListItem>
      I founded FIRST Tech Challenge Team 18172 Uplift Robotics in my senior
      year of high school.
    </ListItem>
    <ListItem>
      I acted as one of two leaders on the team and spent the majority of my
      time managing the development of hardware and software for the robot.
    </ListItem>
    <ListItem>
      The team won the Inspire Award at the 2020 Florida State Competition, the
      highest award in FIRST Tech Challenge.
    </ListItem>
  </List>
);

const UpliftFeatures: JSX.Element = (
  <Flex direction="column" fontSize="14px">
    Accomplishments:
    <UnorderedList spacing="1">
      <ListItem>
        Introduced agile development using Jira to both the software and
        hardware teams on the team. Led the creation of a roadmap for both the
        software and hardware teams. Tasks were assigned weekly throughout the
        team and were modified to reflect previous accomplishments.
      </ListItem>
      <ListItem>
        Helped design 3 iterations of the team robot using PTC Creo. Personally
        designed 2 of 4 main modules of the robot. Also, helped create an
        encoder-based odometry system (requiring both hardware and software) to
        accurately track the location of the robot in 2D.
      </ListItem>
    </UnorderedList>
  </Flex>
);

const UpliftTech: JSX.Element = (
  <List>
    <ListItem>Language: Java</ListItem>
    <ListItem>Software: PTC Creo, Android Studio</ListItem>
  </List>
);

const UpliftProject = () => {
  return (
    <ProjectBase
      photoURLs={["/full_robot_v3_iso.png"]}
      title="Uplift Robotics"
      cat="other"
      startDate="08/2020"
      endDate="04/2021"
      desc={UpliftDesc}
      features={UpliftFeatures}
      githubURL="https://github.com/UpliftRobotics"
      projectURL="https://www.youtube.com/c/UpliftRobotics"
    />
  );
};

export default UpliftProject;
