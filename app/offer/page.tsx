import { PageTransition } from "@/components/animations/page-transition";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Offer Status - Nelavalli Basava Adarsh",
  description: "Current offer status and career aspirations of Nelavalli Basava Adarsh",
};

export default function OfferPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Offer Secured, But Not Settled
          </h1>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Current Status</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm excited to share that I've received an offer from Capgemini as a Senior Analyst, 
                with a planned joining date in July 2025. While I'm grateful for this opportunity, 
                I'm actively pursuing roles that offer greater challenges, higher impact, and better compensation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Current Learning Focus</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">DevOps & Cloud</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>AWS Cloud Services</li>
                    <li>Docker & Kubernetes</li>
                    <li>CI/CD Pipelines</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Full-Stack Development</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Next.js & React</li>
                    <li>Node.js Backend</li>
                    <li>Database Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-card rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Looking Forward</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm actively seeking opportunities that offer:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6">
                <li>Challenging technical problems</li>
                <li>High-growth potential</li>
                <li>Competitive compensation</li>
                <li>Innovation-focused environment</li>
              </ul>
              <Button asChild className="mt-4">
                <Link href="/contact">Connect With Me</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}