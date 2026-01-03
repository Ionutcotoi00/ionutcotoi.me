"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Rocket, Clock } from "lucide-react";
import { projects } from "@/lib/data";
import { useRef } from "react";

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--bg-secondary)]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            From startups to enterprise - systems built to scale
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TiltCard key={project.title} index={index}>
              <div
                className={`glow-card shimmer p-6 flex flex-col ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
              {/* Status badge and links */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {project.status === "live" && (
                    <span className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)] animate-pulse" />
                      LIVE
                    </span>
                  )}
                  {project.status === "coming-soon" && (
                    <span className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                      <Clock className="w-3 h-3" />
                      COMING SOON
                    </span>
                  )}
                  {project.status === "enterprise" && (
                    <span className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
                      <Rocket className="w-3 h-3" />
                      ENTERPRISE
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors p-1"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors p-1"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                {project.title}
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs font-semibold px-2 py-1 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
