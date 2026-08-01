"use client";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "Codeforces",
    handle: "gaze_wood_1",
    rank: "Specialist",
    rating: "Peak 1514",
    link: "https://codeforces.com/profile/gaze_wood_1",
    logo: "https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png"
  },
  {
    name: "CodeChef",
    handle: "gaze_wood_01",
    rank: "3★",
    rating: "Peak 1700",
    link: "https://www.codechef.com/users/gaze_wood_01",
    logo: "https://cdn.iconscout.com/icon/free/png-256/codechef-3628694-3029919.png"
  },
  {
    name: "LeetCode",
    handle: "gaze_wood_01",
    rank: "500+ Solved",
    rating: "Peak 1600", 
    link: "https://leetcode.com/u/gaze_wood_01/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
  }
];

export default function CodingProfiles() {
  return (
    <section className="py-24 bg-background border-t border-border-subtle/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-indigo font-mono font-semibold uppercase tracking-widest text-sm flex items-center justify-center gap-2 mb-4">
            <span>✦</span> Competitive Programming
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-foreground">
            Coding Profiles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface border border-border-subtle rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-accent-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-2xl font-bold font-sans text-foreground mb-1 z-10">
                {profile.name}
              </h3>
              <span className="text-muted-foreground font-mono text-sm mb-6 z-10">
                @{profile.handle}
              </span>

              <div className="flex flex-col items-center gap-2 mb-6 z-10">
                <span className="text-xl font-bold text-accent-indigo">
                  {profile.rank}
                </span>
                <span className="text-sm font-semibold text-foreground/80 bg-background border border-border-subtle px-4 py-1.5 rounded-full">
                  {profile.rating}
                </span>
              </div>

              <div className="z-10 mt-2 flex items-center gap-2 text-foreground font-medium group-hover:text-accent-indigo transition-colors">
                <span className="text-sm font-sans">View Profile</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
