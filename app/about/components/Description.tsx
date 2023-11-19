import { Image, Flex, Text, Center } from "@chakra-ui/react";
import oliviaDescription from "@/app/data/description";
const Description = () => {
  return (
    <Center padding={{ base: "20px", sm: "40px", lg: "100px" }}>
      <Flex padding={50} flexDir={{ base: "column", md: "row" }}>
        <Text paddingRight={{ base: 0, md: 15 }}>{oliviaDescription}</Text>
        <Image
          alt={"Profile picture"}
          src="/linkedinken1.jpg"
          boxSize={{ base: 300, md: 350, lg: 400 }}
        />
      </Flex>
    </Center>
  );
};

export default Description;
