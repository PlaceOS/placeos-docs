// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightAutoSidebar from 'starlight-auto-sidebar';

// https://astro.build/config
export default defineConfig({
	site: 'https://placeosdocs.netlify.app',
	integrations: [
		starlight({
			plugins: [starlightAutoSidebar()],
			title: 'PlaceOS Documentation Hub',
			logo: {
				light: './public/logo_light.png',
				dark: './public/logo.png',
				alt: 'PlaceOS Logo',
				replacesTitle: true,
			},
			favicon: '/favicon.png',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/placeos' }],
			sidebar: [
				{ label: 'Documentation Hub', slug: '' },
				{
					label: 'PlaceOS Platform',
					autogenerate: { directory: 'placeos' },
				},
				{
					label: 'PlaceOS Workmate', 
					autogenerate: { directory: 'workmate' },
				},
				{
					label: 'PlaceOS Digital Signage',
					autogenerate: { directory: 'signage' },
				},
			],
		}),
	],
});
