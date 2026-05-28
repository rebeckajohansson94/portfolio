import { useState } from "react";
import { Project } from "@/types/project";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // opens the modal and passes the clicked project as an argument
  function openModal(project: Project) {
    setSelectedProject(project);
    setIsOpen(true);
  }

  // closes the modal by resetting both states
  function closeModal() {
    setIsOpen(false);
    setSelectedProject(null);
  }

  return { isOpen, selectedProject, openModal, closeModal };
}
