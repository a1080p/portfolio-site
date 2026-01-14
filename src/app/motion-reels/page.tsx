'use client';

import { useState } from "react";
import DitherBackground from "@/components/dither-background";
import Link from "next/link";

export default function MotionReelsPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const reels = [
    {
      id: "demo-reel",
      title: "Demo Reel 2024",
      videoSrc: "/Demo%20Reel.mp4",
      description: "A comprehensive showcase of motion design, UX animation, and visual effects work. This reel demonstrates expertise in kinetic typography, 3D motion graphics, interface animations, and dynamic transitions across various projects and mediums."
    },
    {
      id: "mgk-dossier",
      title: "MGK x Dossier Case Study",
      videoSrc: "/MGK%20x%20Dossier%20Final.mp4",
      description: "A branding and motion design exploration for a conceptual Machine Gun Kelly x Dossier collaboration. This case study demonstrates product design storytelling through kinetic typography, dynamic transitions, and brand-focused visual movement."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
        <DitherBackground
          waveColor={[0.65, 0.78, 0.08]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.25}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <div className="fixed inset-0 bg-black/70 z-5 pointer-events-none" />

      <main className="relative z-10">
        <div className="text-center px-8 pt-24 pb-12">
          <div className="inline-block">
            <div className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <h1 className="text-4xl md:text-6xl font-bold text-[#ffa1a1] typewriter-glow">Motion Reels</h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12">
          {reels.map((reel) => (
            <div key={reel.id} className="glass-card rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#C8FF96] mb-6">{reel.title}</h2>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Video Section - 2/3 width on desktop */}
                <div className="lg:w-2/3">
                  <video
                    controls
                    muted
                    className="w-full rounded-2xl"
                    preload="metadata"
                    aria-label={`${reel.title} video`}
                  >
                    <source src={reel.videoSrc} type="video/mp4" />
                    <track kind="captions" srcLang="en" label="English" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Description Section - 1/3 width on desktop */}
                <div className="lg:w-1/3 flex items-center">
                  <div className="glass-card rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                    <h3 className="text-xl font-bold text-[#C8FF96] mb-4">About This Reel</h3>
                    <p className="text-white/80 leading-relaxed">
                      {reel.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#2a2a2a] border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <a href="mailto:aidand510@gmail.com" className="text-white/90 text-base hover:text-white transition-colors">
            aidand510@gmail.com
          </a>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/aidan-dombrowski-43055b261/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="/Linkedin.png" alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/greattaidan/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="/instagram.webp" alt="Instagram" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky Navigation Buttons */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 transition-opacity duration-300 ${isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Link
          href="/"
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:border-[#C8FF96] hover:scale-110"
          title="Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>

        <Link
          href="/motion-reels"
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:border-[#C8FF96] hover:scale-110"
          title="Motion Reels"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </Link>

        <Link
          href="/about"
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:border-[#C8FF96] hover:scale-110"
          title="About"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>

        <Link
          href="/gallery"
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:border-[#C8FF96] hover:scale-110"
          title="Gallery"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
