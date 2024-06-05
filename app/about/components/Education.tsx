import { Flex, Heading } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";
const Education = () => {
  return (
    <Flex flexDir="column">
      <Heading
        size="md"
        color="brand.100"
        marginBottom={{ base: "10px", lg: "20px" }}
      >
        Education
      </Heading>
      <ResumeItem
        heading="Interaction design and technologies - Master's programme, Chalmers
        University of Technology"
        description="Master’s thesis: Touchless interfaces for healthcare communication"
        time="2022.08 - 2024.06"
      />
      <ResumeItem
        heading="Industrial design engineering - BSE, Chalmers University of Technology"
        description="Bachelor’s thesis: Portable, digital medical record to the emergency department"
        time="2019.08 - 2022.06"
      />
      <ResumeItem
        heading="Medical school, University of Gothenburg"
        time="2017.01 - 2018.10"
      />
    </Flex>
  );
};

export default Education;
