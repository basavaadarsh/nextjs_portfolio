"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

export function SkillCard({ category, items, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="inline-flex px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}