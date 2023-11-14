import { Flex, Center, Box, Image, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <>
      <Center padding={40}>
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box paddingRight={10}>
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
            borderRadius={200}
            boxSize={{ base: "200px", sm: "300px", lg: "400px" }}
          />
        </Flex>
      </Center>
    </>
  );
};

export default Introduction;
