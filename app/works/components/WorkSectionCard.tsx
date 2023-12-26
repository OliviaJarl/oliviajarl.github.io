import { Image, Card, Heading, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  name: string;
  image: string;
  description: string;
  url: string;
  gradient: string;
}

const WorkSectionCard = ({
  name,
  image,
  description,
  url,
  gradient,
}: Props) => {
  const [display, setDisplay] = useState("none");

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
        borderRadius={20}
        flexDirection="column"
        overflow="hidden"
        as={motion.div}
        variants={item}
        position="relative"
        onMouseEnter={() => setDisplay("flex")}
        onMouseLeave={() => setDisplay("none")}
        className={gradient}
      >
        <Image
          alt={"Thumbnail for the project " + name}
          src={image}
          h="500px"
          objectFit="cover"
          zIndex={1}
        />

        <VStack
          justifyContent="center"
          display={display}
          h="100%"
          w="100%"
          zIndex={2}
          position="absolute"
          bg="rgba(255,255,255, 0.5)"
          backdropFilter="auto"
          backdropBlur="15px"
        >
          <Heading marginLeft="20px" marginRight="20px">
            {name}
          </Heading>
          <Text
            marginLeft={{ base: "10px", md: "40px" }}
            marginRight={{ base: "10px", md: "40px" }}
            textAlign="center"
          >
            {description}
          </Text>
        </VStack>
      </Card>
    </Link>
  );
};

export default WorkSectionCard;
