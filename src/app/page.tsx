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
  endToEnd: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l9 4.5-9 4.5-9-4.5L12 3zm-9 9l9 4.5 9-4.5M3 16.5L12 21l9-4.5" />
    </svg>
  ),
  ship: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.93 14.93 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8m2.58-5.84a14.93 14.93 0 00-2.58 5.84M15 9.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
  motion: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

const features = [
  {
    icon: featureIcons.endToEnd,
    title: 'Concept to Launch',
    description: 'One person from first idea to final release: research, design, development, and motion, so nothing gets lost between handoffs.',
  },
  {
    icon: featureIcons.ship,
    title: 'Built to Ship',
    description: 'Designs that become real, working products. I\'ve taken apps and web tools all the way to launch, so every decision is made with shipping in mind.',
  },
  {
    icon: featureIcons.motion,
    title: 'Motion-Minded',
    description: 'Animation and 3D sit alongside the UI. From brand idents built in Blender to interface details, I bring work to life where it counts.',
  },
];

export default function HomePage() {
  // Transform projects for WorkShowcase
  const showcaseProjects = featuredProjects.slice(0, 5).map((p) => ({
    title: p.title,
    category: p.category,
    thumbnail: p.thumbnail,
    thumbnailFit: p.thumbnailFit,
    videoPreview: p.videoPreview,
    previewLoop: p.previewLoop,
    href: `/work/${p.slug}`,
    theme: p.theme,
    tagline: p.tagline,
  }));

  return (
    <>
      {/* Hero Section */}
      <Hero
        name="Aidan Dombrowski"
        badge="Design · Motion · Development"
        lines={[
          { text: 'I CREATE', style: 'thin' },
          { text: 'DIGITAL', style: 'bold' },
          { text: 'EXPERIENCES', style: 'green' },
        ]}
        scrollTargetId="work"
        backgroundImage="/Landingpage_Hero.png"
        backgroundVideo={{ src: '/reel/hero-reel.mp4', poster: '/reel/hero-reel-poster.jpg', label: 'Showreel · 2026' }}
        actions={[
          { label: 'View Work', href: '#work', primary: true },
          { label: 'Start a Project', href: '/contact' },
        ]}
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
          <div className="flex flex-col gap-10 sm:gap-14">
            {/* Title row: heading left, intro and link right */}
            <div>
              <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-12">
                <h2 className="text-[length:var(--text-display)] font-black uppercase tracking-tight leading-none" style={{ color: '#3d9e5a' }}>
                  Capabilities
                </h2>
                <div className="lg:pb-3 lg:text-right">
                <p className="text-white text-base sm:text-lg lg:text-xl font-medium mb-3">
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
                </div>
              </ScrollReveal>
            </div>

            {/* Skills Grid */}
            <div>
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
            <h2 className="text-[length:var(--text-display)] leading-[0.95] font-black uppercase tracking-tight mb-4 sm:mb-6">
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
