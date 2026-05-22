import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Book Coven",
    shortDesc: "UX design for a mobile book tracking app",
    description:
      "A concept app for lovers of the fantasy genre to track their reading, get recommendations and join a book club community. Designed with a focus on visual hierarchy, consistency and readability - keeping the interface clean while maintaining a warm, mystical aesthetic.",
    stack: ["Figma", "UX Design", "Prototyping"],
    image: "/images/bookcovenapp.png",
    gradient: "from-[#0f0a06] to-[#6B3A2A]",
  },
  {
    id: 6,
    title: "WordPress / LIA",
    shortDesc: "Client websites built during internship",
    description:
      "During my first internship at a web agency I built and launched two websites that are live and in active use by clients. I'm happy to share more details and links during a conversation.",
    stack: ["WordPress", "Elementor", "CSS"],
    image: "/images/wplia.png",
    gradient: "from-[#1a0e06] to-[#9b7a55]",
  },
  {
    id: 3,
    title: "Pokémon App",
    shortDesc: "A Pokédex app built for mobile",
    description:
      "A mobile app where you can generate random Pokémon, browse the full Pokédex and save your favourites. Built with React Native and Expo as a school project, with a focus on typed components, API integration and clean loading/error handling.",
    stack: ["React Native", "Expo", "TypeScript", "PokéAPI"],
    image: "/images/pokemonsapp.png",
    github: "https://github.com/rebeckajohansson94/pokemon-app",
    gradient: "from-[#2C1810] to-[#9b7a55]",
  },
  {
    id: 4,
    title: "Quote App",
    shortDesc: "A clean quote generator for mobile",
    description:
      "A simple but polished mobile app that fetches random quotes from a public API. Built to practice core React Native concepts - component structure, API calls and TypeScript in a mobile environment.",
    stack: ["React Native", "Expo", "TypeScript", "DummyJSON API"],
    image: "/images/appquotes.png",
    github: "https://github.com/rebeckajohansson94/qoute-app",
    gradient: "from-[#1a0a04] to-[#8B6347]",
  },
  {
    id: 5,
    title: "Todo Board",
    shortDesc: "A kanban board with drag and drop",
    description:
      "A fully interactive kanban board with three columns — Todo, Doing and Done. Tasks can be added, edited, deleted and dragged between columns. Built with dnd-kit for drag and drop, and useReducer + useContext for state management.",
    stack: ["React", "Vite", "Tailwind CSS", "dnd-kit", "TypeScript"],
    image: "/images/kanban.png",
    github: "https://github.com/rebeckajohansson94/todo-board",
    gradient: "from-[#0f0a06] to-[#2C1810]",
  },
  {
    id: 2,
    title: "Vandrande Kassar",
    shortDesc: "UX design for a circular fashion app",
    description:
      "A group UX project designing an app for borrowing and lending bags within a local community. I was responsible for the login screen and the 'My Bags' view. Key focus areas included status visibility - giving users clear feedback on where their bags are in the queue - alongside a playful but accessible visual style.",
    stack: ["Figma", "UX Design", "Prototyping"],
    image: "/images/vandrandekassargrupp.png",
    gradient: "from-[#2a1508] to-[#9b7045]",
  },
];
