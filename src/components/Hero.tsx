"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 pb-20">
      
      {/* Oversized background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none z-0">
        <h1 className="text-[17vw] font-extrabold font-sans text-border-subtle opacity-30 select-none tracking-tighter whitespace-nowrap">
          DEVELOPER
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 text-center md:text-left space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest font-semibold">
                Hey, I'm Devansh
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-sans tracking-tight text-foreground leading-[1.1]">
              Full-Stack Developer & Competitive Programmer
            </motion.h2>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-6">
              <div className="flex items-center">
                <Link 
                  href="#projects" 
                  className="bg-cta-black text-cta-black-text px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-transform shadow-xl font-sans flex items-center gap-2 group"
                >
                  <span>View My Work</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
              <Link 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground border border-border-subtle bg-surface px-8 py-3.5 rounded-full font-medium hover:bg-border-subtle/30 transition-colors font-sans mt-4 sm:mt-0 shadow-sm"
              >
                Download Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Portrait & Floating Elements */}
          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative inline-block">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative z-10 w-64 md:w-80 aspect-[4/5] rounded-[3rem] bg-[var(--gradient-hero)] shadow-2xl flex items-center justify-center p-2"
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-surface relative">
                  <img 
                    src="/profile.jpg" 
                    alt="Devansh Rai" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-muted-foreground text-sm tracking-widest uppercase font-mono absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Photo</span>');
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Floating Pills */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10, rotate: 0 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                className="absolute -top-6 -right-4 md:-right-8 z-20 bg-surface border border-border-subtle shadow-lg rounded-full px-5 py-2"
              >
                <span className="text-foreground font-mono text-xs font-semibold whitespace-nowrap">Full-Stack Dev</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: -10, rotate: 0 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }}
                transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                className="absolute -top-4 -left-8 md:-left-16 z-20 bg-surface border border-border-subtle shadow-lg rounded-full px-5 py-2"
              >
                <span className="text-foreground font-mono text-xs font-semibold whitespace-nowrap">Competitive Programmer</span>
              </motion.div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                className="absolute -bottom-8 right-0 md:-right-4 z-20 bg-surface border border-border-subtle shadow-xl rounded-2xl p-4 flex flex-col items-center justify-center min-w-[120px]"
              >
                <span className="text-3xl font-extrabold text-accent-indigo">2+</span>
                <span className="text-foreground text-sm font-semibold mb-1">Years Coding</span>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
