import { Project } from '@/types/content';

// EDIT HERE: Update project details, images, and categories.
export const projects: Project[] = [
  {
    slug: 'lux-clinic-digital-relaunch',
    title: 'LUX Clinic Digital Relaunch',
    category: 'Healthcare Website',
    description: 'Rebuilt a clinic website to improve credibility and appointment inquiries.',
    result: '2.3x increase in consultation bookings within 90 days.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind-inspired CSS', 'Form automation'],
    coverImage: { src: '/projects/clinic-cover.svg', alt: 'LUX Clinic homepage redesign' },
    overview: 'A complete redesign and rebuild focused on trust, service clarity, and conversion pathways.',
    clientProblem: 'The old website looked outdated and generated inconsistent leads from organic traffic.',
    solution: 'Delivered a premium UI, clearer service hierarchy, fast page loads, and frictionless booking forms.',
    outcomes: ['+130% qualified leads', '+48% average time on page', 'PageSpeed score above 90 on core pages'],
    gallery: ['/projects/clinic-1.svg', '/projects/clinic-2.svg', '/projects/clinic-3.svg'],
    featured: true
  },
  {
    slug: 'estateflow-real-estate-platform',
    title: 'EstateFlow Real Estate Platform',
    category: 'Real Estate',
    description: 'Modern listing and lead funnel platform for a real estate team.',
    result: '41% more inbound buyer inquiries in two months.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'SEO optimization'],
    coverImage: { src: '/projects/estate-cover.svg', alt: 'EstateFlow platform dashboard and listing pages' },
    overview: 'Designed and developed a browsing and inquiry journey tailored for high-intent property buyers.',
    clientProblem: 'Low lead quality and no clear handoff from listing pages to sales team follow-up.',
    solution: 'Built segmented listing pages, intent-based forms, and CRM-friendly lead structure.',
    outcomes: ['+41% buyer inquiries', '-22% bounce rate', 'Improved lead quality score from sales team'],
    gallery: ['/projects/estate-1.svg', '/projects/estate-2.svg', '/projects/estate-3.svg'],
    featured: true
  },
  {
    slug: 'nordic-d2c-campaign-stack',
    title: 'Nordic D2C Campaign Stack',
    category: 'Ecommerce Campaign',
    description: 'Landing pages and AI creatives for a multi-product ecommerce campaign.',
    result: '28% lower cost per acquisition after launch.',
    techStack: ['Next.js', 'A/B testing setup', 'Meta ad creatives', 'Analytics'],
    coverImage: { src: '/projects/d2c-cover.svg', alt: 'Nordic D2C campaign landing page variants' },
    overview: 'Created a unified conversion system across paid traffic landing pages and ad content.',
    clientProblem: 'Campaign spend was increasing while conversion rates remained flat.',
    solution: 'Implemented message-matched landing variants and AI-supported creative iteration pipeline.',
    outcomes: ['-28% CPA', '+19% landing page conversion', 'Faster creative testing cycles'],
    gallery: ['/projects/d2c-1.svg', '/projects/d2c-2.svg', '/projects/d2c-3.svg'],
    featured: false
  }
];

export const projectCategories = ['All', ...new Set(projects.map((project) => project.category))];
