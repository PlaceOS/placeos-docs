#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Migrating to multi-documentation structure...');

// 1. Create new placeos directory structure
const srcDir = 'src/content/docs';
const placeosDir = path.join(srcDir, 'placeos');

if (!fs.existsSync(placeosDir)) {
    fs.mkdirSync(placeosDir, { recursive: true });
    console.log('✅ Created placeos directory');
}

// 2. Move existing content to placeos subdirectory
const itemsToMove = ['overview', 'tutorials', 'how-to', 'reference', 'SUMMARY.md'];

itemsToMove.forEach(item => {
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(placeosDir, item);

    if (fs.existsSync(srcPath)) {
        console.log(`📦 Moving ${item} to placeos/${item}`);
        fs.renameSync(srcPath, destPath);
    }
});

// 3. Create placeos index page
const placeosIndexContent = `---
title: PlaceOS Documentation
description: Complete documentation for the PlaceOS platform
---

# PlaceOS Documentation

Welcome to the PlaceOS documentation! This comprehensive guide covers everything you need to know about deploying, configuring, and using the PlaceOS platform.

## Getting Started

- **[Overview](/placeos/overview/)** - Understanding PlaceOS architecture and core concepts
- **[Tutorials](/placeos/tutorials/)** - Step-by-step learning guides
- **[How-To Guides](/placeos/how-to/)** - Task-oriented instructions
- **[Reference](/placeos/reference/)** - API documentation and technical specifications

## Quick Links

- [System Requirements](/placeos/reference/system-requirements)
- [API Reference](/placeos/reference/api)
- [Driver Documentation](/placeos/reference/drivers)
- [Security & Compliance](/placeos/reference/security-compliance)

---

Need help? Check our [support resources](https://support.place.technology) or [contact our team](mailto:support@placeos.com).
`;

fs.writeFileSync(path.join(placeosDir, 'index.md'), placeosIndexContent);
console.log('✅ Created PlaceOS documentation index');

// 4. Create new main index page
const mainIndexContent = `---
title: PlaceOS Documentation Hub
description: Access all PlaceOS product documentation from one central location
---

# PlaceOS Documentation Hub

Welcome to the central hub for all PlaceOS product documentation. Select the documentation set you need:

## Available Documentation

### [PlaceOS Platform](/placeos/)
Complete documentation for the core PlaceOS platform including deployment, configuration, APIs, and integrations.

**Topics covered:**
- Platform overview and architecture
- Installation and deployment guides
- API reference and driver documentation
- How-to guides for common configurations
- Security and compliance information

---

### PlaceOS Workmate *(Coming Soon)*
Documentation for PlaceOS Workmate - the employee experience and workplace management solution.

---

### PlaceOS Concierge *(Coming Soon)*
Documentation for PlaceOS Concierge - the visitor management and building services platform.

---

### PlaceOS Analytics *(Coming Soon)*
Documentation for PlaceOS Analytics - workplace insights and reporting dashboards.

---

## Support Resources

- 📧 **Support Email:** [support@placeos.com](mailto:support@placeos.com)
- 🌐 **Support Portal:** [support.place.technology](https://support.place.technology)
- 💬 **Community Forum:** [community.placeos.com](https://community.placeos.com)
- 📞 **Emergency Support:** Available 24/7 for critical issues

## Contributing

Interested in contributing to our documentation? Check out our [contributing guidelines](https://github.com/PlaceOS/placeos-docs/blob/main/CONTRIBUTING.md).
`;

fs.writeFileSync(path.join(srcDir, 'index.md'), mainIndexContent);
console.log('✅ Created main documentation hub index');

console.log('🎉 Migration complete! Next steps:');
console.log('1. Update astro.config.mjs with new sidebar configuration');
console.log('2. Test the site with npm run dev');
console.log('3. Commit the changes');
