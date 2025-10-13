import DitherBackground from "@/components/dither-background";
import Link from "next/link";

export default function AboutPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-[#ffa1a1] typewriter-glow">About Me</h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 py-12 text-white">
          <section className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-block">
                <img
                  src="/Aidan Dombrowski.png"
                  alt="Aidan Dombrowski"
                  className="w-80 h-80 mx-auto mb-4 object-cover rounded-3xl border-4 border-white/20 backdrop-blur-md shadow-lg"
                />
              </div>
              <h2 className="text-2xl font-bold text-white">Aidan Dombrowski</h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <p className="text-white/90 leading-relaxed mb-4">
                Hey there! I&apos;m Aidan, a UX/UI designer based in Louisville, Kentucky, where I&apos;m currently wrapping up my BFA in Graphic Design at the University of Louisville with marketing and communication minors.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                I&apos;m drawn to UX/UI because it sits at this perfect intersection of creativity, psychology, and problem-solving. I love digging into how people interact with digital products and finding ways to make those experiences more intuitive, engaging, and genuinely helpful. For me, it&apos;s not just about making interfaces look good, it&apos;s about understanding user needs, testing assumptions, and iterating until something truly works.
              </p>
              <p className="text-white/90 leading-relaxed">
                Right now, I&apos;m wearing a few different hats: leading client projects at The Birds Nest Marketing Agency, supporting digital media platforms at UofL, and constantly expanding my design toolkit. Working across these different environments has taught me how to balance user needs with business goals, communicate design decisions effectively, and stay adaptable when things inevitably change mid-project.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#C8FF96]">My approach</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                I believe the best interfaces are the ones you don&apos;t have to think about, they just feel right. Getting there takes empathy, research, and a willingness to kill your darlings when the data tells you to. I&apos;m all about collaborative design processes, bringing stakeholders into the conversation early, and always keeping the end user at the center of every decision.
              </p>
              <p className="text-white/90 leading-relaxed">
                My background in graphic design gives me a strong foundation in visual communication, but it&apos;s the UX thinking that really lights me up; crafting user flows, wireframing solutions, prototyping in Figma, and watching how people actually interact with what I&apos;ve built. Every project is a chance to learn something new about human behavior and digital design.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#C8FF96]">Let&apos;s connect</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                I&apos;m always excited to talk shop with other designers, explore new opportunities, or collaborate on projects that challenge me to grow. Whether you&apos;ve got a product that needs some UX love, want to bounce around ideas, or just want to geek out about interaction design, I&apos;d love to hear from you.
              </p>
              <div className="space-y-2 text-white/90">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a href="mailto:aidand510@gmail.com" className="text-[#C8FF96] hover:underline">aidand510@gmail.com</a>
                </p>
                <p>
                  <strong className="text-white">Phone:</strong>{" "}
                  <a href="tel:815-341-2885" className="text-[#C8FF96] hover:underline">815-341-2885</a>
                </p>
              </div>
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
