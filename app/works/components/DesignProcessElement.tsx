import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface DesignProcess {
  title: string;
  description: string;
  images: string[];
}
const DesignProcessElement = ({
  title,
  description,
  images,
}: DesignProcess) => {
  if (images[0] != "") {
    return (
      <>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          marginBottom={{ base: "30px", md: "40px" }}
        >
          <Flex flexDir="column" w={{ md: "70%" }}>
            <Heading size="md" marginBottom="10px">
              {title}
            </Heading>
            <Text marginRight={{ md: "30px" }}>{description}</Text>
          </Flex>
          <Flex
            flexDir="column"
            w={{ base: "100%", md: "40%" }}
            justify="center"
          >
            <Box w="100%" justifyContent="center" display="flex">
              {images?.map((image) => (
                <Image
                  key={image.charAt(image.length - 1)}
                  src={image}
                  alt={"Design process image " + image}
                />
              ))}
            </Box>
          </Flex>
        </Flex>
      </>
    );
  }
  return (
    <>
      <Heading size="md" marginBottom="10px">
        {title}
      </Heading>
      <Text marginBottom={{ base: "30px", md: "40px" }}>{description}</Text>
    </>
  );
};

export default DesignProcessElement;
