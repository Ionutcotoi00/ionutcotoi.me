"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, DollarSign, Users, Clock } from "lucide-react";
import { stats } from "@/lib/data";

const icons = [TrendingUp, DollarSign, Users, Clock];
const colors = [
  "text-[var(--accent-primary)]",
  "text-[var(--accent-secondary)]",
  "text-[var(--accent-primary)]",
  "text-[var(--accent-secondary)]",
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="py-24 px-6 bg-[var(--bg-secondary)]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Impact That Matters
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Real results from real projects. I don&apos;t just write code - I
            solve business problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = icons[index];
            const colorClass = colors[index];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glow-card p-6 text-center"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-[var(--bg-tertiary)] mb-4 ${colorClass}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${colorClass}`}
                >
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-[var(--text-primary)] font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-[var(--text-secondary)] text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
