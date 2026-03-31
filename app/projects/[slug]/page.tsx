import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import { projects } from '@/content/projects';
import { createMetadata } from '@/lib/utils';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return createMetadata('Project Not Found', 'Project not found.');
  return createMetadata(`${project.title} | Project Case Study`, project.description, `/projects/${project.slug}`);
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article className="container section project-detail">
      <Image src={project.coverImage.src} alt={project.coverImage.alt} width={1200} height={700} className="hero-image" />
      <p className="eyebrow">{project.category}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.overview}</p>

      <div className="content-stack">
        <section className="card"><h2>Client Problem</h2><p className="muted">{project.clientProblem}</p></section>
        <section className="card"><h2>Solution</h2><p className="muted">{project.solution}</p></section>
        <section className="card"><h2>Technologies Used</h2><div className="tags">{project.techStack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div></section>
        <section className="card"><h2>Results & Outcomes</h2><ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
        <section className="card">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {project.gallery.map((src) => <Image key={src} src={src} alt={`${project.title} screenshot`} width={480} height={300} className="cover" />)}
          </div>
        </section>
      </div>

      <div className="cta-row">
        <CTAButton href="/contact" label="Start a Similar Project" />
        <Link href="/projects" className="btn btn-secondary">Back to Projects</Link>
      </div>
    </article>
  );
}
