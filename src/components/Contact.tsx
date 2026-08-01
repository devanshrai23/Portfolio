"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    
    if (!accessKey) {
      setStatus("error");
      setMessage("Web3Forms access key is not configured.");
      setIsSubmitting(false);
      return;
    }

    if (!captchaToken) {
      setStatus("error");
      setMessage("Please complete the captcha to submit.");
      setIsSubmitting(false);
      return;
    }

    formData.set("access_key", accessKey);
    formData.set("h-captcha-response", captchaToken);
    formData.delete("g-recaptcha-response");
    
    // Custom Email Settings
    formData.set("subject", `New Portfolio Message from ${formData.get("name")}`);
    formData.set("from_name", formData.get("name") as string);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been sent successfully.");
        (e.target as HTMLFormElement).reset();
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          
          <div className="w-full max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-accent-indigo font-mono font-semibold uppercase tracking-widest text-sm flex items-center justify-center gap-2 mb-4">
                <span>✦</span> Get In Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-foreground">
                Let's Build Something
              </h2>
            </motion.div>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit} 
              className="bg-surface p-8 md:p-10 rounded-3xl border border-border-subtle shadow-md space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2 font-sans">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-5 py-4 bg-background border border-border-subtle rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all font-sans"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-5 py-4 bg-background border border-border-subtle rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all font-sans"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2 font-sans">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-background border border-border-subtle rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:border-transparent transition-all font-sans resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <div className="flex justify-center my-4">
                <HCaptcha 
                  ref={captchaRef}
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    if (status === "error") setStatus("idle");
                  }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cta-black text-cta-black-text px-6 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-sans text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {status !== "idle" && (
                <div className={`p-4 rounded-xl text-sm font-bold font-sans text-center ${status === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                  {message}
                </div>
              )}
            </motion.form>
          </div>

        </div>
      </section>
    </>
  );
}
