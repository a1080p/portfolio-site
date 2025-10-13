import DitherBackground from "@/components/dither-background";
import Link from "next/link";

export default function LegoArchitectPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-[#ffa1a1] typewriter-glow">LEGO Architect Mockup</h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 py-12 text-white">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Project Overview</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <p className="text-white/90 leading-relaxed mb-4">
                LEGO Architect is a fictional innovative mobile application that transforms physical LEGO constructions into realistic architectural designs with real-world materials and cost estimates. The project represents a strategic brand extension for LEGO, expanding from childhood toys into practical adult creative tools while maintaining the company's core values of creativity and building.
              </p>
              <p className="text-white/90 leading-relaxed">
                Modern consumers desire custom-designed furniture and architectural elements but face significant barriers in the design process. Professional design services are expensive ($150-300/hour), CAD software has steep learning curves, and existing solutions fail to bridge the gap between ideation and implementation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Core Concept</h3>
              <p className="text-white/90 leading-relaxed">
                Transform LEGO from a toy into a professional prototyping tool by creating a seamless physical-to-digital workflow that maintains the intuitive joy of building while delivering practical results.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
              <p className="text-white/90 leading-relaxed">
                How might we enable adults to design custom furniture and architectural elements using the tactile familiarity of LEGO while providing professional-grade outputs for real-world implementation?
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <img
                src="/Lego Wireframes.png"
                alt="LEGO Architect Wireframes"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#C8FF96]">Pitch Deck</h2>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-white/90 leading-relaxed">
                    While LEGO Architect represents a unique opportunity to transform a beloved childhood toy into a powerful adult creative tool, the primary objective of this project was to explore how to effectively communicate a complex new product concept through strategic pitch deck design and presentation.
                  </p>
                </div>

                <div>
                  <p className="text-white/90 leading-relaxed">
                    This project served as an exercise in translating innovative ideas into compelling narratives that resonate with diverse audiences, from technical teams to business stakeholders to potential users. The challenge wasn't just designing the app interface, but crafting a story that made the concept immediately understandable and emotionally engaging.
                  </p>
                </div>

                <div>
                  <p className="text-white/90 leading-relaxed">
                    The pitch deck development process revealed how critical it is to sequence information strategically—starting with familiar problems, introducing the solution gradually, and building excitement through a logical progression of features and benefits. Each slide needed to stand alone while contributing to the larger narrative arc.
                  </p>
                </div>

                <div>
                  <p className="text-white/90 leading-relaxed">
                    This project reinforced my understanding that successful product communication requires balancing multiple perspectives: the user's emotional journey, the business value proposition, and the technical feasibility. The most important skill demonstrated here wasn't just design thinking, but the ability to synthesize complex ideas into clear, compelling presentations that drive decision-making and buy-in.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <p className="text-white/90 text-center mb-6 text-lg">
              A Copy of the Pitch-deck for LEGO Architect can be found here
            </p>
            <div className="text-center">
              <a
                href="https://www.behance.net/gallery/224263107/Lego-Architect-Interaction-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white font-bold text-xl transition-all duration-300 hover:bg-white/20 hover:border-[#C8FF96] hover:shadow-[0_0_20px_rgba(200,255,150,0.4)] hover:scale-105"
              >
                View Pitch Deck
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
