export interface CaseStudySection {
  title: string;
  content: string;
  bullets?: string[];
  image?: string;
  /** Small label above the title on themed pages, e.g. "Phase 01 / Research" */
  kicker?: string;
  /** A film shown with the section, with controls */
  video?: { src: string; poster: string; caption?: string };
  /** Extra images shown as a grid on themed pages. Without width/height they're cropped to 16:9. */
  gallery?: { src: string; alt: string; width?: number; height?: number }[];
  /** Silent looping clips shown as a grid on themed pages, playing while on screen */
  loops?: { src: string; poster: string; caption: string }[];
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
  | 'apostrophe'
  | 'daker';

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
  apostrophe: {
    slug: 'apostrophe',
    theme: 'apostrophe',
    eyebrow: 'Ident campaign · 3D motion',
    headline: 'Small mark,\n*big entrance.*',
    overview: 'Logo idents for Apostrophe, a Louisville creative studio that makes promos and campaigns for networks like Peacock and Paramount. Each ident brings the Apostrophe logo to life in its own world: a balloon that inflates for the studio\'s second birthday, and a vinyl record spinning up a soundtrack promo. I came up with the ideas and was responsible for bringing them to life.',
    heroImage: '/apostrophe-idents/vinyl-poster.jpg',
    status: 'Freelance motion designer · Apostrophe',
    stats: [
      { value: '02', label: 'Logo idents, concept to final' },
      { value: 'Blender', label: 'Physics & simulation' },
      { value: '10.7s', label: 'Balloon ident' },
      { value: '22.5s', label: 'Vinyl ident' },
    ],
    roles: ['Concept', 'Storyboarding', 'Art Direction', '3D Animation', 'Simulation'],
    stack: ['Blender', 'Physics Simulation', '3D Animation'],
    sections: [
      {
        kicker: 'The Why',
        title: 'Make the logo the star',
        content: 'I work with Apostrophe as a freelance motion designer, creating animations, logo idents, and character animation, and I\'m now the environment designer on an internal short film. For the studio\'s ident campaign, the goal was to give its mark a series of short, memorable entrances, where the logo is the hero of the scene instead of a sign-off on an end card.',
      },
      {
        kicker: 'The How',
        title: 'Concept, storyboard, simulate',
        content: 'Each ident started as an idea I came up with, then built myself in Blender. I sketched concepts, storyboarded the sequences, and worked through simulation and lighting until each piece felt real and on brand, checking tone and timing with the studio\'s creative director along the way. Sound design was handled by others.',
      },
      {
        kicker: 'Ident 01',
        title: 'Two years, one big breath',
        content: 'For Apostrophe\'s second birthday in business, the idea was all mine: the logo as a balloon. In a clean white studio niche, the apostrophe mark inflates to fill its frame, then lets go, deflating and slipping out of view. The balloon is a cloth simulation with internal pressure. The hardest part was finding values that behaved like a real balloon without the simulation going wild, and because the scene was so dense, every change meant waiting several minutes for it to recompute, so each tweak had to count.',
        bullets: [
          'Original concept, pitched for the studio\'s 2nd birthday in business',
          'Cloth simulation with internal pressure drives both the inflation and the release',
          'Dialed in over many iterations, each a multi-minute re-simulation of a dense scene',
          'The logo is the balloon, so the brand mark carries the whole piece',
        ],
        video: {
          src: '/apostrophe-idents/balloon-ident.mp4',
          poster: '/apostrophe-idents/balloon-poster.jpg',
          caption: 'Apostrophe 2nd birthday ident · Sound design by others',
        },
      },
      {
        kicker: 'Ident 02',
        title: 'Side B: the vinyl ident',
        content: 'A vinyl ident for an Apostrophe soundtrack promo, built entirely in Blender. The record carries the brand: an orange disc with the apostrophe mark as its center label. I drew up concepts for the turntable itself and storyboarded the video, then worked with Apostrophe\'s creative director, Ryan O\'Hare, to get the tone and timing right and to brainstorm which tracks to feature. The camera glides in tight macro moves across the grooves and the tonearm, then pulls back to reveal the full turntable.',
        video: {
          src: '/apostrophe-idents/vinyl-ident.mp4',
          poster: '/apostrophe-idents/vinyl-poster.jpg',
          caption: 'Apostrophe soundtrack promo ident',
        },
      },
      {
        kicker: 'Reception',
        title: 'On air, and what\'s next',
        content: 'Ryan loved them, and both ran as Apostrophe posts. There\'s early talk of using them as logo IDs in the studio\'s demo reels. I came up with the ideas for both idents and was responsible for bringing them to life, from first sketch to final animation.',
      },
    ],
  },
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
      { value: '350', label: 'Peak users' },
      { value: '100%', label: 'Client-side' },
    ],
    roles: ['Product Design', 'UI / UX', 'Front-End Development', 'Project Management', 'Brand'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Canvas API', 'Vercel', 'Claude Code'],
    sections: [
      {
        kicker: 'The Why',
        title: 'A free tool that rivals the paid ones',
        content: 'I love the dithered look in design and animation, but the tools that do it well are mostly paid, and few free ones come close. I wanted to build a free tool that could hold its own against them, and to learn how to build software along the way. Dither Dog became both: a tool for anyone who loves the aesthetic, and my first real lesson in shipping a product.',
      },
      {
        kicker: 'The How',
        title: 'Robotic by design, flexible by default',
        content: 'Dithering feels inherently robotic and digital to me, so the interface leans into it, taking inspiration from the retro anime robotics UIs I love: cockpit-style readouts, numbered modules, and a single signal color. The hardest technical problem was flexibility. Every preset and algorithm had to stay fully editable, so people could start from a preset and push it into a wide range of their own looks instead of being locked into fixed filters.',
      },
      {
        kicker: 'Product',
        title: 'From one filter to a full workspace',
        content: 'The first version applied a handful of effects to a single image. The current release is a complete dithering workspace:',
        bullets: [
          'Images, videos, and GIFs, all processed in the browser. Nothing is ever uploaded to a server',
          '28 algorithms across error diffusion (Floyd-Steinberg, Atkinson, Stucki, Sierra), ordered dither (Bayer, blue noise, clustered dot), and artistic patterns (halftone, crosshatch, stipple, spiral)',
          '23 color palettes, from Game Boy green to cyan-and-magenta print halftone',
          '20 hand-tuned presets that dial in an algorithm, palette, and contrast curve in one click, then stay fully editable',
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
        content: 'The interface should feel like precision hardware, somewhere between a mech cockpit and a retro terminal, while stepping back so the artwork carries the color:',
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
          'Keeping every algorithm and preset parameter editable live, across images, video frames, and GIFs',
          'Performance work: debounced updates so sliders stay smooth, and careful canvas handling for large files',
          'Continuous deployment on Vercel, with the source public on GitHub',
        ],
      },
      {
        kicker: 'In the Wild',
        title: 'A niche tool, used for real',
        content: 'Dither Dog peaked at around 350 users and holds a steady 10 to 15 people a week. That\'s exactly what I expected: it\'s a niche platform solving a niche problem, and the people who need it keep coming back. Running it taught me to treat a small project like a real product:',
        bullets: [
          'Start with a focused core (upload, dither, export), ship it, then expand in deliberate releases',
          'Prioritize the features that make the tool more useful (presets, video, guides) over ones that only add complexity',
          'Keep the design system consistent as features grow, so new screens feel native to the product',
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
    status: 'Heading to the App Store',
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
        kicker: 'The Why',
        title: 'Built for people like me',
        content: 'I struggled with two things most people who work out will recognize: writing down and tracking my goals, and simply showing up consistently. The more people I talked to, the clearer it became that I wasn\'t alone. I wanted to build something that would help all of us, and that\'s why Iron Pillar didn\'t stop at a case study. A prototype can\'t help anyone stay consistent. A real app in their pocket can.',
      },
      {
        kicker: 'The How',
        title: 'Learning to build it for real',
        content: 'The design came first, grounded in research. The technical side was the hard part: I had never set up a backend or shipped an app. Through research and the modern tools available today, I learned as I built, setting up a backend that tracks every workout, streak, and metric securely. The whole project became a crash course in coding and app development:',
        bullets: [
          'Designed first: research, personas, storyboards, then paper and Figma prototypes',
          'Learned and built the stack myself: React Native and Expo for the app, Firebase and Cloud Functions for the backend',
          'Put it in testers\' hands through TestFlight and demos, then built what they asked for',
          'Ran it like a product: a Jira board, a progress log, and nothing marked done until it worked live',
        ],
      },
      {
        kicker: 'Phase 01 / Research',
        title: 'Who it\'s for',
        content: 'Research pointed to three groups with distinct pain points:',
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
        content: 'The core rule of the build: anything that affects progress is decided by the server, so streaks and XP can\'t be faked.',
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
        kicker: 'Phase 04 / Listen',
        title: 'Shaped by testers',
        content: 'Testers, and the many people I showed it to, gave me good advice and real insight. Two of the app\'s most personal features came straight from their feedback:',
        bullets: [
          'Importing history: one tester wanted to bring in their old workout data so their whole record lived in one place, so I added a way to import it',
          'Planning around injuries: another tester wanted more focus on an injury she was working through, so I added a feature that helps plan workouts around injuries',
        ],
      },
      {
        kicker: 'Phase 05 / Ship',
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
        content: 'Iron Pillar took me from designing an app to owning one. Research still shaped every decision, but building it taught me to think in systems: data models, security, release pipelines, and the many small details between a prototype and a product people can download. Above all, it taught me that listening to real users is what turns a good idea into something people actually use.',
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
    status: 'Class project · Presented to the owner',
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
        kicker: 'The Why',
        title: 'A real brief from a real owner',
        content: 'This began as a class project with a real stakeholder: the owner of Whiskey Thief Distilling Co. introduced the brief and was there for the final presentation. The distillery wanted to do more with every visit: inform guests, teach them about the spirits, and sell more on site. That made the challenge real, because I was designing something an actual owner would judge as a business tool, not just a class assignment.',
      },
      {
        kicker: 'The How',
        title: 'Research first, then the room',
        content: 'I started with research: interviews, a competitive analysis, and a hunt for the moments in a visit that could be better. Those findings shaped the five-step visitor journey and every screen that followed.',
      },
      {
        kicker: 'The Pour',
        title: 'Project goals',
        content: 'From the owner\'s brief and the research, the platform needed to:',
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
        title: 'Designing for the tasting room',
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
        title: 'Presented to the owner',
        content: 'Every decision was tuned for in-venue use: a dark interface to cut glare in the dim tasting room, large touch targets for guests holding a glass, and lightweight pages that load quickly on a weak connection. I presented the finished design to the owner. It wasn\'t taken further, but it was my first time designing to a real business\'s goals and presenting the work to the person who would decide whether to use it.',
      },
    ],
  },
  daker: {
    slug: 'daker',
    theme: 'daker',
    eyebrow: 'Product film · Home care SaaS',
    headline: 'Compliance,\n*made clear.*',
    overview: 'A one-minute product film for Daker, a startup building a communication and compliance platform for Medicaid home care agencies. The film sets up the pressure the industry is under, introduces Daker, and walks through the product, for an audience of both investors and the agencies who would use it every day.',
    heroImage: '/daker-promo/poster.jpg',
    status: 'Client work · Pitch & investor film',
    stats: [
      { value: '1:02', label: 'Runtime, problem to call to action' },
      { value: 'AE + 3D', label: 'After Effects & Blender' },
      { value: '2', label: 'Audiences: investors & agencies' },
      { value: '4K', label: 'Final delivery' },
    ],
    roles: ['Creative Direction', 'Motion Design', 'Kinetic Typography', 'UI Animation', 'Editing'],
    stack: ['After Effects', 'Blender', 'Premiere Pro'],
    sections: [
      {
        kicker: 'The Why',
        title: 'A voice for a brand-new company',
        content: 'Daker hired me to make the film its team would put in front of investors and the home care agencies it\'s built for. As a startup in Medicaid software, Daker didn\'t have an established look or tone yet, so the film had to do more than explain the product. It had to define how the company looks, moves, and sounds on screen for the first time.',
      },
      {
        kicker: 'The How',
        title: 'Two audiences, one minute',
        content: 'I built the film in After Effects, with 3D elements rendered in Blender. The hardest part was the tone. The same minute had to land with investors weighing the business and with agency staff who would use the product, so it needed to feel credible and clear without turning cold. It also had to hit every point without dragging, so every beat had to earn its place:',
        bullets: [
          'A calm, clean palette: open white space, the Daker navy, and glass forms that suggest clarity and trust',
          'Problem first: short lines of kinetic type set the stakes, from 5.6 million people relying on home care to stricter compliance rules, before the product appears',
          'The real product on screen: Daker\'s dashboards animated on laptop mockups, so viewers see the actual tool instead of abstract icons',
          'A tight structure: the problem, the introduction, the features, why now, and a call to action, in about a minute',
        ],
      },
      {
        kicker: 'The Film',
        title: 'From problem to platform',
        content: 'The film opens on the strain facing home care, introduces Daker as the first platform built specifically for home care compliance, then tours the product: the director dashboard, multilingual caregiver views, and compliance management with audit-ready reports generated in seconds, not days. It closes on why the timing matters, as Medicaid rebuilds its oversight and demand reaches an all-time high.',
        gallery: [
          { src: '/daker-promo/opening.jpg', alt: 'Opening: kinetic type sets up the problem', width: 1920, height: 1080 },
          { src: '/daker-promo/dashboard-reveal.jpg', alt: 'The product reveal on the director dashboard', width: 1920, height: 1080 },
          { src: '/daker-promo/director-dashboard.jpg', alt: 'Introducing Daker for home care compliance', width: 1920, height: 1080 },
          { src: '/daker-promo/caregiver-dashboard.jpg', alt: 'Multilingual caregiver dashboard', width: 1920, height: 1080 },
          { src: '/daker-promo/compliance-reports.jpg', alt: 'Compliance management and audit-ready reports', width: 1920, height: 1080 },
        ],
      },
      {
        kicker: 'In 3D',
        title: 'Rendered in Blender',
        content: 'The film\'s 3D elements were made in Blender and composited in After Effects. Glass and light kept coming back as the visual idea: clear, calm, and trustworthy, which is exactly what a compliance company needs to feel like. Alongside what made the final cut, I rendered a set of explorations to find the brand\'s look in motion:',
        bullets: [
          'Twisting glass forms that frame the opening lines, plus liquid glass chains explored for the same moment, rendered with transparency so they sit cleanly on the white set',
          'A particle wordmark that resolves out of dust into the Daker logo',
          'Particle swirls, a glass ribbon, a tunnel of light rings, and a grid of glass discs, all in the Daker blues',
        ],
        loops: [
          { src: '/daker-promo/blender/glass-chain.mp4', poster: '/daker-promo/blender/glass-chain.jpg', caption: 'Liquid glass chain' },
          { src: '/daker-promo/blender/particle-wordmark.mp4', poster: '/daker-promo/blender/particle-wordmark.jpg', caption: 'Particle wordmark' },
          { src: '/daker-promo/blender/particle-swirl.mp4', poster: '/daker-promo/blender/particle-swirl.jpg', caption: 'Particle swirl' },
          { src: '/daker-promo/blender/ribbon-spiral.mp4', poster: '/daker-promo/blender/ribbon-spiral.jpg', caption: 'Glass ribbon' },
          { src: '/daker-promo/blender/light-rings.mp4', poster: '/daker-promo/blender/light-rings.jpg', caption: 'Light ring tunnel' },
          { src: '/daker-promo/blender/glass-grid.mp4', poster: '/daker-promo/blender/glass-grid.jpg', caption: 'Glass disc grid' },
        ],
      },
      {
        kicker: 'Reception',
        title: 'Made for the pitch',
        content: 'The finished film became Daker\'s pitch and investor video: the piece the team uses to introduce the company and show the product in a single minute. It was a lesson in restraint. With a brand this new, the job was to make it look established, and the clearest version of the story was always the shorter one.',
      },
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
      { value: '15–20 hrs', label: 'Concept to final render' },
    ],
    roles: ['Art Direction', '3D Modeling', 'Lighting', 'Simulation', 'Animation', 'Compositing'],
    stack: ['Blender 5.0', 'Cycles', 'Mantaflow', 'Geometry Nodes', 'After Effects'],
    sections: [
      {
        kicker: 'The Why',
        title: 'A fan, a gift, a bottle',
        content: 'I\'m a huge MGK fan, and I was given the fragrance as a gift. I loved the bottle, and I loved the free-spirited feel of the ad series and the Lost Americana album it accompanied. It was the perfect excuse to learn something new: product design and animation, built around an object I already cared about.',
      },
      {
        kicker: 'The How',
        title: 'Learning product viz in 15 to 20 hours',
        content: 'I built the whole spot in Blender in roughly 15 to 20 hours. At the time, the hardest part was the modeling, followed by dialing in the materials so the glass, liquid, and label read as a real, premium product. From there it came together through lighting, simulation, and a cinematic edit.',
      },
      {
        kicker: 'Scene 01',
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
        kicker: 'Scene 02',
        title: 'Visual direction',
        content: 'The look draws from contemporary luxury advertising and the free spirit of the Lost Americana campaign, with darker, more rebellious edges that suit the MGK identity:',
        bullets: [
          'High-contrast lighting with deep shadows and selective highlights',
          'A restrained palette with a single, strategic accent color',
          'Slow, deliberate camera moves that linger on product details',
          'Liquid simulations that convey both luxury and motion',
          'Kinetic typography woven into the edit',
        ],
      },
      {
        kicker: 'Scene 03',
        title: 'Animation & compositing',
        content: 'The animation combined keyframed camera work with physics-based simulation. In After Effects I handled the edit and compositing, adding lens effects, motion blur, and a final color grade for the cinematic commercial finish.',
      },
      {
        kicker: 'End Card',
        title: 'What I\'d do differently',
        content: 'Honestly, I rushed it. I was so excited to put it out that I didn\'t give it the time it deserved. Today I\'d spend longer on it and make the spot longer, with more shots. Even so, it taught me a lot:',
        bullets: [
          'Modeling and materials are the foundation; a product only feels premium once they\'re right',
          'Pre-visualization and storyboarding save hours on complex 3D sequences',
          'Simulation work is a constant balance between artistic intent and technical limits',
          'Patience is part of the craft: more shots and more passes would have made a stronger film',
        ],
      },
    ],
  },
};
