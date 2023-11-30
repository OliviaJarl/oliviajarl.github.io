import { Image, Heading, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import ProcessOverview from "../components/ProcessOverview";
import Details from "../components/Details";
import Reflection from "../components/Reflection";
import zooloData from "@/app/data/zoolo";
import DesignProcessElement from "../components/DesignProcessElement";
export default function Zoolo() {
  const bottomPadding = { base: "10px", md: "40px" };
  const bottomPaddingHeading = { base: "10px", md: "25px" };
  return (
    <>
      <Image
        src={zooloData["poster_image"]}
        alt="Zoolo image"
        paddingBottom={{ base: "20px", md: "50px" }}
      />
      <Flex
        paddingLeft={{ base: "20px", md: "20px", lg: "270px" }}
        paddingRight={{ base: "20px", md: "20px", lg: "270px" }}
        flexDir="column"
      >
        <Flex paddingBottom={bottomPadding} flexDir="column">
          <Heading size="lg" paddingBottom={bottomPaddingHeading}>
            About the project
          </Heading>
          <Text>{zooloData["about"]}</Text>
        </Flex>
        <Details
          role="In this project, we did everything together."
          challenge="Current tool storage solutions are not adapted to the children´s
                physical and cognitive skills, nor do they increase motivation
                when cleaning up."
          projectTime="18 weeks"
        />
        <Heading paddingBottom={bottomPaddingHeading} size="lg">
          Process overview
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 3, lg: 5 }}
          spacing={4}
          justifyContent="center"
          paddingBottom={bottomPadding}
        >
          {zooloData["process_overview"].map((process) => (
            <ProcessOverview
              key={process.id}
              title={process.title}
              image={process.image}
            />
          ))}
        </SimpleGrid>
        <Heading size="lg" paddingBottom={bottomPaddingHeading}>
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
        <Heading size="lg" paddingBottom={bottomPaddingHeading}>
          Result
        </Heading>
        <Text paddingBottom={bottomPadding}>{zooloData["results"]}</Text>
        <Image src="/zoolo/result1.jpg" alt="Zoolo result 1" />
        <Flex
          flexDir={{ base: "column", md: "row" }}
          paddingBottom={bottomPadding}
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
        <Heading size="lg" paddingBottom={bottomPaddingHeading}>
          Reflections
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={8}
          justifyContent="center"
          paddingBottom={bottomPadding}
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
