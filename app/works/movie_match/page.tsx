import {
  Center,
  Image,
  Heading,
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import ProcessOverview from "../components/ProcessOverview";
import Details from "../components/Details";
import Reflection from "../components/Reflection";
import movieMatch from "@/app/data/movie_match";
import DesignProcessElement from "../components/DesignProcessElement";

export default function MovieMatch() {
  const bottomMargin = { base: "10px", md: "40px" };
  const bottomMarginHeading = { base: "10px", md: "25px" };
  return (
    <>
      <Image
        src={movieMatch["poster_image"]}
        alt="MovieMatch poster image"
        aspectRatio="1124/466 auto"
        marginBottom={{ base: "10px", md: "30px" }}
      />
      <Flex
        marginLeft={{ base: "30px", md: "40px", xl: "270px" }}
        marginRight={{ base: "30px", md: "40px", xl: "270px" }}
        flexDir="column"
      >
        <Heading size="2xl" marginBottom={"10px"} textAlign="center">
          {movieMatch["title"]}
        </Heading>
        <Flex marginBottom={bottomMargin} flexDir="column">
          <Heading size="lg" marginBottom={bottomMarginHeading}>
            About the project
          </Heading>
          <Text>{movieMatch["about"]}</Text>
        </Flex>
        <Details
          role={movieMatch["details"]["role"]}
          challenge={movieMatch["details"]["challenge"]}
          projectTime={movieMatch["details"]["projectTime"]}
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
          {movieMatch["process_overview"].map((process) => (
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
        {movieMatch["design_process"].map((step) => (
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
        <Text marginBottom={{ base: "10px", md: "25px" }}>
          {movieMatch["results"][0]}
        </Text>
        <Text marginBottom={bottomMargin}>{movieMatch["results"][1]}</Text>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacingY={{ base: "10px", md: "40px" }}
          spacingX={{ base: "10px", md: "100px" }}
          margin="auto"
          marginBottom={bottomMargin}
        >
          <Center w="fit-content">
            <Image
              src="/movie_match/result_1.svg"
              alt="Result 1"
              aspectRatio="208/439 auto"
            />
          </Center>
          <Center w="fit-content">
            <Image
              src="/movie_match/result_2.svg"
              alt="Result 2"
              aspectRatio="208/439 auto"
            />
          </Center>
          <Center w="fit-content">
            <Image
              src="/movie_match/result_3.svg"
              alt="Result 3"
              aspectRatio="208/439 auto"
            />
          </Center>
          <Center w="fit-content">
            <Image
              src="/movie_match/result_4.svg"
              alt="Result 4"
              aspectRatio="208/439 auto"
            />
          </Center>
          <Center w="fit-content">
            <Image
              src="/movie_match/result_5.svg"
              alt="Result 5"
              aspectRatio="208/439 auto"
            />
          </Center>
          <Center w="fit-content">
            <Image
              src="/movie_match/result_6.svg"
              alt="Result 6"
              aspectRatio="208/439 auto"
            />
          </Center>
        </SimpleGrid>
      </Flex>
    </>
  );
}
