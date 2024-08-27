import {
  Image,
  Heading,
  Flex,
  Link,
  Text,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import ProcessOverview from "../components/ProcessOverview";
import Details from "../components/Details";
import DesignProcessElement from "../components/DesignProcessElement";
import {
  bottomMarginWork,
  bottomMarginHeading,
  sideMarginsWork,
  mainHeadingBottomMargin,
} from "@/app/constants";
import mhStats from "@/app/data/mhstats";

export default function MHStats() {
  return (
    <>
      <Image
        src={mhStats["poster_image"]}
        alt="MHStats poster image"
        aspectRatio="1124/466 auto"
        marginBottom={{ base: "10px", md: "30px" }}
      />
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
          {mhStats["title"]}
        </Heading>
        <Flex marginBottom={bottomMarginWork} flexDir="column">
          <Heading size="lg" marginBottom={bottomMarginHeading}>
            About the project
          </Heading>
          <Text>
            {mhStats["about"]}
            <Link href="https://mhstats.vercel.app/" isExternal>
              here.
            </Link>
          </Text>
        </Flex>
        <Details
          challenge={mhStats["details"]["challenge"]}
          projectTime={mhStats["details"]["projectTime"]}
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
          {mhStats["process_overview"].map((process) => (
            <ProcessOverview
              key={process.id}
              title={process.title}
              image={process.image}
            />
          ))}
        </SimpleGrid>
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Process
        </Heading>
        {mhStats["design_process"].map((step) => (
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
        <Text marginBottom={{base: "15px", md: "20px"}}>{mhStats["results"]}</Text>
        <Link
          href="https://mhstats.vercel.app/"
          isExternal
          marginBottom={bottomMarginWork}
          _hover={{ textDecoration: "none" }}
          w="100%"
          alignSelf="center"

        >
          <HStack
            borderColor="#015C48"
            borderWidth="1px"
            borderRadius="6px"
            h="40px"
            justifyContent="center"
            w="100%"
            _hover={{ bg: "#EBFCF9" }}
          >
            <Image src="/mhstats/mhstats.svg" alt="MHStats logo" h="60%" />
            <Text fontWeight="bold" color="#015C48">Visit MHStats</Text>
          </HStack>
        </Link>
      </Flex>
    </>
  );
}
