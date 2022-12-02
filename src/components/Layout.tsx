import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};
