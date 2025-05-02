import { PageTransition } from "@/components/animations/page-transition";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CertificationCard } from "@/components/certifications/certification-card";
import { certifications } from "@/lib/constants";

export const metadata = {
  title: "Certifications - Nelavalli Basava Adarsh",
  description: "Certifications earned by Nelavalli Basava Adarsh",
};

export default function CertificationsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            My Certifications
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            These certifications represent my ongoing commitment to professional growth and
            expertise in the fields of data science, AI, and software development.
          </p>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              name={cert.name}
              issuer={cert.issuer}
              year={cert.year}
              link={cert.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}