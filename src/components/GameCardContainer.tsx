import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow={"hidden"} borderRadius={"10px"} width={"300px"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
