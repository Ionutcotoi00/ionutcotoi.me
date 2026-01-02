"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Looking for a .NET developer who delivers measurable results? I&apos;m
            available for B2B contracts and new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/30">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)] animate-pulse" />
              <span className="text-[var(--accent-secondary)] font-medium text-sm">
                Open for Contracts
              </span>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="glow-card p-4 flex items-center gap-4 hover:border-[var(--accent-primary)] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Email</p>
                  <p className="text-[var(--text-primary)] font-medium">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="glow-card p-4 flex items-center gap-4 hover:border-[var(--accent-primary)] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-secondary)]/10 flex items-center justify-center group-hover:bg-[var(--accent-secondary)]/20 transition-colors">
                  <Phone className="w-6 h-6 text-[var(--accent-secondary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Phone</p>
                  <p className="text-[var(--text-primary)] font-medium">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <div className="glow-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[var(--text-secondary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Location
                  </p>
                  <p className="text-[var(--text-primary)] font-medium">
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glow-card p-8 flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mb-6">
              <Send className="w-10 h-10 text-[var(--accent-primary)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Ready to Start?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Let&apos;s discuss how I can help optimize your systems, reduce
              costs, and accelerate your development.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=Project Inquiry&body=Hi Ionuț,%0D%0A%0D%0AI'm interested in discussing a potential project with you.%0D%0A%0D%0ABest regards`}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent-primary)] text-white font-semibold rounded-lg hover:bg-[var(--accent-primary)]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-primary)]/25"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </a>
            <p className="text-sm text-[var(--text-secondary)] mt-4">
              Typical response time: 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
