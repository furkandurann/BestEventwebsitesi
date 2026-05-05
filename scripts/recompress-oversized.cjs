/**
 * Recompress Oversized WebP Images
 * Re-encodes WebP files over 300KB at lower quality (72)
 * Only replaces if new size is >10% smaller than original
 *
 * Usage: node scripts/recompress-oversized.cjs
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'content', 'images');
const SIZE_THRESHOLD = 300 * 1024; // 300KB
const TARGET_QUALITY = 72;
const MIN_SAVINGS_RATIO = 0.10; // Only replace if >10% smaller

// Skip variant files
const VARIANT_PATTERN = /-\d+w\.webp$/i;

let stats = {
  scanned: 0,
  oversized: 0,
  compressed: 0,
  skipped: 0,
  errors: 0,
  totalSaved: 0,
};

function getWebpFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getWebpFiles(fullPath));
    } else if (
      entry.isFile() &&
      /\.webp$/i.test(entry.name) &&
      !VARIANT_PATTERN.test(entry.name)
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function recompressFile(filePath) {
  const originalSize = fs.statSync(filePath).size;
  stats.scanned++;

  if (originalSize <= SIZE_THRESHOLD) {
    return;
  }

  stats.oversized++;

  try {
    const metadata = await sharp(filePath).metadata();
    const maxWidth = Math.min(metadata.width || 1920, 1920);

    const result = await sharp(filePath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ quality: TARGET_QUALITY, effort: 6 })
      .toBuffer();

    const savings = originalSize - result.length;
    const savingsRatio = savings / originalSize;

    if (savingsRatio > MIN_SAVINGS_RATIO) {
      // Backup original
      const backupPath = filePath + '.backup';
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(filePath, backupPath);
      }

      fs.writeFileSync(filePath, result);
      stats.compressed++;
      stats.totalSaved += savings;

      const relPath = path.relative(IMAGES_DIR, filePath);
      console.log(`  ${relPath}: ${(originalSize / 1024).toFixed(0)}KB → ${(result.length / 1024).toFixed(0)}KB (${(savingsRatio * 100).toFixed(0)}% saved)`);
    } else {
      stats.skipped++;
    }
  } catch (err) {
    console.error(`  Error: ${filePath}: ${err.message}`);
    stats.errors++;
  }
}

async function main() {
  console.log('Recompress Oversized WebP Images');
  console.log('================================');
  console.log(`Threshold: ${SIZE_THRESHOLD / 1024}KB`);
  console.log(`Target quality: ${TARGET_QUALITY}`);
  console.log(`Min savings: ${MIN_SAVINGS_RATIO * 100}%\n`);

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const files = getWebpFiles(IMAGES_DIR);
  console.log(`Found ${files.length} original WebP files\n`);

  const batchSize = 3;
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    await Promise.all(batch.map(f => recompressFile(f)));
  }

  console.log('\n================================');
  console.log('Results:');
  console.log(`  Files scanned: ${stats.scanned}`);
  console.log(`  Oversized (>${SIZE_THRESHOLD / 1024}KB): ${stats.oversized}`);
  console.log(`  Compressed: ${stats.compressed}`);
  console.log(`  Skipped (savings too small): ${stats.skipped}`);
  console.log(`  Errors: ${stats.errors}`);
  console.log(`  Total saved: ${(stats.totalSaved / 1024 / 1024).toFixed(1)} MB`);
  console.log(`\nNote: Originals backed up as .backup files`);
}

main().catch(console.error);
