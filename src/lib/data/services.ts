export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  icon: 'layout' | 'code' | 'video' | 'accessibility';
}

export const services: Service[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    shortDescription: 'Memorable visual identities that resonate with your audience and stand the test of time.',
    description: 'I create cohesive brand systems that tell your story and connect with your target audience. From logo design to comprehensive brand guidelines, I ensure every touchpoint reflects your unique value.',
    features: [
      'Logo Design & Variations',
      'Color Palette & Typography',
      'Brand Guidelines',
      'Visual Identity Systems',
      'Brand Strategy',
    ],
    icon: 'layout',
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    shortDescription: 'Beautiful, responsive websites that convert visitors into customers.',
    description: 'I design and build modern, accessible websites that look great on every device. From simple landing pages to complex web applications, I focus on user experience and performance.',
    features: [
      'Responsive Web Design',
      'UI/UX Design',
      'Prototyping in Figma',
      'Front-end Development',
      'Webflow Development',
    ],
    icon: 'code',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    shortDescription: 'Dynamic animations that bring your brand to life and captivate audiences.',
    description: 'I create engaging motion graphics that enhance your brand storytelling. From logo animations to explainer videos, I bring static designs to life with purpose and style.',
    features: [
      'Logo Animation',
      'Explainer Videos',
      'Social Media Content',
      'UI Animation',
      '3D Motion Graphics',
    ],
    icon: 'video',
  },
  {
    id: 'accessible-design',
    title: 'Accessible Design',
    shortDescription: 'Inclusive design solutions that work for everyone, regardless of ability.',
    description: 'I believe great design should be accessible to all. I incorporate accessibility best practices from the start, ensuring your digital products can be used by everyone.',
    features: [
      'WCAG Compliance',
      'Accessibility Audits',
      'Inclusive UX Research',
      'Screen Reader Optimization',
      'Color Contrast Analysis',
    ],
    icon: 'accessibility',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your goals, audience, and project requirements through research and conversation.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'I create wireframes, mockups, and prototypes, iterating based on your feedback until we nail the vision.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Designs come to life through clean, accessible code or your platform of choice.',
  },
  {
    number: '04',
    title: 'Deliver & Support',
    description: 'Launch your project with ongoing support. The first 90 days of updates are included.',
  },
];
