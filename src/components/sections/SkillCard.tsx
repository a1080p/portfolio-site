import { Card, CardTitle } from '@/components/ui/Card';

interface SkillCardProps {
  category: string;
  skills: string[];
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <Card padding="md" hover>
      <CardTitle as="h3" className="text-base mb-3">
        {category}
      </CardTitle>
      <ul className="space-y-1">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-[var(--color-text-secondary)] text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
}
