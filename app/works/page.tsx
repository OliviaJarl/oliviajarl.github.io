"use client";
import WorkSection from "./components/WorkSection";
import projects from "../data/projects";

export default function Works() {
  return (
    <>
      {projects.map((project) => (
        <WorkSection
          key={project.id}
          name={project.name}
          image={project.image_big}
          description={project.description}
          url={project.url}
          id={project.id}
        />
      ))}
    </>
  );
}
