# PlaceOS Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Complete documentation hub for all PlaceOS products and services, built with Astro Starlight.

## 📚 Documentation Sets

This repository contains documentation for multiple PlaceOS products:

- **PlaceOS Platform** - Core platform documentation including deployment, APIs, and integrations
- **PlaceOS Workmate** - Employee experience and workplace management solution
- **PlaceOS Digital Signage** - Visual communication and display management solution

## 🚀 Project Structure

```
.
├── public/                    # Static assets (logos, images)
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx      # Documentation hub landing page
│   │       ├── placeos/       # PlaceOS Platform docs
│   │       ├── workmate/      # Workmate docs
│   │       └── signage/       # Digital Signage docs
│   └── content.config.ts
├── scripts/
│   └── add-to-nav.js         # Helper script for contributors
├── astro.config.mjs          # Site configuration
├── netlify.toml              # Deployment configuration
├── CONTRIBUTING.md           # Contributor guidelines
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## ✍️ Contributing

We welcome contributions to improve our documentation!

### Quick Start for Contributors

1. **Create your markdown file** in the appropriate directory:
   ```bash
   # Example: Add a new how-to guide
   touch src/content/docs/placeos/how-to/authentication/configure-ldap.md
   ```

2. **Add required frontmatter** with title and description:
   ```markdown
   ---
   title: Configure LDAP Authentication
   description: Set up LDAP authentication for PlaceOS
   ---
   ```

3. **Navigation updates automatically** - no configuration needed!

4. **Test your changes** locally:
   ```bash
   npm run dev
   ```

### Adding New Documentation

The simplified process:
- **Choose the right directory** (PlaceOS Platform, Workmate, Signage)
- **Create markdown files** with proper frontmatter
- **Navigation generates automatically** from directory structure
- **Use `_meta.yml` files** for custom section labels and ordering

## 🏗️ Architecture

This documentation site uses:

- **[Astro Starlight](https://starlight.astro.build/)** - Documentation framework
- **[Starlight Auto Sidebar](https://starlight-auto-sidebar.netlify.app/)** - Automatic navigation generation
- **Multi-documentation structure** - Separate navigation for each product
- **File-based routing** - Navigation generated from directory structure
- **_meta.yml customization** - Local configuration for sections and ordering
- **Responsive design** - Works on desktop, tablet, and mobile
- **Dark/light mode** - Theme switching with appropriate logos

## 🌐 Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch.

- **Build command**: `npm install && npm run build`
- **Publish directory**: `dist`
- **Live URL**: [PlaceOS Documentation](https://placeosdocs.netlify.app)

## 🔗 Links

- [PlaceOS Website](https://placeos.com)
- [Support Portal](https://support.place.technology)
- [GitHub Repository](https://github.com/PlaceOS/placeos-docs)
- [Starlight Documentation](https://starlight.astro.build/)

## 📄 License

This documentation is maintained by PlaceOS. For questions or support, contact [support@placeos.com](mailto:support@placeos.com).
