#!/usr/bin/env node
/**
 * Update Image References Script
 *
 * Updates all .jpg, .jpeg, and .png references to .webp in data files
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToUpdate = [
  path.join(__dirname, '../src/data/heroSlides.js'),
  path.join(__dirname, '../src/data/blogPosts.js'),
];

async function updateFile(filePath) {
  try {
    console.log(`\n📄 Processing: ${path.basename(filePath)}`);

    let content = await fs.readFile(filePath, 'utf8');
    const originalContent = content;

    // Count changes
    let jpgCount = 0;
    let jpegCount = 0;
    let pngCount = 0;

    // Replace .jpg with .webp
    content = content.replace(/\.jpg(['"])/gi, (match) => {
      jpgCount++;
      return '.webp' + match.slice(4);
    });

    // Replace .jpeg with .webp
    content = content.replace(/\.jpeg(['"])/gi, (match) => {
      jpegCount++;
      return '.webp' + match.slice(5);
    });

    // Replace .png with .webp
    content = content.replace(/\.png(['"])/gi, (match) => {
      pngCount++;
      return '.webp' + match.slice(4);
    });

    // Replace .JPG with .webp (uppercase)
    content = content.replace(/\.JPG(['"])/g, (match) => {
      jpgCount++;
      return '.webp' + match.slice(4);
    });

    // Replace .JPEG with .webp (uppercase)
    content = content.replace(/\.JPEG(['"])/g, (match) => {
      jpegCount++;
      return '.webp' + match.slice(5);
    });

    // Replace .PNG with .webp (uppercase)
    content = content.replace(/\.PNG(['"])/g, (match) => {
      pngCount++;
      return '.webp' + match.slice(4);
    });

    if (content !== originalContent) {
      await fs.writeFile(filePath, content, 'utf8');
      console.log(`   ✅ Updated successfully!`);
      console.log(`      .jpg  → .webp: ${jpgCount} replacements`);
      console.log(`      .jpeg → .webp: ${jpegCount} replacements`);
      console.log(`      .png  → .webp: ${pngCount} replacements`);
      console.log(`      Total: ${jpgCount + jpegCount + pngCount} changes`);
      return jpgCount + jpegCount + pngCount;
    } else {
      console.log(`   ℹ️  No changes needed`);
      return 0;
    }
  } catch (error) {
    console.error(`   ❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

async function main() {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║     🔄 Update Image References - JPG/PNG → WebP              ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');

  let totalChanges = 0;

  for (const file of filesToUpdate) {
    const changes = await updateFile(file);
    totalChanges += changes;
  }

  console.log('\n╔════════════════════════════════════════════════════════════════╗');
  console.log('║                    ✨ COMPLETE!                                ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log(`📊 Total changes: ${totalChanges}`);
  console.log('\n💡 Next steps:');
  console.log('   1. Test your site: npm run dev');
  console.log('   2. Verify images load correctly');
  console.log('   3. Build for production: npm run build');
  console.log('');
}

main().catch(console.error);
