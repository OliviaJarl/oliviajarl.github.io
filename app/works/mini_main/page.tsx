import {
  Center,
  Image,
  Link,
  Heading,
  Flex,
  ListItem,
  OrderedList,
  UnorderedList,
  Text,
  SimpleGrid,
  VStack,
  Stack,
} from "@chakra-ui/react";
import ProcessOverview from "../components/ProcessOverview";
import Details from "../components/Details";
import Reflection from "../components/Reflection";
import miniMain from "@/app/data/mini_main";
import DesignProcessElement from "../components/DesignProcessElement";
import {
  bottomMarginWork,
  bottomMarginHeading,
  sideMarginsWork,
  mainHeadingBottomMargin,
} from "@/app/constants";

export default function MiniMain() {
  return (
    <>
      <Center>
        <Image
          src={miniMain["poster_image"]}
          alt="Mini main poster image"
          srcSet={miniMain["posterSrcSet"]}
          aspectRatio="1500/773 auto"
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
          {miniMain["title"]}
        </Heading>
        <Flex marginBottom={bottomMarginWork} flexDir="column">
          <Heading size="lg" marginBottom={bottomMarginHeading}>
            About the project
          </Heading>
          <Text>
            My thesis partner{" "}
            <Link
              href="https://amandaolsby.myportfolio.com/"
              color="darkblue"
              isExternal={true}
            >
              Amanda
            </Link>{" "}
            {miniMain["about"]}
          </Text>
        </Flex>
        <Details
          role={miniMain["details"]["role"]}
          challenge={miniMain["details"]["challenge"]}
          projectTime={miniMain["details"]["projectTime"]}
        />
        <Heading marginBottom={bottomMarginHeading} size="lg">
          Process overview
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 3, lg: 6 }}
          spacing={4}
          justifyContent="center"
          marginBottom={bottomMarginWork}
        >
          {miniMain["process_overview"].map((process) => (
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
        <DesignProcessElement
          title="Literature studies"
          description={miniMain["literature_studies"]}
          images=""
        />
        <DesignProcessElement
          title="User studies"
          description={miniMain["user_studies"]}
          images="/mini_main/user_studies.webp"
        />
        <VStack marginBottom={bottomMarginWork} alignItems="left">
          <Heading size="md">Analyse</Heading>
          <Text marginBottom="14px">{miniMain["analyse"]}</Text>
          <Stack
            flexDir={{ base: "column", md: "row" }}
            spacing={{ base: "10px", md: "20px" }}
          >
            <Image
              alt="The affinity diagram"
              src="/mini_main/affinity_diagram.webp"
              w="50%"
            />
            <Image
              alt="One of the personas"
              src="/mini_main/persona.svg"
              w="50%"
            />
          </Stack>
        </VStack>
        <DesignProcessElement
          title="Ideate"
          description={miniMain["ideate"]}
          images=""
        />
        <VStack marginBottom={bottomMarginWork} alignItems="left">
          <Heading size="md">Prototype I</Heading>
          <Text marginBottom="14px">{miniMain["prototype_1"]}</Text>
          <Image
            alt="Visualisations of some of the ideas"
            src="/mini_main/prototype1.webp"
          />
        </VStack>
        <DesignProcessElement
          title="Evaluate I"
          description={miniMain["evaluate_1"]}
          images=""
        />
        <VStack marginBottom={bottomMarginWork} alignItems="left">
          <Heading size="md">Prototype II</Heading>
          <Text marginBottom="14px">{miniMain["prototype_2"]}</Text>
          <Image
            alt="Initial sketches of our concepts"
            src="/mini_main/Prototype2.svg"
          />
        </VStack>
        <DesignProcessElement
          title="Evaluate II"
          description={miniMain["evaluate_2"]}
          images="/mini_main/usability_testing.svg"
        />
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Result
        </Heading>
        <Text marginBottom={{ base: "15px", md: "20px", lg: "35px" }}>
          {miniMain["results"]}
        </Text>
        <Heading size="md" marginBottom="10px">
          Problem areas
        </Heading>
        <Text marginBottom={{ sm: "10px", md: "20px" }}>
          {miniMain["result_problems"]}
        </Text>
        <OrderedList spacing={3} marginBottom={bottomMarginWork}>
          {miniMain["problem_areas"].map((problem) => (
            <ListItem
              key={problem.id}
              marginLeft={{ sm: "10px", md: "20px", lg: "40px" }}
            >
              {problem.title}
            </ListItem>
          ))}
        </OrderedList>
        <Heading size="md" marginBottom="10px">
          Requirements
        </Heading>
        <Text marginBottom={{ sm: "10px", md: "20px" }}>
          {miniMain["result_requirements"]}
        </Text>
        <UnorderedList spacing={3} marginBottom={bottomMarginWork}>
          {miniMain["requirements"].map((requirement) => (
            <ListItem
              key={requirement.id}
              marginLeft={{ sm: "10px", md: "20px", lg: "40px" }}
            >
              {requirement.title}
            </ListItem>
          ))}
        </UnorderedList>
        <Heading size="md" marginBottom="10px">
          Design
        </Heading>
        <Text marginBottom={{ base: "10px", md: "20px" }}>
          {miniMain["design_1"]}
        </Text>
        <Text marginBottom={{ base: "10px", md: "20px" }}>
          {miniMain["design_2"]}
        </Text>
        <Text marginBottom={{ base: "10px", md: "20px" }}>
          {miniMain["design_3"]}
        </Text>
        <Text marginBottom={{ sm: "10px", md: "20px", lg: "40px" }}>
          {miniMain["design_4"]}
        </Text>
        <VStack
          spacing={{ base: "10px", md: "30px", lg: "40px" }}
          marginBottom={bottomMarginWork}
        >
          {miniMain["design_images"].map((image) => (
            <Image
              key={image.key}
              src={image.src}
              srcSet={image.srcSet}
              alt={image.alt}
              aspectRatio={image.aspectRatio}
              w={{ base: "100%", md: "80%" }}
            />
          ))}
        </VStack>
        <Heading size="lg" marginBottom={bottomMarginHeading}>
          Reflection
        </Heading>
        <SimpleGrid
          columns={{ base: 1 }}
          spacing={8}
          justifyContent="center"
          marginBottom={bottomMarginWork}
        >
          {miniMain["reflections"].map((reflection) => (
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
