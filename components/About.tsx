"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-primary-darker"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-accent-cyan">ABOUT</span>{" "}
              <span className="text-white">ME</span>
            </motion.h2>
            <div className="w-24 h-1 bg-accent-cyan mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <div className="relative">
                {/* Multiple glow layers for stunning effect */}
                <div className="absolute -inset-8 bg-accent-cyan blur-3xl rounded-full -z-10 opacity-60"></div>
                <div className="absolute -inset-6 bg-accent-cyan/80 blur-2xl rounded-full -z-10 opacity-70"></div>
                <div className="absolute -inset-4 bg-accent-cyan/60 blur-xl rounded-full -z-10"></div>
                
                {/* Main Circle with image */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-primary-dark">
                    <Image
                      src="/unnamed.jpg"
                      alt="Ihansa Sansiluni"
                      fill
                      className="object-cover object-center"
                      priority
                      style={{ 
                        filter: 'contrast(1.1) brightness(1.05)',
                        WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)',
                        maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)'
                      }}
                    />
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-cyan/5"></div>
                  </div>
                  
                  {/* Rotating dashed circular border */}
                  <svg
                    className="absolute inset-0 w-full h-full rotating-dashed-border pointer-events-none"
                    style={{ filter: 'drop-shadow(0 0 10px #00f0ff)' }}
                  >
                    <circle
                      cx="50%"
                      cy="50%"
                      r="48%"
                      fill="none"
                      stroke="#00f0ff"
                      strokeWidth="3"
                      strokeDasharray="20 15"
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Secondary rotating border for depth */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ 
                      filter: 'drop-shadow(0 0 8px #00f0ff)',
                      animation: 'rotate-border 12s linear infinite reverse'
                    }}
                  >
                    <circle
                      cx="50%"
                      cy="50%"
                      r="46%"
                      fill="none"
                      stroke="#00f0ff"
                      strokeWidth="2"
                      strokeDasharray="12 18"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                  </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6 flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                Software Engineer Intern
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I’m a dedicated third year IT undergraduate passionate about creating innovative solutions with
 societal impact. With strong adaptability, teamwork, and leadership skills, I’m seeking a Software
 Engineer Internship to enhance my technical abilities and contribute to impactful projects.
              </p>
            </motion.div>
          </div>

          {/* Stats Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 md:mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Skills Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-primary-dark rounded-2xl p-6 md:p-8 border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <div className="text-center">
                  <h4 className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2">
                    10+
                  </h4>
                  <p className="text-gray-300 text-lg md:text-xl font-semibold">
                    Skills
                  </p>
                </div>
              </motion.div>

              {/* Projects Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-primary-dark rounded-2xl p-6 md:p-8 border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <div className="text-center">
                  <h4 className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2">
                    5+
                  </h4>
                  <p className="text-gray-300 text-lg md:text-xl font-semibold">
                    Projects
                  </p>
                </div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-primary-dark rounded-2xl p-6 md:p-8 border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <div className="text-center">
                  <h4 className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2">
                    2+
                  </h4>
                  <p className="text-gray-300 text-lg md:text-xl font-semibold">
                    Yrs Experience
                  </p>
              </div>
            </motion.div>
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

