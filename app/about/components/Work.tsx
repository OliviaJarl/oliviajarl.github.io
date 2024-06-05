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
        description="In our thesis, we studied how conventional healthcare communication devices could be supplemented with touchless interfaces."
        time="2024.01 - 2024.06"
      />
      <ResumeItem
        heading="Designer at Wiretronic's AI division, Wirevision"
        description="I created UI design proposals for meetings with potential customers and did graphic design, including designing user manuals, symbols, and illustrations."
        time="2023.06 - 2024.01"
      />
      <ResumeItem
        heading="Seasonal work as a salesperson at Systembolaget"
        description="I had customer meetings, worked in the cash register and unpacked goods."
        time="2020.06 - 2022.08"
      />
    </Flex>
  );
};

export default Work;
