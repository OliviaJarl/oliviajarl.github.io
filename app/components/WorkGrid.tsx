import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import WorkCard from "./WorkCard";
import projects from "../data/projects";
import { motion } from "framer-motion";

const WorkGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  return (
    <Box margin={{ base: 10, sm: 20 }}>
      <Heading marginBottom={{ base: "15px", md: "40px" }}>Works</Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={8}
        justifyContent="center"
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
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
