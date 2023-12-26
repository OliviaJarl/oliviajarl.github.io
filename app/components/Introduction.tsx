import { Flex, Image, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  const [display, setDisplay] = useState("none");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.4,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        marginLeft={{ base: "20px", sm: "40px", lg: "100px" }}
        marginRight={{ base: "20px", sm: "40px", lg: "100px" }}
        marginTop={{ base: "10px", sm: "20px", lg: "40px" }}
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Box
          marginRight={{ base: "0px", md: "10px" }}
          as={motion.div}
          variants={item}
        >
          <Text
            fontSize={{ base: "lg", sm: "2xl", md: "4xl" }}
            align={{ base: "center", md: "left" }}
          >
            Hi! My name is Olivia, I am an engineering student at Chalmers
            University of Technology.
          </Text>
          <Text
            fontSize={{ base: "sm", sm: "lg", md: "2xl" }}
            align={{ base: "center", md: "left" }}
          >
            I do UX design, and I also have an interest in front-end
            development.
          </Text>
        </Box>
        <Box
          position="relative"
          w={{ base: "70%", sm: "300px", md: "700px", lg: "800px" }}
          marginTop={{ base: "15px", md: "0px" }}
          onMouseEnter={() => setDisplay("flex")}
          onMouseLeave={() => setDisplay("none")}
          as={motion.div}
          variants={item}
        >
          <Image
            src="/profile_picture500.jpg"
            srcSet="/profile_picture1500.jpg 1500w, /profile_picture1000.jpg 1000w, /profile_picture500.jpg 500w"
            aspectRatio="auto"
            alt="Profile image"
            borderRadius={300}
            zIndex={1}
          />

          <Image
            src="/sunglasses.svg"
            alt="Sunglasses on hover"
            zIndex={2}
            position="absolute"
            top="36%"
            left="45%"
            w="25%"
            display={display}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Introduction;
