"use client";
import { motion, useInView, animate } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

function CountUp({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col items-start gap-6">
            <span className="text-accent-indigo font-mono font-semibold uppercase tracking-widest text-sm flex items-center gap-2">
              <span>✦</span> About Me
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-foreground max-w-4xl leading-tight">
              Engineering products with precision. Solving problems with curiosity.
            </h2>

            <p className="text-muted-foreground font-sans text-lg max-w-3xl leading-relaxed">
              I'm an Information Technology (Business Informatics) student at IIIT Allahabad who enjoys turning ambitious ideas into polished digital products. From AI-powered web applications to scalable full-stack systems, I focus on building software that's fast, intuitive, and reliable. 
            </p>
            <p className="text-muted-foreground font-sans text-lg max-w-3xl leading-relaxed">
              Beyond development, I'm deeply passionate about algorithms and problem-solving. Having solved 1200+ coding problems, I love tackling complex challenges and applying that analytical mindset to create products people genuinely enjoy using.
            </p>


          </div>
        </motion.div>

        {/* Stats & Ratings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface border border-border-subtle rounded-3xl p-8 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow h-full"
          >
            <span className="text-5xl xl:text-6xl font-extrabold text-foreground mb-4">
              <CountUp from={0} to={2} suffix="+" />
            </span>
            <span className="text-muted-foreground font-mono text-sm xl:text-base">Years in Coding and Development</span>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-border-subtle rounded-3xl p-8 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow h-full"
          >
            <span className="text-5xl xl:text-6xl font-extrabold text-foreground mb-4">
              <CountUp from={0} to={1200} duration={2.5} suffix="+" />
            </span>
            <span className="text-muted-foreground font-mono text-sm xl:text-base">Problems Solved Across Different CP Platforms</span>
          </motion.div>

          {/* Card 3: Ratings */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-surface border border-border-subtle rounded-3xl p-8 flex flex-col justify-center gap-5 shadow-sm hover:shadow-md transition-shadow h-full"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-accent-indigo">★</span>
                <span className="font-bold text-foreground text-sm xl:text-base">Codeforces - Specialist</span>
              </div>
              <span className="text-muted-foreground font-mono text-xs xl:text-sm">Peak 1514</span>
            </div>
            <div className="h-px w-full bg-border-subtle/50" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-accent-indigo">★</span>
                <span className="font-bold text-foreground text-sm xl:text-base">CodeChef - 3★</span>
              </div>
              <span className="text-muted-foreground font-mono text-xs xl:text-sm">Peak 1700</span>
            </div>
            <div className="h-px w-full bg-border-subtle/50" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-accent-indigo">★</span>
                <span className="font-bold text-foreground text-sm xl:text-base">LeetCode</span>
              </div>
              <span className="text-muted-foreground font-mono text-xs xl:text-sm">Peak 1600</span>
            </div>
          </motion.div> 
        </div>
      </div>
    </section>
  );
}
