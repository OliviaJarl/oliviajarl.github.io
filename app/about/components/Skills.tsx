import { Flex, Heading } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";
const Skills = () => {
  return (
    <Flex flexDir="column">
      <Heading
        size="md"
        color="brand.100"
        marginBottom={{ base: "10px", lg: "20px" }}
      >
        Software & programming experience
      </Heading>
      <ResumeItem
        heading="Programming"
        description="Python, Java, JavaScript, HTML/CSS, MATLAB"
      />
      <ResumeItem
        heading="Graphic design"
        description="Figma, Illustrator, Adobe XD, InDesign"
      />
      <ResumeItem
        heading="3D modeling"
        description="CATIA V5, Autodesk Alias"
      />
    </Flex>
  );
};

export default Skills;
