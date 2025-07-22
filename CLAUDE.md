# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation website for PlaceOS built with Astro Starlight. It serves as a centralized documentation hub for multiple PlaceOS products: Platform, Workmate, and Digital Signage.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview build locally |
| `npm run add-content` | Interactive helper to add new documentation |

## Architecture

### Technology Stack
- **Astro + Starlight**: Static site generator optimized for documentation
- **Multi-documentation structure**: Separate navigation trees for each product
- **File-based routing**: Content organized in `/src/content/docs/`
- **Automatic deployment**: Netlify builds from main branch

### Content Organization
```
src/content/docs/
├── index.mdx           # Hub landing page with navigation cards
├── placeos/            # PlaceOS Platform docs
│   ├── overview/       # Architecture, concepts, protocols
│   ├── tutorials/      # Step-by-step guides
│   ├── how-to/         # Task-oriented instructions
│   └── reference/      # API docs, drivers, compliance
├── workmate/           # Employee experience app docs
└── signage/            # Digital signage docs
```

### Navigation Configuration
- Navigation is automatically generated from directory structure using starlight-auto-sidebar plugin
- Simple autogenerate configuration in `astro.config.mjs` for each documentation set
- Customization handled through `_meta.yml` files in individual directories

## Content Management

### Adding New Documentation
**Simplified Workflow with Auto Sidebar:**
1. Create .md/.mdx file in appropriate directory
2. Add required frontmatter
3. Optionally create/update `_meta.yml` for section customization
4. Navigation updates automatically

### Required Frontmatter
```markdown
---
title: Page Title
description: Optional description
---
```

### Navigation Customization
Navigation is now managed through `_meta.yml` files in directories:

```yaml
# Example _meta.yml
label: Section Name
collapsed: true
order: 1
sort: alphabetical
```

**Available _meta.yml options:**
- `label`: Display name for the section
- `collapsed`: Whether section is collapsed by default
- `order`: Position in navigation (lower numbers appear first)
- `sort`: Sorting method (`alphabetical` or `reverse-slug`)
- `hidden`: Hide from navigation
- `depth`: Limit nested content levels
- `cascade`: Apply properties to nested directories

### Auto Sidebar Benefits
- **No manual astro.config.mjs updates** required for new content
- **File-based navigation**: Structure follows directory organization
- **Local configuration**: Each directory can be customized independently
- **Contributor-friendly**: No complex navigation management

## File Conventions

- **No README.md files**: Use index.md instead
- **Markdown files**: Standard .md or .mdx for enhanced content
- **Images**: Place in `/public/` directory, reference with absolute paths
- **Internal links**: Use relative paths between documentation pages
- **_meta.yml files**: Optional metadata for directory customization

## Deployment

- **Platform**: Netlify
- **Build**: Automatic on push to main branch
- **Configuration**: netlify.toml specifies build command and publish directory
- **Live URL**: https://placeosdocs.netlify.app