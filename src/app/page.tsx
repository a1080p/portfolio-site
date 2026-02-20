import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { WorkShowcase } from '@/components/sections/WorkShowcase';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { featuredProjects } from '@/lib/data/projects';
import { skillCategories } from '@/lib/data/skills';

// Feature icons
const featureIcons = {
  unlimited: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  fast: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  start: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  ),
  flexible: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const features = [
  {
    icon: featureIcons.unlimited,
    title: 'Unlimited Revisions',
    description: 'Get unlimited design revisions. I iterate until you\'re completely satisfied with the result.',
  },
  {
    icon: featureIcons.fast,
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising quality. Most projects delivered within 2-3 days.',
  },
  {
    icon: featureIcons.start,
    title: 'Start Today',
    description: 'No lengthy onboarding. Share your brief and I\'ll start working on your project immediately.',
  },
  {
    icon: featureIcons.flexible,
    title: 'Pause Anytime',
    description: 'Flexible engagement that adapts to your needs. Pause or adjust scope as your business evolves.',
  },
];

export default function HomePage() {
  // Transform projects for WorkShowcase
  const showcaseProjects = featuredProjects.slice(0, 3).map((p) => ({
    title: p.title,
    category: p.category,
    thumbnail: p.thumbnail,
    thumbnailFit: p.thumbnailFit,
    videoPreview: p.videoPreview,
    href: `/work/${p.slug}`,
  }));

  return (
    <>
      {/* Hero Section */}
      <Hero
        name="Aidan Dombrowski"
        badge="Graphic Designer"
        lines={[
          { text: 'I CREATE', style: 'thin' },
          { text: 'DIGITAL', style: 'bold' },
          { text: 'EXPERIENCES', style: 'outline' },
        ]}
        scrollTargetId="work"
        backgroundImage="/Landingpage_Hero.png"
      />

      {/* Features Section */}
      <div className="relative dither-bg dark-section">
        <FeatureGrid
          title="Features"
          subtitle="Launch with Ease"
          features={features}
          className="relative z-10"
        />
      </div>

      {/* Work Showcase */}
      <div className="relative border-t border-stone-200/60">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/80 via-stone-50/60 to-white/40" />
        <WorkShowcase
          id="work"
          title="Selected Work"
          projects={showcaseProjects}
          className="relative z-10"
        />
      </div>

      {/* Skills Section - Redesigned */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden dither-bg dark-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left - Title */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <h2 className="text-[var(--text-h1)] font-black uppercase tracking-tight mb-4" style={{ color: '#3d9e5a' }}>
                  Capabilities
                </h2>
                <p className="text-white text-base sm:text-lg lg:text-xl font-medium mb-6 lg:mb-8">
                  The tools and skills I use to bring ideas to life.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:gap-3 transition-all text-sm sm:text-base"
                >
                  View All Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>

            {/* Right - Skills Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {skillCategories.map((skillCat, index) => (
                  <ScrollReveal key={skillCat.category} delay={index * 50}>
                    <GlassSurface className="p-4 sm:p-5 h-full" hover>
                      <h3 className="text-[var(--color-text-primary)] font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                        {skillCat.category}
                      </h3>
                      <ul className="space-y-1 sm:space-y-1.5">
                        {skillCat.skills.map((skill) => (
                          <li
                            key={skill}
                            className="text-[var(--color-text-secondary)] text-xs"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </GlassSurface>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden border-t border-stone-200/60">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/70 to-stone-200/50" />

        <Container size="md" className="relative z-10 px-4 sm:px-6">
          <ScrollReveal className="text-center">
            <h2 className="text-[var(--text-display)] font-black uppercase tracking-tight mb-4 sm:mb-6">
              Let's Work
              <br />
              <span className="text-[var(--color-text-secondary)]">Together</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base sm:text-lg mb-8 sm:mb-10 max-w-lg mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something great together.
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
