import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const experiences = [
  {
    title: 'Design Assistant',
    company: 'University of Louisville School of Medicine',
    period: 'Jan 2026 - Present',
    description: [
      'Craft motion reels and animated content that bring medical communications to life through storytelling and visual design.',
      'Design cohesive print and digital media campaigns that bridge complex medical concepts with accessible visual narratives.',
      'Collaborate with cross-functional teams of designers, medical professionals, and marketing strategists.',
    ],
  },
  {
    title: 'Digital Media Suite Specialist',
    company: 'University of Louisville',
    period: 'Aug 2023 - Present',
    description: [
      'Lead technical support and training for digital media platforms, improving user adoption rates.',
      'Create multimedia content using industry-standard software for university marketing initiatives.',
    ],
  },
  {
    title: 'Client Lead & Content Designer',
    company: 'The Birds Nest Marketing Agency',
    period: 'Jan 2025 - Dec 2025',
    description: [
      'Oversaw and coordinated a cross-functional design/marketing team, ensuring timely delivery of client projects.',
      'Designed UI/UX components and animated assets that drive engagement across digital touchpoints.',
      'Executed projects from concept through delivery, maintaining brand consistency while pushing creative boundaries.',
    ],
  },
  {
    title: 'Graphic Design Intern',
    company: 'Delta Upsilon International Fraternity',
    period: 'May 2025 - Sep 2025',
    description: [
      'Collaborated with marketing team to develop and implement social media content strategies.',
      'Created engaging visual content to promote fraternity programs, events, and initiatives.',
    ],
  },
];

const education = {
  school: 'University of Louisville',
  degree: 'BFA Graphic Design',
  minors: ['Marketing', 'Communication'],
  gpa: '3.745',
  years: '2022 - 2027',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <Image
                  src="/Aidan Dombrowski.png"
                  alt="Aidan Dombrowski"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full max-w-md mx-auto lg:mx-0"
                  priority
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-[var(--text-display)] font-black mb-6">
                Hey, I'm Aidan
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg mb-6">
                Graphic designer with a focus on web design and motion graphics. I enjoy exploring the intersection of digital design, 3D, and animation.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Currently learning Blender for animation alongside Adobe Creative Suite and Figma. I've worked across agency, university, and organizational environments translating ideas into visual narratives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Get in Touch
                </Button>
                <Button href="/Aidan Dombrowski - Resume 2026.pdf" variant="outline" target="_blank">
                  View Resume
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Education Section */}
      <section className="py-28 bg-white/50 border-t border-stone-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ScrollReveal>
                <h2 className="text-[var(--text-h1)] font-black uppercase tracking-tight mb-6">Education</h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <Card padding="lg">
                  <CardContent>
                    <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-1">
                      {education.degree}
                    </h3>
                    <p className="text-[var(--color-accent)] mb-2">
                      {education.school}
                    </p>
                    <p className="text-[var(--color-text-secondary)] mb-2">
                      Minor in {education.minors.join(' & ')}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[var(--color-text-secondary)]">
                        {education.gpa} GPA
                      </span>
                      <span className="text-[var(--color-text-secondary)]">
                        {education.years}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal>
                <h2 className="text-[var(--text-h1)] font-black uppercase tracking-tight mb-6">My Approach</h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-[var(--color-text-secondary)] text-lg mb-4">
                  I believe the best interfaces are the ones you don't have to think about—they just feel right. Getting there takes empathy, research, and a willingness to iterate until it works.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-[var(--color-text-secondary)] text-lg">
                  I'm passionate about pushing creative boundaries while maintaining focus on usability and user experience. Every project is a chance to learn something new about human behavior and digital design.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Experience Section */}
      <section className="py-28 border-t border-stone-200/60">
        <Container>
          <ScrollReveal>
            <h2 className="text-[var(--text-h1)] font-black uppercase tracking-tight mb-12">Experience</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.title + exp.company} delay={index * 100}>
                <Card padding="lg">
                  <CardContent>
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-[var(--color-accent)] mb-3">
                          {exp.company}
                        </p>
                        <ul className="space-y-2 list-disc list-inside marker:text-[var(--color-accent)]">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-[var(--color-text-secondary)] text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-[var(--color-text-secondary)] text-sm md:text-right whitespace-nowrap">
                        {exp.period}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What I Do Section */}
      <section className="py-28 bg-stone-100/70 border-t border-stone-200/60">
        <Container>
          <ScrollReveal>
            <h2 className="text-[var(--text-h1)] font-black uppercase tracking-tight mb-12">What I Do</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card padding="lg" hover>
                <CardContent>
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">UX/UI Design</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Crafting user flows, wireframes, and high-fidelity prototypes in Figma that solve real problems.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Card padding="lg" hover>
                <CardContent>
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Motion Design</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Bringing interfaces to life with purposeful animations using Blender, After Effects, and motion graphics.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card padding="lg" hover>
                <CardContent>
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Brand Identity</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Building cohesive visual identities and digital media campaigns that communicate brand values effectively.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-stone-200/60">
        <Container size="md">
          <ScrollReveal className="text-center">
            <h2 className="text-[var(--text-h1)] font-black uppercase tracking-tight mb-6">Let's Connect</h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-xl mx-auto">
              I'm always excited to explore new opportunities or collaborate on projects that challenge me to grow. Whether you've got a product that needs some UX love or want to discuss motion design, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start a Conversation
              </Button>
              <Button href="mailto:aidand510@gmail.com" variant="outline" size="lg">
                aidand510@gmail.com
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
