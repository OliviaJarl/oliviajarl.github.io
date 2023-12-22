import { Flex, Heading, Text } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";
const Work = () => {
  return (
    <Flex flexDir="column">
      <Heading
        size="md"
        color="brand.100"
        marginBottom={{ base: "10px", md: "20px" }}
        borderBottom={{ base: "0px", md: "2px" }}
        borderColor="#2D384C"
      >
        Work experience
      </Heading>
      <ResumeItem
        heading="Designer at Wiretronic's AI division, Wirevision"
        description="I mainly worked with graphic design, and some of the tasks were designing user
        manuals, symbols and icons, illustrations and Word and Powerpoint templates."
        time="06.2023 -"
      />
      <ResumeItem
        heading="Seasonal work as a salesperson at Systembolaget"
        description="I had customer meetings, worked in the cash register and unpacked goods."
        time="06.2020 - 08.2022"
      />
    </Flex>
  );
};

export default Work;
