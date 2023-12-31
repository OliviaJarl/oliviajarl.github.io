import { Flex, Heading, Text } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";
const Skills = () => {
  return (
    <Flex flexDir="column">
      <Heading
        size="md"
        color="brand.100"
        marginBottom={{ base: "10px", lg: "20px" }}
        borderBottom={{ base: "0px", lg: "2px" }}
        borderColor="#2D384C"
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
