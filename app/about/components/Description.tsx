import { Image, HStack, Text } from "@chakra-ui/react";
import oliviaDescription from "@/app/data/description";
const Description = () => {
  return (
    <>
      <HStack padding={50}>
        <Text paddingRight={20}>{oliviaDescription}</Text>
        <Image alt={"Profile picture"} src="/linkedinken1.jpg" boxSize={400} />
      </HStack>
    </>
  );
};

export default Description;
