"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { MapPin, Briefcase, GraduationCap, Languages, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function TerminalAnimation() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    { command: "dotnet build --configuration Release", delay: 2000 },
    { output: "Build started...", delay: 500 },
    { output: "> Architecture...  [OK] - Clean", delay: 300 },
    { output: "> Scalability...   [OK] - High Availability", delay: 300 },
    { output: "> Leadership...    [OK] - Team Lead Ready", delay: 300 },
    { output: "> Innovation...    [OK] - Microsoft for Startups", delay: 500 },
    { output: "Build succeeded. 0 Errors. Ready for deployment. 🚀", delay: 3000 },
  ];

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      // Restart animation after a pause
      setTimeout(() => {
        setCurrentLine(0);
        setDisplayedText("");
        setIsTyping(true);
      }, 2000);
      return;
    }

    const line = terminalLines[currentLine];
    const textToType = line?.command || line?.output;
    
    if (!textToType) return;
    
    let charIndex = 0;

    setIsTyping(true);
    setDisplayedText("");

    const typeInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        setDisplayedText(textToType.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, line.delay);
      }
    }, 30); // Typing speed

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  const getLineColor = (lineIndex: number) => {
    const line = terminalLines[lineIndex];
    if (line?.command) return "text-[var(--accent-primary)]";
    if (line?.output?.includes("[OK]")) return "text-green-400";
    if (line?.output?.includes("succeeded")) return "text-green-400";
    return "text-[var(--text-secondary)]";
  };

  return (
    <div>
      {/* Title & Context */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          Live Skills Demo
        </h3>
        <p className="text-xs text-[var(--text-secondary)]/70">
          What I bring to your project
        </p>
      </div>

      <div className="glow-card p-4 bg-[#0d1117] border border-[var(--border)] rounded-lg overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[var(--border)]/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-[var(--text-secondary)]/70 font-mono ml-2">
            user@dev:~/portfolio
          </span>
        </div>

      {/* Terminal Content */}
      <div className="font-mono text-sm space-y-1 min-h-[120px]">
        {terminalLines.slice(0, currentLine).map((line, index) => (
          <div key={index} className={getLineColor(index)}>
            {line.command && (
              <span className="text-[var(--accent-primary)]">$ </span>
            )}
            {line.command || line.output}
          </div>
        ))}
        
        {currentLine < terminalLines.length && (
          <div className={getLineColor(currentLine)}>
            {terminalLines[currentLine].command && (
              <span className="text-[var(--accent-primary)]">$ </span>
            )}
            {displayedText}
            {isTyping && (
              <span className="inline-block w-2 h-4 bg-[var(--accent-primary)] ml-1 animate-pulse" />
            )}
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  Senior .NET Full-Stack Developer
                </span>{" "}
                with a passion for building systems that don&apos;t just work -
                they{" "}
                <span className="text-[var(--accent-primary)]">
                  save money
                </span>{" "}
                and{" "}
                <span className="text-[var(--accent-secondary)]">
                  scale beautifully
                </span>
                .
              </p>
              <p>
                My journey started in mechanical engineering at IRUM SA, where I
                developed rigorous problem-solving skills. I transitioned to
                software development and found my calling in building
                high-performance healthcare systems at Bissoft, where I work
                with a US-based client serving 10,000+ users.
              </p>
              <p>
                Beyond my day job, I&apos;m the founder of{" "}
                <span className="text-[var(--accent-primary)] font-medium">
                  DiverseWork
                </span>
                , an inclusive recruitment platform backed by Microsoft for
                Startups. I believe technology should open doors, not close
                them.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring Central
                European Christmas markets or planning my next adventure.
              </p>
            </div>

            {/* Terminal Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <TerminalAnimation />
            </motion.div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
           <div className="glow-card p-4">
  <div className="flex items-center gap-3 text-[var(--text-secondary)]">
    <MapPin className="w-5 h-5 text-[var(--accent-primary)]" />
    <div>
      <p className="text-sm text-[var(--text-secondary)]/70">
        Location
      </p>
      <p className="text-[var(--text-primary)] font-medium">
        Târgu Mureș, Romania
      </p>
      <p className="text-[var(--accent-primary)] text-sm font-medium">
        Available Remote 🌍
      </p>
    </div>
  </div>
</div>

            <div className="glow-card p-4">
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Briefcase className="w-5 h-5 text-[var(--accent-secondary)]" />
                <div>
                  <p className="text-sm text-[var(--text-secondary)]/70">
                    Status
                  </p>
                  <p className="text-[var(--accent-secondary)] font-medium">
                    Open for Contracts
                  </p>
                </div>
              </div>
            </div>

           <div className="glow-card p-4">
  <div className="flex items-center gap-3 text-[var(--text-secondary)]">
    <GraduationCap className="w-5 h-5 text-[var(--accent-primary)]" />
    <div>
      <p className="text-sm text-[var(--text-secondary)]/70">
        Education
      </p>
      <p className="text-[var(--text-primary)] font-medium text-sm">
        MSc Business Development
      </p>
      <p className="text-[var(--text-secondary)]/70 text-xs">
        Babeș-Bolyai University
      </p>
      <p className="text-[var(--text-primary)] font-medium text-sm mt-2">
        BSc Robotics & Mechatronics
      </p>
      <p className="text-[var(--text-secondary)]/70 text-xs">
        Technical University of Cluj-Napoca
      </p>
    </div>
  </div>
</div>

<div className="glow-card p-4">
  <div className="flex items-center gap-3 text-[var(--text-secondary)]">
    <Languages className="w-5 h-5 text-[var(--accent-secondary)]" />
    <div>
      <p className="text-sm text-[var(--text-secondary)]/70">
        Languages
      </p>
      <p className="text-[var(--text-primary)] font-medium text-sm">
        Romanian <span className="text-[var(--text-secondary)]/70">(Native)</span>
      </p>
      <p className="text-[var(--text-primary)] font-medium text-sm">
        English <span className="text-[var(--text-secondary)]/70">(C1-C2)</span>
      </p>
      <p className="text-[var(--text-primary)] font-medium text-sm">
        French <span className="text-[var(--text-secondary)]/70">(Basic)</span>
      </p>
    </div>
  </div>
</div>

            {/* GitHub Activity */}
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card p-4 hover:border-[var(--accent-primary)] transition-colors block group"
            >
              <div className="flex items-center gap-3 mb-3">
                <Github className="w-5 h-5 text-[var(--accent-primary)]" />
                <div>
                  <p className="text-sm text-[var(--text-secondary)]/70">
                    GitHub Activity
                  </p>
                  <p className="text-[var(--text-primary)] font-medium text-sm">
                    1,035 contributions in 2025
                  </p>
                </div>
              </div>
              <div className="relative w-full h-24 rounded-lg overflow-hidden bg-[var(--bg-tertiary)] border border-[var(--border)]">
                <Image
                  src={`https://ghchart.rshah.org/${siteConfig.social.github.split('/').pop()}`}
                  alt="GitHub Contributions"
                  fill
                  className="object-contain p-2"
                  unoptimized
                />
              </div>
              <p className="text-xs text-[var(--text-secondary)]/70 mt-2 group-hover:text-[var(--accent-primary)] transition-colors">
                View profile →
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
