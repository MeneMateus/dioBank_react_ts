import { Box } from "@chakra-ui/react";
import React from "react";

export const Card = ({ children }: any) => {
  return (
    <Box
      minHeight="100vh"
      padding="25px"
      bgGradient="linear(to-t, blue.200, purple.500)"
      w="550px"
    >
      {children}
    </Box>
  );
};
