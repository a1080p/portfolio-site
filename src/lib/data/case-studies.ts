export interface CaseStudySection {
  title: string;
  content: string;
  bullets?: string[];
  image?: string;
  /** Small label above the title on themed pages, e.g. "Phase 01 / Research" */
  kicker?: string;
  /** Extra images shown as a grid on themed pages. Without width/height they're cropped to 16:9. */
  gallery?: { src: string; alt: string; width?: number; height?: number }[];
}

export interface CaseStudyLink {
  label: string;
  url: string;
  /** Shown as a disabled "coming soon" badge instead of a link */
  comingSoon?: boolean;
}

/** Projects with a theme get their own styled page and splash screen */
export type CaseStudyTheme = 'iron-pillar' | 'dither-dog';

export interface CaseStudy {
  slug: string;
  overview: string;
  heroImage?: string;
  sections: CaseStudySection[];
  externalLinks?: CaseStudyLink[];
  theme?: CaseStudyTheme;
  eyebrow?: string;
  headline?: string;
  status?: string;
  stats?: { value: string; label: string }[];
  roles?: string[];
  stack?: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  'dither-dog': {
    slug: 'dither-dog',
    theme: 'dither-dog',
    eyebrow: 'Client-side image, video & GIF processor',
    headline: 'Dither your\n*whole world.*',
    overview: 'Dither Dog turns any photo, video, or GIF into pixel-precise art, with dozens of dithering algorithms and color palettes rendered entirely in the browser. It was my first fully designed and deployed web application, and I have kept growing it since: what started as a single-image filter is now a full processing tool with presets, video support, and guides.',
    heroImage: '/Dither dog thumbnail.png',
    status: 'Live at ditherdog.tech',
    stats: [
      { value: '28', label: 'Dither algorithms' },
      { value: '23', label: 'Color palettes' },
      { value: '20', label: 'Curated presets' },
      { value: '100%', label: 'Client-side' },
    ],
    roles: ['Product Design', 'UI / UX', 'Front-End Development', 'Project Management', 'Brand'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Canvas API', 'Vercel', 'Claude Code'],
    sections: [
      {
        kicker: 'Origin',
        title: 'A designer ships a real tool',
        content: 'Dither Dog started as a personal challenge: could I design and ship a functional web tool without prior development experience? By pairing my design background with AI-assisted coding through Claude Code, I took it from an idea to a deployed product, and then kept iterating on it like a real product rather than a one-off experiment.',
      },
      {
        kicker: 'Product',
        title: 'From one filter to a full workspace',
        content: 'The first version applied a handful of effects to a single image. The current release is a complete dithering workspace:',
        bullets: [
          'Images, videos, and GIFs, all processed in the browser. Nothing is ever uploaded to a server',
          '28 algorithms across error diffusion (Floyd-Steinberg, Atkinson, Stucki, Sierra), ordered dither (Bayer, blue noise, clustered dot), and artistic patterns (halftone, crosshatch, stipple, spiral)',
          '23 color palettes, from Game Boy green to cyan-and-magenta print halftone',
          '20 hand-tuned presets that dial in an algorithm, palette, and contrast curve in one click',
          'A Guides section that teaches how dithering works, so the tool doubles as a learning resource',
        ],
        gallery: [
          { src: '/dither-dog/workspace-newspaper.jpg', alt: 'Classic Newspaper preset with the Effect & Color controls open', width: 2400, height: 1500 },
          { src: '/dither-dog/workspace-game-boy.jpg', alt: 'Retro Game Boy preset', width: 2400, height: 1500 },
          { src: '/dither-dog/workspace-vintage-poster.jpg', alt: 'Vintage Poster preset', width: 2400, height: 1500 },
        ],
      },
      {
        kicker: 'Design Direction',
        title: 'A sleek, robotic instrument panel',
        content: 'I wanted the interface to feel like precision hardware: something between a lab instrument and a retro terminal. The UI steps back so the artwork carries the color:',
        bullets: [
          'Near-black canvas with a single signal-orange accent for every primary action',
          'Dot-matrix display type that echoes the pixel grids the tool produces',
          'Monospace, all-caps labels and numbered modules (01, 02, 03) that read like machine readouts',
          'Hard edges, hairline borders, and no rounded corners, so everything feels engineered rather than decorative',
        ],
      },
      {
        kicker: 'Development',
        title: 'Learning to build by building',
        content: 'Dither Dog was where I learned the fundamentals of shipping software:',
        bullets: [
          'Structuring a Next.js and TypeScript app with a reusable component architecture',
          'Canvas API pixel manipulation for real-time image processing',
          'State management for algorithm, palette, and contrast settings across images, video frames, and GIFs',
          'Performance work: debounced updates so sliders stay smooth, and careful canvas handling for large files',
          'Continuous deployment on Vercel, with the source public on GitHub',
        ],
      },
      {
        kicker: 'Project Management',
        title: 'Small scope, real discipline',
        content: 'Even as a small, niche project, Dither Dog taught me to run work like a product team of one:',
        bullets: [
          'Start with a focused core (upload, dither, export), ship it, then expand in deliberate releases',
          'Prioritize the features that make the tool more useful (presets, video, guides) over ones that only add complexity',
          'Keep the design system consistent as features grow, so new screens feel native to the product',
          'Treat feedback and real usage as the roadmap instead of building in isolation',
        ],
      },
      {
        kicker: 'Takeaways',
        title: 'What it taught me',
        content: 'The gap between design and development is bridgeable. With the right tools and approach, designers can ship real products:',
        bullets: [
          'One feature done well beats many half-finished ones',
          'Design and development inform each other, and iterating between both improves the result',
          'AI-assisted coding speeds up learning, but understanding the fundamentals is what makes it work',
          'Shipping something real, then improving it, beats endless polish in isolation',
        ],
      },
    ],
    externalLinks: [
      { label: 'Try Dither Dog', url: 'https://www.ditherdog.tech/' },
      { label: 'View Source', url: 'https://github.com/a1080p/Dither-Dog' },
    ],
  },
  'iron-pillar': {
    slug: 'iron-pillar',
    theme: 'iron-pillar',
    eyebrow: 'Workout tracker for iPhone · Solo build',
    headline: 'Show up.\nStack the *days.*',
    overview: 'Iron Pillar began as a UX research and design project and became a real iOS app that I designed, built, and brought to the App Store on my own. It logs any workout in seconds, tracks outdoor activity with GPS, and turns consistency into streaks, XP, levels, and badges. As the sole developer, I owned everything: research, UX and UI, brand, mobile and backend engineering, the marketing site, App Store submission, and project management.',
    heroImage: '/iron-pillar-hero.png',
    status: 'In App Store review',
    stats: [
      { value: '1', label: 'Developer, start to finish' },
      { value: '51', label: 'Badges across 8 groups' },
      { value: '59', label: 'Jira issues tracked' },
      { value: '80+', label: 'Commits in 6 weeks' },
    ],
    roles: ['UX Research', 'UI / UX Design', 'Brand', 'iOS Development', 'Backend', 'Project Management'],
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Cloud Functions', 'RevenueCat', 'HealthKit', 'Live Activities', 'EAS Build', 'Claude Code'],
    sections: [
      {
        kicker: 'Phase 01 / Research',
        title: 'The problem',
        content: 'Fitness apps lose most of their users within weeks. Research pointed to three groups with distinct pain points:',
        bullets: [
          'Beginners feel overwhelmed by equipment and lack structured guidance on form and progression',
          'Inconsistent users lose motivation after missed sessions and need accountability',
          'Budget-conscious users need flexible routines that work in any setting, including at home',
        ],
        image: '/iron-pillar-personas.png',
      },
      {
        kicker: 'Phase 01 / Research',
        title: 'Finding the gap',
        content: 'The competitive analysis showed apps either gamify without substance (Duolingo-style motivation) or track without engagement (Hevy, Strong). Iron Pillar sits at the intersection: real workout guidance wrapped in streaks, XP, and achievements.',
        image: '/iron-pillar-competitive.png',
      },
      {
        kicker: 'Phase 02 / Design',
        title: 'Storyboard to prototype',
        content: 'I mapped the full journey in a storyboard, tested the critical flows with paper prototypes (onboarding, experience level, workout logging, social feed), then built a high-fidelity Figma prototype and a brand system: voice, type, color, and the pillar-and-plates logomark.',
        gallery: [
          { src: '/Iron Pillar Pitch Deck/5.png', alt: 'Iron Pillar storyboard' },
          { src: '/Iron Pillar Pitch Deck/7.png', alt: 'Iron Pillar paper prototypes' },
          { src: '/Iron Pillar Pitch Deck/8.png', alt: 'Iron Pillar high-fidelity digital prototype' },
          { src: '/Iron Pillar Pitch Deck/6.png', alt: 'Iron Pillar style guide' },
        ],
      },
      {
        kicker: 'Phase 03 / Build',
        title: 'From Figma to a working app',
        content: 'I built the app in React Native with Expo and TypeScript, with a Firebase backend. The core rule: anything that affects progress is decided by the server, so streaks and XP can\'t be faked.',
        bullets: [
          'Server-side game logic: Cloud Functions calculate streaks, XP, levels, personal records, and badges on the server clock, and security rules lock those fields from client writes',
          'Progression: 51 badges in 8 groups with bronze-to-platinum tiers, personal records from estimated one-rep maxes, plus level-up and streak screens with celebration animations',
          'Outdoor tracking: GPS route maps for walks, runs, and rides, with lock-screen Live Activities showing the timer, current set, and rest countdown',
          'Apple Health integration and a Pro daily readiness score that blends recovery, sleep, and training load',
          'Social layer: friends, activity feed, reactions, and friend profiles, with report, block, and content filtering for safety',
          'Iron Pillar Pro subscriptions through RevenueCat, verified server-side before awarding 2x XP',
          'Accessibility pass: WCAG AA contrast tokens and screen-reader roles and labels across every control',
        ],
      },
      {
        kicker: 'Phase 04 / Ship',
        title: 'Taking it to the App Store',
        content: 'Shipping meant everything around the code, too. I set up EAS builds and TestFlight, wrote the App Store listing and screenshots, configured subscriptions and privacy disclosures, and responded to App Review. I also designed and launched ironpillar.app, the marketing site with support, privacy, and terms pages, built around the same "pillar" layout concept as the brand.',
      },
      {
        kicker: 'Project Management',
        title: 'A team of one, run like a team',
        content: 'With no one else to catch mistakes, process mattered as much as code:',
        bullets: [
          'A Jira board with epics and issues for every feature, bug, and submission blocker, groomed after each work session',
          'A running progress log recording what was built, what was verified, and what was still untested',
          'A "verify it live" rule: features weren\'t done until they were tested end-to-end against the real backend',
          'Root-causing process failures, not just bugs. For example, finding that backend deploys had been shipping stale code and adding an automatic pre-deploy build',
          'Scoping against App Store guidelines early, and deliberately putting lower-value integrations on hold to protect the launch',
        ],
      },
      {
        kicker: 'Takeaways',
        title: 'What it taught me',
        content: 'Iron Pillar took me from designing an app to owning one. Research still shaped every decision, but shipping taught me to think in systems: data models, security, release pipelines, and the many small details between a prototype and a product people can download.',
      },
    ],
    externalLinks: [
      { label: 'Visit ironpillar.app', url: 'https://www.ironpillar.app/' },
      { label: 'App Store', url: 'https://apps.apple.com/app/id6817053711', comingSoon: true },
      { label: 'View Pitch Deck', url: 'https://www.behance.net/gallery/236190049/Iron-Pillar-Pitch-Deck' },
    ],
  },
  'whiskey-thief': {
    slug: 'whiskey-thief',
    overview: 'Interactive digital platform for Whiskey Thief Distilling Co., featuring bourbon, cocktail, and food menus accessible via QR codes throughout the establishment. The design creates an immersive experience that complements the distillery\'s atmosphere while providing practical menu access.',
    heroImage: '/whiskey-thief-thumbnail.png',
    sections: [
      {
        title: 'Project Goals',
        content: 'Create a digital menu experience that:',
        bullets: [
          'Reflects the premium, craft nature of the distillery',
          'Provides easy navigation between bourbon, cocktail, and food menus',
          'Works seamlessly across mobile devices via QR code access',
          'Enhances the on-site experience without replacing personal service',
        ],
      },
      {
        title: 'Research & Discovery',
        content: 'The project began with understanding the unique challenges of the distillery environment. Site visits revealed several key insights:',
        bullets: [
          'Ambient lighting conditions vary significantly, requiring high contrast interfaces',
          'Guests often browse menus in groups, necessitating readable text at various viewing angles',
          'Staff needed to quickly point guests to specific items without taking devices from them',
          'The bourbon selection included tasting notes and heritage stories that guests wanted to explore',
        ],
      },
      {
        title: 'Design Approach',
        content: 'The design balances elegance with functionality, using rich imagery and intuitive navigation to guide users through the menu offerings. The visual language draws from Kentucky bourbon culture—warm amber tones, aged wood textures, and typography that evokes traditional distillery signage while maintaining modern readability.',
      },
      {
        title: 'User Experience',
        content: 'The navigation system was designed around natural user flows observed during research:',
        bullets: [
          'Quick access to bourbon flights for newcomers exploring the selection',
          'Detailed tasting profiles for connoisseurs wanting to understand each expression',
          'Cocktail menu with ingredient breakdowns and pairing suggestions',
          'Food menu organized by pairing recommendations with specific bourbons',
          'One-tap access to call server for ordering without leaving the app',
        ],
      },
      {
        title: 'Technical Considerations',
        content: 'The platform was optimized for the specific constraints of in-venue mobile usage:',
        bullets: [
          'Progressive loading ensures fast initial render even on slower connections',
          'Dark mode default reduces glare in the dimly lit tasting room',
          'Large touch targets accommodate users who may be holding drinks',
          'Offline caching allows browsing even in areas with poor cellular reception',
        ],
      },
      {
        title: 'Results & Impact',
        content: 'The digital menu transformed the tasting room experience by giving guests control over their exploration while freeing staff to provide more personalized service. The storytelling elements around each bourbon\'s heritage increased guest engagement with premium offerings, and the integrated pairing suggestions drove higher food attachment rates.',
      },
    ],
  },
  'lego-architect': {
    slug: 'lego-architect',
    overview: 'LEGO Architect is a precision-scaled modular building system designed for architectural professionals. The concept bridges physical and digital design workflows, allowing architects to rapidly prototype building concepts using standardized, scale-accurate LEGO components.',
    heroImage: '/lego-architect-thumbnail.png',
    sections: [
      {
        title: 'Problem Space',
        content: 'Architectural design workflows face a fundamental tension between physical and digital prototyping:',
        bullets: [
          'Physical models provide tangible spatial understanding but are time-consuming to modify',
          'Digital tools offer flexibility but lack the hands-on exploration that sparks creative breakthroughs',
          'Existing physical modeling systems lack standardization, making documentation difficult',
          'Client presentations often fail to convey spatial relationships that physical models communicate instantly',
        ],
      },
      {
        title: 'Concept',
        content: 'LEGO Architect addresses these gaps by creating a professional-grade building system that:',
        bullets: [
          'Uses precision-scaled components at standard architectural scales (1:100, 1:200)',
          'Maintains full compatibility with existing LEGO products for versatility',
          'Includes specialized architectural elements: curtain walls, structural columns, site contours',
          'Features professional-grade materials with matte finishes to reduce visual noise in photography',
        ],
      },
      {
        title: 'Digital Integration',
        content: 'The companion app transforms physical builds into documented digital assets:',
        bullets: [
          'Computer vision recognizes assembled structures and generates 3D models automatically',
          'Real-time sync allows changes to physical models to update digital representations',
          'Export to standard CAD formats (DWG, SKP, OBJ) for integration with existing workflows',
          'AR preview mode overlays proposed structures onto physical site photographs',
          'Bill of materials generation for cost estimation and ordering additional components',
        ],
      },
      {
        title: 'Target Market',
        content: 'Primary audiences include architecture firms seeking rapid ideation tools, design schools teaching spatial thinking, and real estate developers who need quick concept visualization for stakeholder presentations. Secondary markets include urban planners, interior designers, and the growing maker/hobbyist architecture community.',
      },
      {
        title: 'Competitive Landscape',
        content: 'The analysis revealed no direct competitors offering integrated physical-digital architectural modeling:',
        bullets: [
          'Traditional LEGO Architecture targets consumers, not professionals, and lacks scale accuracy',
          'Professional model-making supplies are expensive and require specialized skills',
          'Digital-only tools miss the tactile exploration that drives creative discovery',
          'Existing AR/VR solutions require significant technical setup and training',
        ],
      },
      {
        title: 'Design Process',
        content: 'The pitch deck development involved extensive research into architectural workflows, interviews with practicing architects, and iterative refinement of the value proposition. Wireframes explored the companion app\'s key user flows, focusing on the critical moment of physical-to-digital translation that defines the product\'s unique value.',
      },
      {
        title: 'Key Deliverables',
        content: 'The project culminated in a comprehensive pitch deck presenting the market opportunity, product concept, go-to-market strategy, and financial projections. Visual assets included product mockups, app interface designs, and scenario illustrations demonstrating the system in professional contexts.',
      },
    ],
    externalLinks: [
      { label: 'View Pitch Deck', url: 'https://www.behance.net/gallery/224263107/Lego-Architect-Interaction-Project/modules/1282739869' },
    ],
  },
  'demo-reel-2025': {
    slug: 'demo-reel-2025',
    overview: 'A comprehensive showcase of motion design, UX animation, and visual effects work demonstrating expertise in kinetic typography, 3D motion graphics, and brand animation.',
    sections: [
      {
        title: 'Highlights',
        content: 'This reel showcases:',
        bullets: [
          'Kinetic typography and title sequences',
          '3D motion graphics and product visualization',
          'UI/UX micro-interactions and transitions',
          'Brand identity animations',
          'Music video and promotional content',
        ],
      },
    ],
  },
  'mgk-dossier': {
    slug: 'mgk-dossier',
    overview: 'A personal 3D motion design case study created entirely in Blender, exploring luxury fragrance commercial aesthetics inspired by the Machine Gun Kelly x Dossier collaboration. This project showcases advanced techniques in product visualization, fluid simulation, and cinematic lighting. Not affiliated with MGK or Dossier.',
    heroImage: '/MGK x Dossier Thumbnail.png',
    sections: [
      {
        title: 'Project Overview',
        content: 'This self-directed Blender case study was created to push my motion design capabilities in the luxury product space. The goal was to create a visually striking fragrance commercial that balances dark, edgy aesthetics with the elegance expected of high-end perfume advertising.',
      },
      {
        title: 'Technical Approach',
        content: 'The entire project was built from scratch in Blender, utilizing:',
        bullets: [
          'Cycles render engine for photorealistic glass and liquid materials',
          'Mantaflow fluid simulation for dynamic liquid effects',
          'HDRI lighting combined with custom area lights for dramatic studio setups',
          'Procedural textures and PBR materials for realistic surface rendering',
          'Geometry nodes for particle-based environmental effects',
        ],
      },
      {
        title: 'Visual Direction',
        content: 'The visual language draws from contemporary luxury advertising while incorporating darker, more rebellious elements that align with the MGK brand identity. Key design decisions include:',
        bullets: [
          'High-contrast lighting with deep shadows and selective highlights',
          'Monochromatic color palette with strategic accent colors',
          'Slow, deliberate camera movements that emphasize product details',
          'Liquid simulations that convey both luxury and dynamism',
          'Typography integration using kinetic text animations',
        ],
      },
      {
        title: 'Animation & Compositing',
        content: 'The animation workflow combined keyframe animation with physics-based simulations. Post-production was handled in After Effects for editing and compositing, with additional passes for lens effects, motion blur, and final color treatment to achieve the cinematic commercial look.',
      },
      {
        title: 'Key Learnings',
        content: 'This project reinforced several important motion design principles:',
        bullets: [
          'The importance of pre-visualization and storyboarding for complex 3D sequences',
          'Optimization techniques for rendering glass and liquid materials efficiently',
          'Balancing artistic vision with technical constraints in simulation work',
          'The value of iteration—the final product went through multiple lighting and animation passes',
        ],
      },
      {
        title: 'Tools Used',
        content: 'Blender 5.0 (modeling, animation, rendering), After Effects (editing, compositing, motion graphics).',
      },
    ],
  },
};
