import {
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

interface Props {
  name: string;
  image: string;
  description: string;
}

const WorkCard = ({ name, image, description }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image alt={"Thumbnail for the project " + name} src={image} />
      <CardBody>
        <Heading size="md">{name}</Heading>
        <Text paddingTop={2} fontSize="md">
          {description}
        </Text>
      </CardBody>
      <CardFooter alignContent="right">
        <Button>View here</Button>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
