import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projectCategories, projects } from '@/content/projects';
import { createMetadata } from '@/lib/utils';

export const metadata: Metadata = createMetadata('Projects | Alex Mercer', 'Browse projects and case studies.', '/projects');

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const activeCategory = category && projectCategories.includes(category) ? category : 'All';
  const filtered = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="container section">
      <SectionHeading eyebrow="Projects" title="Case studies with measurable outcomes" />
      <div className="filter-row" aria-label="Project categories">
        {projectCategories.map((item) => (
          <Link key={item} href={item === 'All' ? '/projects' : `/projects?category=${encodeURIComponent(item)}`} className={`tag ${item === activeCategory ? 'tag-active' : ''}`}>
            {item}
          </Link>
        ))}
      </div>
      <div className="card-grid two">
        {filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
