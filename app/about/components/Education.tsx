import { Flex, Heading, Text } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";
const Education = () => {
  return (
    <Flex flexDir="column">
      <Heading
        size="md"
        color="brand.100"
        marginBottom={{ base: "10px", lg: "20px" }}
        borderBottom={{ base: "0px", lg: "2px" }}
        borderColor="#2D384C"
      >
        Education
      </Heading>
      <ResumeItem
        heading="Interaction design and technologies - Master's programme, Chalmers
        University of Technology"
        description="To supplement the design courses, I have chosen programming courses, both
        front-end and back-end, as elective courses."
        time="08.2022 -"
      />
      <ResumeItem
        heading="Industrial design engineering - BSE, Chalmers University of Technology"
        description="Bachelor's thesis: Portable, digital medical record to the emergency department"
        time="08.2019 - 06.2022"
      />
      <ResumeItem
        heading="Medical school, University of Gothenburg"
        time="01.2017 - 10.2018"
      />
    </Flex>
  );
};

export default Education;
