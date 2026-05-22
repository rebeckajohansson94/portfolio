export type Project = {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  stack: string[];
  image: string;
  github?: string; // optional då inte alla projekt kommer länkas till GitHub
};
