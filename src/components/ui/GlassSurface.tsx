'use client';

import { cn } from '@/lib/utils/cn';

interface GlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  border?: boolean;
  hover?: boolean;
  as?: 'div' | 'section' | 'article';
}

export function GlassSurface({
  children,
  className,
  intensity = 'medium',
  border = true,
  hover = false,
  as: Component = 'div',
}: GlassSurfaceProps) {
  const intensityStyles = {
    light: 'bg-white/70 backdrop-blur-md',
    medium: 'bg-white/90 backdrop-blur-xl',
    strong: 'bg-white/95 backdrop-blur-2xl',
  };

  return (
    <Component
      className={cn(
        intensityStyles[intensity],
        'backdrop-saturate-150',
        border && 'border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)]',
        hover && 'transition-all duration-300 hover:bg-white hover:border-white/80 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]',
        'rounded-2xl',
        // Reset text colors for card content (dark text on white background)
        '[--color-text-primary:#1a1a1a] [--color-text-secondary:#4a4a4a] [--color-accent:#1a4d2e]',
        className
      )}
    >
      {children}
    </Component>
  );
}
