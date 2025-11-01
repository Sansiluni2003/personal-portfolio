"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaDownload, FaFilePdf } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showCV, setShowCV] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-primary-darker"
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
              <span className="text-accent-cyan">CONTACT</span>{" "}
              <span className="text-white">ME</span>
            </motion.h2>
            <div className="w-24 h-1 bg-accent-cyan mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-primary-dark rounded-lg border border-accent-cyan/30 hover:border-accent-cyan transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-cyan/20 border border-accent-cyan flex items-center justify-center">
                    <FaPhone className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-white hover:text-accent-cyan transition-colors"
                    >
                      0712900068
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-primary-dark rounded-lg border border-accent-cyan/30 hover:border-accent-cyan transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-cyan/20 border border-accent-cyan flex items-center justify-center">
                    <FaEnvelope className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:haisleelarathna@gmail.com"
                      className="text-white hover:text-accent-cyan transition-colors"
                    >
                      haisleelarathna@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-primary-dark rounded-lg border border-accent-cyan/30 hover:border-accent-cyan transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-cyan/20 border border-accent-cyan flex items-center justify-center">
                    <FaLinkedin className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-cyan transition-colors"
                    >
                      Ihansa Sansiluni
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* CV Download Button */}
              <motion.button
                onClick={() => setShowCV(!showCV)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-accent-cyan/10 border-2 border-accent-cyan rounded-lg text-accent-cyan font-semibold hover:bg-accent-cyan hover:text-primary-dark transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaFilePdf />
                {showCV ? "Hide CV" : "View CV"}
              </motion.button>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark border border-accent-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark border border-accent-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-primary-dark border border-accent-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-accent-cyan text-primary-dark font-bold rounded-lg hover:bg-accent-cyan-dark transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* CV Viewer Modal */}
          {showCV && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
              onClick={() => setShowCV(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-primary-dark rounded-lg p-4 md:p-6 max-w-5xl w-full max-h-[95vh] overflow-auto border-2 border-accent-cyan shadow-[0_0_50px_rgba(0,240,255,0.5)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-accent-cyan/30">
                  <div className="flex items-center gap-3">
                    <FaFilePdf className="text-accent-cyan text-2xl" />
                    <h3 className="text-2xl font-bold text-accent-cyan">My CV</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href="/Ihansa%20Sansiluni%20_SE_CV.pdf"
                      download
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan rounded-lg text-accent-cyan hover:bg-accent-cyan hover:text-primary-dark transition-all text-sm font-semibold"
                    >
                      <FaDownload />
                      Download
                    </motion.a>
                    <button
                      onClick={() => setShowCV(false)}
                      className="text-white hover:text-accent-cyan text-3xl font-light w-8 h-8 flex items-center justify-center transition-colors"
                      aria-label="Close CV viewer"
                    >
                      ×
                    </button>
                  </div>
                </div>
                
                {/* PDF Viewer */}
                <div className="bg-white rounded-lg overflow-hidden min-h-[600px]">
                  {/* Option 1: Iframe for PDF */}
                  <iframe
                    src="/Ihansa%20Sansiluni%20_SE_CV.pdf"
                    className="w-full h-[600px] md:h-[700px]"
                    title="CV PDF Viewer"
                  />
                  
                  {/* Option 2: If you prefer to embed PDF using object tag, uncomment below */}
                  {/* <object
                    data="/cv.pdf"
                    type="application/pdf"
                    className="w-full h-[600px] md:h-[700px]"
                  >
                    <p className="p-6 text-center text-gray-600">
                      Unable to display PDF.{" "}
                      <a href="/Ihansa%20Sansiluni%20_SE_CV.pdf" download className="text-accent-cyan hover:underline">
                        Download instead
                      </a>
                    </p>
                  </object> */}
                  
                  {/* Fallback if PDF doesn't load */}
                  <noscript>
                    <div className="p-6 text-center text-gray-600">
                      <p className="mb-4">PDF viewer requires JavaScript to be enabled.</p>
                      <a
                        href="/Ihansa%20Sansiluni%20_SE_CV.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-primary-dark rounded-lg font-semibold hover:bg-accent-cyan-dark transition-colors"
                      >
                        <FaDownload />
                        Download CV
                      </a>
                    </div>
                  </noscript>
                </div>
                
                {/* Alternative: If you want to show CV content directly instead of PDF */}
                {/* Uncomment below and remove the iframe section above */}
                {/* 
                <div className="bg-white text-black p-6 rounded space-y-4">
                  <div className="border-b-2 border-gray-200 pb-4">
                    <h1 className="text-3xl font-bold uppercase mb-2">YOUR NAME</h1>
                    <h2 className="text-xl font-semibold uppercase text-blue-600">SOFTWARE ENGINEER INTERN</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold uppercase text-blue-600 mb-2">ABOUT ME</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your about me content goes here...
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold uppercase text-blue-600 mb-2">EDUCATION</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold">BSc. (Hons) in Information Technology and Management</h4>
                            <p className="text-blue-600">University Of Moratuwa - Faculty Of Information Technology</p>
                            <p className="text-sm text-gray-600 mt-1">Over-roll GPA: 3.523</p>
                          </div>
                          <span className="text-blue-600 font-semibold">2023 - Present</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold uppercase text-blue-600 mb-2">PROJECTS</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold">Project Title</h4>
                            <span className="text-blue-600 font-semibold">2024</span>
                          </div>
                          <p className="text-gray-700 mb-2">Project description...</p>
                          <ul className="text-sm space-y-1">
                            <li>• Github repo: <a href="#" className="text-blue-600 underline">Link</a></li>
                            <li>• Tech stack: React.js, TypeScript, Node.js</li>
                            <li>• Role: Fullstack Developer</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                */}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

