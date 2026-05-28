export type Project = {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  year: string;
  stack: string[];
  image: string;
  github?: string; // optional
  figma?: string; // optional
};
