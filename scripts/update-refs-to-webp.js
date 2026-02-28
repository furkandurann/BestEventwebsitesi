#!/usr/bin/env node
/**
 * Updates all image references in source code from JPG/PNG to WebP
 * Only updates references where a .webp version exists on disk
 */

import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const SRC_DIR = path.join(ROOT, 'src');
const PUBLIC_DIR = path.join(ROOT, 'public');

const extensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
const imagePathRegex = /(['"`])(\/content\/images\/[^'"`\s]+?\.(jpg|jpeg|png|JPG|JPEG|PNG))(['"`])/g;

let totalReplacements = 0;

async function findSourceFiles(dir) {
  const files = [];
  async function scan(d) {
    const entries = await fs.readdir(d, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist') {
        await scan(full);
      } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
        files.push(full);
      }
    }
  }
  await scan(dir);
  return files;
}

async function updateFile(filePath) {
  let content = await fs.readFile(filePath, 'utf-8');
  let fileReplacements = 0;

  const newContent = content.replace(imagePathRegex, (match, q1, imgPath, ext, q2) => {
    // Build the webp path
    const withoutExt = imgPath.substring(0, imgPath.lastIndexOf('.'));
    const webpPath = `${withoutExt}.webp`;

    // Check if webp file exists on disk
    const diskPath = path.join(PUBLIC_DIR, webpPath);
    if (existsSync(diskPath)) {
      fileReplacements++;
      totalReplacements++;
      return `${q1}${webpPath}${q2}`;
    }
    return match;
  });

  if (fileReplacements > 0) {
    await fs.writeFile(filePath, newContent, 'utf-8');
    const rel = filePath.replace(ROOT, '');
    console.log(`  ✅ ${rel} (${fileReplacements} references updated)`);
  }
}

async function main() {
  console.log('\n🔄 Updating image references to WebP\n');

  const files = await findSourceFiles(SRC_DIR);
  console.log(`Scanning ${files.length} source files...\n`);

  for (const file of files) {
    await updateFile(file);
  }

  console.log(`\n📊 Total references updated: ${totalReplacements}\n`);
}

main().catch(console.error);
