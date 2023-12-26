"use client";
import { SimpleGrid } from "@chakra-ui/react";
import WorkSectionCard from "./components/WorkSectionCard";
import projects from "../data/projects";
import { motion } from "framer-motion";

export default function Works() {
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
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        spacing={10}
        marginLeft={{ base: "25px", sm: "35px", md: "50px", lg: "60px" }}
        marginRight={{ base: "25px", sm: "35px", md: "50px", lg: "60px" }}
        marginTop={{ base: "15px", sm: "25px", md: "35px"}}
        marginBottom={{ base: "15px", sm: "25px", md: "35px"}}
        justifyContent="center"
        as={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <WorkSectionCard
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            url={project.url}
            gradient={project.gradient}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
