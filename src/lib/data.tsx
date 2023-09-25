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
    title: "OnlineStore",
    description:
      "When I graduated as a full stack developer, I developed an online store with all its functionalities: shopping cart, payment gateway, user account, among others.",
    tags: ["Next.js", "Node.js", "Tailwind", "TypeORM", "PostgreSQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "MiChurryApp",
    description:
      "Private application where the company kept data on its clients and also on products and services they offered.",
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "Java", "MySQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "SoftLegi",
    description:
      "Private application where casino customer data is recorded and saved in databases.",
    tags: ["C++", "Qt Creator", "SQL", "MySQL", "CSS"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Bookid's",
    description:
      "Digital encyclopedia where primary school children can search for information corresponding to the subjects taught in a semester.",
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "LocalStorage"],
    imageUrl: rmtdevImg,
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
