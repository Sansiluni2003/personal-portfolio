"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  period: string;
  description: string;
  githubRepo?: string;
  liveDemo?: string;
  techStack: string[];
  role: string;
}

const projects: Project[] = [
  {
    title: "MarketPlace for Doctors - Level 2 Software Development Project",
    period: "2024-2025",
    description:
      "A comprehensive marketplace platform connecting doctors with patients. Features include appointment booking, medical records management, and secure payment processing. Built with modern web technologies for scalability and performance.",
    githubRepo: "https://github.com/yourusername/marketplace-doctors",
    liveDemo: "https://marketplace-doctors.vercel.app",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
    ],
    role: "Fullstack Developer",
  },
  {
    title: "Smart Hospital Queue & Appointment Management System",
    period: "2024 - Ongoing",
    description:
      "An intelligent queue management system for hospitals that optimizes patient flow and reduces waiting times. Includes real-time SMS notifications, email reminders, and an intuitive admin dashboard.",
    githubRepo: "https://github.com/yourusername/hospital-queue",
    techStack: [
      "Next.js",
      "Python",
      "MySQL",
      "RESTful API",
      "JSON Web Tokens (JWT)",
      "OAuth 2.0",
      "Vonage (SMS)",
      "NodeMailer (Email)",
    ],
    role: "Fullstack Developer",
  },
  {
    title: "Travel Guide - Travel Planning Platform",
    period: "2024",
    description:
      "A user-friendly travel planning platform that helps users discover destinations, create itineraries, and share travel experiences with the community.",
    githubRepo: "https://github.com/yourusername/travel-guide",
    liveDemo: "https://travel-guide.vercel.app",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    role: "Fullstack Developer",
  },
];

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="container mx-auto max-w-6xl">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-primary-darker p-6 rounded-lg border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-accent-cyan font-semibold text-sm whitespace-nowrap ml-2">
                    {project.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  {project.githubRepo && (
                    <div className="flex items-center gap-2">
                      <FaGithub className="text-accent-cyan" />
                      <span className="text-gray-400 text-sm">Github repo:</span>
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-cyan hover:underline text-sm"
                      >
                        Link
                      </a>
                    </div>
                  )}

                  {project.liveDemo && (
                    <div className="flex items-center gap-2">
                      <FaExternalLinkAlt className="text-accent-cyan" />
                      <span className="text-gray-400 text-sm">Live demo:</span>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-cyan hover:underline text-sm"
                      >
                        View
                      </a>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">Tech stack:</span>
                    <span className="text-gray-300 text-sm">
                      {project.techStack.join(", ")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">Role:</span>
                    <span className="text-accent-cyan text-sm font-semibold">
                      {project.role}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  {project.githubRepo && (
                    <motion.a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan rounded-lg text-accent-cyan text-center text-sm font-semibold hover:bg-accent-cyan hover:text-primary-dark transition-all duration-300"
                    >
                      GitHub
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan rounded-lg text-accent-cyan text-center text-sm font-semibold hover:bg-accent-cyan hover:text-primary-dark transition-all duration-300"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

