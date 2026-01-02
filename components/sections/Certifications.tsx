"use client";

import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle, Clock, Target } from "lucide-react";
import { certifications } from "@/lib/data";

const statusConfig = {
  Scheduled: {
    icon: Calendar,
    color: "text-[var(--accent-primary)]",
    bg: "bg-[var(--accent-primary)]/10",
  },
  "In Preparation": {
    icon: Clock,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  Planned: {
    icon: Target,
    color: "text-[var(--text-secondary)]",
    bg: "bg-[var(--bg-tertiary)]",
  },
  Completed: {
    icon: CheckCircle,
    color: "text-[var(--accent-secondary)]",
    bg: "bg-[var(--accent-secondary)]/10",
  },
};

export default function Certifications() {
  return (
    <section className="py-24 px-6 bg-[var(--bg-secondary)]/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Certifications & Professional Development
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Continuous learning & professional growth
          </p>
        </motion.div>

        <div className="space-y-4">
          {certifications.map((cert, index) => {
            const config =
              statusConfig[cert.status as keyof typeof statusConfig];
            const StatusIcon = config.icon;

            return (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glow-card p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${config.bg} flex items-center justify-center`}
                  >
                    <Award className={`w-6 h-6 ${config.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">
                        {cert.name}
                      </h3>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
                        {cert.code}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span
                        className={`flex items-center gap-1 ${config.color}`}
                      >
                        <StatusIcon className="w-4 h-4" />
                        {cert.status}
                      </span>
                      <span className="text-[var(--text-secondary)]">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full md:w-32 flex-shrink-0">
                    <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-1">
                      <span>Progress</span>
                      <span>{cert.progress}%</span>
                    </div>
                    <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cert.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-[var(--accent-primary)] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
