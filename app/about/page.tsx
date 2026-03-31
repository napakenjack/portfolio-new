import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import SectionHeading from '@/components/SectionHeading';
import { aboutContent } from '@/content/site';
import { createMetadata } from '@/lib/utils';

export const metadata: Metadata = createMetadata('About | Alex Mercer', 'Learn about my background, skills, and workflow.', '/about');

export default function AboutPage() {
  return (
    <section className="container section">
      <SectionHeading eyebrow="About" title="Technical execution with strategic digital presentation" description={aboutContent.intro} />
      <div className="content-stack">
        <article className="card">
          <h3>Background</h3>
          <p className="muted">{aboutContent.background}</p>
        </article>
        <article className="card">
          <h3>Skills</h3>
          <ul>{aboutContent.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </article>
        <article className="card">
          <h3>Workflow</h3>
          <ul>{aboutContent.workflow.map((step) => <li key={step}>{step}</li>)}</ul>
        </article>
        <article className="card">
          <h3>Tools & Technologies</h3>
          <div className="tags">{aboutContent.tools.map((tool) => <span key={tool} className="tag">{tool}</span>)}</div>
        </article>
        <article className="card">
          <h3>Why clients choose me</h3>
          <ul>{aboutContent.whyChooseMe.map((point) => <li key={point}>{point}</li>)}</ul>
        </article>
      </div>
      <div className="centered-cta">
        <CTAButton href="/contact" label="Let's Discuss Your Project" />
      </div>
    </section>
  );
}
