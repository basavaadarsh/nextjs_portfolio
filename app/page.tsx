import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/animations/typing-animation";
import { personalInfo } from "@/lib/constants";
import { PageTransition } from "@/components/animations/page-transition";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-8">
              I&apos;m a{" "}
              <TypingAnimation texts={personalInfo.titles} typingSpeed={80} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground mb-8">
              Based in {personalInfo.location}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full font-medium animate-pulse hover:animate-none"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-medium"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.8} className="absolute bottom-12 animate-bounce">
            <Link href="#about" scroll={false} aria-label="Scroll down" className="text-muted-foreground hover:text-foreground transition-colors">
              <ChevronDown size={32} />
            </Link>
          </ScrollReveal>
        </section>

        {/* About Preview Section */}
        <section id="about" className="container mx-auto px-4 py-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              About Me
            </h2>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={0.2}>
              <p className="text-lg mb-8 text-center leading-relaxed">
                {personalInfo.bio}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} className="flex justify-center">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}