export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Design',
    skills: ['Figma', 'Adobe Creative Suite', 'UI/UX Design', 'Prototyping'],
  },
  {
    category: 'Development',
    skills: ['HTML/CSS', 'JavaScript', 'React/Next.js', 'Webflow'],
  },
  {
    category: 'Motion',
    skills: ['After Effects', 'Blender', '3D Modeling', 'Animation'],
  },
  {
    category: 'Strategy',
    skills: ['Branding', 'Accessibility', 'User Research', 'Information Architecture'],
  },
];
