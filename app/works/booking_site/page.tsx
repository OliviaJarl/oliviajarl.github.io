"use client";
import {
  Center,
  Image,
  Heading,
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import ProcessOverview from "../components/ProcessOverview";
import Details from "../components/Details";
import bookingSite from "@/app/data/booking_site";
import DesignProcessElement from "../components/DesignProcessElement";
import ImageSlider from "../components/ImageSlider";
import {
  bottomMarginWork,
  bottomMarginHeading,
  sideMarginsWork,
  mainHeadingBottomMargin,
} from "@/app/constants";

export default function Booking() {
  return (
    <>
      <Center>
        <Image
          src={bookingSite["poster_image"]}
          alt="Booking poster image"
          srcSet={bookingSite["posterSrcSet"]}
          aspectRatio="1500/731 auto"
          w={{ base: "100vw", lg: "70vw" }}
          marginBottom={{ base: "20px", md: "35px" }}
        />
      </Center>
      <Flex
        marginLeft={sideMarginsWork}
        marginRight={sideMarginsWork}
        flexDir="column"
      >
        <Heading
          size="2xl"
          marginBottom={mainHeadingBottomMargin}
          textAlign="center"
        >
          {bookingSite["title"]}
        </Heading>
        <Flex marginBottom={bottomMarginWork} flexDir="column">
          <Heading size="lg" marginBottom={bottomMarginHeading}>
            About the project
          </Heading>
          <Text marginBottom={{ base: "5px", md: "15px" }}>
            {bookingSite["about1"]}
          </Text>
          <Text>{bookingSite["about2"]}</Text>
        </Flex>
        <Details
          role={bookingSite["details"]["role"]}
          challenge={bookingSite["details"]["challenge"]}
          projectTime={bookingSite["details"]["projectTime"]}
        />
        <Heading marginBottom={bottomMarginHeading} size="lg">
          Process overview
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 3 }}
          spacing={4}
          justifyContent="center"
          marginBottom={bottomMarginWork}
        >
          {bookingSite["process_overview"].map((process) => (
            <ProcessOverview
              key={process.id}
              title={process.title}
              image={process.image}
            />
          ))}
        </SimpleGrid>
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Design process
        </Heading>
        {bookingSite["design_process"].map((step) => (
          <DesignProcessElement
            key={step.id}
            title={step.title}
            description={step.description}
            images={step.images}
          />
        ))}
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Result
        </Heading>
        <Text marginBottom={bottomMarginWork}>{bookingSite["results"]}</Text>
        <ImageSlider slides={bookingSite["result_images"]} />
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Reflection
        </Heading>
        <Text>{bookingSite["reflections"]}</Text>
      </Flex>
    </>
  );
}
