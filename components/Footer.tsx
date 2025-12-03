"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-darker text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400">
            &copy; {currentYear} Ihansa Sansiluni. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed & Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
