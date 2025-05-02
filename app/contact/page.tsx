import { PageTransition } from '@/components/animations/page-transition';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { ContactForm } from '@/components/contact/contact-form';
import { personalInfo } from '@/lib/constants';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';

export const metadata = {
  title: 'Contact - Nelavalli Basava Adarsh',
  description: 'Get in touch with Nelavalli Basava Adarsh',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <Toaster />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Get In Touch
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Feel free to contact me for any work or suggestions. I'm always open
            to discussing new projects, creative ideas or opportunities to be
            part of your vision.
          </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <ScrollReveal direction="right">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        {personalInfo.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Social Profiles</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/basavaadarsh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-primary hover:text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nelavalli-basava-adarsh-3598b916a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-primary hover:text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="bg-card hover:bg-primary hover:text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="bg-card rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
