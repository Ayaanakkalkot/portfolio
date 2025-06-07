import React from 'react';
import Certifications from "../components/Certifications";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="skills" className="min-h-screen">
          <Experience />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="certifications" className="min-h-screen">
          <Certifications />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}