import { Flex, Text, List, ListItem, UnorderedList } from "@chakra-ui/react";

import ProjectBase from "../Base/index";

const PortfolioDesc: JSX.Element = (
  <List fontSize="14px">
    <ListItem>This is where you currently are!</ListItem>
    <ListItem>
      This website is actually my third attempt at creating a portfolio site. I
      wasn&apos;t quite happy with the design of the first two so I&apos;ve been
      working hard to build a site that I&apos;m satisfied with.
    </ListItem>
  </List>
);

const PortfolioFeatures: JSX.Element = (
  <Flex direction="column" fontSize="14px">
    Features:
    <UnorderedList spacing="1">
      <ListItem>
        The home page features a picture that I took of Busan&apos;s Haeundae
        Beach, the most popular in Korea. Additionally, visitors can find links
        to my GitHub and LinkedIn.
      </ListItem>
      <ListItem>
        The projects page is where visitors can find my recent software
        projects, along with information on some of my hobbies and other
        projects.
      </ListItem>
      <ListItem>
        The contact page showcases a view that I had on Geoje Island. Visitors
        can find my contact information, and are able to provide their contact
        information and send me an email that I implemented using the emailjs
        library.
      </ListItem>
    </UnorderedList>
  </Flex>
);

const PortfolioTech: JSX.Element = (
  <List>
    <ListItem>Framework: Nextjs</ListItem>
    <ListItem>Component Library: ChakraUI</ListItem>
    <ListItem>Additional Libraries: EmailJS</ListItem>
    <ListItem>Deployed Using: Vercel</ListItem>
  </List>
);

const PortfolioProject = () => {
  return (
    <ProjectBase
      photoURLs={["/Portfolio.JPG", "/Portfolio_projects.JPG"]}
      title="Portfolio"
      cat="software"
      startDate="09/2022"
      endDate="09/2022"
      desc={PortfolioDesc}
      features={PortfolioFeatures}
      githubURL="https://github.com/aeum1016/portfolio"
      projectURL="https://alexjeum.com"
    />
  );
};

export default PortfolioProject;
