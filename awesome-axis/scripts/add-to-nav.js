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

const SECTIONS = {
  'overview': 'Overview',
  'tutorials': 'Tutorials', 
  'how-to': 'How-To Guides',
  'reference': 'Reference'
};

const SUBSECTIONS = {
  overview: ['key-concepts', 'Languages', 'Protocols'],
  tutorials: ['backend', 'backoffice', 'common-configurations'],
  'how-to': ['Analytics', 'authentication', 'backoffice', 'configure-placeos-for-google-workspace', 'configure-placeos-for-microsoft-365', 'configure-placeos-for-microsoft-365-delegated', 'deployment', 'location-services', 'notifications', 'user-interfaces'],
  reference: ['api', 'drivers', 'security-compliance']
};

async function main() {
  console.log('🚀 PlaceOS Documentation Navigation Helper');
  console.log('This script helps you add new content to the navigation tree.\n');

  try {
    // Step 1: Choose section
    console.log('Available sections:');
    Object.entries(SECTIONS).forEach(([key, label]) => {
      console.log(`  ${key} - ${label}`);
    });
    
    const section = await question('\nWhich section are you adding to? ');
    
    if (!SECTIONS[section]) {
      console.log('❌ Invalid section. Please run the script again.');
      process.exit(1);
    }

    // Step 2: Choose subsection or create new
    console.log(`\nAvailable subsections in ${SECTIONS[section]}:`);
    SUBSECTIONS[section]?.forEach(sub => console.log(`  ${sub}`));
    
    const subsection = await question('\nEnter subsection (or type "new" to create): ');
    
    // Step 3: Get file details
    const title = await question('Page title: ');
    const description = await question('Page description (optional): ');
    const filename = await question('Filename (without .md): ');
    
    // Step 4: Determine file path
    let filePath, slug;
    if (subsection === 'new') {
      const newSubsection = await question('New subsection name: ');
      filePath = `src/content/docs/${section}/${newSubsection}/${filename}.md`;
      slug = `${section}/${newSubsection}/${filename}`;
    } else {
      filePath = `src/content/docs/${section}/${subsection}/${filename}.md`;
      slug = `${section}/${subsection}/${filename}`;
    }

    // Step 5: Create the file
    await createMarkdownFile(filePath, title, description);
    
    // Step 6: Show navigation instructions
    showNavigationInstructions(section, subsection, title, slug);
    
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

function showNavigationInstructions(section, subsection, title, slug) {
  console.log('\n📋 Navigation Update Instructions:');
  console.log('Add this to astro.config.mjs in the appropriate section:\n');
  
  if (subsection === 'new') {
    console.log(`// Add new subsection to ${SECTIONS[section]}:`);
    console.log(`{
  label: '${subsection}',
  collapsed: true,
  items: [
    { label: '${title}', slug: '${slug}' },
  ],
},`);
  } else {
    console.log(`// Add to existing ${subsection} subsection in ${SECTIONS[section]}:`);
    console.log(`{ label: '${title}', slug: '${slug}' },`);
  }
  
  console.log('\n🔍 Find the section in astro.config.mjs around line:');
  const lineHints = {
    overview: '18-40',
    tutorials: '40-65',
    'how-to': '65-115', 
    reference: '115-150'
  };
  console.log(`Lines ${lineHints[section]} for ${SECTIONS[section]} section`);
}

main();