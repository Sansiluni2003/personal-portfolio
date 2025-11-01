"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = navItems.map((item) => item.name.toLowerCase());
      const currentSection = sections.find((section) => {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        const sectionName = navItems.find(item => item.name.toLowerCase() === currentSection)?.name || "Home";
        setActiveSection(sectionName);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (itemName: string) => {
    setActiveSection(itemName);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary-darker/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Ihansa Sansiluni
          </motion.div>
          
          {/* Desktop Navigation - Right Aligned */}
          <div className="flex-1 flex justify-end">
            <ul className="hidden md:flex items-center space-x-10 md:space-x-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                    onClick={() => handleNavClick(item.name)}
                  className={`relative transition-colors duration-300 ${
                    activeSection === item.name
                      ? "text-accent-cyan"
                      : "text-white hover:text-accent-cyan"
                  }`}
                >
                  {item.name}
                  {activeSection === item.name && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-cyan"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-accent-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col space-y-4 py-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.name)}
                      className={`block py-2 transition-colors duration-300 ${
                        activeSection === item.name
                          ? "text-accent-cyan border-l-4 border-accent-cyan pl-4"
                          : "text-white hover:text-accent-cyan pl-4"
                      }`}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

