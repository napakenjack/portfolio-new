import { Service } from '@/types/content';

// EDIT HERE: Add, remove, or update services shown across the website.
export const services: Service[] = [
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    shortDescription: 'Premium personal or agency portfolios that build trust and attract ideal clients.',
    benefits: ['Clear positioning', 'Polished visual identity', 'Lead-focused structure'],
    idealClient: 'Freelancers, creators, consultants, and small studios',
    deliverables: ['Multi-page website', 'CMS-friendly content model', 'SEO fundamentals'],
    ctaLabel: 'Discuss Portfolio Build',
    category: 'Web Development',
    icon: '◼'
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    shortDescription: 'Professional websites for companies that need credibility and consistent lead generation.',
    benefits: ['Strong first impression', 'Service clarity', 'Conversion-ready pages'],
    idealClient: 'Local service businesses, clinics, agencies, startups',
    deliverables: ['Core pages', 'Inquiry flows', 'Analytics setup'],
    ctaLabel: 'Start Business Website',
    category: 'Web Development',
    icon: '◆'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    shortDescription: 'Focused campaign pages built to maximize signups, inquiries, and sales actions.',
    benefits: ['Fast loading', 'Message-market fit', 'CTA optimization'],
    idealClient: 'Performance marketers and product teams',
    deliverables: ['A/B-ready section structure', 'Form integration', 'Tracking events'],
    ctaLabel: 'Build Landing Page',
    category: 'Conversion',
    icon: '●'
  },
  {
    id: 'wordpress-websites',
    title: 'WordPress Websites',
    shortDescription: 'Flexible WordPress builds with custom sections, speed optimization, and clean admin experience.',
    benefits: ['Easy editing', 'SEO-friendly setup', 'Secure best practices'],
    idealClient: 'Businesses needing a familiar content workflow',
    deliverables: ['Theme customization', 'Plugin stack setup', 'Admin walkthrough'],
    ctaLabel: 'Plan WordPress Project',
    category: 'CMS Development',
    icon: '▣'
  },
  {
    id: 'react-vue',
    title: 'React / Vue.js Websites',
    shortDescription: 'Modern frontend experiences with reusable components and scalable architecture.',
    benefits: ['High performance', 'Future-ready codebase', 'Design system consistency'],
    idealClient: 'Startups, SaaS, and product-focused businesses',
    deliverables: ['Component library', 'Responsive UI', 'Production deployment'],
    ctaLabel: 'Build with React / Vue',
    category: 'Frontend Engineering',
    icon: '▤'
  },
  {
    id: 'backend-api',
    title: 'Backend / API Development',
    shortDescription: 'Reliable backend services and integrations powering custom business workflows.',
    benefits: ['Secure architecture', 'Scalable endpoints', 'Faster operations'],
    idealClient: 'Teams needing custom systems and integrations',
    deliverables: ['REST APIs', 'Database modeling', 'Auth and role setup'],
    ctaLabel: 'Discuss Backend Scope',
    category: 'Backend Engineering',
    icon: '⬢'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    shortDescription: 'Technical and on-page SEO setup so your website is discoverable and structurally strong.',
    benefits: ['Improved visibility', 'Clean indexing', 'Search-ready structure'],
    idealClient: 'Businesses wanting sustainable organic growth',
    deliverables: ['Metadata strategy', 'Schema-ready structure', 'Performance audit'],
    ctaLabel: 'Improve SEO Setup',
    category: 'SEO',
    icon: '◍'
  },
  {
    id: 'ai-content',
    title: 'AI Content / Ad Creatives',
    shortDescription: 'AI-enhanced marketing content and visuals for campaigns, ads, and social presentation.',
    benefits: ['Faster content cycles', 'Visual consistency', 'Campaign-ready outputs'],
    idealClient: 'Agencies, ecommerce brands, and growth teams',
    deliverables: ['Ad creative concepts', 'Video/promo direction', 'Content batch production'],
    ctaLabel: 'Plan AI Content Pack',
    category: 'AI Content',
    icon: '✦'
  }
];
