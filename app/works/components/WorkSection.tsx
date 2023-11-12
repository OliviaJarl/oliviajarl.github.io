import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

interface Props {
  name: string;
  image: string;
  description: string;
}
const WorkSection = ({ name, image, description }: Props) => {
  const [screenCheck] = useMediaQuery("(min-width: 1000px)");
  if (screenCheck) {
    return (
      <HStack justifyContent="center" padding={10}>
        <Box>
          <Heading>{name}</Heading>
          <Text>{description}</Text>
          <Button>Read more</Button>
        </Box>
        <Image alt={"Thumbnail for the project " + name} src={image} />
      </HStack>
    );
  }
  return (
    <VStack justifyContent="center" padding={10}>
      <Image alt={"Thumbnail for the project " + name} src={image} />
      <Box>
        <Heading>{name}</Heading>
        <Text>{description}</Text>
        <Button>Read more</Button>
      </Box>
    </VStack>
  );
};

export default WorkSection;
