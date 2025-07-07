# Contributing to PlaceOS Documentation

Thank you for contributing to the PlaceOS documentation! This guide will help you add new content and maintain the navigation structure.

## Quick Start: Adding New Content

We've created a helper script to make adding new documentation easier:

```bash
npm run add-content
```

This interactive script will:
1. Guide you through choosing the right section
2. Create the markdown file with proper frontmatter
3. Provide instructions for updating the navigation

## Manual Process

If you prefer to add content manually, follow these steps:

### 1. Choose Documentation Set and Create the Markdown File

First choose which documentation set you're adding to:
- **PlaceOS Platform**: `src/content/docs/placeos/`
- **PlaceOS Workmate**: `src/content/docs/workmate/`

Then create your file in the appropriate directory:

**PlaceOS Platform:**
- **Overview**: `src/content/docs/placeos/overview/`
- **Tutorials**: `src/content/docs/placeos/tutorials/`
- **How-To Guides**: `src/content/docs/placeos/how-to/`
- **Reference**: `src/content/docs/placeos/reference/`

**PlaceOS Workmate:**
- **Getting Started**: `src/content/docs/workmate/getting-started/`
- **User Guide**: `src/content/docs/workmate/user-guide/`
- **Administration**: `src/content/docs/workmate/administration/`

### 2. Add Frontmatter

Every markdown file must have frontmatter with a title:

```markdown
---
title: Your Page Title
description: Optional description of the page
---

# Your Page Title

Content goes here...
```

### 3. Update Navigation

Add your page to the sidebar in `astro.config.mjs`:

#### For Auto-Generated Sections
If adding to a section that uses `autogenerate`, your file will appear automatically.

#### For Manual Sections
Add an entry like this:
```javascript
{ label: 'Your Page Title', slug: 'docset/section/subsection/filename' },
```

Examples:
```javascript
// PlaceOS Platform
{ label: 'Custom Driver Guide', slug: 'placeos/tutorials/backend/custom-driver' },

// Workmate
{ label: 'User Permissions', slug: 'workmate/administration/user-permissions' },
```

## Directory Structure

```
src/content/docs/
├── index.mdx          # Documentation hub landing page
├── placeos/           # PlaceOS Platform documentation
│   ├── overview/      # Core concepts, languages, protocols
│   ├── tutorials/     # Step-by-step learning guides
│   ├── how-to/        # Task-oriented guides
│   └── reference/     # API docs, driver docs, system info
└── workmate/          # PlaceOS Workmate documentation
    ├── getting-started/
    ├── user-guide/
    └── administration/
```

## Style Guidelines

### Frontmatter
- ✅ **Required**: `title` field
- ✅ **Optional**: `description` field
- ✅ **Use proper capitalization** in titles

### Navigation
- ✅ **Use collapsed sections**: Add `collapsed: true`
- ✅ **Proper capitalization**: "Analytics" not "analytics"
- ✅ **Descriptive labels**: "Configure OAuth2 SSO" not "oauth2-sso"

### Content
- ✅ **No README.md files** - Use index.md instead
- ✅ **Replace broken images** with `<!-- TODO: Add screenshot -->`
- ✅ **Link to related content** using relative paths

## Navigation Examples

### Adding to Auto-Generated Section
```javascript
{
  label: 'Authentication',
  collapsed: true,
  autogenerate: { directory: 'how-to/authentication' },
},
```

### Adding Manual Items
```javascript
{
  label: 'API Reference',
  collapsed: true,
  items: [
    { label: 'Overview', slug: 'reference/api' },
    { label: 'WebSocket API', slug: 'reference/api/websocket' },
  ],
},
```

## Testing Your Changes

1. **Start dev server**: `npm run dev`
2. **Check navigation**: Ensure your page appears in the sidebar
3. **Test links**: Verify all internal links work
4. **Build test**: Run `npm run build` to check for errors

## Common Issues

### Missing Title Error
```
title**: **title: Required
```
**Solution**: Add `title:` field to your frontmatter

### Broken Images
**Solution**: Replace with `<!-- TODO: Add screenshot -->`

### Navigation Not Updating
**Solution**: Check file path matches the slug in astro.config.mjs

## Need Help?

- 🛠️ **Use the helper script**: `npm run add-content`
- 📖 **Check existing files** for examples
- 🔍 **Search astro.config.mjs** for similar patterns

## Script Usage Examples

### Adding a New PlaceOS How-To Guide
```bash
npm run add-content
# Choose: placeos
# Choose: how-to
# Choose: authentication
# Title: Configure LDAP Authentication
# Description: Set up LDAP authentication for PlaceOS
# Filename: configure-ldap
```

### Adding a New Workmate User Guide
```bash
npm run add-content
# Choose: workmate
# Choose: user-guide
# Choose: booking
# Title: Advanced Booking Features
# Description: Using advanced booking options in Workmate
# Filename: advanced-booking
```

### Adding a New Documentation Section
```bash
npm run add-content
# Choose: workmate
# Choose: new
# New section name: mobile-app
# New section label: Mobile App
# Choose: new
# New subsection: setup
# Title: Getting Started with Mobile App
# Filename: getting-started
```

### Adding a New Subsection
```bash
npm run add-content
# Choose: workmate
# Choose: administration  
# Choose: new
# New subsection: reporting
# Title: Custom Reports
# Filename: custom-reports
```

This creates the file and shows you exactly where to add the navigation entry!