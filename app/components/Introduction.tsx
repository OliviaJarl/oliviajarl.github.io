import { Flex, Image, Center, Box, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <>
      <Center
        marginLeft={{ base: "20px", sm: "40px", lg: "100px" }}
        marginRight={{ base: "20px", sm: "40px", lg: "100px" }}
        marginTop={{ base: "10px", sm: "20px", lg: "40px" }}
      >
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
              I do UX design, and I also have an interest in front-end
              development.
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
