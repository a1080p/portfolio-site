'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui/Container';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <Container>
        <nav
          className="flex items-center justify-between py-4"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-[var(--color-text-primary)] hover:opacity-70 transition-opacity"
          >
            AD
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-[var(--color-text-primary)]',
                    pathname === link.href
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)]'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--color-text-primary)] hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-white/80 backdrop-blur-xl',
          isMobileOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <Container>
          <ul className="py-4 space-y-4 border-t border-[var(--color-border)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block py-2 text-base font-medium transition-colors hover:text-[var(--color-text-primary)]',
                    pathname === link.href
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)]'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}
