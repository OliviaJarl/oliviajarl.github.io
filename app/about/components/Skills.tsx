import { Flex, Heading, Text } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";
const Skills = () => {
  return (
    <Flex flexDir="column">
      <Heading size="md" color="#323F56" paddingBottom={5}>
        Software & programming experience
      </Heading>
      <ResumeItem
        heading="Programming"
        description="MATLAB, Python, Java, JavaScript, HTML/CSS"
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
