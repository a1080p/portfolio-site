export interface CaseStudySection {
  title: string;
  content: string;
  bullets?: string[];
  image?: string;
}

export interface CaseStudy {
  slug: string;
  overview: string;
  heroImage?: string;
  sections: CaseStudySection[];
  externalLinks?: {
    label: string;
    url: string;
  }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  'dither-dog': {
    slug: 'dither-dog',
    overview: 'Dither Dog is a web-based image processing tool that applies customizable dither effects to any uploaded image. This project marks my first fully designed and deployed web application—built from concept to production using Claude Code as my development partner.',
    heroImage: '/Dither dog thumbnail.png',
    sections: [
      {
        title: 'Project Overview',
        content: 'Dither Dog started as a personal challenge: could I design and ship a functional web tool without prior development experience? The answer was yes—by combining my design skills with AI-assisted coding through Claude Code, I built a creative tool that transforms images with retro-inspired halftone and dithering effects.',
      },
      {
        title: 'The Concept',
        content: 'Dithering is a technique that reduces color palettes while maintaining visual detail through patterns of dots or noise. I wanted to create a tool that makes this effect accessible to anyone:',
        bullets: [
          'Drag-and-drop image upload with instant preview',
          'Multiple dithering algorithms (Floyd-Steinberg, ordered, halftone)',
          'Customizable color palettes and dot sizes',
          'Real-time adjustments with live preview',
          'One-click export to PNG',
        ],
      },
      {
        title: 'Design Process',
        content: 'The interface needed to be simple enough for casual users but powerful enough for designers seeking specific effects. I designed the UI in Figma first, focusing on a clean, minimal layout that puts the image front and center. The control panel uses intuitive sliders and toggles that provide immediate visual feedback.',
      },
      {
        title: 'Development Journey',
        content: 'This was my first experience building a complete web application. Using Claude Code, I learned:',
        bullets: [
          'How to structure a React application with proper component architecture',
          'Canvas API manipulation for real-time image processing',
          'State management for handling user inputs and image data',
          'Deployment workflows using Vercel for continuous deployment',
          'The importance of performance optimization for smooth user experience',
        ],
      },
      {
        title: 'Technical Challenges',
        content: 'The biggest hurdles involved real-time image processing performance and browser memory management:',
        bullets: [
          'Implemented debounced updates to prevent lag during slider adjustments',
          'Used Web Workers to offload heavy processing from the main thread',
          'Optimized canvas operations for handling large images without crashes',
          'Built responsive design that works across desktop and mobile devices',
        ],
      },
      {
        title: 'Key Insights',
        content: 'This project taught me that the gap between design and development is bridgeable. With the right tools and approach, designers can ship real products:',
        bullets: [
          'Start with a clear, focused scope—one feature done well beats many half-finished',
          'Design and development inform each other; iteration between both improves the final product',
          'AI-assisted coding accelerates learning but requires understanding the fundamentals',
          'Shipping something real, even if imperfect, is more valuable than endless polish in isolation',
        ],
      },
      {
        title: 'Tools Used',
        content: 'Figma (UI design), React (framework), Canvas API (image processing), Claude Code (development), Vercel (deployment).',
      },
    ],
    externalLinks: [
      { label: 'Try Dither Dog', url: 'https://ditherdog.vercel.app' },
    ],
  },
  'iron-pillar': {
    slug: 'iron-pillar',
    overview: 'Iron Pillar is a UX/UI design project for a mobile fitness application that transforms workout tracking into an engaging, game-like experience. The app bridges the gap between beginner fitness enthusiasts and sustainable workout habits by combining personalized guidance with motivational gamification mechanics inspired by successful platforms like Duolingo.',
    heroImage: '/iron-pillar-hero.png',
    sections: [
      {
        title: 'Problem Statement',
        content: 'The fitness app market suffers from high abandonment rates, with users typically falling into three categories experiencing distinct pain points:',
        bullets: [
          'Fitness beginners feel overwhelmed by gym equipment and lack structured guidance on proper form and progression',
          'Inconsistent users struggle to maintain motivation after missing workout sessions and need external accountability',
          'Budget-conscious individuals require flexible, adaptable solutions that work across various fitness contexts',
        ],
      },
      {
        title: 'Solution',
        content: 'Iron Pillar occupies a unique market position by combining:',
        bullets: [
          'Duolingo-inspired gamification: Streak tracking, achievement systems, daily commitment goals, and celebration animations',
          'Personalized workout guidance: Structured programs tailored to individual fitness levels with proper form instruction',
          'Social accountability: Community features that create support without judgment',
        ],
      },
      {
        title: 'Competitive Analysis',
        content: 'The competitive analysis revealed a critical gap: apps either gamify without substance or provide tracking without engagement. Iron Pillar\'s strategy positions it at the intersection of motivation and functionality.',
        image: '/iron-pillar-competitive.png',
      },
      {
        title: 'User Personas',
        content: 'Research identified key user personas to guide design decisions.',
        image: '/iron-pillar-personas.png',
      },
      {
        title: 'Design Process',
        content: 'The storyboard illustrates the complete user experience:',
        bullets: [
          'Onboarding: User recognizes need for change and discovers Iron Pillar',
          'Personalization: Selects experience level (Novice/Intermediate/Pro) and goals',
          'Structure: Receives tailored workout schedule and beginner-friendly programs',
          'Execution: Follows guided workouts with proper form demonstrations',
          'Celebration: Earns badges and medals through consistent progress',
          'Tracking: Visualizes improvement through progress metrics',
          'Motivation: Experiences accomplishment and reinforcement',
          'Retention: Receives timely prompts to maintain streaks',
        ],
      },
      {
        title: 'Prototype',
        content: 'High-fidelity prototype showcasing the core user flows and interactions.',
        image: '/iron-pillar-prototype.png',
      },
      {
        title: 'Key Features',
        content: 'The final design includes:',
        bullets: [
          'Personalized dashboard: Displays current streak, recommended workouts, and quick-start options',
          'Workout guidance: Step-by-step exercise instructions with demonstration images, set/rep/weight tracking',
          'Achievement system: Badges, medals, and level-up animations celebrating milestones',
          'Progress visualization: Graphs and statistics showing improvement over time',
          'Streak protection: Daily reminders and streak freeze features to maintain momentum',
          'Celebration moments: Smooth animations for workout completions, level-ups, and achievement unlocks',
        ],
      },
      {
        title: 'Conclusion',
        content: 'Iron Pillar represents a thoughtful approach to solving a persistent problem in the fitness app space. By deeply understanding user pain points across different personas and combining motivational psychology with practical functionality, the design creates a compelling solution for the underserved beginner-to-intermediate fitness market.',
      },
    ],
    externalLinks: [
      { label: 'View Pitch Deck', url: 'https://www.behance.net/gallery/236190049/Iron-Pillar-Pitch-Deck' },
      { label: 'View Competitive Analysis', url: 'https://www.behance.net/gallery/236207299/IRON-PILLAR-Competitive-Analysis' },
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
