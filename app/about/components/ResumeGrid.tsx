import React from "react";
import { GridItem, Grid, Heading } from "@chakra-ui/react";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const ResumeGrid = () => {
  return (
    <>
      <Heading size="xl" paddingLeft={50}>
        Resume
      </Heading>
      <Grid
        templateAreas={{
          base: `
                  "education" "work" "skills" `,
          md: `
                  "education skills "
                  "work skills "`,
        }}
        gap="1"
        columnGap="10"
        padding={50}
        gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
      >
        <GridItem pl="2" area={"skills"}>
          <Skills />
        </GridItem>
        <GridItem pl="2" area={"education"}>
          <Education />
        </GridItem>
        <GridItem pl="2" area={"work"}>
          <Work />
        </GridItem>
      </Grid>
    </>
  );
};

export default ResumeGrid;
