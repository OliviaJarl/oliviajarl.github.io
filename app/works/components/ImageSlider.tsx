import { Center, IconButton, Image, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { mainHeadingBottomMargin } from "@/app/constants";

interface SlideImage {
  id: number;
  url: string;
  title: string;
  description: string;
}
interface Props {
  slides: SlideImage[];
}
const ImageSlider = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndexPrevious =
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndexPrevious);
  };

  const goToNext = () => {
    const newIndexNext =
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndexNext);
  };

  return (
    <VStack marginBottom={mainHeadingBottomMargin}>
      <Center marginBottom={{ base: "5px", md: "20px" }}>
        <IconButton
          bg="none"
          aria-label="Left arrow"
          fontSize={{ base: 20, sm: 30, md: 40 }}
          textColor="#283141"
          icon={<BsChevronCompactLeft />}
          onClick={goToPrevious}
        />
        <Image
          alt={slides[currentIndex].title}
          src={slides[currentIndex].url}
          w={{
            base: "70%",
            sm: "70%",
            md: "80%",
            lg: "600px",
            xl: "750px",
          }}
        />
        <IconButton
          bg="none"
          aria-label="Right arrow"
          fontSize={{ base: 20, sm: 30, md: 40 }}
          textColor="#283141"
          icon={<BsChevronCompactRight />}
          onClick={goToNext}
        />
      </Center>
      <Text fontStyle="italic" textColor="#797979" textAlign="center">
        {slides[currentIndex].description}
      </Text>
    </VStack>
  );
};

export default ImageSlider;
