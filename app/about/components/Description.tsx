import { Image, Flex, Text, Center } from "@chakra-ui/react";
import oliviaDescription from "@/app/data/description";
const Description = () => {
  return (
    <Center padding={{ base: "10px", sm: "10px", lg: "120px" }}>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Text paddingRight={{ base: 0, md: 25 }}>{oliviaDescription}</Text>
        <Image
          alt={"Profile picture"}
          src="/linkedinken1.jpg"
          boxSize={{ base: 200, md: 350, lg: 400 }}
        />
      </Flex>
    </Center>
  );
};

export default Description;
