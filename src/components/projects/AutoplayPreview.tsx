'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface AutoplayPreviewProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
}

/**
 * A silent looping preview that plays only while it's on screen. Visitors who
 * prefer reduced motion get the poster frame instead.
 */
export function AutoplayPreview({ src, poster, label, className }: AutoplayPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects if the browser blocks it; the poster stays up, which is fine
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className={cn('absolute inset-0 w-full h-full object-cover', className)}
    />
  );
}
