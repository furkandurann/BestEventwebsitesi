#!/usr/bin/env node
/**
 * Cleanup Old Images Script
 *
 * Removes original .jpg, .jpeg, .png files after WebP conversion
 * Only removes files that have a corresponding .webp version
 * Keeps the backup in orig_jpg/ folders
 */

import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/content/images');

const stats = {
  deleted: 0,
  skipped: 0,
  errors: 0,
  savedBytes: 0,
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

async function findOriginalImages(dir) {
  const images = [];

  async function scan(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      // Skip backup directories
      if (entry.isDirectory() && entry.name === 'orig_jpg') {
        continue;
      }

      if (entry.isDirectory()) {
        await scan(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          images.push(fullPath);
        }
      }
    }
  }

  await scan(dir);
  return images;
}

async function main() {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║     🗑️  Eski Görselleri Temizleme Script\'i                     ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');

  const images = await findOriginalImages(imagesDir);
  console.log(`📁 Bulunan orijinal görsel: ${images.length}`);
  console.log('');

  for (const imgPath of images) {
    const ext = path.extname(imgPath);
    const webpPath = imgPath.replace(ext, '.webp');

    // Only delete if webp version exists
    if (existsSync(webpPath)) {
      try {
        const stat = await fs.stat(imgPath);
        stats.savedBytes += stat.size;
        await fs.unlink(imgPath);
        stats.deleted++;
      } catch (err) {
        stats.errors++;
        console.log(`  ❌ ${imgPath}: ${err.message}`);
      }
    } else {
      stats.skipped++;
      console.log(`  ⏭️  WebP yok, atlandı: ${imgPath}`);
    }
  }

  console.log('');
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║                    📊 SONUÇ RAPORU                             ║');
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log(`║  Silinen Dosya:      ${stats.deleted.toString().padStart(6)}`);
  console.log(`║  Atlanan:            ${stats.skipped.toString().padStart(6)}`);
  console.log(`║  Hatalar:            ${stats.errors.toString().padStart(6)}`);
  console.log(`║  Kurtarılan Alan:    ${formatBytes(stats.savedBytes).padStart(12)}`);
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log('✨ Temizlik tamamlandı!');
  console.log('📝 Not: Orijinaller hala orig_jpg/ klasörlerinde yedekli.');
}

main().catch(console.error);
