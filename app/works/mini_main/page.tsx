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

export default function DigitalRecord() {
  return (
    <>
      <Center>
        <Image
          src={miniMain["poster_image_small"]}
          alt="Zoolo poster image"
          srcSet={miniMain["posterSrcSet"]}
          aspectRatio="1280/643 auto"
          marginBottom={{ base: "10px", md: "30px" }}
          w={"30%"}
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
        <Text>{miniMain["result_problems"]}</Text>
      </Flex>
    </>
  );
}
