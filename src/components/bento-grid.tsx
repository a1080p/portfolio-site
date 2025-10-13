'use client'

import { useRef, MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GlassSurface from './glass-surface'

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -3
    const rotateY = ((x - centerX) / centerX) * 3

    // Update CSS variables for liquid shimmer effect
    const percentX = (x / rect.width) * 100
    const percentY = (y / rect.height) * 100
    cardRef.current.style.setProperty('--glow-x', `${percentX}%`)
    cardRef.current.style.setProperty('--glow-y', `${percentY}%`)

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    cardRef.current.style.setProperty('--glow-x', '50%')
    cardRef.current.style.setProperty('--glow-y', '50%')
  }

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
    >
      {children}
    </div>
  )
}

export default function BentoGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Bio Card - Full width on top */}
        <TiltCard className="md:col-span-3 transition-all duration-300 h-auto md:h-[200px]">
          <div className="glass-card h-full rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-8 h-full">
              <div className="md:col-span-2 flex flex-col md:flex-row gap-4 md:gap-6">
                <Image
                  src="/profile.png"
                  alt="Aidan Dombrowski"
                  width={144}
                  height={144}
                  className="flex-shrink-0 mx-auto md:mx-0"
                  priority
                />
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-2 text-center md:text-left">Aidan Dombrowski</h2>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed text-center md:text-left">
                      I help brands and products come to life on the web. From initial wireframes to polished prototypes, I handle the full spectrum: UX research, interface design, motion systems, and front-end development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center md:items-end">
                <a href="mailto:aidand510@gmail.com" className="text-white/90 text-sm hover:text-white transition-colors">aidand510@gmail.com</a>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/aidan-dombrowski-43055b261/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image src="/Linkedin.png" alt="LinkedIn" width={40} height={40} />
                  </a>
                  <a href="https://www.instagram.com/greattaidan/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image src="/instagram.webp" alt="Instagram" width={40} height={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Projects Card - 2/3 width, full height */}
        <TiltCard className="md:col-span-2 transition-all duration-300 h-auto md:h-[632px]">
          <div className="glass-card h-full rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20">
            <div className="p-4 md:p-8 h-full flex flex-col">
              <h3 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 flex-1 relative gap-3 md:gap-0">
                {/* Vertical divider */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>
                {/* Horizontal divider */}
                <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-white/10 transform -translate-y-1/2"></div>

                <Link href="/iron-pillar" className="p-4 md:p-6 flex flex-col justify-center cursor-pointer transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] rounded-2xl group">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#C8FF96] group-hover:drop-shadow-[0_0_8px_rgba(200,255,150,0.6)] transition-all">Iron Pillar</h4>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">A fitness app concept reimagining workout tracking through gamification and social accountability.</p>
                </Link>
                <Link href="/whiskey-thief" className="p-4 md:p-6 flex flex-col justify-center cursor-pointer transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] rounded-2xl group">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#C8FF96] group-hover:drop-shadow-[0_0_8px_rgba(200,255,150,0.6)] transition-all">Whiskey Thief</h4>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">Interactive digital platform for Whiskey Thief Distilling Co., featuring bourbon, cocktail, and food menus.</p>
                </Link>
                <Link href="/lego-architect" className="p-4 md:p-6 flex flex-col justify-center cursor-pointer transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] rounded-2xl group">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#C8FF96] group-hover:drop-shadow-[0_0_8px_rgba(200,255,150,0.6)] transition-all">LEGO Architect</h4>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">Precision-scaled modular building system for architectural professionals, bridging physical and digital design.</p>
                </Link>
                <Link href="/multiverse-mix" className="p-4 md:p-6 flex flex-col justify-center cursor-pointer transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] rounded-2xl group">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#C8FF96] group-hover:drop-shadow-[0_0_8px_rgba(200,255,150,0.6)] transition-all">Multiverse Mix</h4>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">Music streaming app reimagining content discovery through interdimensional exploration and intuitive safety features.</p>
                </Link>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Small Cards - 1/3 width stacked with equal height */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <Link href="/demo-reel">
            <TiltCard className="transition-all duration-300 h-[150px] md:h-[200px]">
              <div className="glass-card h-full rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20">
                <div className="p-4 md:p-8 flex items-start h-full">
                  <h3 className="text-2xl md:text-3xl font-black text-white">Demo Reel</h3>
                </div>
              </div>
            </TiltCard>
          </Link>
          <Link href="/gallery">
            <TiltCard className="transition-all duration-300 h-[150px] md:h-[200px]">
              <div className="glass-card h-full rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20">
                <div className="p-4 md:p-8 flex items-start h-full">
                  <h3 className="text-2xl md:text-3xl font-black text-white">Gallery</h3>
                </div>
              </div>
            </TiltCard>
          </Link>
          <Link href="/about">
            <TiltCard className="transition-all duration-300 h-[150px] md:h-[200px]">
              <div className="glass-card h-full rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20">
                <div className="p-4 md:p-8 flex items-start h-full">
                  <h3 className="text-2xl md:text-3xl font-black text-white">About Me</h3>
                </div>
              </div>
            </TiltCard>
          </Link>
        </div>
      </div>
    </div>
  )
}
