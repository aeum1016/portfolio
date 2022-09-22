import { Flex, ListItem, UnorderedList, List } from "@chakra-ui/react";

import ProjectBase from "../Base/index";

const QK65Desc: JSX.Element = (
  <List fontSize="14px">
    <ListItem key="1">
      I&apos;ve been watching content on mechanical keyboards for the last 3
      years and have been fiending to build my own keyboards ever since.
    </ListItem>
    <ListItem key="2">
      My first keyboard was a KBD67 with Boba U4 (silent) switches. And I also
      built another KBD67 as a gift for a friend.
    </ListItem>
    <ListItem key="3">
      This QK65 is my current main keyboard. However, I&apos;m also waiting for
      a Freebird TKL and ePBT BoW Hangul keycaps that I&apos;m planning to use
      as my daily driver.
    </ListItem>
  </List>
);

const QK65Features: JSX.Element = (
  <Flex direction="column" fontSize="14px">
    Specs:
    <UnorderedList spacing="1">
      <ListItem key="a">QK65 from QwertyKeys.</ListItem>
      <ListItem key="b">GMK Modern Dolch 2</ListItem>
      <ListItem key="c">Aluminum Plate</ListItem>
      <ListItem key="d">Boba U4T Switches</ListItem>
      <ListItem key="e">Artisan from B.O.B. Keycaps</ListItem>
    </UnorderedList>
  </Flex>
);

const QK65Project = () => {
  return (
    <ProjectBase
      photoURLs={["/AJE01977.jpg"]}
      title="QK65"
      cat="personal"
      startDate="06/2022"
      endDate="09/2022"
      desc={QK65Desc}
      features={QK65Features}
    />
  );
};

export default QK65Project;
