import { Flex } from "@chakra-ui/react";
import Description from "./components/Description";
import ResumeGrid from "./components/ResumeGrid";
export default function About() {
  return (
    <Flex flexDir="column">
      <Description />
      <ResumeGrid />
    </Flex>
  );
}
