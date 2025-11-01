"use client";

import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
  gpa?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "BSc. (Hons) in Information Technology and Management",
    institution: "University Of Moratuwa - Faculty Of Information Technology",
    period: "2023 - Present",
    details: ["Over-roll GPA: 3.523"],
  },
  {
    degree: "G.C.E. Advanced Level (Biology Stream)",
    institution: "Ferguson High School",
    period: "2018 - 2021",
    details: ["2B, 1C - Physics "],
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
              <span className="text-accent-cyan">EDUCATION</span>
            </motion.h2>
            <div className="w-24 h-1 bg-accent-cyan mx-auto"></div>
          </div>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-primary-darker p-6 rounded-lg border-l-4 border-accent-cyan shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-accent-cyan mb-3">{item.institution}</p>
                    <ul className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-300">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-accent-cyan font-semibold text-lg">
                    {item.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

