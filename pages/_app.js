import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "inter-ui/inter.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
