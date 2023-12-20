import { Image, Heading, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import ProcessOverview from "../components/ProcessOverview";
import Details from "../components/Details";
import Reflection from "../components/Reflection";
import zooloData from "@/app/data/zoolo";
import DesignProcessElement from "../components/DesignProcessElement";

export default function Zoolo() {
  const bottomMargin = { base: "10px", md: "40px" };
  const bottomMarginHeading = { base: "10px", md: "25px" };

  return (
    <>
      <Image
        src={zooloData["poster_image_small"]}
        alt="Zoolo poster image"
        srcSet={zooloData["posterSrcSet"]}
        aspectRatio="auto"
        marginBottom={{ base: "10px", md: "30px" }}
      />
      <Heading size="2xl" marginBottom={"10px"} textAlign="center">
        {zooloData["title"]}
      </Heading>
      <Flex
        marginLeft={{ base: "30px", md: "40px", xl: "270px" }}
        marginRight={{ base: "30px", md: "40px", xl: "270px" }}
        flexDir="column"
      >
        <Flex marginBottom={bottomMargin} flexDir="column">
          <Heading size="lg" marginBottom={bottomMarginHeading}>
            About the project
          </Heading>
          <Text>{zooloData["about"]}</Text>
        </Flex>
        <Details
          role={zooloData["details"]["role"]}
          challenge={zooloData["details"]["challenge"]}
          projectTime={zooloData["details"]["projectTime"]}
        />
        <Heading marginBottom={bottomMarginHeading} size="lg">
          Process overview
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 3, lg: 5 }}
          spacing={4}
          justifyContent="center"
          marginBottom={bottomMargin}
        >
          {zooloData["process_overview"].map((process) => (
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
        {zooloData["design_process"].map((step) => (
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
        <Text marginBottom={bottomMargin}>{zooloData["results"]}</Text>
        <Image src="/zoolo/result1.jpg" alt="Zoolo result 1" />
        <Flex
          flexDir={{ base: "column", md: "row" }}
          marginBottom={bottomMargin}
        >
          <Image
            src="/zoolo/result2.png"
            alt="Zoolo result 2"
            w={{ md: "58%" }}
          />
          <Image
            src="/zoolo/result3.png"
            alt="Zoolo result 3"
            w={{ md: "42%" }}
          />
        </Flex>
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Reflections
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={8}
          justifyContent="center"
          marginBottom={bottomMargin}
        >
          {zooloData["reflections"].map((reflection) => (
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
