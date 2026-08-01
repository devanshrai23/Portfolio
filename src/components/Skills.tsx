"use client";
import { motion } from "framer-motion";

const topSkills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"
];

const bottomSkills = [
  "C++", "Java", "Python", "SQL", "PostgreSQL", "Git", "Figma"
];

// We double the arrays so the marquee can loop seamlessly
const topMarquee = [...topSkills, ...topSkills, ...topSkills, ...topSkills];
const bottomMarquee = [...bottomSkills, ...bottomSkills, ...bottomSkills, ...bottomSkills];

export default function Skills() {
  return (
    <section className="py-24 bg-background overflow-hidden border-y border-border-subtle/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-foreground">
          What I bring to the table
        </h2>
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* Top Row - Scrolls Left */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[100vw] lg:w-max">
          <motion.div
            className="flex gap-4 min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {topMarquee.map((skill, index) => (
              <div
                key={`top-${index}`}
                className="flex items-center gap-2 px-6 py-3 bg-surface border border-border-subtle rounded-full whitespace-nowrap shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-accent-indigo" />
                <span className="font-mono text-sm font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Scrolls Right */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[100vw] lg:w-max left-0 md:-left-1/2">
          <motion.div
            className="flex gap-4 min-w-full"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {bottomMarquee.map((skill, index) => (
              <div
                key={`bottom-${index}`}
                className="flex items-center gap-2 px-6 py-3 bg-surface border border-border-subtle rounded-full whitespace-nowrap shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-zinc-900" />
                <span className="font-mono text-sm font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Gradient Fades for Marquee */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
