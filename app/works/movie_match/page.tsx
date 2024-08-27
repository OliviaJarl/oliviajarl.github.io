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
import movieMatch from "@/app/data/movie_match";
import DesignProcessElement from "../components/DesignProcessElement";
import {
  bottomMarginWork,
  bottomMarginHeading,
  sideMarginsWork,
  mainHeadingBottomMargin,
} from "@/app/constants";

export default function MovieMatch() {
  return (
    <>
      <Image
        src={movieMatch["poster_image"]}
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
          {movieMatch["title"]}
        </Heading>
        <Flex marginBottom={bottomMarginWork} flexDir="column">
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
          marginBottom={bottomMarginWork}
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
        <Text marginBottom={bottomMarginWork}>{movieMatch["results"][1]}</Text>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacingY={{ base: "20px", md: "40px" }}
          spacingX={{ base: "10px", md: "100px" }}
          margin="auto"
          marginBottom={bottomMarginWork}
          justifyItems="center"
        >
          <Image
            src="/movie_match/result_1.svg"
            alt="Result 1"
            aspectRatio="208/439 auto"
          />
          <Image
            src="/movie_match/result_2.svg"
            alt="Result 2"
            aspectRatio="208/439 auto"
          />
          <Image
            src="/movie_match/result_3.svg"
            alt="Result 3"
            aspectRatio="208/439 auto"
          />
          <Image
            src="/movie_match/result_4.svg"
            alt="Result 4"
            aspectRatio="208/439 auto"
          />
          <Image
            src="/movie_match/result_5.svg"
            alt="Result 5"
            aspectRatio="208/439 auto"
          />
          <Image
            src="/movie_match/result_6.svg"
            alt="Result 6"
            aspectRatio="208/439 auto"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
}
