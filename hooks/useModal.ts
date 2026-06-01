import { useState } from "react";
import { Project } from "@/types/project";

export function useModal() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // opens the modal and passes the clicked project as an argument
  function openModal(project: Project) {
    setSelectedProject(project);
  }

  // closes the modal by resetting both states
  function closeModal() {
    setSelectedProject(null);
  }

  return { selectedProject, openModal, closeModal };
}
