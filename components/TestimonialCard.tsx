import Image from 'next/image';
import { Testimonial } from '@/types/content';

type Props = { testimonial: Testimonial };

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <article className="card testimonial-card">
      <p>“{testimonial.quote}”</p>
      <div className="author">
        <Image src={testimonial.avatar} alt={`${testimonial.name} avatar`} width={48} height={48} className="avatar" />
        <div>
          <strong>{testimonial.name}</strong>
          <p className="small muted">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </article>
  );
}
