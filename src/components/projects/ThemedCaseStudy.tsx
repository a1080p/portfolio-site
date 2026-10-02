import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ProjectSplash } from '@/components/projects/ProjectSplash';
import { AccentText } from '@/components/projects/AccentText';
import { AutoplayPreview } from '@/components/projects/AutoplayPreview';
import { projectFontVariables } from '@/lib/fonts/project-fonts';
import type { Project } from '@/lib/data/projects';
import type { CaseStudy, CaseStudyLink, CaseStudyTheme } from '@/lib/data/case-studies';
import './project-themes.css';

interface ThemedCaseStudyProps {
  project: Project;
  caseStudy: CaseStudy & { theme: CaseStudyTheme };
}

interface ThemeConfig {
  /** Light themes keep the site's default navbar and footer colors */
  tone: 'dark' | 'light';
  /** Prefix section kickers with 01, 02... */
  numbered: boolean;
  videoLabel: string;
  roleNote: string;
  stackNote: string;
  ctaTitle: string;
}

const THEMES: Record<CaseStudyTheme, ThemeConfig> = {
  'iron-pillar': {
    tone: 'dark',
    numbered: false,
    videoLabel: 'Preview',
    roleNote: 'Solo developer. I owned every part of the product.',
    stackNote: 'Tools and platforms behind the shipped product.',
    ctaTitle: 'Interested in working together?',
  },
  'dither-dog': {
    tone: 'dark',
    numbered: true,
    videoLabel: 'Demo',
    roleNote: 'Solo developer. I owned every part of the product.',
    stackNote: 'Tools and platforms behind the shipped product.',
    ctaTitle: 'Ready to build something?',
  },
  'mgk-dossier': {
    tone: 'dark',
    numbered: false,
    videoLabel: 'The film',
    roleNote: 'A one-person production, from first model to final grade.',
    stackNote: 'The pipeline behind every frame.',
    ctaTitle: 'Let\'s make something cinematic.',
  },
  'whiskey-thief': {
    tone: 'dark',
    numbered: false,
    videoLabel: 'Preview',
    roleNote: 'Research, strategy, and design, start to finish.',
    stackNote: 'Tools and formats behind the experience.',
    ctaTitle: 'Let\'s pour something new.',
  },
  'lego-architect': {
    tone: 'light',
    numbered: false,
    videoLabel: 'Preview',
    roleNote: 'Concept, UX, UI, and the pitch.',
    stackNote: 'Tools behind the concept.',
    ctaTitle: 'Let\'s build something together.',
  },
};

function ProjectLink({ link, primary }: { link: CaseStudyLink; primary: boolean }) {
  if (link.comingSoon) {
    return (
      <span className="pt-store" aria-label={`${link.label}: coming soon`}>
        <small>Coming soon to the</small>
        <strong>{link.label}</strong>
      </span>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`pt-btn ${primary ? 'pt-btn--primary' : 'pt-btn--ghost'}`}
    >
      {link.label}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
      </svg>
    </a>
  );
}

