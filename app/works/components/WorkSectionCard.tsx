import {
  Flex,
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  name: string;
  image: string;
  description: string;
  url: string;
  id: number;
}

const WorkSectionCard = ({ name, image, description, url, id }: Props) => {
  const marginEdge = "30px";

  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      direction={{ base: "column", lg: "row" }}
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      marginLeft={marginEdge}
      marginRight={marginEdge}
    >
      <Image
        alt={"Thumbnail for the project " + name}
        src={image}
        h="500px"
        objectFit="cover"
      />

      <CardBody flexDir={["row"]}>
        <Flex flexDir={"column"}>
          <Heading size={{ base: "xs", sm: "md" }}>{name}</Heading>
          <Text marginTop={2} fontSize={{ base: "xs", sm: "md" }}>
            {description}
          </Text>
          <Link href={url}>
            <Button size={{ base: "sm", sm: "md" }}>Read more</Button>
          </Link>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default WorkSectionCard;
