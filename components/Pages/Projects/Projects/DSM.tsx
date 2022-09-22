import { Flex, List, ListItem, UnorderedList } from "@chakra-ui/react";

import ProjectBase from "../Base";

const DSMDesc: JSX.Element = (
  <List fontSize="14px">
    <ListItem>
      DoSomeMath.com is my first web development project that didn&apos;t follow
      a tutorial.
    </ListItem>
    <ListItem>
      The website&apos;s design mimics a popular typing test website
      (monkeytype.com), and the main function of the site is for users to take
      timed arithmetic tests.
    </ListItem>
    <ListItem>
      Currently, there are approximately 1500 completed tests.
    </ListItem>
  </List>
);

const DSMFeatures: JSX.Element = (
  <Flex direction="column" fontSize="14px">
    Features:
    <UnorderedList spacing="1">
      <ListItem>
        Users can create accounts using email, allowing them to track their
        previous attempts.
      </ListItem>
      <ListItem>
        A realtime leaderboard shows users how they stack up compared to other
        users in a variety of common settings.
      </ListItem>
      <ListItem>
        A profile page visualizes a user&apos;s previous attempts in both a
        chart and in a table, which can be sorted based on setting or score.
      </ListItem>
    </UnorderedList>
  </Flex>
);

const DSMTech: JSX.Element = (
  <List>
    <ListItem>Tech Stack: MERN</ListItem>
    <ListItem>Component Library: Material UI</ListItem>
    <ListItem>Data Base: MongoDB</ListItem>
    <ListItem>Deployed Using: Heroku & Netlify</ListItem>
  </List>
);

const DSMProject = () => {
  return (
    <ProjectBase
      photoURLs={[
        "/dosomemath.JPG",
        "/dosomemath_ldrbrd.JPG",
        "/dosomemath_user.JPG",
      ]}
      title="DoSomeMath"
      cat="software"
      startDate="03/2022"
      endDate="04/2022"
      desc={DSMDesc}
      features={DSMFeatures}
      githubURL="https://github.com/aeum1016/fast_math_site_client"
      projectURL="https://dosomemath.com"
    />
  );
};

export default DSMProject;
