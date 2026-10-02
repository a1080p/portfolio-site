'use client';

import { useEffect, useState } from 'react';
import type { CaseStudyTheme } from '@/lib/data/case-studies';

interface ProjectSplashProps {
  theme: CaseStudyTheme;
  year: string;
}

// Matches the end of the CSS timeline in project-themes.css
const SPLASH_DURATION_MS = 2600;

/**
 * Branded intro that plays every time a project page opens. The animation itself
 * is pure CSS (and skipped under prefers-reduced-motion); this component only
 * handles skipping and unmounting when it's done.
 */
export function ProjectSplash({ theme, year }: ProjectSplashProps) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), SPLASH_DURATION_MS);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') setDone(true);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  if (done) return null;

  return (
    <div className={`ps ps--${theme}`} onClick={() => setDone(true)} role="presentation">
      <SplashContent theme={theme} year={year} />
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
  );
}

function SplashContent({ theme, year }: { theme: CaseStudyTheme; year: string }) {
  switch (theme) {
    case 'iron-pillar':
      return <IronPillarSplash year={year} />;
    case 'dither-dog':
      return <DitherDogSplash />;
    case 'mgk-dossier':
      return <MgkSplash />;
    case 'whiskey-thief':
      return <WhiskeyThiefSplash />;
    case 'lego-architect':
      return <LegoSplash />;
    case 'apostrophe':
      return <ApostropheSplash year={year} />;
  }
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

function MgkSplash() {
  return (
    <>
      <span className="ps-mgk-bar ps-mgk-bar--top" aria-hidden="true" />
      <span className="ps-mgk-bar ps-mgk-bar--bottom" aria-hidden="true" />
      <div className="ps-mgk" aria-hidden="true">
        <p className="ps-mgk-kicker">A Blender motion study</p>
        <p className="ps-mgk-title">
          MGK <em>&times;</em> Dossier
        </p>
      </div>
      <div className="ps-mgk-slate" aria-hidden="true">
        <span className="ps-mgk-rec">Rec</span>
        <span>Cycles</span>
        <span>24 fps</span>
      </div>
    </>
  );
}

function WhiskeyThiefSplash() {
  return (
    <div className="ps-wt" aria-hidden="true">
      <div className="ps-wt-glass">
        <span className="ps-wt-liquid" />
      </div>
      <p className="ps-wt-name">
        Whiskey Thief
        <small>Distilling Co.</small>
      </p>
      <p className="ps-wt-meta">
        <span>DSP-KY</span>
        <span>&#10022;</span>
        <span>20002</span>
      </p>
    </div>
  );
}

// Bottom brick first in the drop order (--i), listed top-down for the flex column
const BRICKS = [
  { color: '#00852b', width: 96, x: 20, i: 3 },
  { color: '#ffffff', width: 128, x: -18, i: 2 },
  { color: '#0062a8', width: 128, x: 22, i: 1 },
  { color: '#d6000a', width: 160, x: 0, i: 0 },
];

function LegoSplash() {
  return (
    <div className="ps-lego" aria-hidden="true">
      <p className="ps-lego-sign">
        Lego
        <br />
        Architect
      </p>
      <div className="ps-lego-stack">
        {BRICKS.map((brick) => (
          <span
            key={brick.i}
            className="ps-lego-brick"
            style={
              {
                '--c': brick.color,
                '--w': `${brick.width}px`,
                '--x': `${brick.x}px`,
                '--i': brick.i,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <p className="ps-lego-tagline">Transforming play into real world creation</p>
    </div>
  );
}

// A hand-torn edge, precomputed (a slow wave plus fine jitter, in % of screen height) so the
// server and every browser render exactly the same tear. TEAR_FIBER is how far the white paper
// core shows past each torn edge.
const TEAR_Y = 62;
const TEAR_OFFSETS = [
  0.31, 0.7, 0.49, -0.0, 0.05, 0.44, 1.18, 1.27, 1.54, 1.11, 0.94, 0.62,
  0.19, 0.5, 0.43, 0.44, -0.2, -1.12, -0.97, -1.15, -0.8, -0.4, -0.92, -1.08,
  -1.24, -1.05, -1.05, -0.67, -0.31, 0.32, 0.27, 0.02, 0.09, 0.72, 1.02, 1.1,
  1.5, 1.3, 0.65, 0.27, 0.53, 0.71, 0.81, 0.68, -0.12, -0.36, -0.46, -0.8,
  -0.55, -0.07, -0.86, -1.28, -1.41, -1.87, -1.29, -0.39, -0.34, -0.17, -0.18, -0.31,
  -0.47,
];
const TEAR_FIBER = [
  0.49, 0.42, 0.68, 0.81, 0.74, 0.43, 1.09, 0.55, 1.2, 0.71, 0.39, 0.61,
  0.46, 1.08, 0.87, 0.69, 0.41, 0.54, 0.73, 0.88, 0.62, 0.98, 0.87, 1.14,
  0.61, 0.46, 1.03, 0.79, 0.95, 0.87, 0.63, 0.88, 0.76, 1.2, 0.95, 0.98,
  1.24, 0.61, 0.95, 0.77, 0.46, 1.04, 0.57, 1.13, 0.75, 1.15, 1.13, 0.72,
  1.15, 0.49, 0.56, 0.79, 0.59, 0.73, 0.86, 0.97, 0.91, 0.4, 1.05, 1.07,
  0.71,
];

/** Points along the tear, left to right. `side` grows the edge into the gap for the fiber layer. */
function tearPoints(side: 'top' | 'bottom', fiber = false) {
  return TEAR_OFFSETS.map((offset, i) => {
    const x = (i / (TEAR_OFFSETS.length - 1)) * 100;
    const grow = fiber ? TEAR_FIBER[i] * (side === 'top' ? 1 : -1) : 0;
    return `${x.toFixed(2)}% ${(TEAR_Y + offset + grow).toFixed(2)}%`;
  });
}

const topClip = (fiber = false) => `polygon(0% 0%, 100% 0%, ${tearPoints('top', fiber).reverse().join(', ')})`;
const bottomClip = (fiber = false) => `polygon(${tearPoints('bottom', fiber).join(', ')}, 100% 100%, 0% 100%)`;

/** The Apostrophe lockup printed on a sheet of paper that tears open to reveal the page */
function ApostropheSplash({ year }: { year: string }) {
  return (
    <div className="ps-tear" aria-hidden="true">
      {/* Whole sheet behind both halves, so their shared edge has no seam until the tear */}
      <div className="ps-tear-paper ps-tear-backing" />
      <div className="ps-tear-half ps-tear-half--top">
        {/* White paper core along the torn edge */}
        <div className="ps-tear-fiber" style={{ clipPath: topClip(true) }} />
        <div className="ps-tear-paper" style={{ clipPath: topClip() }}>
          <div className="ps-tear-print">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ps-tear-logo" src="/apostrophe-idents/apostrophe-logo.svg" alt="" width={276} height={232} />
            <p className="ps-tear-slate">
              <span>Ident campaign</span>
              <span>{year}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="ps-tear-half ps-tear-half--bottom">
        <div className="ps-tear-fiber" style={{ clipPath: bottomClip(true) }} />
        <div className="ps-tear-paper" style={{ clipPath: bottomClip() }} />
      </div>
    </div>
  );
}
