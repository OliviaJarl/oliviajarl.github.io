import useMediaQuery from "@/app/hooks/useMediaQuery";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  name: string;
  image: string;
  description: string;
}
const WorkSection = ({ name, image, description }: Props) => {
  if (useMediaQuery(900)) {
    return (
      <VStack>
        <Box>
          <Heading>{name}</Heading>
          <Text>{description}</Text>
          <Button>Read more</Button>
        </Box>
        <Image alt={"Thumbnail for the project " + name} src={image} />
      </VStack>
    );
  }
  return (
    <HStack>
      <Box>
        <Heading>{name}</Heading>
        <Text>{description}</Text>
        <Button>Read more</Button>
      </Box>
      <Image alt={"Thumbnail for the project " + name} src={image} />
    </HStack>
  );
};

export default WorkSection;
