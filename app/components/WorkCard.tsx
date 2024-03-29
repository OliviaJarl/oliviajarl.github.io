import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import "./GradientBalls.css"
import Link from "next/link";
import { motion } from "framer-motion";

interface Tag {
  id: number;
  title: string;
  colorBackground: string;
  colorTitle: string;
}
interface GradientBall {
  id: number;
  gradient: string;
}

interface Props {
  name: string;
  image: string;
  thumbnailSrcSet: string;
  description: string;
  url: string;
  tags: Tag[];
  gradientBalls: GradientBall[];
}

const WorkCard = ({
  name,
  image,
  thumbnailSrcSet,
  description,
  url,
  gradientBalls,
  tags,
}: Props) => {
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
        whileHover={{ scale: 1.02 }}
        variants={item}
      >
        <Box bg="rgb(239, 239, 239)" position="relative" overflow="hidden">
          {gradientBalls.map((gradientBall) => (
            <Box key={gradientBall.id} className={gradientBall.gradient}></Box>
          ))}
          {thumbnailSrcSet == "" ? (
            <Image
              alt={"Thumbnail for the project " + name}
              src={image}
              aspectRatio="842/595 auto"
              position="relative"
              top={0}
              left={0}
              zIndex={2}
            />
          ) : (
            <Image
              alt={"Thumbnail for the project " + name}
              src={image}
              srcSet={thumbnailSrcSet}
              aspectRatio="842/595 auto"
              position="relative"
              top={0}
              left={0}
              zIndex={2}
            />
          )}
        </Box>

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
              size={{ base: "md", md: "lg" }}
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
