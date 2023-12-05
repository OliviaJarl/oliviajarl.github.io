import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
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
  const marginEdge = "30px";
  return (
    <Flex
      justifyContent="center"
      marginLeft={marginEdge}
      marginRight={marginEdge}
      marginTop="15px"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box
        marginLeft={{ base: "0px", lg: id % 2 == 0 ? "0px" : "30px" }}
        marginRight={{ base: "0px", lg: id % 2 == 0 ? "30px" : "0px" }}
        marginTop={{ base: "10px", lg: "0px" }}
        order={{ base: 1, md: id % 2 == 0 ? 1 : 2 }}
      >
        <Heading marginBottom="5px">{name}</Heading>
        <Text>{description}</Text>
        <Flex justifyContent="flex-end">
          <Link href={url}>
            <Button marginTop={4}>Read more</Button>
          </Link>
        </Flex>
      </Box>
      <Image
        w={{ base: "100%", lg: "50%" }}
        alt={"Thumbnail for the project " + name}
        src={image}
        order={{ base: 1, md: id % 2 == 0 ? 2 : 1 }}
      />
    </Flex>
  );
};

export default WorkSection;
