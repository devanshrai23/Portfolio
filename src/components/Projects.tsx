"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <span className="text-accent-indigo font-mono font-semibold uppercase tracking-widest text-sm flex items-center justify-center md:justify-start gap-2">
              <span>✦</span> My Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-foreground max-w-2xl leading-tight">
              Projects That Delivered Real Impact
            </h2>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const projectNumber = (index + 1).toString().padStart(2, '0');

            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`bg-surface border border-border-subtle rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                
                {/* Text Content */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                  
                  {/* Big Number inside card */}
                  <div className="absolute top-6 right-8 md:top-10 md:right-12 text-6xl md:text-8xl font-extrabold text-muted-foreground/10 pointer-events-none select-none font-sans">
                    {projectNumber}
                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold font-sans text-foreground mb-4 z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-sans text-lg mb-8 max-w-xl z-10 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10 z-10">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-background border border-border-subtle text-foreground text-xs font-mono px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="z-10 mt-auto">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 group bg-cta-black text-cta-black-text px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-md font-sans"
                    >
                      <span>Explore Project</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Image/Mockup Panel */}
                <div className="flex-1 bg-gradient-hero p-8 md:p-12 lg:p-16 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-border-subtle min-h-[400px]">
                  {/* Placeholder device mockup silhouette */}
                  <div className="w-full max-w-md aspect-[16/10] bg-zinc-900/40 rounded-2xl border-4 border-zinc-900/60 shadow-2xl relative overflow-hidden backdrop-blur-sm flex flex-col">
                    {/* Browser-like top bar */}
                    <div className="h-6 bg-zinc-900/80 w-full flex items-center px-3 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    {/* Mockup content area */}
                    <div className="flex-1 w-full bg-zinc-100/5 flex items-center justify-center text-zinc-900/20 font-sans font-bold text-2xl uppercase tracking-widest overflow-hidden">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        "Mockup Placeholder"
                      )}
                    </div>
                  </div>
                </div>
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
