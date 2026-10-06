import { Helmet } from 'react-helmet-async'

const SITE = 'https://dconco.tech'
const DEFAULT_IMAGE = `${SITE}/cover.png`
const AUTHOR = 'Dave Conco'

export type SeoProps = {
	title: string
	description: string
	path: string
	image?: string
	keywords?: string
	type?: 'website' | 'article' | 'profile'
}

// Per-page head tags. Rendered into <head> on route change so each page
// carries its own title, description, canonical, Open Graph and Twitter tags.
export default function Seo({ title, description, path, image, keywords, type = 'website' }: SeoProps) {
	const url = `${SITE}${path}`
	const img = image ?? DEFAULT_IMAGE
	const fullTitle = title.includes('Dave Conco') ? title : `${title} | Dave Conco`

	return (
		<Helmet prioritizeSeoTags>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			<meta name="author" content={AUTHOR} />
			<link rel="canonical" href={url} />

			<meta property="og:type" content={type} />
			<meta property="og:site_name" content="Dave Conco Portfolio" />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={img} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={img} />
		</Helmet>
	)
}

// Central summary of every page - edit copy here, it flows to the tags.
export const pageSeo = {
	overview: {
		title: 'Dave Conco | Full-Stack Engineer Portfolio',
		description:
			'Full-stack engineer building polished React frontends on robust backends. Explore shipped products, open-source frameworks, live coding stats and more.',
		path: '/',
		keywords: 'Dave Conco, dconco, full-stack engineer, React developer, TypeScript, Go, portfolio',
		type: 'profile' as const,
	},
	about: {
		title: 'About Dave Conco',
		description:
			'Who is Dave Conco - a full-stack engineer specialising in high-concurrency backends, low-latency APIs and real-time systems, with a stack spanning Go, PHP, React and TypeScript.',
		path: '/about',
		keywords: 'about Dave Conco, software engineer, high concurrency, real-time systems, PhpSPA author',
	},
	projects: {
		title: 'Projects by Dave Conco',
		description:
			'Selected engineering projects by Dave Conco - production web apps, developer tools and open-source frameworks across frontend, backend and infrastructure.',
		path: '/projects',
		keywords: 'Dave Conco projects, software projects, open source, web development portfolio',
	},
	tools: {
		title: 'Developer Tools',
		description:
			'Free developer tools built by Dave Conco - PhpSPA, class validators, schema migrators, file sharing and AI utilities, all open and ready to use.',
		path: '/tools',
		keywords: 'developer tools, PhpSPA, PHP tools, free dev tools, Dave Conco',
	},
	arcade: {
		title: 'Arcade - Coding Stats, Anime & Games',
		description:
			"Beyond the code: Dave Conco's live WakaTime coding stats, AI vs human coding breakdown, favourite anime and the mobile games he actually plays.",
		path: '/arcade',
		keywords: 'WakaTime stats, coding activity, favourite anime, mobile games, Play Games',
	},
	store: {
		title: 'Store',
		description:
			'Digital products, templates and developer resources by Dave Conco - buy ready-made tools and assets to speed up your own builds.',
		path: '/store',
		keywords: 'Dave Conco store, digital products, developer templates, code resources',
	},
	contact: {
		title: 'Contact Dave Conco',
		description:
			'Get in touch with Dave Conco for freelance work, collaborations or questions. Reach out by email or through the socials and start a conversation.',
		path: '/contact',
		keywords: 'contact Dave Conco, hire full-stack engineer, freelance developer',
	},
	uptime: {
		title: 'Service Uptime',
		description:
			"Live uptime and health status for Dave Conco's deployed services and APIs, monitored in real time.",
		path: '/uptime',
		keywords: 'uptime, service status, API health, monitoring',
	},
	privacy: {
		title: 'Privacy Policy',
		description: "Privacy policy for Dave Conco's website and services - what data is collected and how it is used.",
		path: '/privacy-policy',
	},
	terms: {
		title: 'Terms of Service',
		description: "Terms of service governing use of Dave Conco's website, tools and digital products.",
		path: '/terms-of-service',
	},
	refund: {
		title: 'Refund Policy',
		description: "Refund policy for digital products and services purchased from Dave Conco.",
		path: '/refund-policy',
	},
	developerAgreement: {
		title: 'Developer Client Agreement',
		description: "The developer-client agreement outlining engagement terms for custom work with Dave Conco.",
		path: '/developer-client-agreement',
	},
	phpspa: {
		title: 'PhpSPA - Build SPAs in PHP',
		description:
			'PhpSPA by Dave Conco - a PHP framework for building single-page applications with server-driven components, no heavy JavaScript build step required.',
		path: '/tools/phpspa',
		keywords: 'PhpSPA, PHP SPA framework, PHP single page application, Dave Conco',
	},
	warpshare: {
		title: 'WarpShare - Fast File Sharing',
		description: 'WarpShare by Dave Conco - share files quickly and securely with a simple link.',
		path: '/tools/warpshare',
		keywords: 'WarpShare, file sharing, send files, Dave Conco tools',
	},
	rutexai: {
		title: 'Rutex AI',
		description: 'Rutex AI by Dave Conco - an AI-powered developer utility.',
		path: '/tools/rutexai',
		keywords: 'Rutex AI, AI tool, developer AI, Dave Conco',
	},
	classValidator: {
		title: 'Class Validator',
		description: 'A class validation tool by Dave Conco for cleaner, safer object validation.',
		path: '/tools/class-validator',
		keywords: 'class validator, validation tool, Dave Conco',
	},
	phpSchemaMigrator: {
		title: 'PHP Schema Migrator',
		description: 'PHP Schema Migrator by Dave Conco - manage and migrate database schemas in PHP with ease.',
		path: '/tools/php-schema-migrator',
		keywords: 'PHP schema migrator, database migration, PHP tool, Dave Conco',
	},
} satisfies Record<string, SeoProps>
