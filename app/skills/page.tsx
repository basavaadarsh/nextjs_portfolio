import { PageTransition } from "@/components/animations/page-transition";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SkillCard } from "@/components/skills/skill-card";
import { SkillProgress } from "@/components/skills/skill-progress";
import { skills } from "@/lib/constants";

export const metadata = {
  title: "Skills - Nelavalli Basava Adarsh",
  description: "Technical skills of Nelavalli Basava Adarsh",
};

// Define some sample progress values for visualization
const progressSkills = [
  { name: "Python", value: 85 },
  { name: "HTML/CSS", value: 80 },
  { name: "JavaScript", value: 75 },
  { name: "AEM", value: 80 },
  { name: "Data Analysis", value: 85 },
  { name: "Java", value: 70 },
];

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            My Skills
          </h1>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid gap-10">
          {/* Skill Categories */}
          <section>
            <ScrollReveal>
              <h2 className="text-2xl font-bold mb-6">Expertise</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  category={skill.category}
                  items={skill.items}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Skill Progress Bars */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-bold mb-6">Proficiency</h2>
              </ScrollReveal>

              <div>
                {progressSkills.slice(0, 3).map((skill, index) => (
                  <SkillProgress
                    key={index}
                    name={skill.name}
                    value={skill.value}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              <ScrollReveal>
                <h2 className="text-2xl font-bold mb-6 opacity-0 md:opacity-100">
                  &nbsp;
                </h2>
              </ScrollReveal>

              <div>
                {progressSkills.slice(3).map((skill, index) => (
                  <SkillProgress
                    key={index}
                    name={skill.name}
                    value={skill.value}
                    index={index + 3}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}