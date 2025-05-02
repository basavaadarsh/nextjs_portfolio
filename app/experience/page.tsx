import { PageTransition } from "@/components/animations/page-transition";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { experience } from "@/lib/constants";
import { Building, Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Experience - Nelavalli Basava Adarsh",
  description: "Professional experience of Nelavalli Basava Adarsh",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Professional Experience
          </h1>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <ScrollReveal key={index}>
              <div className="bg-card rounded-xl shadow-sm overflow-hidden mb-10">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-bold">{exp.title}</h2>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-2">
                    <Building className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">{exp.company}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span>{exp.location}</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Project: {exp.project}</h3>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Responsibilities:</h3>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                            <span>{responsibility}</span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Add more content for timeline visualization */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground">
                Currently accepting new opportunities!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}