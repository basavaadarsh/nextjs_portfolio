import { projects } from "@/lib/constants";
import { PageTransition } from "@/components/animations/page-transition";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata = {
  title: "Projects - Nelavalli Basava Adarsh",
  description: "Projects developed by Nelavalli Basava Adarsh",
};

export default function ProjectsPage() {
  // Separate featured projects from the rest
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            My Projects
          </h1>
        </ScrollReveal>

        {/* Featured Projects */}
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                tech={project.tech}
                github={project.github}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8">More Projects</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                tech={project.tech}
                github={project.github}
                index={index + 2} // Continue index from featured projects
              />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}