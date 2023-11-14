import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
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
  if (id % 2 == 0) {
    return (
      <Flex
        justifyContent="center"
        padding={10}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Image alt={"Thumbnail for the project " + name} src={image} />
        <Box>
          <Heading>{name}</Heading>
          <Text>{description}</Text>
          <Link href={url}>
            <Button marginTop={4}>Read more</Button>
          </Link>
        </Box>
      </Flex>
    );
  }
  return (
    <Flex
      justifyContent="center"
      padding={10}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box>
        <Heading>{name}</Heading>
        <Text>{description}</Text>
        <Link href={url}>
          <Button marginTop={4}>Read more</Button>
        </Link>
      </Box>
      <Image alt={"Thumbnail for the project " + name} src={image} />
    </Flex>
  );
};

export default WorkSection;
