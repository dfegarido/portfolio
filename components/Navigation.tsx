import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, PORTFOLIO_OWNER } from '../constants';
import { Magnetic } from './Magnetic';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      clipPath: "circle(0px at 100% 0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      clipPath: "circle(150% at 100% 0px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.2
      }
    })
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Magnetic>
            <a href="#" className="text-2xl font-bold text-slate-100 tracking-tighter hover:text-white transition-colors z-50">
              DF<span className="text-white/50">.</span>
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <a 
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1"
                >
                  {link.name}
                </a>
              </Magnetic>
            ))}
            <div className="h-6 w-px bg-slate-700 mx-2"></div>
            <Magnetic>
              <a 
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-medium text-slate-900 bg-white hover:bg-slate-200 px-5 py-2 rounded-md transition-colors shadow-lg shadow-white/10"
              >
                Let's Talk
              </a>
            </Magnetic>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-100 z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <motion.div 
        className="fixed inset-0 bg-slate-900 z-40 md:hidden flex flex-col justify-center items-center"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <nav className="flex flex-col space-y-8 text-center">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              className="text-4xl font-bold text-slate-200 hover:text-white"
              custom={i}
              variants={linkVariants}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
          
          <motion.div 
            className="flex gap-8 justify-center mt-12"
            variants={linkVariants}
            custom={5}
          >
             <a href={GITHUB_URL} className="text-slate-400 hover:text-white transform hover:scale-125 transition-transform"><Github size={28} /></a>
             <a href={LINKEDIN_URL} className="text-slate-400 hover:text-white transform hover:scale-125 transition-transform"><Linkedin size={28} /></a>
             <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-400 hover:text-white transform hover:scale-125 transition-transform"><Mail size={28} /></a>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
};