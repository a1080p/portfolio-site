'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { AutoplayPreview } from '@/components/projects/AutoplayPreview';

interface HeroLine {
  text: string;
  style: 'thin' | 'bold' | 'outline' | 'accent' | 'green';
}

interface HeroProps {
  name?: string;
  headline?: string;
  lines?: HeroLine[];
  badge?: string;
  showScrollIndicator?: boolean;
  scrollTargetId?: string;
  backgroundImage?: string;
  /** Silent looping reel behind the hero; switches the hero to light-on-dark type */
  backgroundVideo?: { src: string; poster: string; label?: string };
  /** Buttons under the headline */
  actions?: { label: string; href: string; primary?: boolean }[];
  className?: string;
}

export function Hero({
  name,
  headline,
  lines,
  badge,
  showScrollIndicator = true,
  scrollTargetId = 'work',
  backgroundImage,
  backgroundVideo,
  actions,
  className,
}: HeroProps) {
  const lineStyles = {
    thin: 'font-extralight',
    bold: 'font-black',
    outline: 'text-outline font-bold',
    accent: 'font-bold text-[var(--color-accent)]',
    // The green used by the home page section headings (Features, Capabilities)
    green: 'font-black text-[#3d9e5a]',
  };

  const handleScrollClick = () => {
    const target = document.getElementById(scrollTargetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={cn(
        'min-h-screen flex items-center relative overflow-hidden',
        backgroundVideo && 'hero--video bg-[#0a0a0a]',
        className
      )}
    >
      {/* Background Reel */}
      {backgroundVideo && (
        <div className="absolute inset-0 z-0">
          <AutoplayPreview
            src={backgroundVideo.src}
            poster={backgroundVideo.poster}
            label={backgroundVideo.label ?? 'Showreel'}
          />
          {/* Darken for legible type, and fade into the dark section below */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
      )}

      {/* Background Image */}
      {!backgroundVideo && backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
          />
          {/* Foggy overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-[var(--color-bg)]/30 to-transparent" />
        </div>
      )}
      <Container size="xl" className="relative z-10 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          {name && (
            <ScrollReveal>
              <p className="text-lg sm:text-xl font-medium text-[var(--color-text-primary)] mb-4">
                {name}
              </p>
            </ScrollReveal>
          )}

          {/* Badge */}
          {badge && (
            <ScrollReveal delay={50}>
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-6 sm:mb-8">
                {badge}
              </div>
            </ScrollReveal>
          )}

          {/* Main Typography */}
          <ScrollReveal delay={100}>
            {lines ? (
              <h1 className="text-hero tracking-tight">
                {lines.map((line, index) => (
                  <span
                    key={index}
                    className={cn('block', lineStyles[line.style])}
                  >
                    {line.text}
                  </span>
                ))}
              </h1>
            ) : headline ? (
              <h1 className="text-[length:var(--text-h1)] font-bold leading-tight text-balance">
                {headline}
              </h1>
            ) : null}
          </ScrollReveal>

          {/* Actions */}
          {actions && actions.length > 0 && (
            <ScrollReveal delay={200}>
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
                {actions.map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    className={cn(
                      'inline-flex items-center justify-center gap-2 min-h-12 px-7 rounded-full text-sm font-semibold tracking-wide transition-all duration-300',
                      action.primary
                        ? 'bg-white text-[#111] hover:bg-white/85 hover:-translate-y-0.5'
                        : 'border border-white/40 text-white hover:border-white hover:bg-white/10'
                    )}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </Container>

      {/* Reel label */}
      {backgroundVideo && (
        <div className="absolute bottom-8 right-6 sm:right-8 z-10 hidden sm:flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.25em] text-white/70">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-red-500" />
          </span>
          {backgroundVideo.label ?? 'Showreel'}
        </div>
      )}

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <ScrollReveal delay={300}>
            <button
              onClick={handleScrollClick}
              type="button"
              className="flex flex-col items-center gap-3 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] rounded-lg p-2"
              aria-label="Scroll to projects"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                Scroll to explore
              </span>
              <svg
                className="w-5 h-5 text-[var(--color-text-primary)] animate-bounce-slow group-hover:opacity-70 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </ScrollReveal>
        </div>
      )}
    </section>
  );
}
