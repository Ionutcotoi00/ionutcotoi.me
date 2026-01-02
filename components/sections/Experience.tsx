"use client";

import { motion } from "framer-motion";
import { Award, Calendar, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Experience
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Building scalable systems from healthcare to startups
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] transform md:-translate-x-1/2" />

          {experience.map((job, index) => (
            <motion.div
              key={job.title + job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-[50%] md:text-right"
                  : "md:pl-[50%] md:ml-auto"
              }`}
            >
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-[var(--accent-primary)] border-4 border-[var(--bg-primary)] ${
                  index % 2 === 0
                    ? "left-[-8px] md:left-auto md:right-[-8px] md:transform md:translate-x-1/2"
                    : "left-[-8px] md:left-[-8px] md:transform md:-translate-x-1/2"
                }`}
              />

              <motion.div
                className={`glow-card shimmer p-6 ml-6 md:ml-0 relative parallax-slow ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
                whileInView={{ y: [0, -5, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
                viewport={{ once: false }}
                style={{ willChange: "transform" }}
              >

                {job.badge && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 mb-3 text-xs font-medium text-[var(--accent-secondary)] bg-[var(--accent-secondary)]/10 rounded-full">
                    <Award className="w-3 h-3" />
                    {job.badge}
                  </div>
                )}

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                  {job.title}
                </h3>
                
                <div className={`mb-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className={`flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {job.companyLogo && (
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <div className={`relative w-full h-full rounded-lg p-2 flex items-center justify-center border ${
                          job.company === "DiverseWork Hub S.R.L"
                            ? "bg-white border-[var(--border)]"
                            : "bg-[var(--bg-tertiary)] border-[var(--border)]"
                        }`}>
                          <Image
                            src={job.companyLogo}
                            alt={`${job.company} logo`}
                            fill
                            className="object-contain"
                            onError={(e) => {
                              // Hide image if it fails to load
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <p className="text-[var(--accent-primary)] font-medium">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-1.5 cursor-pointer transition-all hover:text-[var(--accent-primary)]/80 relative z-10"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          {job.company}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span>{job.company}</span>
                      )}
                    </p>
                  </div>
                  {job.client && (
                    <div className={`mt-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <span className="text-[var(--text-secondary)]">
                        {" - "}
                        <span>{job.client}</span>
                      </span>
                    </div>
                  )}
                </div>

                <div
                  className={`flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                </div>

                {job.achievements ? (
                  <ul
                    className={`space-y-2 text-[var(--text-secondary)] text-sm ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] mt-1.5 flex-shrink-0">
                          •
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[var(--text-secondary)] text-sm">
                    {job.description}
                  </p>
                )}

                {job.tech && (
                  <div
                    className={`flex flex-wrap gap-2 mt-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs font-mono bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}