// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PlaceOS Docs',
			logo: {
				src: './public/logo.png',
				alt: 'PlaceOS Logo',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/placeos' }],
			sidebar: [
				{ label: 'Table of Contents', slug: 'summary' },
				{
					label: 'Overview',
					items: [
						{ label: 'Introduction', slug: 'overview' },
						{
							label: 'Key Concepts',
							collapsed: true,
							autogenerate: { directory: 'overview/key-concepts' },
						},
						{
							label: 'Languages',
							collapsed: true,
							autogenerate: { directory: 'overview/Languages' },
						},
						{
							label: 'Protocols',
							collapsed: true,
							autogenerate: { directory: 'overview/Protocols' },
						},
					],
				},
				{
					label: 'Tutorials',
					items: [
						{ label: 'Introduction', slug: 'tutorials' },
						{ label: 'Setup Development Environment', slug: 'tutorials/setup-a-dev-environment' },
						{
							label: 'Backend Development',
							collapsed: true,
							autogenerate: { directory: 'tutorials/backend' },
						},
						{
							label: 'Backoffice Configuration',
							collapsed: true,
							autogenerate: { directory: 'tutorials/backoffice' },
						},
						{
							label: 'Common Configurations',
							collapsed: true,
							autogenerate: { directory: 'tutorials/common-configurations' },
						},
					],
				},
				{
					label: 'How-To Guides',
					items: [
						{ label: 'Overview', slug: 'how-to' },
						{
							label: 'Analytics',
							collapsed: true,
							autogenerate: { directory: 'how-to/Analytics' },
						},
						{
							label: 'Authentication',
							collapsed: true,
							autogenerate: { directory: 'how-to/authentication' },
						},
						{
							label: 'Backoffice',
							collapsed: true,
							autogenerate: { directory: 'how-to/backoffice' },
						},
						{
							label: 'Google Workspace',
							collapsed: true,
							autogenerate: { directory: 'how-to/configure-placeos-for-google-workspace' },
						},
						{
							label: 'Microsoft 365',
							collapsed: true,
							autogenerate: { directory: 'how-to/configure-placeos-for-microsoft-365' },
						},
						{
							label: 'Microsoft 365 Delegated',
							collapsed: true,
							autogenerate: { directory: 'how-to/configure-placeos-for-microsoft-365-delegated' },
						},
						{
							label: 'Deployment',
							collapsed: true,
							autogenerate: { directory: 'how-to/deployment' },
						},
						{
							label: 'Location Services',
							collapsed: true,
							autogenerate: { directory: 'how-to/location-services' },
						},
						{
							label: 'Notifications',
							collapsed: true,
							autogenerate: { directory: 'how-to/notifications' },
						},
						{
							label: 'User Interfaces',
							collapsed: true,
							autogenerate: { directory: 'how-to/user-interfaces' },
						},
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Overview', slug: 'reference' },
						{
							label: 'API Reference',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'reference/api' },
								{ label: 'WebSocket API', slug: 'reference/api/websocket' },
							],
						},
						{
							label: 'Driver Documentation',
							collapsed: true,
							autogenerate: { directory: 'reference/drivers' },
						},
						{
							label: 'Security & Compliance',
							collapsed: true,
							autogenerate: { directory: 'reference/security-compliance' },
						},
						{
							label: 'System Documentation',
							collapsed: true,
							items: [
								{ label: 'Microsoft Azure Permissions', slug: 'reference/microsoft-azure-permissions' },
								{ label: 'PlaceOS Skills', slug: 'reference/placeos-skills' },
								{ label: 'Privacy Policy', slug: 'reference/privacy-policy' },
								{ label: 'Recommended Products', slug: 'reference/recommended-products' },
								{ label: 'Supported Integrations', slug: 'reference/supported-integrations' },
								{ label: 'System Architecture', slug: 'reference/system-architecture' },
								{ label: 'System Functionality', slug: 'reference/system-functionality' },
								{ label: 'System Requirements', slug: 'reference/system-requirements' },
							],
						},
						{ label: 'Glossary', slug: 'reference/glossary' },
					],
				},
			],
		}),
	],
});
