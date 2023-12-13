import {
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Tag {
  id: number;
  title: string;
  colorBackground: string;
  colorTitle: string;
}

interface Props {
  name: string;
  image: string;
  description: string;
  url: string;
  tags: Tag[];
}

const WorkCard = ({ name, image, description, url, tags }: Props) => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.3,
      },
    },
  };

  return (
    <Link href={url}>
      <Card
        borderRadius={10}
        overflow="hidden"
        height="100%"
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        variants={item}
      >
        <Image alt={"Thumbnail for the project " + name} src={image} />
        <CardBody>
          <Heading size={{ base: "xs", sm: "md" }}>{name}</Heading>
          <Text marginTop={2} fontSize={{ base: "xs", sm: "md" }}>
            {description}
          </Text>
        </CardBody>
        <CardFooter justify="flex-end">
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              marginLeft="10px"
              size={{ base: "sm", sm: "md", lg: "lg" }}
              color={tag.colorTitle}
              bg={tag.colorBackground}
              borderRadius="30px"
              whiteSpace="nowrap"
            >
              {tag.title}
            </Tag>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default WorkCard;
