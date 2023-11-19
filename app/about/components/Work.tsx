import { Flex, Heading, Text } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";
const Work = () => {
  return (
    <Flex flexDir="column">
      <Heading size="md" color="brand.100" paddingBottom={5}>
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
      <ResumeItem
        heading="Conductor assistant at the preschool Stegen, Bräcke diakoni"
        description="The preschool applied Conductive education and as a conductor assistant I got
        to help the children with their tasks under the guidance of a conductor."
        time="01.2019 - 07.2019"
      />
    </Flex>
  );
};

export default Work;
