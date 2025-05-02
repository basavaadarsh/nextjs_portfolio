"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CertificationCardProps {
  name: string;
  issuer: string;
  year: string;
  link: string;
  index: number;
}

export function CertificationCard({
  name,
  issuer,
  year,
  link,
  index,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
        <CardContent className="p-0">
          <div className="flex flex-col p-6">
            <div className="mb-4">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <div className="text-muted-foreground mb-4">
              <p>{issuer}</p>
              <p>{year}</p>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline mt-auto"
            >
              <span>View Certificate</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}