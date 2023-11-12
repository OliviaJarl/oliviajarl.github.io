import { SimpleGrid } from "@chakra-ui/react";
import WorkCard from "./WorkCard";
import projects from "../data/projects";

const WorkGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={4}
      padding={20}
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
  );
};

export default WorkGrid;
