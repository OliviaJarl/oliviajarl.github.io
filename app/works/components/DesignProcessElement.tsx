import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface DesignProcess {
  title: string;
  description: string;
  images: string;
}
const DesignProcessElement = ({
  title,
  description,
  images,
}: DesignProcess) => {
  if (images != "") {
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
            <Text
              marginRight={{ md: "30px" }}
              marginBottom={{ base: "12px", md: "0px" }}
            >
              {description}
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            w={{ base: "100%", md: "40%" }}
            justify="center"
          >
            <Box
              w="100%"
              justifyContent="center"
              display="flex"
              marginBottom={{ base: "10px", md: "0px" }}
            >
              
                <Image
                  key={images.charAt(images.length - 1)}
                  src={images}
                  alt={"Design process image " + images}
                  aspectRatio="auto"
                />
              
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
