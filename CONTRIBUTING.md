# Contributing to PlaceOS Documentation

Thank you for contributing to the PlaceOS documentation! This guide will help you add new content using our simplified workflow.

## Quick Start: Adding New Content

Adding new documentation is now simple and automatic:

1. **Create your markdown file** in the appropriate directory
2. **Add required frontmatter** with title and description
3. **Navigation updates automatically** - no manual configuration needed!

## Adding New Content

### 1. Choose Your Directory

Choose the appropriate directory for your documentation:

**PlaceOS Platform (`src/content/docs/placeos/`):**
- **Overview**: Core concepts, languages, protocols
- **Tutorials**: Step-by-step learning guides  
- **How-To Guides**: Task-oriented instructions
- **Reference**: API docs, drivers, compliance

**PlaceOS Workmate (`src/content/docs/workmate/`):**
- **Onboarding**: Getting started guides
- **Mobile App**: Mobile application documentation
- **Web App**: Web application documentation
- **Concierge**: Concierge application documentation

**PlaceOS Digital Signage (`src/content/docs/signage/`):**
- Digital signage setup and configuration

### 2. Create Your Markdown File

Create a new `.md` file in your chosen directory with a descriptive filename (e.g., `configure-oauth.md`).

### 3. Add Required Frontmatter

Every markdown file must have frontmatter with a title:

```markdown
---
title: Your Page Title
description: Optional description of the page
---

# Your Page Title

Content goes here...
```

### 4. That's It! 

Your new page will automatically appear in the navigation sidebar. The system will:
- ✅ **Generate navigation** from your directory structure
- ✅ **Use your frontmatter title** as the navigation label
- ✅ **Organize pages** alphabetically within sections
- ✅ **Apply proper styling** and responsive design

## Customizing Navigation (Optional)

If you need to customize how a directory appears in the navigation, create a `_meta.yml` file in that directory:

```yaml
# Example: src/content/docs/placeos/how-to/authentication/_meta.yml
label: Authentication
collapsed: true
order: 2
```

**Available options:**
- `label`: Custom display name for the section
- `collapsed`: Whether section starts collapsed (true/false)
- `order`: Position in navigation (lower numbers appear first)
- `sort`: Sorting method (`alphabetical` or `reverse-slug`)
- `hidden`: Hide section from navigation (true/false)

## Directory Structure

```
src/content/docs/
├── index.mdx          # Documentation hub landing page
├── placeos/           # PlaceOS Platform documentation
│   ├── overview/      # Core concepts, languages, protocols
│   ├── tutorials/     # Step-by-step learning guides
│   ├── how-to/        # Task-oriented guides
│   └── reference/     # API docs, driver docs, system info
├── workmate/          # PlaceOS Workmate documentation
│   ├── onboarding/    # Getting started guides
│   ├── mobile-app/    # Mobile app documentation
│   ├── web-app/       # Web app documentation
│   └── concierge/     # Concierge app documentation
└── signage/           # PlaceOS Digital Signage documentation
```

## Style Guidelines

### Frontmatter
- ✅ **Required**: `title` field
- ✅ **Optional**: `description` field
- ✅ **Use proper capitalization** in titles

### Navigation
- ✅ **Automatic generation**: Navigation is created from directory structure
- ✅ **Proper capitalization**: Use `_meta.yml` files for custom labels
- ✅ **Descriptive filenames**: Use clear, descriptive file names

### Content
- ✅ **No README.md files** - Use index.md instead
- ✅ **Replace broken images** with `<!-- TODO: Add screenshot -->`
- ✅ **Link to related content** using relative paths

## Examples

### Adding a New How-To Guide
1. Create: `src/content/docs/placeos/how-to/authentication/configure-ldap.md`
2. Add frontmatter:
```markdown
---
title: Configure LDAP Authentication
description: Set up LDAP authentication for PlaceOS
---
```
3. The page automatically appears under "Authentication" in the How-To Guides section

### Creating a New Section
1. Create directory: `src/content/docs/placeos/how-to/integrations/`
2. Add `_meta.yml` for custom labeling:
```yaml
label: Integrations
collapsed: true
order: 5
```
3. Add content files to the directory - they'll appear automatically

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

### Navigation Not Appearing
**Solution**: Check that your file has proper frontmatter with a `title` field

### Section Label Issues
**Solution**: Create a `_meta.yml` file in the directory with a proper `label` field

## Need Help?

- 📖 **Check existing files** for examples
- 🔍 **Look at `_meta.yml` files** in similar directories for patterns
- 📂 **Follow the directory structure** shown above

## Migration from Old Process

**Previous workflow using `npm run add-content` is no longer needed!**

The new process is much simpler:
1. ~~Run helper script~~ → **Just create your markdown file**
2. ~~Update astro.config.mjs~~ → **Navigation updates automatically**
3. ~~Manual navigation configuration~~ → **Use `_meta.yml` for customization**

This streamlined approach makes contributing faster and reduces the chance of configuration errors.