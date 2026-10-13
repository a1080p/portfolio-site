import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import type { Project } from '@/lib/data/projects';

/*
 * The site's own frame around a themed case study: a header label at the top and a
 * "next case study" footer at the bottom, always in the site's style, so every project
 * page reads as part of one portfolio however different its theme is.
 */

const pad = (n: number) => String(n).padStart(2, '0');

/** Site-styled label at the top of a case study: back link, position, category */
export function CaseStudyLabel({ index, total, category }: { index: number; total: number; category: string }) {
  return (
    <nav
      aria-label="Case study"
      className="inline-flex items-center gap-1 rounded-full bg-white/90 p-1 pr-4 font-sans text-xs text-[#1a1a1a] shadow-[0_4px_20px_rgba(0,0,0,0.12)] backdrop-blur-md mb-6 sm:mb-10"
    >
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-3 py-1.5 font-medium text-white transition-colors hover:bg-[var(--site-accent)]"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        All work
      </Link>
      <span className="pl-2 font-medium">
        Case study {pad(index + 1)} / {pad(total)}
      </span>
      <span className="hidden sm:inline text-[#6b6b6b]">· {category}</span>
    </nav>
  );
}

/** Site-styled footer for a case study: the next project, then a way to get in touch */
export function CaseStudyFooter({
  next,
  nextIndex,
  total,
  ctaTitle,
}: {
  next: Project;
  nextIndex: number;
  total: number;
  ctaTitle: string;
}) {
  const nextImage = next.previewLoop?.poster ?? next.thumbnail;
  const nextTagline = next.tagline?.replaceAll('*', '');

  return (
    <section className="bg-[var(--color-bg)] text-[var(--color-text-primary)] font-sans border-t border-stone-200/70">
      <Container className="py-16 sm:py-20 lg:py-24">
        <ScrollReveal>
          <Link
            href={`/work/${next.slug}`}
            className="group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-10 items-center"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-3">
                Next case study · {pad(nextIndex + 1)} / {pad(total)}
              </p>
              <h2 className="text-[length:var(--text-h1)] leading-[1] font-black uppercase tracking-tight transition-colors group-hover:text-[var(--color-accent)]">
                {next.title}
              </h2>
              {nextTagline && (
                <p className="mt-3 text-lg sm:text-xl text-[var(--color-text-secondary)]">{nextTagline}</p>
              )}
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                View case study
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-stone-200">
              <Image
                src={nextImage}
                alt=""
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className={next.thumbnailFit === 'contain' ? 'object-contain' : 'object-cover transition-transform duration-500 group-hover:scale-105'}
              />
            </div>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-14 sm:mt-16 pt-8 border-t border-stone-200/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="text-xl sm:text-2xl font-bold">{ctaTitle}</p>
              <p className="text-[var(--color-text-secondary)] text-sm sm:text-base mt-1">
                Let&apos;s discuss how I can help bring your project to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
              <Button href="/work" variant="outline">
                All Work
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
