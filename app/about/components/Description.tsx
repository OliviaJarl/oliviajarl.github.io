import { Image, Flex, Text, Link, VStack } from "@chakra-ui/react";
const Description = () => {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      alignItems="center"
      marginLeft={{ base: "15px", md: "60px", xl: "200px" }}
      marginRight={{ base: "15px", md: "60px", xl: "200px" }}
      marginBottom={{ base: "15px", md: "30px" }}
      marginTop={{ base: "10px", md: "30px" }}
    >
      <Image
        alt="Illustration"
        src="/illustration.svg"
        minWidth={{
          base: "250px",
          sm: "350px",
          md: "450px",
          lg: "375px",
          xl: "400px",
        }}
        aspectRatio="1 auto"
        boxSize={{
          base: "250px",
          sm: "350px",
          md: "450px",
          lg: "375px",
          xl: "400px",
        }}
        marginBottom={{ base: "10px", md: "25px" }}
      />
      <VStack
        align="left"
        marginLeft={{ base: "0px", lg: "40px" }}
        marginTop={{ base: "10px", md: "0px" }}
      >
        <Text>Hi, I am Olivia!</Text>
        <Text>
          I study Industrial design engineering at Chalmers University of
          Technology and am currently doing my last year in the master’s
          programme Interaction Design and Technologies. Due to the combination
          of my bachelor’s and master’s programmes, I have experience designing
          both digital and physical products.
        </Text>
        <Text>
          Among the most important things I have taken away from my education is
          the user-centred design process, and I think it is exciting to get
          into the users’ perspective. Besides user-centred design, I am
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
  );
};

export default Description;
