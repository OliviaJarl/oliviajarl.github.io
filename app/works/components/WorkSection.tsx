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
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  description: string;
  url: string;
  id: number;
}
const WorkSection = ({ name, image, description, url, id }: Props) => {
  const [screenCheck] = useMediaQuery("(min-width: 1000px)");
  if (screenCheck) {
    if (id % 2 == 0) {
      return (
        <HStack justifyContent="center" padding={10}>
          <Image alt={"Thumbnail for the project " + name} src={image} />
          <Box>
            <Heading>{name}</Heading>
            <Text>{description}</Text>
            <Link href={url}>
              <Button marginTop={4}>Read more</Button>
            </Link>
          </Box>
        </HStack>
      );
    }
    return (
      <HStack justifyContent="center" padding={10}>
        <Box>
          <Heading>{name}</Heading>
          <Text>{description}</Text>
          <Link href={url}>
            <Button marginTop={4}>Read more</Button>
          </Link>
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
        <Link href={url}>
          <Button>Read more</Button>
        </Link>
      </Box>
    </VStack>
  );
};

export default WorkSection;
