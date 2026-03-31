export type NavItem = { label: string; href: string };

export type HeroContent = {
  badge: string;
  title: string;
  subtitle: string;
  summary: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustIndicators: string[];
  image: { src: string; alt: string };
};

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  benefits: string[];
  idealClient: string;
  deliverables?: string[];
  ctaLabel: string;
  category: string;
  icon: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  result: string;
  techStack: string[];
  coverImage: { src: string; alt: string };
  overview: string;
  clientProblem: string;
  solution: string;
  outcomes: string[];
  gallery: string[];
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
};

export type FAQItemType = {
  question: string;
  answer: string;
};
