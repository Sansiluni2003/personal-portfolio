"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const roles = ["Full Stack Developer", "Software Engineer",];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = roles[currentRole];
    
    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/share/1CMoBVGksN/", label: "Facebook" },
    { icon: FaGithub, href: "https://github.com/Sansiluni2003", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ihansa-sansiluni-leelarathna-a3ab9a329", label: "LinkedIn" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12"
    >
      <div className="container mx-auto h-full items-center">
        <div className="grid md:grid-cols-2 gap-20 items-center min-h-[80vh]">
          {/* Left Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex flex-col justify-center items-start w-full md:pl-16 lg:pl-24"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Hello, It&apos;s Me
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              Ihansa Sansiluni
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold"
            >
              <span className="text-white">And I&apos;m a </span>
              <span className="text-accent-cyan inline-block">
                {displayText}
                <span className="text-accent-cyan animate-pulse ml-1">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 max-w-lg"
            >
              Motivated IT & Management undergraduate from University of Moratuwa, a quick learner, team player, and passionate software engineering enthusiast.
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full border-2 border-accent-cyan flex items-center justify-center text-white hover:bg-accent-cyan hover:text-primary-dark transition-all duration-300 group"
                >
                  <social.icon className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>

            {/* Download CV Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              href="/Ihansa%20Sansiluni%20_SE__CV.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-accent-cyan text-white font-semibold hover:bg-accent-cyan hover:text-primary-dark transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
            >
              <FaDownload />
              Download CV
            </motion.a>
          </motion.div>

          {/* Right Section - Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Circular Container with Stunning Glow */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Multiple glow layers for stunning effect */}
                <div className="absolute -inset-8 bg-accent-cyan blur-3xl rounded-full -z-10 animate-pulse opacity-60"></div>
                <div className="absolute -inset-6 bg-accent-cyan/80 blur-2xl rounded-full -z-10 opacity-70"></div>
                <div className="absolute -inset-4 bg-accent-cyan/60 blur-xl rounded-full -z-10"></div>
                
                {/* Animated border ring */}
                <div className="absolute -inset-2 rounded-full border-4 border-accent-cyan opacity-50 animate-pulse"></div>
                
                {/* Main Circle with gradient border */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  {/* Outer border ring with gradient */}
                  <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-accent-cyan via-accent-cyan-dark to-accent-cyan">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      {/* Your photo */}
                      <Image
                        src="/MyPhoto.jpg"
                        alt="Ihansa Sansiluni"
                        fill
                        className="object-cover"
                        priority
                      />
                      
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-cyan/5"></div>
                    </div>
                  </div>
                </div>
                
                {/* Inner glow ring */}
                <div className="absolute inset-4 rounded-full border-2 border-accent-cyan/50 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

