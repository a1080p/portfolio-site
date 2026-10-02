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
export type CaseStudyTheme =
  | 'iron-pillar'
  | 'dither-dog'
  | 'mgk-dossier'
  | 'whiskey-thief'
  | 'lego-architect';

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
    theme: 'whiskey-thief',
    eyebrow: 'QR tasting-room experience · Kentucky',
    headline: 'Every barrel\nhas a *story.*',
    overview: 'An interactive digital platform for Whiskey Thief Distilling Co. that puts the bourbon, cocktail, and food menus, a tour guide, and the distillery\'s story one QR scan away. The design had to feel as handcrafted as the spirits while staying fast and readable in a dim, busy tasting room.',
    heroImage: '/whiskey-thief-thumbnail.png',
    status: 'UX/UI case study · DSP-KY 20002',
    stats: [
      { value: '3', label: 'Menus: spirits, cocktails, food' },
      { value: '5', label: 'Step visitor journey' },
      { value: '5', label: 'Visitor outcomes designed for' },
      { value: 'QR', label: 'Scan-to-open, no download' },
    ],
    roles: ['UX Research', 'UX Strategy', 'UI Design', 'Visual Identity', 'Prototyping'],
    stack: ['Figma', 'Mobile Web', 'QR Access', 'User Journeys'],
    sections: [
      {
        kicker: 'The Pour',
        title: 'Project goals',
        content: 'The distillery saw an opportunity to do more with every visit. The platform needed to:',
        bullets: [
          'Inform visitors about the distillery\'s offerings in an engaging way',
          'Raise the educational value of tours and tastings',
          'Streamline food and beverage ordering',
          'Build stronger connections between visitors and the brand',
          'Increase on-site sales of both whiskey and food',
        ],
        image: '/whiskey-thief-goals.png',
      },
      {
        kicker: 'The Mash Bill',
        title: 'Research & discovery',
        content: 'The tasting room set the constraints. Designing for it meant accounting for:',
        bullets: [
          'Lighting that varies widely, which calls for high-contrast interfaces',
          'Guests browsing in groups, so text has to read at a glance from different angles',
          'Staff pointing guests to specific items without taking their phones',
          'Tasting notes and heritage stories that guests genuinely want to explore',
        ],
      },
      {
        kicker: 'The Journey',
        title: 'Scan, explore, learn, taste, buy',
        content: 'I mapped the visit as a five-step journey, from scanning a QR code at the table to completing a purchase, each step aimed at a visitor outcome: informed, engaged, educated, satisfied, and converted.',
        image: '/whiskey-thief-journey.png',
      },
      {
        kicker: 'The Label',
        title: 'A design aged in oak',
        content: 'The visual language borrows from Kentucky bourbon culture: barrel-wood textures, rust and amber tones, and bold slab lettering that echoes distillery signage and bottle labels, while staying modern and readable on a phone.',
        bullets: [
          'Quick access to flights for newcomers exploring the selection',
          'Detailed tasting profiles for connoisseurs',
          'Cocktail menu with ingredient breakdowns and pairings',
          'Food menu organized around bourbon pairings',
          'A self-guided tour with a map of the grounds',
        ],
        image: '/whiskey-thief-screens.png',
      },
      {
        kicker: 'The Finish',
        title: 'Built for the room',
        content: 'Every decision was tuned for in-venue use: a dark interface to cut glare in the dim tasting room, large touch targets for guests holding a glass, and lightweight pages that load quickly on a weak connection. The result is a menu that tells the distillery\'s story without getting in the way of the people pouring it.',
      },
    ],
  },
  'lego-architect': {
    slug: 'lego-architect',
    theme: 'lego-architect',
    eyebrow: 'Product concept · UX/UI · Pitch',
    headline: 'Transforming play into\n*real world creation.*',
    overview: 'LEGO Architect is an app concept that turns LEGO builds into real furniture and architectural pieces. Creating custom furniture is expensive, technical, and out of reach for most people, but the most intuitive design tool already lives in millions of homes: LEGO bricks. Build it, scan it, see it in real materials, and have it made.',
    heroImage: '/lego-architect-thumbnail.png',
    status: 'Interaction design project · 2025',
    stats: [
      { value: 'Design', label: 'Build it in bricks' },
      { value: 'Transform', label: 'Scan it into a real render' },
      { value: 'Customize', label: 'Choose real materials' },
      { value: 'Order', label: 'Hire a local maker' },
    ],
    roles: ['Product Concept', 'UX Design', 'UI Design', 'Pitch & Storytelling'],
    stack: ['Figma', 'Prototyping', 'Mockups', 'Behance'],
    sections: [
      {
        kicker: 'Step 01',
        title: 'Design it',
        content: 'Build your design with familiar LEGO bricks, then scan it with your phone. The app recognizes the creation\'s structure, dimensions, and colors, with real-time feedback that guides you to capture every side.',
      },
      {
        kicker: 'Step 02',
        title: 'Transform it',
        content: 'Your LEGO model becomes a photorealistic rendering, with real-world materials mapped automatically from the colors of your bricks. A structural check confirms the design is feasible at full scale.',
      },
      {
        kicker: 'Step 03',
        title: 'Customize it',
        content: 'Browse hundreds of real building materials (wood, metal, stone, glass, brick) and watch the design update in real time. Every choice recalculates the project\'s cost, so you can balance quality and budget with confidence.',
      },
      {
        kicker: 'Step 04',
        title: 'Order it',
        content: 'Connect with verified contractors and craftspeople who specialize in your project type through an in-app marketplace. Share specs and material lists in one tap and receive quotes directly in the app.',
        image: '/Lego Wireframes.png',
      },
      {
        kicker: 'The Big Idea',
        title: 'Why it works',
        content: 'By bridging play and practical creation, LEGO Architect lowers the cost of entry for design, extends the LEGO brand beyond toys, and opens a new category where physical and digital design meet. Who knew the key to rethinking architecture was sitting in the toy box all along?',
        image: '/LEgo men 1.png',
      },
    ],
    externalLinks: [
      { label: 'View on Behance', url: 'https://www.behance.net/gallery/224263107/Lego-Architect-Interaction-Project' },
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
    theme: 'mgk-dossier',
    eyebrow: 'Self-directed 3D motion study · Blender',
    headline: 'Bottled\n*rebellion.*',
    overview: 'A personal 3D motion design case study built entirely in Blender, exploring luxury fragrance commercial aesthetics inspired by the Machine Gun Kelly x Dossier collaboration. It pushes photorealistic glass, fluid simulation, and cinematic lighting to capture the rebellious elegance of a high-end perfume spot.',
    heroImage: '/MGK x Dossier Thumbnail.png',
    status: 'Personal project · Not affiliated with MGK or Dossier',
    stats: [
      { value: 'Blender', label: 'Modeled, lit & rendered' },
      { value: 'Cycles', label: 'Photoreal glass & liquid' },
      { value: 'Mantaflow', label: 'Fluid simulation' },
      { value: 'After Effects', label: 'Edit & composite' },
    ],
    roles: ['Art Direction', '3D Modeling', 'Lighting', 'Simulation', 'Animation', 'Compositing'],
    stack: ['Blender 5.0', 'Cycles', 'Mantaflow', 'Geometry Nodes', 'After Effects'],
    sections: [
      {
        kicker: 'Scene 01',
        title: 'The brief I wrote myself',
        content: 'This self-directed study was built to push my motion design work into the luxury product space. The goal was a fragrance spot that balances dark, edgy aesthetics with the elegance expected of high-end perfume advertising.',
      },
      {
        kicker: 'Scene 02',
        title: 'Glass, liquid, light',
        content: 'Everything was built from scratch in Blender:',
        bullets: [
          'Cycles render engine for photorealistic glass and liquid materials',
          'Mantaflow fluid simulation for dynamic liquid effects',
          'HDRI lighting combined with custom area lights for dramatic studio setups',
          'Procedural textures and PBR materials for realistic surfaces',
          'Geometry nodes for particle-based environmental effects',
        ],
      },
      {
        kicker: 'Scene 03',
        title: 'Visual direction',
        content: 'The look draws from contemporary luxury advertising, with darker, more rebellious edges that suit the MGK identity:',
        bullets: [
          'High-contrast lighting with deep shadows and selective highlights',
          'A restrained palette with a single, strategic accent color',
          'Slow, deliberate camera moves that linger on product details',
          'Liquid simulations that convey both luxury and motion',
          'Kinetic typography woven into the edit',
        ],
      },
      {
        kicker: 'Scene 04',
        title: 'Animation & compositing',
        content: 'The animation combined keyframed camera work with physics-based simulation. In After Effects I handled the edit and compositing, adding lens effects, motion blur, and a final color grade for the cinematic commercial finish.',
      },
      {
        kicker: 'End Card',
        title: 'What it taught me',
        content: 'This project reinforced a few core motion design principles:',
        bullets: [
          'Pre-visualization and storyboarding save hours on complex 3D sequences',
          'Glass and liquid materials need careful optimization to render efficiently',
          'Simulation work is a constant balance between artistic intent and technical limits',
          'Iteration matters: the final piece went through several lighting and animation passes',
        ],
      },
    ],
  },
};
