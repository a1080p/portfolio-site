import DitherBackground from "@/components/dither-background";
import Link from "next/link";

export default function IronPillarPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-[#ffa1a1] typewriter-glow">Iron Pillar</h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 py-12 text-white">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Project Overview</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <p className="text-white/90 leading-relaxed">
                Iron Pillar is a UX/UI design project for a mobile fitness application that transforms workout tracking into an engaging, game-like experience. The app bridges the gap between beginner fitness enthusiasts and sustainable workout habits by combining personalized guidance with motivational gamification mechanics inspired by successful platforms like Duolingo.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/iron-pillar-hero.png"
                alt="Iron Pillar Hero"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Problem Statement</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  The fitness app market suffers from high abandonment rates, with users typically falling into three categories experiencing distinct pain points:
                </p>
                <ul className="space-y-3 text-white/90 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span>Fitness beginners feel overwhelmed by gym equipment and lack structured guidance on proper form and progression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span>Inconsistent users struggle to maintain motivation after missing workout sessions and need external accountability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span>Budget-conscious individuals require flexible, adaptable solutions that work across various fitness contexts</span>
                  </li>
                </ul>
                <p className="text-white/90 leading-relaxed">
                  Existing solutions either focus purely on tracking without engagement (Hevy, Strong) or provide comprehensive features without addressing the motivation gap that causes users to abandon their fitness goals.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Solution</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Iron Pillar occupies a unique market position by combining:
                </p>
                <ul className="space-y-3 text-white/90 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span><strong>Duolingo-inspired gamification:</strong> Streak tracking, achievement systems, daily commitment goals, and celebration animations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span><strong>Personalized workout guidance:</strong> Structured programs tailored to individual fitness levels with proper form instruction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span><strong>Social accountability:</strong> Community features that create support without judgment</span>
                  </li>
                </ul>
                <p className="text-white/90 leading-relaxed">
                  The app specifically targets the underserved beginner-to-intermediate market, transforming intimidating gym experiences into achievable, rewarding journeys.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/iron-pillar-competitive.png"
                alt="Competitive Analysis"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12 text-center">
            <a
              href="https://www.behance.net/gallery/236207299/IRON-PILLAR-Competitive-Analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white font-bold text-xl transition-all duration-300 hover:bg-white/20 hover:border-[#C8FF96] hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] hover:scale-105"
            >
              View Full Analysis
            </a>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/iron-pillar-personas.png"
                alt="User Personas"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Design Process</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Research & Strategy</h3>
              <p className="text-white/90 leading-relaxed">
                The competitive analysis revealed a critical gap: apps either gamify without substance or provide tracking without engagement. Iron Pillar's strategy positions it at the intersection of motivation and functionality.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">User Journey Mapping</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                The storyboard illustrates the complete user experience:
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Onboarding:</strong> User recognizes need for change and discovers Iron Pillar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Personalization:</strong> Selects experience level (Novice/Intermediate/Pro) and goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Structure:</strong> Receives tailored workout schedule and beginner-friendly programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Execution:</strong> Follows guided workouts with proper form demonstrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Celebration:</strong> Earns badges and medals through consistent progress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Tracking:</strong> Visualizes improvement through progress metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Motivation:</strong> Experiences accomplishment and reinforcement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Retention:</strong> Receives timely prompts to maintain streaks</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/iron-pillar-prototype.png"
                alt="Digital Prototype"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Key Features</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Personalized dashboard:</strong> Displays current streak, recommended workouts, and quick-start options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Workout guidance:</strong> Step-by-step exercise instructions with demonstration images, set/rep/weight tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Achievement system:</strong> Badges, medals, and level-up animations celebrating milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Progress visualization:</strong> Graphs and statistics showing improvement over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Streak protection:</strong> Daily reminders and streak freeze features to maintain momentum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Celebration moments:</strong> Smooth animations for workout completions, level-ups, and achievement unlocks</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Conclusion</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <p className="text-white/90 leading-relaxed">
                Iron Pillar represents a thoughtful approach to solving a persistent problem in the fitness app space. By deeply understanding user pain points across different personas and combining motivational psychology with practical functionality, the design creates a compelling solution for the underserved beginner-to-intermediate fitness market. The project demonstrates strong UX research, strategic positioning, cohesive visual design, and user-centered thinking throughout the entire design process.
              </p>
            </div>
          </section>

          <section className="mb-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.figma.com/proto/jaRishkrfdZU8vJBD1Lje4/ID-2-Fall-2025?node-id=112-154&p=f&t=3s09XEOL1kwkGaeY-0&scaling=scale-down&content-scaling=fixed&page-id=112%3A14&starting-point-node-id=129%3A66"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white font-bold text-xl transition-all duration-300 hover:bg-white/20 hover:border-[#C8FF96] hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] hover:scale-105"
              >
                Final Figma File
              </a>
              <a
                href="https://www.behance.net/gallery/236190049/Iron-Pillar-Pitch-Deck"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white font-bold text-xl transition-all duration-300 hover:bg-white/20 hover:border-[#C8FF96] hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] hover:scale-105"
              >
                Full Pitchdeck
              </a>
            </div>
          </section>

          <div className="h-24"></div>
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
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
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
