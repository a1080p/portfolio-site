import DitherBackground from "@/components/dither-background";
import Link from "next/link";

export default function WhiskeyThiefPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-[#ffa1a1] typewriter-glow">Whiskey Thief Companion App</h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 py-12 text-white">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Project Overview</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <p className="text-white/90 leading-relaxed mb-4">
                The Whiskey Thief Distillery Digital Experience project involved designing a comprehensive web-based application to enhance visitor engagement at two distilleries in Louisville. I created a QR-accessible digital companion that guides visitors through their distillery experience while addressing key business objectives around education, ordering, and sales conversion.
              </p>
              <p className="text-white/90 leading-relaxed">
                Whiskey Thief Distillery faced several opportunities to enhance their visitor experience: informing guests about their offerings in an engaging way, enhancing the educational value of tours and tastings, streamlining food and beverage ordering, creating stronger connections between visitors and the brand, and ultimately increasing on-site sales of both whiskey and food items.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
              <p className="text-white/90 leading-relaxed">
                The challenge was to create a digital solution that would seamlessly integrate with the physical distillery experience without creating barriers like required downloads or account creation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">The Solution</h3>
              <p className="text-white/90 leading-relaxed">
                I developed a comprehensive web-based application accessible via QR codes placed strategically throughout the distillery facility. This digital companion guides visitors through their experience with location-specific content, interactive maps, educational materials, and streamlined ordering capabilities. All without requiring downloads or account creation.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/whiskey-thief-goals.png"
                alt="Whiskey Thief Goals and Mockups"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/whiskey-thief-journey.png"
                alt="User Journey and Visitor Outcomes"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Design Process & Iterations</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Research & Discovery</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                I began by analyzing the bourbon tourism landscape and visitor behavior at distilleries. Through research into similar hospitality experiences, I identified critical pain points: visitors felt overwhelmed by information, struggled to navigate large facilities, and missed educational opportunities.
              </p>
              <p className="text-white/90 leading-relaxed">
                Early concepts centered on a traditional app with extensive features. However, conceptual testing revealed that requiring downloads created significant friction—tourists often had limited data or storage. This insight drove a strategic pivot toward a frictionless web-based solution accessible via QR codes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Initial Concept Development</h3>
              <p className="text-white/90 leading-relaxed">
                I mapped the complete visitor journey from arrival to departure, identifying five key touchpoints: <strong>Discovery</strong> (QR access), <strong>Exploration</strong> (facility navigation), <strong>Learning</strong> (educational content), <strong>Tasting</strong> (menu and ordering), and <strong>Purchase</strong> (promotions and conversion). This framework became the foundation for all design decisions.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/whiskey-thief-screens.png"
                alt="Whiskey Thief App Screens"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Results & Impact</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">For Visitors</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                      <span>Enhanced educational experience with rich, contextual content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                      <span>Simplified ordering with expert pairing guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                      <span>Seamless access to information—no app downloads required</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">For Whiskey Thief</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                      <span>Increased on-site sales through strategic promotions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                      <span>Reduced staff burden for common questions and ordering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C8FF96] mr-3 mt-1">▸</span>
                      <span>Consistent brand messaging across all touchpoints</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Lessons Learned</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <p className="text-white/90 leading-relaxed">
                This project demonstrated my ability to balance user needs with business objectives in digital experiences. The challenge of creating an engaging app without requiring downloads pushed me to think creatively about access points and onboarding. Working within practical constraints highlighted how limitations can drive innovative solutions.
              </p>
            </div>
          </section>

          <section className="mb-12 text-center">
            <a
              href="https://www.figma.com/proto/8kLFXE69afUkCD6x4hKCVX/Aidan-Dombrowski---DES-576-Spring-25?node-id=1043-5145&t=ijtGM4P1f8kwmvbE-0&scaling=min-zoom&content-scaling=fixed&page-id=1043%3A3702&starting-point-node-id=1043%3A5498"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white font-bold text-xl transition-all duration-300 hover:border-[#C8FF96] hover:scale-105"
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
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:border-[#C8FF96] hover:scale-110"
          title="Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
