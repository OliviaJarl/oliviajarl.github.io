import { Flex, Image, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  const [showGlasses, setShowGlasses] = useState(false);
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
        marginBottom="15px"
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Box
          marginRight={{
            base: "0px",
            md: "35px",
            lg: "35px",
            xl: "40px",
            "2xl": "90px",
          }}
          as={motion.div}
          variants={item}
        >
          <Text
            fontSize={{
              base: "lg",
              sm: "2xl",
              md: "3xl",
              lg: "3xl",
              xl: "4xl",
            }}
            align={{ base: "center", md: "left" }}
          >
            Hello! I am Olivia, an industrial design engineer.
          </Text>
          <Text
            fontSize={{ base: "sm", sm: "lg", md: "2xl", lg: "2xl", xl: "3xl" }}
            align={{ base: "center", md: "left" }}
          >
            I do UX design, and I also have an interest in front-end
            development.
          </Text>
        </Box>
        <Box
          position="relative"
          marginTop={{ base: "15px", md: "0px" }}
          onMouseEnter={() => setShowGlasses(true)}
          onMouseLeave={() => setShowGlasses(false)}
          as={motion.div}
          variants={item}
        >
          <Image
            src="/olivia_square_500.jpg"
            srcSet="/olivia_bild_square_1339.jpg 1339w, /olivia_square_1000.jpg 1000w, /olivia_square_500.jpg 500w"
            aspectRatio="1/1 auto"
            w={{
              base: "225px",
              sm: "275px",
              md: "430px",
              lg: "460px",
              xl: "500px",
            }}
            alt="Profile image"
            borderRadius={300}
            zIndex={1}
          />
          {showGlasses ? (
            <Image
              src="/sunglasses.svg"
              alt="Sunglasses on hover"
              zIndex={2}
              w="27%"
              position="absolute"
              top="27.5%"
              left="28.8%"
            />
          ) : null}
        </Box>
      </Flex>
    </>
  );
};

export default Introduction;
