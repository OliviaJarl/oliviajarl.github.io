import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  heading: string;
  description?: string;
  time?: string;
}

const ResumeItem = ({ heading, description, time }: Props) => {
  return (
    <Flex flexDir="row" paddingBottom={5} justifyContent="space-between">
      <Flex flexDir="column" paddingRight={{ base: "40px", md: "80px" }}>
        <Text fontWeight="medium">{heading}</Text>
        <Text>{description}</Text>
      </Flex>
      <Flex minWidth="18%">
        <Text fontWeight="medium" whiteSpace="nowrap">
          {time}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ResumeItem;
