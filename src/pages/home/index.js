import React from "react";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
