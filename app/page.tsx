import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import FAQItem from '@/components/FAQItem';
import ProcessSteps from '@/components/ProcessSteps';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import StatsStrip from '@/components/StatsStrip';
import TestimonialCard from '@/components/TestimonialCard';
import { faqItems } from '@/content/faq';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { heroContent, trustPoints } from '@/content/site';
import { testimonials } from '@/content/testimonials';

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <>
      <section className="hero container grid-2">
        <div>
          <p className="eyebrow">{heroContent.badge}</p>
          <h1>{heroContent.title}</h1>
          <p className="lead">{heroContent.subtitle}</p>
          <p className="muted">{heroContent.summary}</p>
          <div className="cta-row">
            <CTAButton href={heroContent.primaryCta.href} label={heroContent.primaryCta.label} />
            <CTAButton href={heroContent.secondaryCta.href} label={heroContent.secondaryCta.label} variant="secondary" />
          </div>
          <div className="trust-row">
            {heroContent.trustIndicators.map((indicator) => (
              <span key={indicator} className="tag">{indicator}</span>
            ))}
          </div>
        </div>
        <Image src={heroContent.image.src} alt={heroContent.image.alt} width={720} height={780} className="hero-image" priority />
      </section>

      <StatsStrip />

      <section className="container section">
        <SectionHeading eyebrow="Services" title="What I can build for your business" description="Each service combines technical execution with conversion-focused content strategy." />
        <div className="card-grid three">
          {services.slice(0, 6).map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </section>

      <section className="container section">
        <SectionHeading eyebrow="Selected Projects" title="Proof through real outcomes" description="Case studies focused on measurable business impact, not just visual design." />
        <div className="card-grid two">
          {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="container section">
        <SectionHeading eyebrow="Why Work With Me" title="A partner who blends product thinking, clean code, and growth content" />
        <ul className="feature-list">
          {trustPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <section className="container section">
        <SectionHeading eyebrow="Process" title="A clear workflow from idea to launch" />
        <ProcessSteps />
      </section>

      <section className="container section">
        <SectionHeading eyebrow="Testimonials" title="Trusted by ambitious teams" />
        <div className="card-grid three">
          {testimonials.map((item) => <TestimonialCard key={item.id} testimonial={item} />)}
        </div>
      </section>

      <section className="container section">
        <SectionHeading eyebrow="FAQ" title="Answers before we start" />
        <div className="faq-grid">
          {faqItems.map((item) => <FAQItem key={item.question} item={item} />)}
        </div>
      </section>

      <section className="container section final-cta card">
        <h2>Ready to build a premium digital presence that converts?</h2>
        <p className="muted">Book your project slot and get a clear roadmap within the first call.</p>
        <div className="cta-row">
          <CTAButton href="/contact" label="Start a Project" />
          <Link href="/projects" className="btn btn-secondary">View My Work</Link>
        </div>
      </section>
    </>
  );
}
