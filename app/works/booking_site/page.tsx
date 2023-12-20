import {
  Center,
  Image,
  Heading,
  Flex,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import ProcessOverview from "../components/ProcessOverview";
import Details from "../components/Details";
import Reflection from "../components/Reflection";
import bookingSite from "@/app/data/booking_site";
import DesignProcessElement from "../components/DesignProcessElement";

export default function Booking() {
  const bottomMargin = { base: "10px", md: "40px" };
  const bottomMarginHeading = { base: "10px", md: "25px" };
  return (
    <>
      <Center>
        <Image
          src={bookingSite["poster_image_small"]}
          alt="Booking poster image"
          srcSet={bookingSite["posterSrcSet"]}
          aspectRatio="auto"
          w={{ base: "100vw", lg: "70vw" }}
          marginBottom={{ base: "20px", md: "35px" }}
        />
      </Center>

      <Flex
        marginLeft={{ base: "30px", md: "40px", xl: "270px" }}
        marginRight={{ base: "30px", md: "40px", xl: "270px" }}
        flexDir="column"
      >
        <Heading
          size="2xl"
          marginBottom={{ base: "10px", md: "25px" }}
          textAlign="center"
        >
          {bookingSite["title"]}
        </Heading>
        <Flex marginBottom={bottomMargin} flexDir="column">
          <Heading size="lg" marginBottom={bottomMarginHeading}>
            About the project
          </Heading>
          <Text>{bookingSite["about"]}</Text>
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
          marginBottom={bottomMargin}
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
        <Text marginBottom={bottomMargin}>{bookingSite["results"]}</Text>

        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Reflections
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          justifyContent="center"
          marginBottom={bottomMargin}
        >
          {bookingSite["reflections"].map((reflection) => (
            <Reflection
              key={reflection.id}
              title={reflection.title}
              content={reflection.content}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}
