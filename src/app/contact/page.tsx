import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ContactForm } from '@/components/sections/ContactForm';

const contactInfo = [
  {
    label: 'Email',
    value: 'aidand510@gmail.com',
    href: 'mailto:aidand510@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '815-341-2885',
    href: 'tel:815-341-2885',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Louisville, KY',
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aidan-dombrowski-43055b261/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/aidandombrowski',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/greattaidan/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <Container>
          <div className="max-w-2xl">
            <ScrollReveal>
              <h1 className="text-[var(--text-display)] font-black uppercase tracking-tight mb-4">Get in Touch</h1>
              <p className="text-[var(--color-text-secondary)] text-lg">
                Have a project in mind? I'd love to hear about it. Fill out the form below
                or reach out directly through email or social media.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Card padding="lg">
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Contact Details */}
              <ScrollReveal delay={100}>
                <Card padding="lg">
                  <CardContent>
                    <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">Contact Info</h2>
                    <div className="space-y-4">
                      {contactInfo.map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm text-[var(--color-text-secondary)]">{item.label}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-[var(--color-text-primary)]">{item.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal delay={200}>
                <Card padding="lg">
                  <CardContent>
                    <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">Connect</h2>
                    <div className="flex gap-4">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-[var(--color-bg)] rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all"
                          aria-label={link.label}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Availability */}
              <ScrollReveal delay={300}>
                <Card padding="lg">
                  <CardContent>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Available for Work</h2>
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      Currently accepting new projects. Response time is typically within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
