"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Languages & Runtime": "border-[var(--accent-primary)]",
  Backend: "border-[var(--accent-secondary)]",
  Frontend: "border-purple-500",
  Cloud: "border-blue-400",
  DevOps: "border-orange-500",
  Architecture: "border-pink-500",
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Technical Stack
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Technologies I use to build scalable, performant systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glow-card shimmer p-6 border-l-4 ${
                categoryColors[category] || "border-[var(--accent-primary)]"
              }`}
            >
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm font-mono bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-lg hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
