"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Are you available for freelance work?",
    answer: "I am currently open for select freelance projects. If you have a web application or performance optimization task, feel free to get in touch!"
  },
  {
    question: "What's your preferred tech stack?",
    answer: "I specialize in Next.js, TypeScript, and Tailwind CSS for the frontend. I love the developer experience they provide, enabling fast and scalable UI development."
  },
  {
    question: "How do you handle backend and databases?",
    answer: "I typically use Node.js with Express or Next.js API routes. For databases, I prefer MongoDB for NoSQL flexibility and PostgreSQL when relational data modeling is required."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-accent-indigo font-mono font-semibold uppercase tracking-widest text-sm flex items-center justify-center gap-2 mb-4">
            <span>✦</span> FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-foreground">
            Got Questions?
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border-subtle rounded-2xl bg-surface overflow-hidden transition-colors hover:border-border-subtle/80"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-bold font-sans text-foreground">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 border-accent-indigo text-accent-indigo' : 'border-border-subtle text-muted-foreground'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
