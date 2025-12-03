"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  period: string;
  description: string;
  image: string;
  githubRepo?: string | string[];
  liveDemo?: string;
  techStack: string[];
  role: string;
}

const projects: Project[] = [
  {
    title: "MediConnect - Marketplace for Doctors",
    period: "2024-2025",
    description:
      "Your Gateway to Quality Healthcare. Connect with top healthcare institutions, advance your medical career, and make a difference in patient care.",
    image: "/mediconnect.png",
    githubRepo: "https://github.com/LiyanageDLMJ/Medi_connect.git",
    techStack: [
      "React.js",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "RESTful API",
    ],
    role: "Full Stack Developer",
  },
  {
    title: "Smart Hospital Queue Management ",
    period: "2024 - Ongoing",
    description:
      "Skip the Wait, Book Smart. Experience hassle-free healthcare with smart queue and appointment management system that reduces waiting times by 70% with 24/7 online booking.",
    image: "/smart hospital.png",
    githubRepo: "https://github.com/Sansiluni2003/Smart_Hospital_queue-management.git",
    techStack: [
      "Next.js",
      "Python",
      "MySQL",
      "RESTful API",
      "JWT",
      "OAuth 2.0",
      "Vonage SMS",
      "NodeMailer",
    ],
    role: "Full Stack Developer",
  },
  {
    title: "GearUp - Vehicle Service Management",
    period: "2025",
    description:
      "10 Years of Excellence Since 2005. Comprehensive vehicle service management system for booking appointments, managing services, and tracking vehicle maintenance history.",
    image: "/ead.png",
    githubRepo: [
      "https://github.com/AsithaUdara/GearUp-frontent",
      "https://github.com/AsithaUdara/GearUp-backend"
    ],
    techStack: ["Next.js", "spring boot", "postgreSQL", "Firebase", "Tailwind CSS","Docker"],
    role: "Full Stack Developer",
  },
  {
    title: "Travel Guide - Travel Planning Platform",
    period: "2024",
    description:
      "Developed as part of the Innovate with Ballerina competition by IEEE University of Moratuwa. This web-based travel platform enables users to explore travel packages, book dream trips, and manage bookings with ease.",
    image: "/travel.png",
    githubRepo: "https://github.com/Sansiluni2003/The-tech-Tribe.git",
    liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7254356115734331392/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLvdk4BYYdLVJ6ntP6kHmab-vnI1RFFljs",
    techStack: ["HTML", "CSS", "JavaScript", "Ballerina"],
    role: "Full Stack Developer",
  },
  {
    title: "Personal Portfolio Website",
    period: "2025",
    description:
      "A modern, responsive portfolio website showcasing my projects, skills, and experience. Features interactive animations, dark theme design, and a functional contact form with email integration.",
    image: "/portfolio.png  ",
    githubRepo: "https://github.com/Sansiluni2003/Personal_Portfolio.git",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Nodemailer", "Vercel"],
    role: "Full Stack Developer",
  },
  

];

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-accent-cyan">PROJECTS</span>
            </motion.h2>
            <div className="w-24 h-1 bg-accent-cyan mx-auto"></div>
          </div>

          {/* Horizontal Scrollable Container */}
          <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-accent-cyan/50 scrollbar-track-accent-cyan/10">
            <div className="flex gap-6 min-w-max px-2">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary-darker rounded-xl overflow-hidden border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] group w-[380px] flex-shrink-0"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-darker via-primary-darker/50 to-transparent opacity-60"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors flex-1 line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                    
                    <span className="inline-block text-accent-cyan font-semibold text-xs bg-accent-cyan/10 px-3 py-1 rounded-full mb-3">
                      {project.period}
                    </span>

                    <p className="text-gray-300 mb-3 text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-accent-cyan/10 text-accent-cyan text-[10px] rounded-full border border-accent-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 bg-accent-cyan/10 text-accent-cyan text-[10px] rounded-full border border-accent-cyan/30">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Role */}
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-gray-400 text-xs">Role:</span>
                      <span className="text-accent-cyan text-xs font-semibold">
                        {project.role}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-3 border-t border-accent-cyan/20">
                      {project.githubRepo && (
                        Array.isArray(project.githubRepo) ? (
                          <>
                            {project.githubRepo.map((repo, i) => (
                              <motion.a
                                key={i}
                                href={repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 px-3 py-2 bg-accent-cyan/10 border border-accent-cyan rounded-lg text-accent-cyan text-center text-xs font-semibold hover:bg-accent-cyan hover:text-primary-dark transition-all duration-300 flex items-center justify-center gap-1.5"
                              >
                                <FaGithub className="text-sm" />
                                {i === 0 ? "Frontend" : "Backend"}
                              </motion.a>
                            ))}
                          </>
                        ) : (
                          <motion.a
                            href={project.githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-3 py-2 bg-accent-cyan/10 border border-accent-cyan rounded-lg text-accent-cyan text-center text-xs font-semibold hover:bg-accent-cyan hover:text-primary-dark transition-all duration-300 flex items-center justify-center gap-1.5"
                          >
                            <FaGithub className="text-sm" />
                            GitHub
                          </motion.a>
                        )
                      )}
                      {project.liveDemo && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 px-3 py-2 bg-accent-cyan text-primary-dark rounded-lg text-center text-xs font-semibold hover:bg-accent-cyan/90 transition-all duration-300 flex items-center justify-center gap-1.5"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

