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
export default function Zoolo() {
  const bottomMargin = { base: "10px", md: "40px" };
  const bottomMarginHeading = { base: "10px", md: "25px" };
  return (
    <>
      <Center>
        <Image
          src={digitalRecords["poster_image"]}
          alt="Digital records image"
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
          {digitalRecords["title"]}
        </Heading>
        <Flex marginBottom={bottomMargin} flexDir="column">
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
          marginBottom={bottomMargin}
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
        <Text marginBottom={bottomMargin}>{digitalRecords["results"]}</Text>
        <VStack>
          <SimpleGrid
            columns={{ sm: 1, lg: 2 }}
            marginBottom={{ base: "10px", md: "20px" }}
          >
            <Center>
              <Image src="/digital_records/result_1.svg" alt="Result 1" />
            </Center>
            <Center>
              <Image src="/digital_records/result_2.svg" alt="Result 2" />
            </Center>
            <Center>
              <Image src="/digital_records/result_3.svg" alt="Result 3" />
            </Center>
            <Center>
              <Image src="/digital_records/result_4.svg" alt="Result 4" />
            </Center>
          </SimpleGrid>
          <Image
            src="/digital_records/poster.png"
            alt="Project poster"
            w={{ base: "100%", md: "60%" }}
            marginBottom={bottomMargin}
          />
        </VStack>

        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Reflections
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          justifyContent="center"
          marginBottom={bottomMargin}
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
