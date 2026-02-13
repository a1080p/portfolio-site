import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { services, processSteps } from '@/lib/data/services';

// Service icons matching the homepage
const serviceIcons: Record<string, React.ReactNode> = {
  layout: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  code: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  video: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  accessibility: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <Container>
          <ScrollReveal>
            <h1 className="text-[var(--text-display)] font-black uppercase tracking-tight mb-4">Services</h1>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
              From brand identity to motion graphics, I provide end-to-end design services
              tailored to startups and small businesses looking to make their mark.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="pb-28 border-t border-stone-200/60 pt-16">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 100}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center text-[var(--color-accent)] mb-6">
                      {serviceIcons[service.icon]}
                    </div>
                    <h2 className="text-[var(--text-h2)] font-bold mb-4">{service.title}</h2>
                    <p className="text-[var(--color-text-secondary)] text-lg">
                      {service.description}
                    </p>
                  </div>
                  <Card padding="lg">
                    <CardContent>
                      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">What's Included</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-[var(--color-text-secondary)]">
                            <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-white/50 border-t border-stone-200/60">
        <Container>
          <ScrollReveal>
            <h2 className="text-[var(--text-h1)] font-black uppercase tracking-tight mb-4 text-center">How I Work</h2>
            <p className="text-[var(--color-text-secondary)] text-center max-w-2xl mx-auto mb-16">
              A clear, collaborative process that keeps you involved at every step.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="relative">
                  <span className="text-6xl font-black text-[var(--color-accent)] absolute -top-4 -left-2 opacity-30">
                    {step.number}
                  </span>
                  <div className="relative pt-8">
                    <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">{step.title}</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership Section */}
      <section className="py-28 border-t border-stone-200/60">
        <Container size="md">
          <ScrollReveal className="text-center">
            <h2 className="text-[var(--text-h1)] font-black uppercase tracking-tight mb-6">Why Work With Me</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Responsive Communication</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  I respond within 24 hours and keep you updated throughout the project.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Quality First</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  I don't cut corners. Every deliverable meets professional standards.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Startup Focused</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  I understand tight budgets and fast timelines. Flexible packages available.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-stone-100/70 to-stone-200/50 border-t border-stone-200/60">
        <Container size="md">
          <ScrollReveal className="text-center">
            <h2 className="text-[var(--text-h1)] font-black uppercase tracking-tight mb-4">Ready to Get Started?</h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-xl mx-auto">
              Let's discuss your project and find the right solution for your needs. Free initial consultation included.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a Conversation
            </Button>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
