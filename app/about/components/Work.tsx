import { Flex, Heading } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";
const Work = () => {
  return (
    <Flex flexDir="column">
      <Heading
        size="md"
        color="brand.100"
        marginBottom={{ base: "10px", lg: "20px" }}
      >
        Work experience
      </Heading>
      <ResumeItem
        heading="Master thesis student at Ascom Sweden"
        description="In our thesis, we study how conventional mobile communication devices can be complemented with alternative, touchless interfaces in hospitals."
        time="01.2024 -"
      />
      <ResumeItem
        heading="Designer at Wiretronic's AI division, Wirevision"
        description="I have worked a lot with graphic design, including designing user manuals, symbols, and illustrations. I have also created app design proposals for meetings with potential customers."
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
