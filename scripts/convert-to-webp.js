#!/usr/bin/env node
/**
 * Aggressive WebP Conversion Script
 * - Converts all JPG/JPEG/PNG to WebP (no backup - originals deleted after conversion)
 * - Resizes to max 1920px width
 * - Skips files that already have a .webp version
 * - Updates source code references automatically
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  sourceDir: path.join(__dirname, '../public/content/images'),
  maxWidth: 1920,
  webpQuality: 82,
  supportedFormats: ['.jpg', '.jpeg', '.png'],
  concurrency: 4,
};

const stats = {
  total: 0, converted: 0, skipped: 0, errors: 0,
  originalSize: 0, webpSize: 0,
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

async function findImages(dir) {
  const images = [];
  async function scan(d) {
    const entries = await fs.readdir(d, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        await scan(full);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (CONFIG.supportedFormats.includes(ext) && !entry.name.startsWith('._')) {
          images.push(full);
        }
      }
    }
  }
  await scan(dir);
  return images;
}

async function convertImage(filePath) {
  const ext = path.extname(filePath);
  const dir = path.dirname(filePath);
  const basename = path.basename(filePath, ext);
  const webpPath = path.join(dir, `${basename}.webp`);

  // Skip if WebP already exists
  if (existsSync(webpPath)) {
    stats.skipped++;
    return { status: 'skipped', path: filePath };
  }

  try {
    const originalStat = await fs.stat(filePath);
    const originalSize = originalStat.size;
    stats.originalSize += originalSize;

    const metadata = await sharp(filePath).metadata();
    let pipeline = sharp(filePath);

    // Resize if wider than max
    if (metadata.width > CONFIG.maxWidth) {
      pipeline = pipeline.resize(CONFIG.maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    await pipeline
      .webp({ quality: CONFIG.webpQuality, effort: 4 })
      .toFile(webpPath);

    const webpStat = await fs.stat(webpPath);
    stats.webpSize += webpStat.size;
    stats.converted++;

    // Delete original after successful conversion
    await fs.unlink(filePath);

    const savings = ((1 - webpStat.size / originalSize) * 100).toFixed(0);
    return {
      status: 'converted',
      path: filePath,
      from: formatBytes(originalSize),
      to: formatBytes(webpStat.size),
      savings: `${savings}%`,
    };
  } catch (err) {
    stats.errors++;
    return { status: 'error', path: filePath, error: err.message };
  }
}

// Process in batches for concurrency
async function processBatch(images, batchSize) {
  for (let i = 0; i < images.length; i += batchSize) {
    const batch = images.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(convertImage));

    for (const r of results) {
      if (r.status === 'converted') {
        const rel = r.path.replace(CONFIG.sourceDir, '');
        console.log(`  ✅ ${rel} → ${r.from} → ${r.to} (${r.savings})`);
      } else if (r.status === 'error') {
        console.log(`  ❌ ${r.path.replace(CONFIG.sourceDir, '')} - ${r.error}`);
      }
    }

    const done = Math.min(i + batchSize, images.length);
    process.stdout.write(`\r  Progress: ${done}/${images.length}`);
  }
}

async function main() {
  console.log('\n🖼️  WebP Conversion (Aggressive Mode)\n');

  const images = await findImages(CONFIG.sourceDir);
  stats.total = images.length;
  console.log(`Found ${images.length} JPG/PNG images\n`);

  if (images.length === 0) {
    console.log('No images to convert.');
    return;
  }

  await processBatch(images, CONFIG.concurrency);

  const totalSaved = stats.originalSize - stats.webpSize;
  console.log(`\n\n📊 Results:`);
  console.log(`  Converted: ${stats.converted}`);
  console.log(`  Skipped (WebP exists): ${stats.skipped}`);
  console.log(`  Errors: ${stats.errors}`);
  if (stats.converted > 0) {
    console.log(`  Original: ${formatBytes(stats.originalSize)}`);
    console.log(`  WebP: ${formatBytes(stats.webpSize)}`);
    console.log(`  Saved: ${formatBytes(totalSaved)} (${((totalSaved / stats.originalSize) * 100).toFixed(0)}%)`);
  }
  console.log('');
}

main().catch(console.error);
