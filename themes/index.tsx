import { extendTheme } from "@chakra-ui/react";
import { foundations } from "./foundations";
import styles from "./styles";

const theme = {
  ...foundations,
  styles: styles,
};

export default extendTheme(theme);
