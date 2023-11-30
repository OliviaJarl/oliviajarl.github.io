import { Divider, Flex, VStack, Text } from "@chakra-ui/react";
const ProjectInfo = () => {
  return (
    <>
      <VStack>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Text w="20%">Challenge</Text>
          <Text w="70%">
            Current tool storage solutions are not adapted to the children´s
            physical and cognitive skills, nor do they increase motivation when
            cleaning up.
          </Text>
        </Flex>
        <Divider />
      </VStack>
      <VStack>
        <Flex flexDir={{ base: "column", md: "row" }} justify="end">
          <Text w="20%" textAlign="left">
            Role
          </Text>
          <Text w="70%" textAlign="left">
            In this project, we did everything as a group. Therefore, I
            participated in every step of the process.
          </Text>
        </Flex>
        <Divider />
      </VStack>
    </>
  );
};

export default ProjectInfo;
