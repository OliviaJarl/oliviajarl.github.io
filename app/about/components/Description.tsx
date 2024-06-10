import { Image, Flex, Text, Link, VStack } from "@chakra-ui/react";
import { sideMargins } from "@/app/constants";

const Description = () => {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      alignItems="center"
      marginLeft={{ base: sideMargins["base"], md: "60px", xl: "200px" }}
      marginRight={{ base: sideMargins["base"], md: "60px", xl: "200px" }}
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
        <Text fontSize={"2xl"}>Hi, I am Olivia!</Text>
        <Text>
          I recently graduated from the Industrial Design Engineering program at
          Chalmers University of Technology with a master’s degree in
          Interaction Design and Technologies. The combination of my bachelor’s
          and master’s programs has given me experience designing both physical
          and digital products.
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
