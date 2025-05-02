"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface SkillProgressProps {
  name: string;
  value: number;
  index: number;
}

export function SkillProgress({ name, value, index }: SkillProgressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{value}%</span>
      </div>
      <Progress
        value={value}
        className="h-2"
      />
    </motion.div>
  );
}