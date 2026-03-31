import { Testimonial } from '@/types/content';

// EDIT HERE: Update testimonial copy, names, and avatar paths.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Nolan',
    role: 'Operations Director',
    company: 'LUX Clinic',
    quote:
      'Alex transformed our online presence into something that finally matches our quality of service. We now get consistent high-intent inquiries every week.',
    avatar: '/testimonials/sarah.svg'
  },
  {
    id: 't2',
    name: 'Mikhail Petrov',
    role: 'Managing Partner',
    company: 'EstateFlow',
    quote:
      'Beyond technical execution, the strategic thinking around user flow and trust-building made a huge commercial impact for our team.',
    avatar: '/testimonials/mikhail.svg'
  },
  {
    id: 't3',
    name: 'Jenna Wu',
    role: 'Growth Lead',
    company: 'Nordic Commerce',
    quote:
      'The combination of development speed and AI creative direction helped us ship faster and improve our campaign performance noticeably.',
    avatar: '/testimonials/jenna.svg'
  }
];
