import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaDatabase, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@public/corpcomment.png";
import rmtdevImg from "@public/rmtdev.png";
import wordanalyticsImg from "@public//wordanalytics.png";

// type Ejemplo = {
//   name: string;
//   hash: string;
// };
// export const ejemplo: Ejemplo[] = [
//   {
//     name: "Home",
//     hash: "#home",
//   },
// ];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior GeneXus Analyst",
    location: "Montevideo, Uruguay",
    description:
      "Now I'm working as a Senior GeneXus Analyst, I also graduated as a Full Stack Developer at Platzi. My stack includes GeneXus, React, Next.js, TypeScript, Tailwind, MySQL, Tomcat, Docker, Linux. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "GeneXus Analyst",
    location: "Montevideo, Uruguay",
    description:
      "I worked as a GeneXus Analyst for 3 years in a Arnaldo Castro S.A. I participate in the development of applications for recognized companies in Uruguay, for example: VUCE, Ceibal, MSP, Presidencia, among others. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Systems Technician",
    location: "Nueva Esparta, Venezuela",
    description:
      "I worked as a Systems Technician for 1 years in a well-known casino on the island. In this job, I developed a customer registration application with C++ and MySQL.",
    icon: React.createElement(FaDatabase),
    date: "2017 - 2018",
  },
  {
    title: "Graduated Systems Engineer",
    location: "Nueva Esparta, Venezuela",
    description:
      "I graduated after 5 years of studying. I immediately found a job as a Systems Technician.",
    icon: React.createElement(LuGraduationCap),
    date: "2012 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "PostgreSQL",
  "GeneXus",
  "Tomcat",
  "Linux",
  "Docker",
] as const;
