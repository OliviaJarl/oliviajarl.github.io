import { HStack, Box, Image, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <HStack paddingLeft={200} paddingTop={100}>
      <Box paddingRight={1} width="50%">
        <Text fontSize="4xl">
          Hi! My name is Olivia, I am an engineering student at Chalmers
          University of Technology.
        </Text>
        <Text fontSize="2xl">
          I do UX and UI design, and I am also into frontend-development.
        </Text>
      </Box>
      <Image
        src="/linkedinken1.jpg"
        alt="Profile image"
        boxSize="400px"
        borderRadius={200}
      />
    </HStack>
  );
};

export default Introduction;
