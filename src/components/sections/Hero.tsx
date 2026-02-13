'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface HeroLine {
  text: string;
  style: 'thin' | 'bold' | 'outline' | 'accent';
}

interface HeroProps {
  name?: string;
  headline?: string;
  lines?: HeroLine[];
  badge?: string;
  showScrollIndicator?: boolean;
  scrollTargetId?: string;
  backgroundImage?: string;
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
  className,
}: HeroProps) {
  const lineStyles = {
    thin: 'font-extralight',
    bold: 'font-black',
    outline: 'text-outline font-bold',
    accent: 'font-bold text-[var(--color-accent)]',
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
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
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
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-8">
                {badge}
              </div>
            </ScrollReveal>
          )}

          {/* Main Typography */}
          <ScrollReveal delay={100}>
            {lines ? (
              <h1 className="text-hero leading-[0.95] tracking-tight">
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
              <h1 className="text-[var(--text-h1)] font-bold leading-tight text-balance">
                {headline}
              </h1>
            ) : null}
          </ScrollReveal>
        </div>
      </Container>

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
