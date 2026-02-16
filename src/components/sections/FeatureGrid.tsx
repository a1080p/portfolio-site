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
        'relative py-28 overflow-hidden',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Title */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <h2 className="text-[var(--text-display)] font-black uppercase tracking-tight leading-none mb-4" style={{ color: '#3d9e5a' }}>
                {title}
              </h2>
              {subtitle && (
                <p className="text-white text-2xl font-medium mt-8">
                  {subtitle}
                </p>
              )}
              {/* Decorative arrow */}
              <div className="mt-12 hidden lg:block">
                <svg
                  className="w-10 h-10 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side - 2x2 Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 100}>
                  <GlassSurface
                    className="p-6 h-full"
                    hover
                  >
                    <div className="feature-icon mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg text-[var(--color-text-primary)] font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </GlassSurface>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
