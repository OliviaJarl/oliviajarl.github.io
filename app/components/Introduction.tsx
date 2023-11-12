"use client";
import { Center, HStack, VStack, useMediaQuery } from "@chakra-ui/react";
import IntroductionContent from "./IntroductionContent";

const Introduction = () => {
  const [screenCheck] = useMediaQuery("(min-width: 1000px)");
  if (screenCheck) {
    return (
      <Center paddingTop="40px">
        <HStack width={"80%"}>
          <IntroductionContent imageSize="400px" />
        </HStack>
      </Center>
    );
  }
  return (
    <Center paddingTop="40px">
      <VStack width={"90%"}>
        <IntroductionContent imageSize="200px" />
      </VStack>
    </Center>
  );
};

export default Introduction;
