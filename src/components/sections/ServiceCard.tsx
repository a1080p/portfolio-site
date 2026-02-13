import { Card, CardTitle, CardDescription } from '@/components/ui/Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card hover padding="lg">
      <div className="text-[var(--color-accent)] mb-4">
        {icon}
      </div>
      <CardTitle className="mb-3">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}
