import { Flex, Center, Box, Image, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <>
      <Center padding={{ base: "20px", sm: "40px", lg: "100px" }}>
        <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
          <Box paddingRight={{ base: 0, md: 10 }}>
            <Text
              fontSize={{ base: "lg", sm: "2xl", md: "4xl" }}
              align={{ base: "center", md: "left" }}
            >
              Hi! My name is Olivia, I am an engineering student at Chalmers
              University of Technology.
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "lg", md: "2xl" }}
              align={{ base: "center", md: "left" }}
            >
              I do UX and UI design, and I am also into frontend-development.
            </Text>
          </Box>
          <Image
            src="/linkedinken1.jpg"
            alt="Profile image"
            borderRadius={200}
            boxSize={{ base: "200px", sm: "300px", lg: "400px" }}
            marginTop={{ base: "30px", md: "0px" }}
          />
        </Flex>
      </Center>
    </>
  );
};

export default Introduction;
