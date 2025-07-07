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

### 1. Create the Markdown File

Create your file in the appropriate directory:
- **Overview**: `src/content/docs/overview/`
- **Tutorials**: `src/content/docs/tutorials/`
- **How-To Guides**: `src/content/docs/how-to/`
- **Reference**: `src/content/docs/reference/`

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
{ label: 'Your Page Title', slug: 'section/subsection/filename' },
```

## Directory Structure

```
src/content/docs/
├── overview/           # Core concepts, languages, protocols
├── tutorials/          # Step-by-step learning guides
├── how-to/            # Task-oriented guides
└── reference/         # API docs, driver docs, system info
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

### Adding a New How-To Guide
```bash
npm run add-content
# Choose: how-to
# Choose: authentication
# Title: Configure LDAP Authentication
# Description: Set up LDAP authentication for PlaceOS
# Filename: configure-ldap
```

### Adding a New Tutorial Section
```bash
npm run add-content
# Choose: tutorials  
# Choose: new
# New subsection: frontend
# Title: Building Custom Interfaces
# Filename: custom-interfaces
```

This creates the file and shows you exactly where to add the navigation entry!