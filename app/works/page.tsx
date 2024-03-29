"use client";
import { SimpleGrid } from "@chakra-ui/react";
import WorkSectionCard from "./components/WorkSectionCard";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { sideMargins } from "../constants";

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
        spacing={{ base: 5, md: 8 }}
        marginLeft={{
          base: sideMargins["base"],
          md: sideMargins["md"],
          lg: sideMargins["lg"],
        }}
        marginRight={{
          base: "15px",
          md: sideMargins["md"],
          lg: sideMargins["lg"],
        }}
        marginTop={{ base: "15px", sm: "25px", md: "35px" }}
        marginBottom={{ base: "15px", sm: "25px", md: "35px" }}
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
            thumbnailSrcSet={project.thumbnailSrcSet}
            description={project.description}
            url={project.url}
            gradient={project.gradient}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
