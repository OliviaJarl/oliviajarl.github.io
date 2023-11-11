import { HStack, Box, Image, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <HStack paddingLeft={200} paddingTop={100} bg={"dodgerblue"}>
      <Box paddingRight={1} bg={"coral"} width="50%">
        <Text fontSize="4xl">
          Hi, my name is Olivia! I am an engineering student at Chalmers.
        </Text>
        <Text fontSize="2xl">
          I do UX and UI design, and is also into frontend-development.
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
