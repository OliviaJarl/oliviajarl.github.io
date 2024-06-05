import { bottomMarginWork } from "@/app/constants";
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

interface DesignProcess {
  title: string;
  description: string;
  images: string;
}

const DesignProcesElementTest = ({
  title,
  description,
  images,
}: DesignProcess) => {
  const includeImage = images != "";
  return (
    <>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        marginBottom={bottomMarginWork}
      >
        <VStack
          w={includeImage ? { base: "100%", md: "70%" } : "100%"}
          alignItems="left"
        >
          <Heading size="md">{title}</Heading>
          <Text
            marginRight={includeImage ? { md: "30px" } : "0px"}
            marginBottom={includeImage ? { base: "14px", md: "0px" } : "0px"}
          >
            {description}
          </Text>
        </VStack>
        {includeImage ? (
          <Box
            w={{ base: "100%", md: "40%" }}
            justifyContent="center"
            marginBottom={{ base: "12px", md: "0px" }}
          >
            <Image
              w="100%"
              key={images.charAt(images.length - 1)}
              src={images}
              alt={"Design process image " + images}
              aspectRatio="auto"
            />
          </Box>
        ) : null}
      </Flex>
    </>
  );
};

export default DesignProcesElementTest;
