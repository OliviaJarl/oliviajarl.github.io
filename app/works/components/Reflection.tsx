import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
interface Props {
  title: string;
  content: string;
}
const Reflection = ({ title, content }: Props) => {
  return (
    <>
      <Box>
        <Heading size="md" marginBottom={{ base: "5px", md: "15px" }}>
          {title}
        </Heading>
        <Text>{content}</Text>
      </Box>
    </>
  );
};

export default Reflection;
