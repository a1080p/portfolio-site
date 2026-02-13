import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: '_blank' | '_self';
  children: React.ReactNode;
}

const variants = {
  primary: 'bg-[var(--color-accent)] !text-white hover:bg-[var(--color-accent-hover)]',
  secondary: 'bg-white/70 backdrop-blur-md text-[var(--color-text-primary)] hover:bg-white/90 border border-stone-200',
  outline: 'border border-[var(--color-text-primary)]/30 text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    // Use regular anchor for external links or when target is specified
    if (target === '_blank' || href.startsWith('http') || href.endsWith('.pdf')) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
