import DitherBackground from "@/components/dither-background";
import SmartTypewriter from "@/components/smart-typewriter";
import BentoGrid from "@/components/bento-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen">
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
        <div className="text-center px-4 md:px-8 pt-16 md:pt-24 pb-8 md:pb-12">
          <SmartTypewriter
            baseText="Hi i'm Aidan, i'm a "
            replacements={[
              { word: "UX designer", delay: 2000 },
              { word: "motion designer", delay: 2000 },
              { word: "graphic designer", delay: 2000 },
              { word: "check out my work", delay: 3500, baseText: "Hi i'm Aidan, " }
            ]}
            typingSpeed={80}
            deletingSpeed={40}
            className="text-xl md:text-4xl font-bold text-[#ffa1a1] font-mono typewriter-glow"
          />
        </div>

        <BentoGrid />
      </main>
    </div>
  );
}
