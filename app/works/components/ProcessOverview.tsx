import { Box, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  image: string;
}
const ProcessOverview = ({ image, title }: Props) => {
  return (
    <VStack>
      <Image
        src={image}
        alt="Process overview"
        paddingBottom={{ base: "20px", md: "50px" }}
      />
      <Text>{title}</Text>
    </VStack>
  );
};

export default ProcessOverview;
