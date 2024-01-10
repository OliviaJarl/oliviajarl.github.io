import {
  Box,
  Center,
  Image,
  Heading,
  Flex,
  Text,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import ProcessOverview from "../components/ProcessOverview";
import Details from "../components/Details";
import Reflection from "../components/Reflection";
import alarmUnit from "@/app/data/alarm_unit";
import DesignProcessElement from "../components/DesignProcessElement";

export default function AlarmUnit() {
  const bottomMargin = { base: "10px", md: "40px" };
  const bottomMarginHeading = { base: "10px", md: "25px" };
  return (
    <>
      <Box position="relative">
        <Image
          src={alarmUnit["poster_image"]}
          srcSet={alarmUnit["posterSrcSet"]}
          alt="Digital records image"
          aspectRatio="1500/731 auto"
          w="100%"
          zIndex={-1}
          marginBottom={{ base: "20px", md: "35px" }}
        />
        <Image
          src={alarmUnit["fading_image"]}
          alt="Overlay fading image"
          w="100%"
          position="absolute"
          top={0}
          left={0}
        />
      </Box>
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
          {alarmUnit["title"]}
        </Heading>
        <Flex marginBottom={bottomMargin} flexDir="column">
          <Heading size="lg" marginBottom={bottomMarginHeading}>
            About the project
          </Heading>
          <Text>{alarmUnit["about"]}</Text>
        </Flex>
        <Details
          role={alarmUnit["details"]["role"]}
          challenge={alarmUnit["details"]["challenge"]}
          projectTime={alarmUnit["details"]["projectTime"]}
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
          {alarmUnit["process_overview"].map((process) => (
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
        {alarmUnit["design_process"].map((step) => (
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
        <Text marginBottom={{ base: "10px", md: "20px" }}>
          {alarmUnit["results1"]}
        </Text>
        <Text marginBottom={{ base: "10px", md: "20px" }}>
          {alarmUnit["results2"]}
          <Link
            href="https://simonisaksen.com/"
            color="darkblue"
            isExternal={true}
          >
            Simon
          </Link>{" "}
          rendered.
        </Text>
        <Text marginBottom={bottomMargin}>{alarmUnit["results3"]}</Text>
        <Image
          src="/alarm_unit/systemmodel500.webp"
          srcSet="/alarm_unit/systemmodel1500.webp 1500w, /alarm_unit/systemmodel800.webp 800w, /alarm_unit/systemmodel500.webp 500w"
          alt="System model"
          aspectRatio="1253/712 auto"
        />
        <Image
          src="/alarm_unit/hta500.webp"
          srcSet="/alarm_unit/hta1500.webp 1500w, /alarm_unit/hta800.webp 800w, /alarm_unit/hta500.webp 500w"
          alt="HTA"
          aspectRatio="7087/2363 auto"
          marginBottom={{ base: "10px", md: "15px" }}
        />
        <SimpleGrid
          columns={{ sm: 1, lg: 2 }}
          marginBottom={{ base: "10px", md: "20px" }}
          justifyItems="center"
        >
          <Image
            src="/alarm_unit/result_1.svg"
            alt="Start screen"
            aspectRatio="353/469 auto"
          />
          <Image
            src="/alarm_unit/result_2.svg"
            alt="History screen"
            aspectRatio="353/469 auto"
          />
        </SimpleGrid>
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Reflections
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          justifyContent="center"
          marginBottom={bottomMargin}
        >
          {alarmUnit["reflections"].map((reflection) => (
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
