"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Systems Engineer</span>, I decided to
        dedicate to Software development. My first program was developed in{" "}
        <span className="font-medium">C++</span>. Then, I emigrated to Uruguay.
        I took a <span className="font-medium">GeneXus</span> course where I
        improved my knowledge about the{" "}
        <span className="font-medium">development of Applications and SQL</span>
        . A few years later I enrolled in the Plazi Full Stack Academy where I
        learned <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          GeneXus, React, Next.js, Node.js, and SQL
        </span>
        . I'm also familiar with TypeScript and TypeORM. I am always looking to
        learn new technologies. I'm currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, going to de gym, reading and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm currently
        learning about{" "}
        <span className="font-medium">
          investments, stock exchange and cryptocurrencies
        </span>
      </p>
    </motion.section>
  );
}
