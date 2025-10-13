import DitherBackground from "@/components/dither-background";
import Link from "next/link";

export default function MultiverseMixPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-[#ffa1a1] typewriter-glow">Multiverse Mix App Mockup</h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 py-12 text-white">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Project Overview</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <p className="text-white/90 leading-relaxed">
                Multiverse Mix represents an innovative approach to music streaming by introducing the concept of accessing music across parallel dimensions. This fictional app explores how users might discover and engage with musical content beyond the limitations of a single reality. The project encompassed comprehensive user research, multiple design iterations, and the creation of a cohesive user interface that balances familiarity with novel conceptual elements.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Problem Identification</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Initial research identified several problems with conventional music streaming:
                </p>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span>Limited musical discovery leading to "algorithm fatigue"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span>Repetitive recommendations creating echo chambers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span>Cultural and physical constraints on musical possibilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span>User desire for genuinely novel musical experiences</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Target Audience Analysis</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  I developed five detailed user personas to guide the design process:
                </p>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span><strong>The Musical Explorer</strong> (music professionals seeking inspiration)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span><strong>The Average Music Enthusiast</strong> (everyday listeners wanting fresh experiences)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span><strong>The Alternate History Buff</strong> (interested in cultural "what-ifs")</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span><strong>The Genre Fusion Artist</strong> (looking to create unprecedented combinations)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                    <span><strong>The Cultural Anthropologist</strong> (studying music's evolution across realities)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <img
                src="/multiverse-research-1.png"
                alt="Music of a Lifetime Research"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/multiverse-research-2.png"
                alt="Multiverse Mix Research"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Design Process & Iterations</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Conceptual Framework</h3>
              <p className="text-white/90 leading-relaxed">
                I established the core concept of "dimensional tuning" as the primary interaction model, allowing users to explore music across parallel realities with varying degrees of similarity to their home dimension.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Wireframing</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Multiple iterations were made to fully understand the feel and tone of the app. Colors were important in relaying the overall cosmic theme of the app. This process was long but most importantly, everything that comes after it will be affected. At first, an orange and black color palette was used but this felt too bright and not the space fantasy I was looking for. After changing the colors to purple and dark grey, the app started to come to life.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                After colors, it was essential to understand the user journey when using the app; were features easily understood, was the menu hard to navigate, etc.
              </p>
              <p className="text-white/90 leading-relaxed">
                This was an equally important step as the onboarding process was designed to be straightforward yet engaging to not overwhelm the user before they got into the main section of the app. I used interactive design elements like swiping and transitions to further engage the user while signing up for the app.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Testing and Iterations</h3>
              <img
                src="/multiverse-testing.png"
                alt="Testing and Iterations"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Onboarding</h3>
              <img
                src="/multiverse-onboarding.png"
                alt="Onboarding Screens"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Final Solution</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Core Interface</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                The final app interface features:
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span>Home Screen with personalized recommendations and recent dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span>Now Playing view with dimension indicator and reality controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span>Favorites section organized by dimension</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span>Profile with dimension history and preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span>Dimensional Search with reality filters</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Key Features Implemented</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Reality Dial:</strong> Visual interface for navigating between dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Dimension Cards:</strong> Quick access to popular parallel realities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Home Frequency button:</strong> Instant return to familiar music</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Foreign Frequency toggle:</strong> Explore more experimental dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                  <span><strong>Dimensional Context:</strong> Background information on each reality's musical evolution</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/multiverse-screens.png"
                alt="Multiverse Mix Final Screens"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12 text-center">
            <a
              href="https://www.figma.com/design/8kLFXE69afUkCD6x4hKCVX/Aidan-Dombrowski---DES-576-Spring-25?node-id=531-325&t=7JwLBc9fGgU7G6lM-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white font-bold text-xl transition-all duration-300 hover:bg-white/20 hover:border-[#C8FF96] hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] hover:scale-105"
            >
              Final Figma File
            </a>
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
