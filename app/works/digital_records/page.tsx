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
import digitalRecords from "@/app/data/digital_records";
import DesignProcessElement from "../components/DesignProcessElement";
import {
  bottomMarginWork,
  bottomMarginHeading,
  sideMarginsWork,
} from "@/app/constants";

export default function Zoolo() {
  return (
    <>
      <Center>
        <Image
          src={digitalRecords["poster_image"]}
          alt="Digital records image"
          aspectRatio="649/340 auto"
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
          marginBottom={{ base: "10px", md: "25px" }}
          textAlign="center"
        >
          {digitalRecords["title"]}
        </Heading>
        <Flex marginBottom={bottomMarginWork} flexDir="column">
          <Heading size="lg" marginBottom={bottomMarginHeading}>
            About the project
          </Heading>
          <Text>{digitalRecords["about"]}</Text>
        </Flex>
        <Details
          role={digitalRecords["details"]["role"]}
          challenge={digitalRecords["details"]["challenge"]}
          projectTime={digitalRecords["details"]["projectTime"]}
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
          {digitalRecords["process_overview"].map((process) => (
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
        {digitalRecords["design_process"].map((step) => (
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
        <Text marginBottom={bottomMarginWork}>{digitalRecords["results"]}</Text>
        <VStack>
          <SimpleGrid
            columns={{ sm: 1, lg: 2 }}
            marginBottom={{ base: "10px", md: "20px" }}
            justifyItems="center"
          >
            <Image
              src="/digital_records/result_1.svg"
              alt="Result 1"
              aspectRatio="353/469 auto"
            />
            <Image
              src="/digital_records/result_2.svg"
              alt="Result 2"
              aspectRatio="353/469 auto"
            />
            <Image
              src="/digital_records/result_3.svg"
              alt="Result 3"
              aspectRatio="353/469 auto"
            />

            <Image
              src="/digital_records/result_4.svg"
              alt="Result 4"
              aspectRatio="353/469 auto"
            />
          </SimpleGrid>
          <Image
            src="/digital_records/project_poster500.png"
            srcSet={digitalRecords["project_poster_src"]}
            aspectRatio="1500/2121 auto"
            alt="Project poster"
            w={{ base: "100%", md: "60%" }}
            marginBottom={bottomMarginWork}
          />
        </VStack>
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Reflections
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          justifyContent="center"
          marginBottom={bottomMarginWork}
        >
          {digitalRecords["reflections"].map((reflection) => (
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
