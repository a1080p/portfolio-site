import type { CaseStudyTheme } from './case-studies';

export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailFit?: 'cover' | 'contain';
  videoPreview?: string;
  /** Light silent loop that plays on its own (card + page hero), not just on hover */
  previewLoop?: { src: string; poster: string };
  category: 'UX/UI Design' | 'Motion Design' | 'Graphic Design';
  tags: string[];
  featured: boolean;
  year: string;
  /** Skins the project's card (and page) in its own style */
  theme?: CaseStudyTheme;
  /** One-line hook for the card; wrap a phrase in *asterisks* to accent it */
  tagline?: string;
  externalLinks?: {
    figma?: string;
    behance?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'apostrophe',
    theme: 'apostrophe',
    tagline: 'The logo, *on air.*',
    title: 'Apostrophe Idents',
    description: 'Logo idents for Apostrophe, a Louisville creative studio. I came up with the ideas and brought them to life: a balloon ident built in Blender with physics simulation for the studio\'s 2nd birthday, and a vinyl ident for a soundtrack promo.',
    thumbnail: '/apostrophe-idents/vinyl-poster.jpg',
    previewLoop: { src: '/apostrophe-idents/idents-preview.mp4', poster: '/apostrophe-idents/vinyl-poster.jpg' },
    category: 'Motion Design',
    tags: ['Blender', 'Brand Idents', 'Simulation', '3D Animation'],
    featured: true,
    year: '2026',
  },
  {
    slug: 'mgk-dossier',
    theme: 'mgk-dossier',
    tagline: 'Bottled *rebellion.*',
    title: 'MGK x Dossier Case Study',
    description: 'A self-directed 3D motion design exploration pushing the boundaries of luxury fragrance advertising. Built entirely in Blender, this case study features photorealistic glass rendering, Mantaflow fluid simulations, and dramatic studio lighting to capture the rebellious elegance of high-end perfume commercials. The project demonstrates advanced techniques in product visualization, procedural materials, and cinematic camera work. Not affiliated with MGK or Dossier.',
    thumbnail: '/MGK x Dossier Thumbnail.png',
    videoPreview: '/MGK x Dossier Final.mp4',
    previewLoop: { src: '/mgk-dossier/preview.mp4', poster: '/mgk-dossier/preview-poster.jpg' },
    category: 'Motion Design',
    tags: ['Blender', '3D Animation', 'Motion Graphics'],
    featured: true,
    year: '2026',
  },
  {
    slug: 'iron-pillar',
    theme: 'iron-pillar',
    tagline: 'Show up. Stack the *days.*',
    title: 'Iron Pillar',
    description: 'A workout tracker for iPhone that I took from UX research to a real app headed for the App Store, as a solo developer. Iron Pillar logs any workout in seconds, tracks outdoor activity with GPS, and turns consistency into streaks, XP, levels, and badges. I owned everything: research, UX/UI, brand, React Native and Firebase development, the marketing site, App Store submission, and project management.',
    thumbnail: '/iron-pillar-hero.png',
    thumbnailFit: 'contain',
    category: 'UX/UI Design',
    tags: ['iOS App', 'Product Design', 'Development', 'Project Management'],
    featured: true,
    year: '2025–2026',
    externalLinks: {
      live: 'https://www.ironpillar.app/',
      behance: 'https://www.behance.net/gallery/236190049/Iron-Pillar-Pitch-Deck',
    },
  },
  {
    slug: 'dither-dog',
    theme: 'dither-dog',
    tagline: 'Dither your *whole world.*',
    title: 'Dither Dog',
    description: 'My first fully deployed web application, grown into a complete client-side tool that turns any photo, video, or GIF into pixel-precise art. Dither Dog offers 28 dithering algorithms, 23 color palettes, and 20 curated presets, all rendered in the browser, wrapped in a sleek, robotic interface I designed and built myself.',
    thumbnail: '/Dither dog thumbnail.png',
    videoPreview: '/Final Preview.mp4',
    previewLoop: { src: '/dither-dog/demo-preview.mp4', poster: '/dither-dog/demo-poster.jpg' },
    category: 'Graphic Design',
    tags: ['Web App', 'Tool Design', 'Development', 'Project Management'],
    featured: true,
    year: '2025–2026',
    externalLinks: {
      live: 'https://www.ditherdog.tech/',
    },
  },
  {
    slug: 'whiskey-thief',
    theme: 'whiskey-thief',
    tagline: 'Every barrel has a *story.*',
    title: 'Whiskey Thief',
    description: 'A sophisticated digital platform designed for Whiskey Thief Distilling Co. that elevates the tasting room experience. This QR-accessible web app guides visitors through curated bourbon flights, craft cocktail recipes, and food pairings with rich storytelling about each product\'s heritage. The interface balances Kentucky bourbon culture aesthetics with modern usability, featuring smooth animations and an intuitive navigation system that works seamlessly in the distillery\'s ambient lighting.',
    thumbnail: '/whiskey-thief-thumbnail.png',
    thumbnailFit: 'contain',
    category: 'UX/UI Design',
    tags: ['Web App', 'Tourism', 'QR Experience'],
    featured: true,
    year: '2025',
  },
  {
    slug: 'daker',
    theme: 'daker',
    tagline: 'Compliance, *made clear.*',
    title: 'Daker Product Film',
    description: 'A one-minute product film for Daker, a startup communication and compliance platform for Medicaid home care agencies. Built in After Effects with 3D rendered in Blender as client work, it gave a brand-new company its look and tone on screen, pitched to investors and the agencies who would use it.',
    thumbnail: '/daker-promo/poster.jpg',
    videoPreview: '/daker-promo/daker-film.mp4',
    previewLoop: { src: '/daker-promo/preview.mp4', poster: '/daker-promo/poster.jpg' },
    category: 'Motion Design',
    tags: ['After Effects', 'Blender', 'Product Film', 'Motion Graphics'],
    featured: true,
    year: '2026',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories = ['All', 'UX/UI Design', 'Motion Design', 'Graphic Design'] as const;

export type ProjectCategory = (typeof projectCategories)[number];
