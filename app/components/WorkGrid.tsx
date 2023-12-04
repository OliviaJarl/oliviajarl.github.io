import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import WorkCard from "./WorkCard";
import projects from "../data/projects";

const WorkGrid = () => {
  return (
    <Box margin={{ base: 10, sm: 20 }}>
      <Heading marginBottom="15px">Works</Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={8}
        justifyContent="center"
      >
        {projects.map((project) => (
          <WorkCard
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WorkGrid;
