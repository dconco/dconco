import type { Product } from "../contexts/CartContext";

export const storeProducts: Product[] = [
  {
    id: "bennybit-full",
    name: "Bennybit Dashboard",
    tagline: "Secure fintech-style web dashboard with auth flows, transaction tracking, and crypto + gift card operations.",
    description: "A complete fintech-style dashboard application built with React and Node.js. Includes user authentication, transaction management, cryptocurrency tracking, gift card redemption, sending/withdraw workflows, and trust-driven metrics. Perfect for launching your own fintech product.",
    images: [
      "/project-screenshots/bennybit-landing.png",
      "/project-screenshots/bennybit.png",
      "/project-screenshots/bada-landing-page.png"
    ],
    price: {
      frontend: 85000,
      backend: 120000,
      full: 180000
    },
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://bennybit.vercel.app",
    liveDemo: true
  },
  {
    id: "greenworld-full",
    name: "GreenWorld Power Website",
    tagline: "Renewable energy business website highlighting services, trust signals, and customer acquisition funnel.",
    description: "A professional business website for renewable energy companies. Includes service showcases, trust-building sections, contact flows for customer acquisition, and mobile-first responsive design. Built with PHP Laravel and PhpSPA Framework.",
    images: [
      "/project-screenshots/greenworld.png"
    ],
    price: {
      frontend: 60000,
      backend: 85000,
      full: 125000
    },
    tags: ["PHP", "Laravel ORM", "PhpSPA"],
    demoUrl: "https://greenworldpower.com.ng",
    liveDemo: true
  },
  {
    id: "neofinance-api",
    name: "NeoFinance Tracker API",
    tagline: "Finance tracking backend with API documentation, authentication, and data management endpoints.",
    description: "A comprehensive backend API system for financial tracking. Includes user authentication, transaction APIs, data persistence with MySQL/MongoDB, and automatic API documentation. Ready to plug into any financial dashboard frontend.",
    images: [
      "/project-screenshots/neofinance.png"
    ],
    price: {
      frontend: 0,
      backend: 95000,
      full: 95000
    },
    tags: ["GoFiber", "MySQL", "API Docs"],
    demoUrl: "https://neofinance.vercel.app/api-docs",
    liveDemo: true
  },
  {
    id: "phpspa-client",
    name: "PhpSPA Client Showcase",
    tagline: "Demonstrates the power of PhpSPA Framework with reactive state, client-side routing, and virtual DOM diffing.",
    description: "A showcase application built entirely with PhpSPA Framework - a component-based PHP library inspired by React. Features reactive state management, client-side routing, virtual DOM diffing, and performance-first rendering. Great starting point for your next PHP SPA project.",
    images: [
      "/project-screenshots/phpspa-client.png"
    ],
    price: {
      frontend: 45000,
      backend: 50000,
      full: 75000
    },
    tags: ["PhpSPA", "PHP", "Virtual DOM", "Reactive State"],
    demoUrl: "https://phpspa-client.onrender.com",
    liveDemo: true
  },
  {
    id: "pipgalaxy-platform",
    name: "PipGalaxy Market Insights",
    tagline: "Trading and market analysis platform with real-time data visualization and trading utilities.",
    description: "A market insights and trading utility platform. Features forex/crypto market data visualization, trading tools, real-time price feeds, and analytics dashboards. Ideal for fintech, trading platforms, or financial services.",
    images: [
      "/project-screenshots/pipgalaxy.png"
    ],
    price: {
      frontend: 70000,
      backend: 100000,
      full: 145000
    },
    tags: ["React", "Trading APIs", "Data Visualization"],
    demoUrl: "https://pipgalaxy.free.nf",
    liveDemo: true
  },
  {
    id: "skyshow-app",
    name: "SkyShow Entertainment App",
    tagline: "Entertainment streaming platform with content management, user profiles, and media playback.",
    description: "An entertainment application featuring content browsing, user profiles, media playback functionality, and content management capabilities. Designed for streaming services, media platforms, or entertainment brands.",
    images: [
      "/project-screenshots/skyshow.png"
    ],
    price: {
      frontend: 80000,
      backend: 110000,
      full: 160000
    },
    tags: ["React", "Node.js", "Media APIs"],
    demoUrl: "https://skyshow-app.vercel.app",
    liveDemo: true
  }
];
