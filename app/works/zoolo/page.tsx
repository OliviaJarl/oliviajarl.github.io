import { Image, Heading, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import ProcessOverview from "../components/ProcessOverview";
import Details from "../components/Details";
import Reflection from "../components/Reflection";
import zooloData from "@/app/data/zoolo";
import DesignProcessElement from "../components/DesignProcessElement";
import {
  bottomMarginWork,
  bottomMarginHeading,
  sideMarginsWork,
  mainHeadingBottomMargin,
} from "@/app/constants";

export default function Zoolo() {
  return (
    <>
      <Image
        src={zooloData["poster_image_small"]}
        alt="Zoolo poster image"
        srcSet={zooloData["posterSrcSet"]}
        aspectRatio="1280/643 auto"
        marginBottom={{ base: "10px", md: "30px" }}
      />
      <Heading
        size="2xl"
        marginBottom={mainHeadingBottomMargin}
        textAlign="center"
      >
        {zooloData["title"]}
      </Heading>
      <Flex
        marginLeft={sideMarginsWork}
        marginRight={sideMarginsWork}
        flexDir="column"
      >
        <Flex marginBottom={bottomMarginWork} flexDir="column">
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
          marginBottom={bottomMarginWork}
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
        <Text marginBottom={bottomMarginWork}>{zooloData["results"]}</Text>
        <Image
          src="/zoolo/result1_500.jpg"
          srcSet="/zoolo/result1_500.jpg 500w, /zoolo/result1_1000.jpg 1000w, /zoolo/result1_1300.jpg 1300w"
          alt="Zoolo result 1"
          aspectRatio="1300/760 auto"
        />
        <Flex
          flexDir={{ base: "column", md: "row" }}
          marginBottom={bottomMarginWork}
        >
          <Image
            src="/zoolo/result2.png"
            alt="Zoolo result 2"
            w={{ md: "52%" }}
            aspectRatio="650/681 auto"
          />
          <Image
            src="/zoolo/result3.png"
            alt="Zoolo result 3"
            w={{ md: "48%" }}
            aspectRatio="650/681 auto"
          />
        </Flex>
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Reflections
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={8}
          justifyContent="center"
          marginBottom={bottomMarginWork}
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
