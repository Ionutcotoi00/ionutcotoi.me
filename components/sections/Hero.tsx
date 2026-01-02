"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/lib/data";

const roles = [
  "high-performance systems",
  "cloud-native solutions",
  "healthcare SaaS platforms",
  "AI-powered applications",
];

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    x.set(distanceX * 0.1);
    y.set(distanceY * 0.1);
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
        x: mouseXSpring,
        y: mouseYSpring,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated gradient orb */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-secondary)]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Background grid */}
      <div className="grid-background fixed inset-0 -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent-primary)] font-mono text-sm md:text-base mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text px-4"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Animated subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl lg:text-4xl font-bold text-[var(--text-secondary)] mb-6"
        >
          I build{" "}
          <span className="text-[var(--accent-primary)]">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Senior .NET Full-Stack Developer who saves companies{" "}
          <span className="text-[var(--accent-secondary)] font-semibold">
            $25k/year
          </span>{" "}
          and makes their software{" "}
          <span className="text-[var(--accent-primary)] font-semibold">
            90% faster
          </span>
          .
          <br />
          <span className="text-[var(--text-secondary)]/80">
            Currently building the future of inclusive recruitment at{" "}
            <a
              href="https://www.diversework.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-primary)] hover:underline font-medium transition-colors"
            >
              DiverseWork
            </a>
            .
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <MagneticButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent-primary)] text-white font-semibold rounded-lg hover:bg-[var(--accent-primary)]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-primary)]/25"
            >
              <Mail className="w-5 h-5" />
              Let&apos;s Talk
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/cv/Ionut_Cotoi_CV.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--accent-primary)] text-[var(--accent-primary)] font-semibold rounded-lg hover:bg-[var(--accent-primary)]/10 transition-all duration-300"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Tech icons floating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[".NET", "Azure", "React", "SQL", "AI"].map((tech, i) => (
            <motion.div
              key={tech}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full text-sm text-[var(--text-secondary)] font-mono"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
