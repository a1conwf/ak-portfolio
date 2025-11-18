import { nanoid } from "nanoid";
import { IProjectItem } from "../types";

export const projectsData: IProjectItem[] = [
  {
    id: nanoid(),
    img: "/assets/img/next-pizza.png",
    name: "Next pizza(in progress)",
    techList: [
      "Next.js",
      "typescript",
      "tailwind",
      "prisma",
      "nextauth",
      "react hook form",
      "zod",
      "zustand",
    ],
    liveLink: "https://todo-app-beta-red-44.vercel.app/",
    gitRepo: "https://github.com/a1conwf/todo-app",
  },
  {
    id: nanoid(),
    img: "/assets/img/todo-app.webp",
    name: "Todo app",
    techList: ["React", "typescript", "tailwind"],
    liveLink: "https://todo-app-beta-red-44.vercel.app/",
    gitRepo: "https://github.com/a1conwf/todo-app",
  },
  {
    id: nanoid(),
    img: "/assets/img/password-generator-app.webp",
    name: "Password Generator App",
    techList: ["React", "typescript", "scss modules"],
    liveLink: "https://password-generator-app-six-alpha.vercel.app/",
    gitRepo: "https://github.com/a1conwf/password-generator-app",
  },
  {
    id: nanoid(),
    img: "/assets/img/pizza-palace.png",
    name: "Pizza Palace",
    techList: [
      "React",
      "React router",
      "React skeleton",
      "Typescript",
      "Redux Toolkit",
      "Axios",
      "scss modules",
    ],
    liveLink: "https://pizza-palace-lilac.vercel.app/",
    gitRepo: "https://github.com/a1conwf/pizza-palace",
  },
  {
    id: nanoid(),
    img: "/assets/img/portfolio-website.webp",
    name: "Portfolio Website",
    techList: ["React", "Typescript", "Scss modules", "React hook form", "Zod"],
    liveLink: "https://antonkashuba.dev/",
    gitRepo: "https://github.com/a1conwf/ak-portfolio",
  },
];
