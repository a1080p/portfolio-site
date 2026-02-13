import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { projects } from '@/lib/data/projects';
import { caseStudies } from '@/lib/data/case-studies';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Aidan Dombrowski`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const caseStudy = caseStudies[slug];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <Container>
          <ScrollReveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Work
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h1 className="text-[var(--text-h1)] font-bold mb-4">{project.title}</h1>
              <p className="text-[var(--color-text-secondary)] text-lg mb-6">
                {caseStudy?.overview || project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-white/60 border border-stone-200 text-[var(--color-text-secondary)] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div>
                  <span className="text-[var(--color-text-secondary)] text-sm">Category</span>
                  <p className="text-[var(--color-text-primary)] font-medium">{project.category}</p>
                </div>
                <div>
                  <span className="text-[var(--color-text-secondary)] text-sm">Year</span>
                  <p className="text-[var(--color-text-primary)] font-medium">{project.year}</p>
                </div>
              </div>

              {(project.externalLinks || caseStudy?.externalLinks) && (
                <div className="flex flex-wrap gap-3">
                  {caseStudy?.externalLinks?.map((link) => (
                    <Button
                      key={link.url}
                      href={link.url}
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </Button>
                  ))}
                  {!caseStudy?.externalLinks && project.externalLinks?.figma && (
                    <Button
                      href={project.externalLinks.figma}
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Prototype
                    </Button>
                  )}
                  {!caseStudy?.externalLinks && project.externalLinks?.behance && (
                    <Button
                      href={project.externalLinks.behance}
                      variant="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Behance
                    </Button>
                  )}
                  {!caseStudy?.externalLinks && project.externalLinks?.live && (
                    <Button
                      href={project.externalLinks.live}
                      variant="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Site
                    </Button>
                  )}
                </div>
              )}
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-card)]">
                <Image
                  src={caseStudy?.heroImage || project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Case Study Content */}
      {caseStudy && caseStudy.sections.length > 0 && (
        <section className="pb-24">
          <Container>
            <div className="space-y-12">
              {caseStudy.sections.map((section, index) => (
                <ScrollReveal key={section.title} delay={index * 50}>
                  <Card padding="lg">
                    <CardContent>
                      <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">{section.title}</h2>
                      <p className="text-[var(--color-text-secondary)] mb-4">{section.content}</p>

                      {section.bullets && (
                        <ul className="space-y-3 mb-4">
                          {section.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start text-[var(--color-text-secondary)]">
                              <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.image && (
                        <div className="relative aspect-video rounded-lg overflow-hidden mt-6 bg-[var(--color-bg)]">
                          <Image
                            src={section.image}
                            alt={section.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Navigation */}
      <section className="py-16 bg-stone-100/70 border-t border-stone-200/60">
        <Container>
          <ScrollReveal className="text-center">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Interested in working together?</h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Let's discuss how I can help bring your project to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
              <Button href="/work" variant="outline">
                View More Projects
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
