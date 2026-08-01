"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const achievements = [
  {
    id: 1,
    title: "IIIT-A Hackathon Winner",
    description: "Secured 1st place among 50+ teams by building an AI-powered student feedback system within 48 hours.",
    date: "2024",
  },
  {
    id: 2,
    title: "ICPC Regionalist",
    description: "Qualified for the ICPC Regionals, showcasing advanced problem-solving and algorithmic skills.",
    date: "2024",
  },
  {
    id: 3,
    title: "Global Rank 132",
    description: "Achieved Global Rank 132 in Codeforces Div 2 round out of 25,000+ participants.",
    date: "2025",
  },
  {
    id: 4,
    title: "5-Star HackerRank",
    description: "Earned the 5-Star badge in C++ and Problem Solving on HackerRank.",
    date: "2023",
  }
];

export default function AchievementsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-foreground text-center">
          Milestones & Achievements
        </h2>
        <p className="text-muted-foreground text-center mt-4 font-mono max-w-xl mx-auto">
          Swipe to explore
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-grab active:cursor-grabbing">
        <motion.div ref={carouselRef} className="overflow-hidden">
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-6"
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                whileHover={{ rotate: -2, scale: 1.02 }}
                className="min-w-[300px] md:min-w-[400px] p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-xl flex flex-col justify-between shrink-0"
              >
                <div>
                  <span className="text-accent-indigo font-mono text-sm tracking-widest font-semibold uppercase mb-4 block">
                    {achievement.date}
                  </span>
                  <h3 className="text-2xl font-bold font-sans text-white mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-zinc-400 font-sans leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
