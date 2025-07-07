#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

const DOCUMENTATION_SETS = {
  'placeos': 'PlaceOS Platform',
  'workmate': 'PlaceOS Workmate'
};

const SECTIONS = {
  placeos: {
    'overview': 'Overview',
    'tutorials': 'Tutorials', 
    'how-to': 'How-To Guides',
    'reference': 'Reference'
  },
  workmate: {
    'getting-started': 'Getting Started',
    'user-guide': 'User Guide',
    'administration': 'Administration'
  }
};

const SUBSECTIONS = {
  placeos: {
    overview: ['key-concepts', 'Languages', 'Protocols'],
    tutorials: ['backend', 'backoffice', 'common-configurations'],
    'how-to': ['Analytics', 'authentication', 'backoffice', 'configure-placeos-for-google-workspace', 'configure-placeos-for-microsoft-365', 'configure-placeos-for-microsoft-365-delegated', 'deployment', 'location-services', 'notifications', 'user-interfaces'],
    reference: ['api', 'drivers', 'security-compliance']
  },
  workmate: {
    'getting-started': ['setup', 'quick-start'],
    'user-guide': ['booking', 'services', 'navigation'],
    'administration': ['configuration', 'management', 'integration']
  }
};

async function main() {
  console.log('🚀 PlaceOS Multi-Documentation Navigation Helper');
  console.log('This script helps you add new content to the navigation tree.\n');

  try {
    // Step 1: Choose documentation set
    console.log('Available documentation sets:');
    Object.entries(DOCUMENTATION_SETS).forEach(([key, label]) => {
      console.log(`  ${key} - ${label}`);
    });
    
    const docSet = await question('\nWhich documentation set are you adding to? ');
    
    if (!DOCUMENTATION_SETS[docSet]) {
      console.log('❌ Invalid documentation set. Please run the script again.');
      process.exit(1);
    }

    // Step 2: Choose section
    console.log(`\nAvailable sections in ${DOCUMENTATION_SETS[docSet]}:`);
    Object.entries(SECTIONS[docSet]).forEach(([key, label]) => {
      console.log(`  ${key} - ${label}`);
    });
    console.log('  new - Create a new section');
    
    const section = await question('\nWhich section are you adding to (or "new" to create)? ');
    
    let actualSection = section;
    let sectionLabel = '';
    
    if (section === 'new') {
      actualSection = await question('New section name (kebab-case, e.g., mobile-app): ');
      sectionLabel = await question('New section label (e.g., Mobile App): ');
      console.log(`\n📝 Note: You'll need to add this new section to astro.config.mjs manually.`);
    } else if (!SECTIONS[docSet][section]) {
      console.log('❌ Invalid section. Please run the script again.');
      process.exit(1);
    } else {
      sectionLabel = SECTIONS[docSet][section];
    }

    // Step 3: Choose subsection or create new
    if (section === 'new') {
      console.log(`\nCreating new section "${actualSection}" - no existing subsections.`);
    } else {
      console.log(`\nAvailable subsections in ${sectionLabel}:`);
      SUBSECTIONS[docSet][actualSection]?.forEach(sub => console.log(`  ${sub}`));
    }
    
    const subsection = await question('\nEnter subsection (or type "new" to create): ');
    
    // Step 4: Get file details
    const title = await question('Page title: ');
    const description = await question('Page description (optional): ');
    const filename = await question('Filename (without .md): ');
    
    // Step 5: Determine file path
    let filePath, slug;
    if (subsection === 'new') {
      const newSubsection = await question('New subsection name: ');
      filePath = `src/content/docs/${docSet}/${actualSection}/${newSubsection}/${filename}.md`;
      slug = `${docSet}/${actualSection}/${newSubsection}/${filename}`;
    } else {
      filePath = `src/content/docs/${docSet}/${actualSection}/${subsection}/${filename}.md`;
      slug = `${docSet}/${actualSection}/${subsection}/${filename}`;
    }

    // Step 6: Create the file
    await createMarkdownFile(filePath, title, description);
    
    // Step 7: Show navigation instructions
    showNavigationInstructions(docSet, actualSection, sectionLabel, subsection, title, slug, section === 'new');
    
    console.log(`\n✅ Created: ${filePath}`);
    console.log('📝 Follow the navigation instructions above to update the sidebar.');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

async function createMarkdownFile(filePath, title, description) {
  const dir = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create frontmatter
  let frontmatter = `---\ntitle: ${title}\n`;
  if (description) {
    frontmatter += `description: ${description}\n`;
  }
  frontmatter += `---\n\n`;
  
  // Create content
  const content = `${frontmatter}# ${title}\n\n<!-- TODO: Add content here -->\n`;
  
  fs.writeFileSync(filePath, content);
}

function showNavigationInstructions(docSet, section, sectionLabel, subsection, title, slug, isNewSection) {
  console.log('\n📋 Navigation Update Instructions:');
  console.log('Add this to astro.config.mjs in the appropriate section:\n');
  
  console.log(`🎯 Find the "${DOCUMENTATION_SETS[docSet]}" section in the sidebar array`);
  
  if (isNewSection) {
    console.log(`\n🆕 First, add the new section to the "${DOCUMENTATION_SETS[docSet]}" items array:`);
    if (subsection === 'new') {
      const newSubsection = subsection; // This will be the actual subsection name from user input
      console.log(`{
  label: '${sectionLabel}',
  collapsed: true,
  items: [
    { label: '${sectionLabel} Home', slug: '${docSet}/${section}' },
    {
      label: '${newSubsection}',
      collapsed: true,
      autogenerate: { directory: '${docSet}/${section}/${newSubsection}' },
    },
  ],
},`);
    } else {
      console.log(`{
  label: '${sectionLabel}',
  collapsed: true,
  items: [
    { label: '${sectionLabel} Home', slug: '${docSet}/${section}' },
    {
      label: '${subsection}',
      collapsed: true,
      autogenerate: { directory: '${docSet}/${section}/${subsection}' },
    },
  ],
},`);
    }
    
    console.log(`\n📝 Also create an index file for the new section at:`);
    console.log(`src/content/docs/${docSet}/${section}/index.md`);
    
  } else {
    if (subsection === 'new') {
      console.log(`\n// Add new subsection to ${sectionLabel}:`);
      console.log(`{
  label: '${subsection}',
  collapsed: true,
  autogenerate: { directory: '${docSet}/${section}/${subsection}' },
},`);
    } else {
      console.log(`\n// Add to existing ${subsection} subsection in ${sectionLabel}:`);
      console.log(`{ label: '${title}', slug: '${slug}' },`);
    }
  }
  
  console.log('\n🔍 Navigation structure:');
  console.log(`sidebar: [
  { label: 'Documentation Hub', slug: '' },
  {
    label: '${DOCUMENTATION_SETS[docSet]}',
    collapsed: true,
    items: [
      // Your new content goes here
    ]
  }
]`);
  
  console.log('\n💡 Tips:');
  console.log('- The sidebar is organized by documentation set (PlaceOS Platform, Workmate, etc.)');
  console.log('- Each section is collapsed by default');
  console.log('- Use autogenerate for directories with multiple files');
  console.log('- Manual entries work well for specific important pages');
  if (isNewSection) {
    console.log('- Remember to create an index.md file for your new section');
    console.log('- Update the SECTIONS object in this script for future use');
  }
}

main();