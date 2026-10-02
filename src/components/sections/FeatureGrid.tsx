'use client';

import { cn } from '@/lib/utils/cn';
import { GlassSurface } from '@/components/ui/GlassSurface';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  backgroundImage?: string;
  className?: string;
}

export function FeatureGrid({
  title,
  subtitle,
  features,
  backgroundImage,
  className,
}: FeatureGridProps) {
  return (
    <section
      className={cn(
        'relative py-16 sm:py-20 lg:py-28 overflow-hidden',
        className
      )}
    >
      {/* Background Image - Left Side */}
      {backgroundImage && (
        <div
          className="absolute left-0 top-0 w-1/2 h-full opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Title row: heading left, subtitle and arrow right */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-12 mb-10 sm:mb-14">
            <h2 className="text-[length:var(--text-display)] font-black uppercase tracking-tight leading-none" style={{ color: '#3d9e5a' }}>
              {title}
            </h2>
            {subtitle && (
              <p className="flex items-center gap-3 text-white text-lg sm:text-xl lg:text-2xl font-medium lg:pb-3">
                {subtitle}
                <svg
                  className="w-6 h-6 text-[var(--color-accent)] hidden lg:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Cards: a row of three, or 2x2 for four */}
        <div className={cn('grid grid-cols-1 gap-4 sm:gap-5', features.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2')}>
          {features.slice(0, 4).map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <GlassSurface className="p-6 sm:p-7 h-full" hover>
                <div className="feature-icon mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl text-[var(--color-text-primary)] font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm sm:text-[0.9375rem] leading-relaxed">
                  {feature.description}
                </p>
              </GlassSurface>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
