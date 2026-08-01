"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="flex flex-col w-full"
      >
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Coding Profiles Section */}
        <CodingProfiles />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact />

      </motion.div>
      <Footer />
    </div>
  );
}
