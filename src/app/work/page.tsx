'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { projects, projectCategories, type ProjectCategory } from '@/lib/data/projects';
import { cn } from '@/lib/utils/cn';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <Container>
          <ScrollReveal>
            <h1 className="text-[var(--text-display)] font-black uppercase tracking-tight mb-4">My Work</h1>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
              A collection of projects spanning UX/UI design, motion graphics, and brand identity.
              Each project represents a unique challenge and creative solution.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Filter + Grid Section */}
      <section className="pb-24">
        <Container>
          {/* Filter Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    activeFilter === category
                      ? 'bg-[var(--color-accent)] text-[#ffffff]'
                      : 'bg-white/60 border border-stone-200 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-stone-300'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  thumbnail={project.thumbnail}
                  thumbnailFit={project.thumbnailFit}
                  videoPreview={project.videoPreview}
                  href={`/work/${project.slug}`}
                  tags={project.tags}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--color-text-secondary)]">
                No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
