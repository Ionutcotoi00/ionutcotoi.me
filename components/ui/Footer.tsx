"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { siteConfig, navigation } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-[var(--text-primary)] font-bold text-xl hover:text-[var(--accent-primary)] transition-colors"
            >
              {"<IC />"}
            </a>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Senior .NET Developer building high-performance systems that save
              companies money.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-secondary)] text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--text-secondary)] text-sm flex items-center gap-1"
          >
            Built with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" /> using
            Next.js & Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
