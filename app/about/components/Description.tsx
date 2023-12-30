import { Image, Flex, Text, Link, Center, VStack } from "@chakra-ui/react";
const Description = () => {
  return (
    <Center
      marginLeft={{ base: "30px", md: "60px", xl: "200px" }}
      marginRight={{ base: "30px", md: "60px", xl: "200px" }}
      marginBottom={{ base: "15px", md: "30px" }}
      marginTop={{ base: "10px", md: "30px" }}
    >
      <Flex flexDir={{ base: "column", lg: "row" }} alignItems="center">
        <Image
          alt="Illustration"
          src="/illustration.svg"
          aspectRatio="auto"
          boxSize={{ base: 250, sm: 350, md: 450, lg: 400, xl: 450 }}
          marginBottom={{ base: "15px", md: "25px" }}
        />
        <VStack
          align="left"
          marginLeft={{ base: "0px", lg: "50px" }}
          marginTop={{ base: "10px", md: "0px" }}
        >
          <Text>Hi, I am Olivia!</Text>
          <Text>
            I study Industrial design engineering at Chalmers University of
            Technology and am currently doing my last year in the master’s
            programme Interaction Design and Technologies. Due to the
            combination of my bachelor’s and master’s programmes, I have
            experience designing both digital and physical products.
          </Text>
          <Text>
            Among the most important things I have taken away from my education
            is the user-centred design process, and I think it is exciting to
            get into the users’ perspective. Besides user-centred design, I am
            interested in front-end development, which I do in my spare time.
          </Text>
          <Text>
            Feel free to contact me on{" "}
            <Link
              isExternal
              href="https://www.linkedin.com/in/olivia-jarl-944b77226/"
              textDecoration="underline"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <a href="mailto:olivia.ce.jarl@gmail.com">
              <u>email</u>
            </a>
            .
          </Text>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Description;
