"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-md ${scrolled ? 'border-b border-border-subtle shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Left */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent-indigo rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <Link href="/" className="text-xl font-bold font-sans text-foreground hover:opacity-80 transition-opacity hidden sm:block">
              Devansh Rai
            </Link>
          </div>
          
          {/* Nav Links / Center-ish */}
          <div className="hidden md:flex items-center space-x-6 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA / Right */}
            <div className="hidden md:flex items-center">
              <Link 
                href="#contact" 
                className="bg-cta-black text-cta-black-text px-6 py-2.5 rounded-full font-medium hover:scale-105 transition-transform shadow-md flex items-center gap-2 group"
              >
                <span>Get In Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:opacity-70 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden border-t border-border-subtle bg-surface shadow-lg absolute w-full" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground hover:bg-background block px-3 py-3 rounded-xl text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex items-center space-x-2">
              <Link href="#contact" onClick={() => setIsOpen(false)} className="bg-cta-black text-cta-black-text px-6 py-3 rounded-full text-sm font-medium flex-1 text-center shadow-md">
                Get in Touch
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="bg-cta-black text-cta-black-text w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
