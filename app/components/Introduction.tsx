import { Center, HStack, VStack, useMediaQuery } from "@chakra-ui/react";
import IntroductionContent from "./IntroductionContent";

const Introduction = () => {
  if (useMediaQuery("(min-width: 1000px)")) {
    return (
      <Center>
        <HStack width={"80%"}>
          <IntroductionContent />
        </HStack>
      </Center>
    );
  }
  return (
    <Center>
      <VStack width={"80%"}>
        <IntroductionContent />
      </VStack>
    </Center>
  );
};

export default Introduction;
