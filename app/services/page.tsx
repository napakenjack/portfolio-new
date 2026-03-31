import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/content/services';
import { createMetadata } from '@/lib/utils';

export const metadata: Metadata = createMetadata('Services | Alex Mercer', 'Fullstack development, SEO, and AI content services.', '/services');

export default function ServicesPage() {
  return (
    <section className="container section">
      <SectionHeading
        eyebrow="Services"
        title="Services designed to improve visibility, trust, and conversion"
        description="All service copy, benefits, and deliverables can be edited in content/services.ts."
      />
      <div className="card-grid three">
        {services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
    </section>
  );
}
