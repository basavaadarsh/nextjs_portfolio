import { PageTransition } from "@/components/animations/page-transition";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { education, personalInfo } from "@/lib/constants";
import Image from "next/image";

export const metadata = {
  title: "About - Nelavalli Basava Adarsh",
  description: "Learn more about Nelavalli Basava Adarsh and his background.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            About Me
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal direction="right">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-4/5 h-4/5 relative">
                <Image
                src="/images/adarsh.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Nelavalli Basava Adarsh
                </span>
              </h2>
              <p className="text-muted-foreground mb-6">
                {personalInfo.titles.join(" | ")}
              </p>
              <div className="space-y-6 text-lg">
                <p className="leading-relaxed">{personalInfo.bio}</p>
                <p className="leading-relaxed">
                  I am constantly learning and exploring new technologies to
                  stay at the forefront of innovation. My goal is to leverage my
                  skills in AI, machine learning, and web development to create
                  solutions that make a positive impact.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Education Timeline */}
        <ScrollReveal className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Education
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-muted space-y-12">
            {education.map((edu, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[1.125rem] top-1"></div>
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      {edu.institution} | {edu.year}
                    </p>
                    <p className="font-medium">
                      Percentage: <span className="text-primary">{edu.percentage}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}