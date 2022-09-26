import { Flex, List, ListItem, UnorderedList } from "@chakra-ui/react";

import ProjectBase from "../Base";

const FFDesc: JSX.Element = (
  <List fontSize="14px">
    <ListItem>
      Fast Feedback is a site by Lee Robinson, for which he created and released
      a follow-along tutorial series on YouTube.
    </ListItem>
    <ListItem>
      I was recommended the series as an introduction into Nextjs and used it as
      my gateway into the framework.
    </ListItem>
  </List>
);

const FFFeatures: JSX.Element = (
  <Flex direction="column" fontSize="14px">
    Features:
    <UnorderedList spacing="1">
      <ListItem>
        Users are able to upload their site and receive feedback in real time.
      </ListItem>
      <ListItem>
        Used the stale-while-revalidate feature of Nextjs for high performance
        client side data fetching.
      </ListItem>
      <ListItem>
        User data and user authentication is handled using Firebase and some of
        the providers that Firebase supplies.
      </ListItem>
    </UnorderedList>
  </Flex>
);

const FFTech: JSX.Element = (
  <List>
    <ListItem>Framework: Nextjs</ListItem>
    <ListItem>Component Library: Chakra UI</ListItem>
    <ListItem>Data Base: Firebase</ListItem>
    <ListItem>Deployed Using: Vercel</ListItem>
  </List>
);

const FFProject = () => {
  return (
    <ProjectBase
      photoURLs={["/FFLanding.JPG", "/FFHome.JPG", "/FFFeedback.JPG"]}
      title="Fast Feedback"
      cat="software"
      startDate="05/2022"
      endDate="07/2022"
      desc={FFDesc}
      features={FFFeatures}
      githubURL="https://github.com/aeum1016/fastfeedback"
      projectURL="https://fastfeedback-aeum1016.vercel.app/"
    />
  );
};

export default FFProject;
