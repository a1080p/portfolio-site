'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  thumbnailFit?: 'cover' | 'contain';
  videoPreview?: string;
  href: string;
  tags: string[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  thumbnail,
  thumbnailFit = 'cover',
  videoPreview,
  href,
  tags,
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

  return (
    <Link
      href={href}
      className={cn('group block', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <article className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:-translate-y-1">
        <div className={cn(
          "relative overflow-hidden bg-[var(--color-border)]",
          thumbnailFit !== 'contain' && "aspect-[16/10]"
        )}>
          {thumbnailFit === 'contain' ? (
            <Image
              src={thumbnail}
              alt={title}
              width={1200}
              height={800}
              className={cn(
                "w-full h-auto transition-all duration-500",
                isHovered && videoPreview ? "opacity-0" : "opacity-100 group-hover:scale-105"
              )}
            />
          ) : (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className={cn(
                "object-cover transition-all duration-500",
                isHovered && videoPreview ? "opacity-0" : "opacity-100 group-hover:scale-105"
              )}
            />
          )}
          {videoPreview && (
            <>
              <video
                ref={videoRef}
                src={videoPreview}
                muted
                loop
                playsInline
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
              />
              {/* Title overlay on hover */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 flex items-end",
                isHovered ? "opacity-100" : "opacity-0"
              )}>
                <div className="p-6">
                  <p className="text-white text-xl font-semibold">{title}</p>
                </div>
              </div>
            </>
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