export function ThemedCaseStudy({ project, caseStudy }: ThemedCaseStudyProps) {
  const { theme } = caseStudy;
  const config = THEMES[theme];

  return (
    <div className={`pt pt--${theme} ${projectFontVariables}`} data-tone={config.tone}>
      <ProjectSplash theme={theme} slug={project.slug} year={project.year} />

      {/* Hero */}
      <section className={`relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 pt-texture`}>
        <Container className="relative">
          <ScrollReveal>
            <Link
              href="/work"
              className="pt-mono pt-muted inline-flex items-center gap-2 min-h-11 text-xs hover:text-[var(--pt-ink)] transition-colors mb-6 sm:mb-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to work
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
            <ScrollReveal>
              {caseStudy.eyebrow && <p className="pt-eyebrow mb-4">{caseStudy.eyebrow}</p>}
              <h1 className="pt-display pt-h1 whitespace-pre-line mb-6">
                <span className="sr-only">{project.title}: </span>
                <AccentText text={caseStudy.headline ?? project.title} />
              </h1>
              <p className="pt-muted text-base sm:text-lg leading-relaxed mb-6 max-w-[62ch]">
                {caseStudy.overview}
              </p>

              {caseStudy.status && (
                <p className="pt-status pt-mono text-xs mb-6">{caseStudy.status}</p>
              )}

              {caseStudy.externalLinks && (
                <div className="flex flex-wrap items-center gap-3">
                  {caseStudy.externalLinks.map((link, i) => (
                    <ProjectLink key={link.url} link={link} primary={i === 0} />
                  ))}
                </div>
              )}
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="pt-frame">
                <div className="pt-media relative aspect-video">
                  {project.previewLoop ? (
                    <AutoplayPreview
                      src={project.previewLoop.src}
                      poster={project.previewLoop.poster}
                      label={`${project.title} demo preview`}
                    />
                  ) : (
                    <Image
                      src={caseStudy.heroImage ?? project.thumbnail}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <dt className="pt-mono pt-muted text-[0.6875rem]">Category</dt>
                  <dd className="font-semibold mt-1">{project.category}</dd>
                </div>
                <div>
                  <dt className="pt-mono pt-muted text-[0.6875rem]">Timeline</dt>
                  <dd className="font-semibold mt-1">{project.year}</dd>
                </div>
              </dl>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Stats */}
      {caseStudy.stats && (
        <section className="pt-plate">
          <Container>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {caseStudy.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`pt-stat flex flex-col-reverse justify-end py-8 sm:py-10 border-[var(--pt-line)] ${
                    i % 2 === 1 ? 'border-l pl-5 sm:pl-6' : 'pr-4'
                  } ${i === 2 ? 'lg:border-l lg:pl-6' : ''} ${i > 1 ? 'border-t lg:border-t-0' : ''}`}
                >
                  <dt className="pt-mono pt-muted text-[0.6875rem] mt-3">{stat.label}</dt>
                  <dd className="pt-stat-value">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      {/* Demo video */}
      {project.videoPreview && (
        <section className="pt-plate py-12 sm:py-16">
          <Container>
            <ScrollReveal>
              <p className="pt-eyebrow mb-4">{config.videoLabel}</p>
              <div className="pt-frame">
                <div className="pt-media bg-black">
                  <video
                    src={project.videoPreview}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full block"
                    poster={project.thumbnail}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      )}

      {/* Role + stack */}
      {(caseStudy.roles || caseStudy.stack) && (
        <section className="pt-plate py-12 sm:py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {caseStudy.roles && (
                <ScrollReveal>
                  <h2 className="pt-eyebrow mb-2">My role</h2>
                  <p className="pt-muted text-sm mb-4">{config.roleNote}</p>
                  <ul className="flex flex-wrap gap-2">
                    {caseStudy.roles.map((role) => (
                      <li key={role} className="pt-chip pt-chip--accent">
                        {role}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}
              {caseStudy.stack && (
                <ScrollReveal delay={80}>
                  <h2 className="pt-eyebrow mb-2">Built with</h2>
                  <p className="pt-muted text-sm mb-4">{config.stackNote}</p>
                  <ul className="flex flex-wrap gap-2">
                    {caseStudy.stack.map((tool) => (
                      <li key={tool} className="pt-chip">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Case study sections */}
      {caseStudy.sections.map((section, index) => (
        <section key={section.title} className="pt-plate py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 lg:gap-14">
              <ScrollReveal>
                <div className="lg:sticky lg:top-28">
                  <p className="pt-eyebrow mb-3">
                    {config.numbered ? `${String(index + 1).padStart(2, '0')} · ` : ''}
                    {section.kicker}
                  </p>
                  <h2 className="pt-display pt-h2">{section.title}</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={60}>
                <p className="pt-muted text-base sm:text-lg leading-relaxed">{section.content}</p>

                {section.bullets && (
                  <ul className="pt-bullets mt-6 space-y-4">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="text-[0.9375rem] sm:text-base leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {section.image && (
                  <div className="pt-frame mt-8">
                    <div className="pt-media relative aspect-video">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </ScrollReveal>
            </div>

            {section.gallery && (
              <ScrollReveal delay={80}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10">
                  {section.gallery.map((item, i) => {
                    // With an odd count, the first image spans the full row so none is left alone at the end
                    const isFeature = section.gallery!.length % 2 === 1 && i === 0;
                    return (
                    <figure key={item.src} className={`pt-frame ${isFeature ? 'sm:col-span-2' : ''}`}>
                      {item.width && item.height ? (
                        <div className="pt-media">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            sizes={isFeature ? '(min-width: 1280px) 1200px, 100vw' : '(min-width: 640px) 50vw, 100vw'}
                            className="block w-full h-auto"
                          />
                        </div>
                      ) : (
                        <div className="pt-media relative aspect-video bg-white">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <figcaption className="pt-mono pt-muted text-[0.6875rem] mt-3">{item.alt}</figcaption>
                    </figure>
                    );
                  })}
                </div>
              </ScrollReveal>
            )}
          </Container>
        </section>
      ))}

      {/* CTA */}
      <section className={`pt-plate py-16 sm:py-20 pt-texture`}>
        <Container className="text-center">
          <ScrollReveal>
            <h2 className="pt-display pt-h2 mb-4">
              {config.ctaTitle}
            </h2>
            <p className="pt-muted mb-8">Let&apos;s discuss how I can help bring your project to life.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Link href="/contact" className="pt-btn pt-btn--primary justify-center">
                Start a conversation
              </Link>
              <Link href="/work" className="pt-btn pt-btn--ghost justify-center">
                View more projects
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
