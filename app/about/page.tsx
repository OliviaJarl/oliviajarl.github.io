import { Flex } from "@chakra-ui/react";
import Description from "./components/Description";
import ResumeGrid from "./components/ResumeGrid";
export default function About() {
  return (
    <Flex flexDir="column" padding={{ base: "10px", md: "30" }}>
      <Description />
      <ResumeGrid />
    </Flex>
  );
}
