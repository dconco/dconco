import { portfolioImages } from '../assets/images';

export const heroHighlights = [
  {
    iconName: 'material-symbols:verified-rounded',
    iconClass: 'text-secondary text-4xl',
    title: 'Proven Impact',
    detail:
      'Helping Series A startups define their visual language and scale globally with intent.',
    className: 'bg-surface-container-low',
  },
  {
    iconName: 'material-symbols:auto-awesome-rounded',
    iconClass: 'text-primary text-4xl',
    title: 'Strategic Flow',
    detail:
      'Balancing technical precision with editorial elegance to drive user engagement.',
    className: 'bg-surface-container-highest',
  },
];

export const projectCards = {
  primary: {
    image: portfolioImages.project1,
    title: 'Lumina OS Architecture',
    detail: 'Redefining operating system aesthetics with glassmorphism and neuro-spatial layering.',
  },
  secondary: {
    image: portfolioImages.project2,
    title: 'Cybercore Interface',
    detail: 'Web design',
  },
  tertiary: {
    image: portfolioImages.project3,
    title: 'Aether Brand Identity',
    detail: 'Editorial branding for a high-end fashion tech house.',
  },
  quaternary: {
    image: portfolioImages.project4,
    title: 'Vertex Productivity SaaS',
    detail: "Designing the world's most intuitive workspace for creative agencies.",
  },
};

export const timelineItems = [
  {
    period: '2022 - PRESENT',
    title: 'Principal Product Designer',
    detail:
      'Lead the design of core features for high-growth SaaS platforms, focusing on visual systems and user psychology.',
    active: true,
  },
  {
    period: '2019 - 2022',
    title: 'Senior UI/UX Designer',
    detail:
      'Orchestrated the complete rebrand and UI overhaul for an international e-commerce giant.',
    active: false,
  },
  {
    period: '2016 - 2019',
    title: 'Visual Designer',
    detail:
      'Crafted award-winning digital campaigns and high-fidelity prototypes for Fortune 500 clients.',
    active: false,
  },
];

export const skillCards = [
  {
    title: 'Creative Direction',
    accentClass: 'text-primary',
    tags: ['EDITORIAL LAYOUT', 'TYPOGRAPHY SYSTEM', 'BRANDING', 'MOTION'],
    value: 98,
  },
  {
    title: 'Front-End Engineering',
    accentClass: 'text-secondary',
    tags: ['REACT / NEXT.JS', 'TAILWIND CSS', 'THREE.JS', 'GSAP'],
    value: 92,
  },
];
