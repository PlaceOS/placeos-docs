// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PlaceOS Documentation Hub',
			logo: {
				light: './public/logo_light.png',
				dark: './public/logo.png',
				alt: 'PlaceOS Logo',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/placeos' }],
			sidebar: [
				{ label: 'Documentation Hub', slug: '' },
				{
					label: 'PlaceOS Platform',
					collapsed: true,
					items: [
						{ label: 'PlaceOS Home', slug: 'placeos' },
						{ label: 'Table of Contents', slug: 'placeos/summary' },
						{
							label: 'Overview',
							collapsed: true,
							items: [
								{ label: 'Introduction', slug: 'placeos/overview' },
								{
									label: 'Key Concepts',
									collapsed: true,
									autogenerate: { directory: 'placeos/overview/key-concepts' },
								},
								{
									label: 'Languages',
									collapsed: true,
									autogenerate: { directory: 'placeos/overview/Languages' },
								},
								{
									label: 'Protocols',
									collapsed: true,
									autogenerate: { directory: 'placeos/overview/Protocols' },
								},
							],
						},
						{
							label: 'Tutorials',
							collapsed: true,
							items: [
								{ label: 'Introduction', slug: 'placeos/tutorials' },
								{ label: 'Setup Development Environment', slug: 'placeos/tutorials/setup-a-dev-environment' },
								{
									label: 'Backend Development',
									collapsed: true,
									autogenerate: { directory: 'placeos/tutorials/backend' },
								},
								{
									label: 'Backoffice Configuration',
									collapsed: true,
									autogenerate: { directory: 'placeos/tutorials/backoffice' },
								},
								{
									label: 'Common Configurations',
									collapsed: true,
									autogenerate: { directory: 'placeos/tutorials/common-configurations' },
								},
							],
						},
						{
							label: 'How-To Guides',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'placeos/how-to' },
								{
									label: 'Analytics',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/Analytics' },
								},
								{
									label: 'Authentication',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/authentication' },
								},
								{
									label: 'Backoffice',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/backoffice' },
								},
								{
									label: 'Google Workspace',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/configure-placeos-for-google-workspace' },
								},
								{
									label: 'Microsoft 365',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/configure-placeos-for-microsoft-365' },
								},
								{
									label: 'Microsoft 365 Delegated',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/configure-placeos-for-microsoft-365-delegated' },
								},
								{
									label: 'Deployment',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/deployment' },
								},
								{
									label: 'Location Services',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/location-services' },
								},
								{
									label: 'Notifications',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/notifications' },
								},
								{
									label: 'User Interfaces',
									collapsed: true,
									autogenerate: { directory: 'placeos/how-to/user-interfaces' },
								},
							],
						},
						{
							label: 'Reference',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'placeos/reference' },
								{
									label: 'API Reference',
									collapsed: true,
									items: [
										{ label: 'Overview', slug: 'placeos/reference/api' },
										{ label: 'WebSocket API', slug: 'placeos/reference/api/websocket' },
									],
								},
								{
									label: 'Driver Documentation',
									collapsed: true,
									autogenerate: { directory: 'placeos/reference/drivers' },
								},
								{
									label: 'Security & Compliance',
									collapsed: true,
									autogenerate: { directory: 'placeos/reference/security-compliance' },
								},
								{
									label: 'System Documentation',
									collapsed: true,
									items: [
										{ label: 'Microsoft Azure Permissions', slug: 'placeos/reference/microsoft-azure-permissions' },
										{ label: 'PlaceOS Skills', slug: 'placeos/reference/placeos-skills' },
										{ label: 'Privacy Policy', slug: 'placeos/reference/privacy-policy' },
										{ label: 'Recommended Products', slug: 'placeos/reference/recommended-products' },
										{ label: 'Supported Integrations', slug: 'placeos/reference/supported-integrations' },
										{ label: 'System Architecture', slug: 'placeos/reference/system-architecture' },
										{ label: 'System Functionality', slug: 'placeos/reference/system-functionality' },
										{ label: 'System Requirements', slug: 'placeos/reference/system-requirements' },
									],
								},
								{ label: 'Glossary', slug: 'placeos/reference/glossary' },
							],
						},
					],
				},
				{
					label: 'PlaceOS Workmate',
					collapsed: true,
					items: [
						{ label: 'Workmate Home', slug: 'workmate' },
						{
							label: 'Onboarding',
							collapsed: true,
							autogenerate: { directory: 'workmate/onboarding' },
						},
						{
							label: 'Mobile App',
							collapsed: true,
							autogenerate: { directory: 'workmate/mobile-app' },
						},
						{
							label: 'Web App',
							collapsed: true,
							autogenerate: { directory: 'workmate/web-app' },
						},
						{
							label: 'Concierge App',
							collapsed: true,
							autogenerate: { directory: 'workmate/concierge' },
						},
					],
				},
				{
					label: 'PlaceOS Digital Signage',
					collapsed: true,
					autogenerate: { directory: 'signage' },
					// items: [
					// 	{ label: 'Signage Home', slug: 'signage' },
					// ],
				},
			],
		}),
	],
});
