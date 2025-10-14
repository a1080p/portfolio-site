'use client';

import { useState } from "react";
import DitherBackground from "@/components/dither-background";
import Masonry from "@/components/Masonry";
import Link from "next/link";

export default function GalleryPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const items = [
    { id: "1", img: "/Gallery/Queens%20Gambit.png", url: "#", height: 2000 },
    { id: "2", img: "/Gallery/Sinners.png", url: "#", height: 1800 },
    { id: "3", img: "/Gallery/CPU_.png", url: "#", height: 1900 },
    { id: "4", img: "/Gallery/Bridge.png", url: "#", height: 1700 },
    { id: "5", img: "/Gallery/Light%20abyss.png", url: "#", height: 1800 },
    { id: "6", img: "/Gallery/The%20path.png", url: "#", height: 1700 },
    { id: "7", img: "/Gallery/flowers.png", url: "#", height: 1800 },
    { id: "8", img: "/Gallery/Untitled-1.png", url: "#", height: 1900 },
    { id: "9", img: "/Gallery/Album%20project%20wip%20copy.png", url: "#", height: 1600 },
    { id: "10", img: "/Gallery/vhs%20flowers.png", url: "#", height: 1700 },
    { id: "11", img: "/Gallery/wanderer.png", url: "#", height: 1800 },
    { id: "12", img: "/Gallery/Scan%2011.jpeg", url: "#", height: 1600 },
    { id: "13", img: "/Gallery/art%20nov%20poster.png", url: "#", height: 1900 },
    { id: "14", img: "/Gallery/The%20big%20lebowski%20poster.png", url: "#", height: 1800 },
    { id: "15", img: "/Gallery/Starve%20the%20ego%20poster.png", url: "#", height: 1900 },
    { id: "16", img: "/Gallery/Your%20brain%20on%20creativity.png", url: "#", height: 1700 },
    { id: "17", img: "/Gallery/awaken.png", url: "#", height: 1800 },
    { id: "18", img: "/Gallery/This%20is%20the%20future%20you%20created.png", url: "#", height: 1700 },
    { id: "19", img: "/Gallery/Arabic%20class%20exercise%20-%20Peace.png", url: "#", height: 1600 },
    { id: "20", img: "/Gallery/2%20to%20look.png", url: "#", height: 1600 },
    { id: "21", img: "/Gallery/in%20love.png", url: "#", height: 1700 },
    { id: "22", img: "/Gallery/maybe%20today.png", url: "#", height: 1700 },
    { id: "23", img: "/Gallery/Scan%203.jpeg", url: "#", height: 1600 },
    { id: "24", img: "/Gallery/Fight%20night%202024.png", url: "#", height: 1800 },
    { id: "25", img: "/Gallery/screenshot-oct-9.png", url: "#", height: 1500 },
    { id: "26", img: "/Gallery/bite%20me.png", url: "#", height: 1600 },
    { id: "27", img: "/Gallery/COCO%20wrapper.png", url: "#", height: 1400 },
    { id: "28", img: "/Gallery/Artboard%201.png", url: "#", height: 1500 },
    { id: "29", img: "/Gallery/screenshot-sept-16.png", url: "#", height: 1400 },
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

      <div className="fixed inset-0 bg-black/60 z-5 pointer-events-none" />

      <main className="relative z-10">
        <div className="text-center px-8 pt-24 pb-12">
          <div className="inline-block">
            <div className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <h1 className="text-4xl md:text-6xl font-bold text-[#ffa1a1] typewriter-glow">Gallery</h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          {/* Demo Reel Video Section */}
          <div className="mb-12">
            <div className="glass-card rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#C8FF96] mb-4 md:mb-6">Demo Reel</h2>
              <video controls className="w-full rounded-2xl" preload="metadata">
                <source src="/Demo%20Reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Image Archive Section with Glass Effect */}
          <div className="glass-card rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-black text-[#C8FF96] mb-8">Image Archive</h2>

            {/* Gallery Masonry */}
            <Masonry
              items={items}
              ease="power3.out"
              duration={0.4}
              stagger={0.025}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
              onFullscreenChange={setIsFullscreen}
            />
          </div>
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
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-[#C8FF96] hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] hover:scale-110"
          title="Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>

        <Link
          href="/about"
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-[#C8FF96] hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] hover:scale-110"
          title="About"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>

        <Link
          href="/gallery"
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-[#C8FF96] hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] hover:scale-110"
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
