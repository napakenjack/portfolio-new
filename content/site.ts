import { HeroContent, NavItem } from '@/types/content';

// EDIT HERE: Global site settings, brand text, links, and contact information.
export const siteSettings = {
  siteName: 'Alex Mercer Studio',
  siteUrl: 'https://example.com',
  tagline: 'Fullstack Developer + AI Content Manager',
  defaultTitle: 'Alex Mercer | Fullstack Developer + AI Content Manager',
  defaultDescription:
    'Premium websites, scalable systems, and AI-powered content that help businesses grow with confidence.',
  ogImage: '/images/og-cover.svg',
  responseTime: 'Typically within 24 hours (Mon–Sat).'
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' }
];

export const heroContent: HeroContent = {
  badge: 'Available for select client projects',
  title: 'Websites, systems, and AI-powered content that make your brand look premium and convert better.',
  subtitle: 'Fullstack Development + Content Direction',
  summary:
    'I build high-performing digital experiences for businesses that need strong presentation, clean technology, and content that drives action.',
  primaryCta: { label: 'Start a Project', href: '/contact' },
  secondaryCta: { label: 'View My Work', href: '/projects' },
  trustIndicators: ['50+ delivered projects', 'SEO-ready builds', 'Full-cycle execution'],
  image: {
    src: '/images/hero-feature.svg',
    alt: 'Featured premium website mockup by Alex Mercer'
  }
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile' },
  { label: 'Telegram', href: 'https://t.me/your-handle' },
  { label: 'WhatsApp', href: 'https://wa.me/10000000000' },
  { label: 'Email', href: 'mailto:hello@example.com' }
];

export const footerLinks = [
  { section: 'Pages', links: navigation },
  {
    section: 'Services',
    links: [
      { label: 'Business Websites', href: '/services' },
      { label: 'WordPress Development', href: '/services' },
      { label: 'AI Content & Creatives', href: '/services' }
    ]
  }
];

export const aboutContent = {
  intro:
    'I help growth-focused businesses build polished digital experiences that communicate credibility and drive leads.',
  background:
    'With a hybrid background in fullstack engineering and AI content production, I combine performance-focused development with messaging that resonates with modern audiences.',
  skills: [
    'Frontend Architecture (React / Next.js / Vue)',
    'Backend APIs (Node.js / Express / Databases)',
    'WordPress Customization and Optimization',
    'Technical SEO Foundations',
    'AI-enhanced content and ad creative workflows'
  ],
  workflow: [
    'Discovery and objective mapping',
    'Conversion-oriented planning',
    'Design direction and UI system',
    'Development, QA, and optimization',
    'Launch with support and iteration'
  ],
  tools: ['Next.js', 'React', 'Vue', 'Node.js', 'WordPress', 'PostgreSQL', 'Figma', 'Midjourney', 'Runway'],
  whyChooseMe: [
    'One partner for both development and digital presentation',
    'Clear communication and reliable timelines',
    'Scalable architecture with clean code quality',
    'Premium, minimalist UI with business-first thinking'
  ]
};

export const processSteps = [
  { title: 'Discovery', description: 'Clarify goals, audience, constraints, and key conversion actions.' },
  { title: 'Planning', description: 'Map structure, page priorities, content blocks, and success metrics.' },
  { title: 'Design Direction', description: 'Set premium visual style, typography, and messaging hierarchy.' },
  { title: 'Development', description: 'Build responsive, maintainable pages with scalable architecture.' },
  { title: 'Testing', description: 'QA across devices, optimize speed, accessibility, and SEO foundations.' },
  { title: 'Launch & Support', description: 'Deploy, monitor, and iterate based on performance and feedback.' }
];

export const trustPoints = [
  'Full-cycle execution from strategy to launch',
  'Modern UI and clean, maintainable code',
  'SEO-aware implementation from day one',
  'Flexible stack for startups and established businesses',
  'Technical + creative blend for stronger conversion outcomes'
];

export const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '96%', label: 'Client Satisfaction' },
  { value: '6+', label: 'Years in Web & Content' }
];

export const contactInfo = {
  email: 'hello@example.com',
  telegram: '@your-handle',
  whatsapp: '+1 (000) 000-0000',
  linkedin: 'linkedin.com/in/your-profile'
};
