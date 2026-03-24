import { portfolioImages } from '../assets/images';

export const heroHighlights = [
  {
    iconName: 'material-symbols:verified-rounded',
    iconClass: 'text-secondary text-4xl',
    title: 'Frontend + Backend',
    detail:
      'Dave Conco ships polished React interfaces backed by robust APIs, creating complete product experiences.',
    className: 'bg-surface-container-low',
  },
  {
    iconName: 'material-symbols:auto-awesome-rounded',
    iconClass: 'text-primary text-4xl',
    title: 'Practical Innovation',
    detail:
      'He combines clean architecture with experimentation to turn hard requirements into reliable software.',
    className: 'bg-surface-container-highest',
  },
];

export const projectCards = {
  primary: {
    image: portfolioImages.project1,
    title: 'bennybit.vercel.app',
    detail: 'Secure fintech-style dashboard with auth flows, transaction tracking, and crypto + gift card operations.',
  },
  secondary: {
    image: portfolioImages.project2,
    title: 'usebennybit.com',
    detail: 'Marketing landing page communicating core fintech value propositions and conversion-focused messaging.',
  },
  tertiary: {
    image: portfolioImages.project3,
    title: 'greenworldpower.com.ng',
    detail: 'Renewable energy business website highlighting services, trust signals, and customer acquisition funnel.',
  },
  quaternary: {
    image: portfolioImages.project4,
    title: 'NeoFinance + PhpSPA + PipGalaxy',
    detail: 'Backend docs and client products across GoFiber APIs, PhpSPA client architecture, and trading tools.',
  },
};

export const timelineItems = [
  {
    period: '2024 - PRESENT',
    title: 'Backend Engineer',
    detail:
      'Builds and maintains scalable APIs, authentication flows, and data-heavy services across multiple products.',
    active: true,
  },
  {
    period: '2022 - 2024',
    title: 'Independent Builder',
    detail:
      'Delivered backend solutions for e-commerce and operational systems with a focus on maintainability.',
    active: false,
  },
  {
    period: '2019 - 2022',
    title: 'Software Foundations',
    detail:
      'Strengthened core engineering skills through hands-on work in databases, Linux tooling, and system design.',
    active: false,
  },
];

export const skillCards = [
  {
    title: 'Backend Engineering',
    accentClass: 'text-primary',
    tags: ['PHP / LARAVEL', 'GOLANG / GOFIBER', 'NODE.JS / EXPRESS', 'MICROSERVICES'],
    value: 95,
  },
  {
    title: 'Data, Infra & Delivery',
    accentClass: 'text-secondary',
    tags: ['MYSQL / MONGODB', 'DOCKER', 'LINUX / UNIX', 'CI / CD'],
    value: 90,
  },
];
