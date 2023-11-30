import { Flex, Heading, Image, Text } from "@chakra-ui/react";

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
        <Flex flexDir={{ base: "column", md: "row" }} paddingBottom={{ base: "10px", md: "40px" }}>
          <Flex flexDir="column" w={{ md: "70%" }}>
            <Heading size="md" paddingBottom="10px">
              {title}
            </Heading>
            <Text paddingRight={{ md: "30px" }}>{description}</Text>
          </Flex>

          <Flex flexDir="column" w={{ base: "70%", md: "40%" }}>
            {images?.map((image) => (
              <Image
                key={image.charAt(image.length - 1)}
                src={image}
                alt={"Design process image " + image}
              />
            ))}
          </Flex>
        </Flex>
      </>
    );
  }
  return (
    <>
      <Heading size="md" paddingBottom="10px">
        {title}
      </Heading>
      <Text paddingBottom="60px">{description}</Text>
    </>
  );
};

export default DesignProcessElement;
