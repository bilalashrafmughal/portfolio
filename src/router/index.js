import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Navbar from "shared/navbar";
import About from "pages/about";
import Footer from "pages/home/footer";
import SkillsPage from "pages/skillspage";
import Projects from "pages/home/projects";
import Contact from "pages/contact";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
