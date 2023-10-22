import React from "react";
import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  return <div>Projects</div>;
};

export default Projects;
