import { Service } from '@/types/content';
import CTAButton from './CTAButton';

type Props = { service: Service };

export default function ServiceCard({ service }: Props) {
  return (
    <article className="card service-card">
      <span className="icon">{service.icon}</span>
      <h3>{service.title}</h3>
      <p className="muted">{service.shortDescription}</p>
      <p className="small"><strong>Ideal for:</strong> {service.idealClient}</p>
      <ul>
        {service.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <CTAButton href="/contact" label={service.ctaLabel} variant="secondary" />
    </article>
  );
}
