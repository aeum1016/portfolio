import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/raleway/variable-full.css";
import "@fontsource/open-sans/variable-full.css";

import theme from "../themes/index";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
