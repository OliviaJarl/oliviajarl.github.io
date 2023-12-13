import React from "react";
import { Box, GridItem, Grid, Heading } from "@chakra-ui/react";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const ResumeGrid = () => {
  return (
    <Box
      marginLeft={{ base: "10px", md: "60px", lg: "70px" }}
      marginRight={{ base: "10px", md: "60px", lg: "70px" }}
    >
      <Heading
        size="lg"
        color="brand.100"
        marginBottom={{ base: "10px", md: "25px" }}
      >
        Short resume
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
        gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
      >
        <GridItem area={"skills"}>
          <Skills />
        </GridItem>
        <GridItem area={"education"}>
          <Education />
        </GridItem>
        <GridItem area={"work"}>
          <Work />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ResumeGrid;
