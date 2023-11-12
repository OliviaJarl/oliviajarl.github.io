import { HStack, Box, Image, Text, SimpleGrid } from "@chakra-ui/react";

const IntroductionContent = () => {
  return (
    <>
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
        boxSize="400px"
        borderRadius={200}
      />
    </>
  );
};

export default IntroductionContent;
