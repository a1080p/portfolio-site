'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { AccentText } from '@/components/projects/AccentText';
import { AutoplayPreview } from '@/components/projects/AutoplayPreview';
import { projectFontVariables } from '@/lib/fonts/project-fonts';
import type { CaseStudyTheme } from '@/lib/data/case-studies';
import '@/components/projects/project-themes.css';
import '@/components/projects/project-cards.css';

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  thumbnailFit?: 'cover' | 'contain';
  videoPreview?: string;
  previewLoop?: { src: string; poster: string };
  href: string;
  tags: string[];
  category?: string;
  /** Skins the card in the project's own style */
  theme?: CaseStudyTheme;
  tagline?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  thumbnail,
  thumbnailFit = 'cover',
  videoPreview,
  previewLoop,
  href,
  tags,
  category,
  theme,
  tagline,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const media = previewLoop ? (
    <AutoplayPreview src={previewLoop.src} poster={previewLoop.poster} label={`${title} demo preview`} />
  ) : (
    <>
      <Image
        src={thumbnail}
        alt={title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className={cn(
          "transition-all duration-500",
          thumbnailFit === 'contain' ? "object-contain" : "object-cover",
          isHovered && videoPreview ? "opacity-0" : "opacity-100 group-hover:scale-105"
        )}
      />
      {videoPreview && (
        <video
          ref={videoRef}
          src={videoPreview}
          muted
          loop
          playsInline
          preload="none"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </>
  );

  if (theme) {
    return (
      <Link
        href={href}
        className={cn('group pc', `pt--${theme}`, projectFontVariables, className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <article className="pc-card">
          <div className="pc-media">{media}</div>
          <div className="pc-body pt-plate pt-texture">
            {category && <p className="pt-eyebrow">{category}</p>}
            <h3 className="pt-display pc-title">{title}</h3>
            {tagline && (
              <p className="pt-display text-lg sm:text-xl mt-2 pt-muted">
                <AccentText text={tagline} />
              </p>
            )}
            <p className="pt-muted text-sm leading-relaxed line-clamp-2 mt-3">{description}</p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <li key={tag} className="pt-chip">
                  {tag}
                </li>
              ))}
            </ul>
            <span className="pc-cta">
              View project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn('group block', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <article className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:-translate-y-1">
        <div className="relative overflow-hidden bg-[var(--color-border)] aspect-[16/10]">
          {media}
          {videoPreview && (
            /* Title overlay on hover */
            <div className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 flex items-end",
              isHovered ? "opacity-100" : "opacity-0"
            )}>
              <div className="p-6">
                <p className="text-white text-xl font-semibold">{title}</p>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-[var(--color-border)] rounded-full text-[var(--color-text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--color-text-secondary)] text-sm line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center text-[var(--color-accent)] text-sm font-medium">
            View Project
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
