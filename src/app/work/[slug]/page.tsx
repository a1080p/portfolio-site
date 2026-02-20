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
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16">
        <Container className="px-4 sm:px-6">
          <ScrollReveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Work
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ScrollReveal>
              <h1 className="text-[var(--text-h1)] font-bold mb-3 sm:mb-4">{project.title}</h1>
              <p className="text-[var(--color-text-secondary)] text-base sm:text-lg mb-4 sm:mb-6">
                {caseStudy?.overview || project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm bg-white/60 border border-stone-200 text-[var(--color-text-secondary)] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <span className="text-[var(--color-text-secondary)] text-xs sm:text-sm">Category</span>
                  <p className="text-[var(--color-text-primary)] font-medium text-sm sm:text-base">{project.category}</p>
                </div>
                <div>
                  <span className="text-[var(--color-text-secondary)] text-xs sm:text-sm">Year</span>
                  <p className="text-[var(--color-text-primary)] font-medium text-sm sm:text-base">{project.year}</p>
                </div>
              </div>

              {(project.externalLinks || caseStudy?.externalLinks) && (
                <div className="flex flex-wrap gap-2 sm:gap-3">
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
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--color-card)]">
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

      {/* Video Section */}
      {project.videoPreview && (
        <section className="pb-10 sm:pb-12 lg:pb-16">
          <Container className="px-4 sm:px-6">
            <ScrollReveal>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-black">
                <video
                  src={project.videoPreview}
                  controls
                  className="w-full"
                  poster={project.thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      )}

      {/* Case Study Content */}
      {caseStudy && caseStudy.sections.length > 0 && (
        <section className="pb-16 sm:pb-20 lg:pb-24">
          <Container className="px-4 sm:px-6">
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {caseStudy.sections.map((section, index) => (
                <ScrollReveal key={section.title} delay={index * 50}>
                  <Card padding="lg">
                    <CardContent>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-3 sm:mb-4">{section.title}</h2>
                      <p className="text-[var(--color-text-secondary)] text-sm sm:text-base mb-3 sm:mb-4">{section.content}</p>

                      {section.bullets && (
                        <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                          {section.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start text-[var(--color-text-secondary)] text-sm sm:text-base">
                              <span className="text-[var(--color-accent)] mr-2 sm:mr-3 mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.image && (
                        <div className="relative aspect-video rounded-lg overflow-hidden mt-4 sm:mt-6 bg-[var(--color-bg)]">
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
      <section className="py-12 sm:py-14 lg:py-16 bg-stone-100/70 border-t border-stone-200/60">
        <Container className="px-4 sm:px-6">
          <ScrollReveal className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-3 sm:mb-4">Interested in working together?</h2>
            <p className="text-[var(--color-text-secondary)] text-sm sm:text-base mb-6 sm:mb-8">
              Let's discuss how I can help bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
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
