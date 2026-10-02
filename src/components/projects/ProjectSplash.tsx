'use client';

import { useEffect, useRef, useState } from 'react';
import type { CaseStudyTheme } from '@/lib/data/case-studies';

interface ProjectSplashProps {
  theme: CaseStudyTheme;
  slug: string;
  year: string;
}

// Matches the end of the CSS timeline in project-themes.css
const SPLASH_DURATION_MS = 2600;

/**
 * Branded intro shown once per session per project. The animation itself is
 * pure CSS (and skipped under prefers-reduced-motion); this component only
 * handles skipping, the session flag, and unmounting when it's done.
 */
export function ProjectSplash({ theme, slug, year }: ProjectSplashProps) {
  const [done, setDone] = useState(false);
  const seenBefore = useRef<boolean | null>(null);
  const storageKey = `splash-seen:${slug}`;
  const elementId = `project-splash-${slug}`;

  useEffect(() => {
    // Read once so React's dev double-invoke doesn't treat the first run as a repeat visit
    if (seenBefore.current === null) {
      try {
        seenBefore.current = sessionStorage.getItem(storageKey) === '1';
        sessionStorage.setItem(storageKey, '1');
      } catch {
        seenBefore.current = false;
      }
    }

    if (seenBefore.current) {
      setDone(true);
      return;
    }

    const timer = window.setTimeout(() => setDone(true), SPLASH_DURATION_MS);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') setDone(true);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
    };
  }, [storageKey]);

  if (done) return null;

  // Hides the splash before first paint on repeat visits, so it doesn't flash before hydration
  const preHide = `try{if(sessionStorage.getItem(${JSON.stringify(storageKey)})==='1'){var s=document.createElement('style');s.textContent='#${elementId}{display:none}';document.head.appendChild(s)}}catch(e){}`;

  return (
    <>
      <div
        id={elementId}
        className={`ps ps--${theme}`}
        onClick={() => setDone(true)}
        role="presentation"
      >
        {theme === 'iron-pillar' ? <IronPillarSplash year={year} /> : <DitherDogSplash />}
        <button
          type="button"
          className="ps-skip"
          onClick={(e) => {
            e.stopPropagation();
            setDone(true);
          }}
        >
          Skip intro
        </button>
      </div>
      <script dangerouslySetInnerHTML={{ __html: preHide }} />
    </>
  );
}

const WEEK = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function IronPillarSplash({ year }: { year: string }) {
  return (
    <div className="ps-ip" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ps-ip-logo" src="/iron-pillar/logo.png" alt="" width={1200} height={337} />
      <div className="ps-ip-week">
        {WEEK.map((day, i) => (
          <span key={i} className="ps-ip-day" style={{ '--i': i } as React.CSSProperties}>
            {day}
          </span>
        ))}
      </div>
      <div className="ps-ip-bar">
        <span />
      </div>
      <div className="ps-ip-meta">
        <span>Case study</span>
        <span>{year}</span>
      </div>
    </div>
  );
}

function DitherDogSplash() {
  return (
    <>
      <div className="ps-dd-field" aria-hidden="true" />
      <div className="ps-dd" aria-hidden="true">
        <span className="ps-dd-corner ps-dd-corner--tl" />
        <span className="ps-dd-corner ps-dd-corner--tr" />
        <span className="ps-dd-corner ps-dd-corner--bl" />
        <span className="ps-dd-corner ps-dd-corner--br" />
        <p className="ps-dd-label">
          <b>{'//'}</b> Initializing dither engine
        </p>
        <p className="ps-dd-title">Dither Dog</p>
        <div className="ps-dd-cells">
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i} style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>
        <div className="ps-dd-readout">
          <span>028 algorithms</span>
          <span>023 palettes</span>
          <span className="hidden sm:inline">100% client-side</span>
        </div>
      </div>
    </>
  );
}
