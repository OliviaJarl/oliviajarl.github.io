import { Image, Text, VStack } from "@chakra-ui/react";

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
        marginBottom={{ base: "10px", md: "25px" }}
      />
      <Text>{title}</Text>
    </VStack>
  );
};

export default ProcessOverview;
