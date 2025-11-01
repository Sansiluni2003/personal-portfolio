"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap, FaUsers, FaLightbulb, FaSync, FaBrain, FaPaintBrush } from "react-icons/fa";

interface Skill {
  name: string;
  iconUrl?: string; // CDN URL for icon
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Helper function to get local icon path
const getLocalIconPath = (skillName: string): string => {
  const localIcons: Record<string, string> = {
    // No local icons currently - using CDN icons
  };
  return localIcons[skillName] || "";
};

// Using CDN icons from DevIcons or Simple Icons
const getIconUrl = (skillName: string): string => {
  const iconMap: Record<string, string> = {
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "MSSQL": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftsqlserver.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Canva": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  };
  return iconMap[skillName] || "";
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "C" },
      { name: "C++" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Laravel" },
      { name: "Spring Boot" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "MSSQL" },
      { name: "Firebase" },
    ],
  },
  {
    title: "UI/UX Design Tools",
    skills: [
      { name: "Figma" },
      { name: "Canva" },
    ],
  },
];

interface SoftSkill {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const softSkills: SoftSkill[] = [
  {
    title: "Always Learning",
    description: "Constantly exploring new technologies and staying updated with industry trends.",
    icon: FaGraduationCap,
  },
  {
    title: "Team Player",
    description: "Thrive in collaborative environments and adapt quickly to new roles.",
    icon: FaUsers,
  },
  {
    title: "Problem Solving",
    description: "Analytical approach to breaking down complex challenges into manageable solutions.",
    icon: FaLightbulb,
  },
  {
    title: "Adaptability",
    description: "Quick to adjust to changing requirements and embrace new methodologies.",
    icon: FaSync,
  },
  {
    title: "Critical Thinking",
    description: "Ability to evaluate information objectively and make informed decisions.",
    icon: FaBrain,
  },
  {
    title: "Creativity",
    description: "Innovative thinking to design unique solutions and enhance user experiences.",
    icon: FaPaintBrush,
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-primary-darker">
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
              <span className="text-accent-cyan">TECH</span>{" "}
              <span className="text-white">SKILLS</span>
            </motion.h2>
            <div className="w-24 h-1 bg-accent-cyan mx-auto"></div>
          </div>

          {/* Category Tabs - Dark grey buttons like screenshot */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
                {skillCategories.map((category, index) => (
              <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-accent-cyan text-primary-dark shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                      {category.title}
              </motion.button>
                ))}
              </div>

          {/* Active Category Skills Display */}
            <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white">
                {skillCategories[activeCategory].title}
              </h3>
            </div>
            
            <div className="w-full flex justify-center">
              {/* Technical Skills - Display with icons */}
              <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
                {skillCategories[activeCategory].skills.map((skill, index) => {
                  // Check for local icon first, then fallback to CDN
                  const localIcon = getLocalIconPath(skill.name);
                  const iconUrl = localIcon || getIconUrl(skill.name);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-3 cursor-default"
                      style={{ width: '140px' }}
                    >
                      {/* Icon Container - Square with rounded corners */}
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl bg-primary-dark border-2 border-gray-700 hover:border-accent-cyan transition-all duration-300 flex items-center justify-center p-4 shadow-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] relative">
                        {iconUrl ? (
                          <>
                            {iconUrl.startsWith('/') ? (
                              // Local icon - use regular img for local files to avoid Next.js optimization issues
                              <img
                                src={iconUrl}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                                loading="lazy"
                                onError={(e) => {
                                  console.error(`Failed to load icon: ${iconUrl}`);
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = "none";
                                  const parent = target.parentElement;
                                  if (parent && !parent.querySelector('.fallback-text')) {
                                    const fallback = document.createElement('span');
                                    fallback.className = 'fallback-text text-accent-cyan font-bold text-lg';
                                    fallback.textContent = skill.name.charAt(0);
                                    parent.appendChild(fallback);
                                  }
                                }}
                              />
                            ) : (
                              // External CDN icon - use Next.js Image for external URLs
                              <Image
                                src={iconUrl}
                                alt={skill.name}
                                width={100}
                                height={100}
                                className={`object-contain ${skill.name === "MSSQL" ? "mssql-red-icon" : ""}`}
                                unoptimized
                              />
                            )}
                          </>
                        ) : (
                          <span className="text-accent-cyan font-bold text-2xl md:text-3xl">
                            {skill.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      
                      {/* Skill Name */}
                      <span className="text-base md:text-lg text-white text-center font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            </motion.div>
        </motion.div>

        {/* Soft Skills Section - Separate Main Topic */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-accent-cyan">SOFT</span>{" "}
              <span className="text-white">SKILLS</span>
            </motion.h2>
            <div className="w-24 h-1 bg-accent-cyan mx-auto"></div>
          </div>

          {/* Soft Skills Display - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-primary-dark rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  {/* Icon Container */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      {/* Glow background */}
                      <div className="absolute inset-0 bg-accent-cyan/20 blur-xl rounded-full"></div>
                      {/* Icon circle */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-darker/50 border-2 border-accent-cyan flex items-center justify-center">
                        <IconComponent className="text-accent-cyan text-2xl md:text-3xl" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-3">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base text-center leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
