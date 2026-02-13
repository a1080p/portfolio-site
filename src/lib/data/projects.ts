export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailFit?: 'cover' | 'contain';
  videoPreview?: string;
  category: 'UX/UI Design' | 'Motion Design' | 'Graphic Design';
  tags: string[];
  featured: boolean;
  year: string;
  externalLinks?: {
    figma?: string;
    behance?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'mgk-dossier',
    title: 'MGK x Dossier Case Study',
    description: 'A self-directed 3D motion design exploration pushing the boundaries of luxury fragrance advertising. Built entirely in Blender, this case study features photorealistic glass rendering, Mantaflow fluid simulations, and dramatic studio lighting to capture the rebellious elegance of high-end perfume commercials. The project demonstrates advanced techniques in product visualization, procedural materials, and cinematic camera work. Not affiliated with MGK or Dossier.',
    thumbnail: '/MGK x Dossier Thumbnail.png',
    videoPreview: '/MGK x Dossier Final.mp4',
    category: 'Motion Design',
    tags: ['Blender', '3D Animation', 'Motion Graphics'],
    featured: true,
    year: '2024',
  },
  {
    slug: 'iron-pillar',
    title: 'Iron Pillar',
    description: 'A comprehensive fitness app concept that transforms workout tracking into an engaging, game-like experience. Iron Pillar combines RPG-style progression systems with social accountability features, allowing users to level up their fitness journey alongside friends. The design focuses on reducing friction in logging workouts while maximizing motivation through achievement systems, streak tracking, and community challenges. Built from extensive UX research with gym-goers of all experience levels.',
    thumbnail: '/iron-pillar-hero.png',
    thumbnailFit: 'contain',
    category: 'UX/UI Design',
    tags: ['Mobile App', 'UX Research', 'Figma'],
    featured: true,
    year: '2024',
    externalLinks: {
      behance: 'https://www.behance.net/gallery/236190049/Iron-Pillar-Pitch-Deck',
    },
  },
  {
    slug: 'whiskey-thief',
    title: 'Whiskey Thief',
    description: 'A sophisticated digital platform designed for Whiskey Thief Distilling Co. that elevates the tasting room experience. This QR-accessible web app guides visitors through curated bourbon flights, craft cocktail recipes, and food pairings with rich storytelling about each product\'s heritage. The interface balances Kentucky bourbon culture aesthetics with modern usability, featuring smooth animations and an intuitive navigation system that works seamlessly in the distillery\'s ambient lighting.',
    thumbnail: '/whiskey-thief-thumbnail.png',
    thumbnailFit: 'contain',
    category: 'UX/UI Design',
    tags: ['Web App', 'Tourism', 'QR Experience'],
    featured: true,
    year: '2024',
  },
  {
    slug: 'lego-architect',
    title: 'LEGO Architect',
    description: 'A visionary product concept that reimagines LEGO for architectural professionals. This precision-scaled modular building system bridges the gap between physical model-making and digital design, featuring 1:100 scale components that snap together with architectural accuracy. The companion app syncs physical builds to 3D digital models in real-time, enabling architects to iterate on designs tangibly before committing to CAD. Pitched as a professional tool for client presentations and spatial planning.',
    thumbnail: '/lego-architect-thumbnail.png',
    category: 'UX/UI Design',
    tags: ['Product Design', 'Concept', 'Pitch'],
    featured: true,
    year: '2024',
    externalLinks: {
      behance: 'https://www.behance.net/gallery/224263107/Lego-Architect-Interaction-Project/modules/1282739869',
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories = ['All', 'UX/UI Design', 'Motion Design', 'Graphic Design'] as const;

export type ProjectCategory = (typeof projectCategories)[number];
