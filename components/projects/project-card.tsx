"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  github: string;
  index: number;
}

export function ProjectCard({ name, description, tech, github, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card
        className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <div className="p-6 space-y-4 h-full flex flex-col">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-muted-foreground flex-grow">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((item, i) => (
                <Badge key={i} variant="outline" className="px-2.5 py-0.5">
                  {item}
                </Badge>
              ))}
            </div>
            
            <div className="pt-2">
              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <a 
                  href={github !== "Coming Soon" ? github : "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={github === "Coming Soon" ? "cursor-not-allowed" : ""}
                >
                  <Github className="mr-2 h-4 w-4" />
                  {github !== "Coming Soon" ? "View on GitHub" : "Coming Soon"}
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}