'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { AccentText } from '@/components/projects/AccentText';
import { AutoplayPreview } from '@/components/projects/AutoplayPreview';
import { projectFontVariables } from '@/lib/fonts/project-fonts';
import type { CaseStudyTheme } from '@/lib/data/case-studies';
import '@/components/projects/project-themes.css';
import '@/components/projects/project-cards.css';

interface Project {
  title: string;
  category: string;
  thumbnail: string;
  thumbnailFit?: 'cover' | 'contain';
  videoPreview?: string;
  previewLoop?: { src: string; poster: string };
  href: string;
  featured?: boolean;
  /** Skins the card in the project's own style */
  theme?: CaseStudyTheme;
  tagline?: string;
}

interface WorkShowcaseProps {
  title: string;
  projects: Project[];
  className?: string;
  id?: string;
}

function VideoProjectCard({
  project,
  aspectRatio = '16/9',
  contentPadding = 'p-8',
  titleSize = 'text-lg',
  buttonSize = 'w-10 h-10',
  iconSize = 'w-4 h-4',
  compact = false,
}: {
  project: Project;
  aspectRatio?: string;
  contentPadding?: string;
  titleSize?: string;
  buttonSize?: string;
  iconSize?: string;
  /** Smaller tagline type for the lower row */
  compact?: boolean;
}) {
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

  const useContain = project.thumbnailFit === 'contain';
  const themed = Boolean(project.theme);

  return (
    <Link
      href={project.href}
      className={cn(
        'group block relative',
        themed && ['pc', `pt--${project.theme}`, projectFontVariables]
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          themed ? cn('pc-show', compact && 'pc-show--compact') : "relative rounded-2xl overflow-hidden bg-stone-200",
          !useContain && "w-full"
        )}
        style={{ aspectRatio }}
      >
        {project.previewLoop ? (
          <AutoplayPreview
            src={project.previewLoop.src}
            poster={project.previewLoop.poster}
            label={`${project.title} preview`}
          />
        ) : (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={cn(
              "transition-all duration-500",
              useContain ? "object-contain" : "object-cover",
              isHovered && project.videoPreview ? "opacity-0" : "opacity-100 group-hover:scale-105"
            )}
          />
        )}
        {project.videoPreview && !project.previewLoop && (
          <video
            ref={videoRef}
            src={project.videoPreview}
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
        {/* Gradient overlay */}
        <div
          className={themed ? 'pc-show-overlay' : 'absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent'}
        />

        {/* Content */}
        {themed ? (
          <div className={cn('absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4', contentPadding)}>
            <div>
              <p className="pt-eyebrow mb-2">{project.title}</p>
              <p className="pt-display pc-show-tagline">
                <AccentText text={project.tagline ?? project.title} />
              </p>
            </div>
            <span className="pc-show-arrow" aria-hidden="true">
              <svg className={cn('arrow-icon', iconSize)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </div>
        ) : (
        <div className={cn('absolute bottom-0 left-0 right-0 flex items-end justify-between', contentPadding)}>
          <div>
            <p className={cn('text-white font-medium mb-1', titleSize)}>
              {project.title}
            </p>
            <p className="text-white/70 text-sm">
              {project.category}
            </p>
          </div>
          <div className={cn('rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/20 transition-all', buttonSize)}>
            <svg
              className={cn('text-white arrow-icon', iconSize)}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        </div>
        )}
      </div>
    </Link>
  );
}

export function WorkShowcase({
  title,
  projects,
  className,
  id,
}: WorkShowcaseProps) {
  // Two headline projects side by side, then the rest in a smaller row
  const headlineProjects = projects.slice(0, 2);
  const gridProjects = projects.slice(2, 5);

  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-28', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <ScrollReveal>
          <h2 className="text-[length:var(--text-h1)] leading-[1] font-black uppercase tracking-tight text-center mb-16">
            {title}
          </h2>
        </ScrollReveal>

        {/* Headline Projects - 2 Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {headlineProjects.map((project, index) => (
            <ScrollReveal key={project.href} delay={index * 100}>
              <VideoProjectCard
                project={project}
                aspectRatio="4/3"
                contentPadding="p-4 sm:p-6 lg:p-8"
                titleSize="text-base sm:text-lg"
                buttonSize="w-8 h-8 sm:w-10 sm:h-10"
                iconSize="w-3 h-3 sm:w-4 sm:h-4"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* More Projects - 3 Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {gridProjects.map((project, index) => (
            <ScrollReveal key={project.href} delay={index * 100}>
              <VideoProjectCard
                project={project}
                aspectRatio="16/10"
                contentPadding="p-4 sm:p-5"
                titleSize="text-sm sm:text-base"
                buttonSize="w-8 h-8"
                iconSize="w-3 h-3"
                compact
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
