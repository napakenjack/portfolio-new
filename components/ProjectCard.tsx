import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/content';

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="card project-card">
      <Image src={project.coverImage.src} alt={project.coverImage.alt} width={720} height={420} className="cover" />
      <div className="card-content">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="muted">{project.description}</p>
        <p><strong>Result:</strong> {project.result}</p>
        <div className="tags">
          {project.techStack.map((tech) => (
            <span className="tag" key={tech}>{tech}</span>
          ))}
        </div>
        <Link className="text-link" href={`/projects/${project.slug}`}>View Case Study →</Link>
      </div>
    </article>
  );
}
