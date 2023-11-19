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

interface Props {
  name: string;
  image: string;
  description: string;
  url: string;
}

const WorkCard = ({ name, image, description, url }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image alt={"Thumbnail for the project " + name} src={image} />
      <CardBody>
        <Heading size={{ base: "xs", sm: "md" }}>{name}</Heading>
        <Text paddingTop={2} fontSize={{ base: "xs", sm: "md" }}>
          {description}
        </Text>
      </CardBody>
      <CardFooter justify="flex-end">
        <Link href={url}>
          <Button size={{ base: "sm", sm: "md" }}>Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
