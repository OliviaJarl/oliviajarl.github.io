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
  return (
    <Flex
      justifyContent="center"
      marginLeft={10}
      marginRight={10}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Image
        w={{ base: "100%", lg: "60%" }}
        alt={"Thumbnail for the project " + name}
        src={image}
      />
      <Box
        marginLeft={{ base: "0px", lg: "10px" }}
        marginTop={{ base: "10px", lg: "0px" }}
      >
        <Heading>{name}</Heading>
        <Text>{description}</Text>
        <Flex justifyContent="flex-end">
          <Link href={url}>
            <Button marginTop={4}>Read more</Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default WorkSection;
