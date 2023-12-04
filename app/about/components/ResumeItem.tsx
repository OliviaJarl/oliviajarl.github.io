import { Flex, Text } from "@chakra-ui/react";
interface Props {
  heading: string;
  description?: string;
  time?: string;
}

const ResumeItem = ({ heading, description, time }: Props) => {
  if (time) {
    return (
      <Flex flexDir={{ base: "column", md: "row" }} marginBottom={5}>
        <Flex minWidth={{ md: "35%" }}>
          <Text fontWeight="bold" whiteSpace="nowrap">
            {time}
          </Text>
        </Flex>
        <Flex flexDir="column" minWidth={{ md: "65%" }}>
          <Text fontWeight="bold">{heading}</Text>
          <Text>{description}</Text>
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex flexDir="column" marginBottom={5}>
      <Text fontWeight="bold">{heading}</Text>
      <Text>{description}</Text>
    </Flex>
  );
};

export default ResumeItem;
