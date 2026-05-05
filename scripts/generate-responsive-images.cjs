/**
 * Responsive Image Generator
 * Generates responsive WebP variants for all images in public/content/images/
 * Variants: 400w (thumb), 640w (mobile), 1024w (tablet)
 * Original stays untouched as desktop (1920w) variant
 *
 * Usage: node scripts/generate-responsive-images.cjs
 * Idempotent: skips existing variants
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'content', 'images');

const VARIANTS = [
  { suffix: '-400w', width: 400, quality: 75 },
  { suffix: '-640w', width: 640, quality: 78 },
  { suffix: '-1024w', width: 1024, quality: 80 },
];

// Skip variant files themselves (already generated)
const VARIANT_PATTERN = /-\d+w\.webp$/i;

let stats = {
  processed: 0,
  skipped: 0,
  generated: 0,
  errors: 0,
  savedBytes: 0,
};

async function getWebpFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getWebpFiles(fullPath));
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

async function generateVariants(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);

  try {
    const metadata = await sharp(filePath).metadata();
    const sourceWidth = metadata.width || 1920;

    for (const variant of VARIANTS) {
      // Skip if source is smaller than variant
      if (sourceWidth <= variant.width) {
        stats.skipped++;
        continue;
      }

      const variantPath = path.join(dir, `${baseName}${variant.suffix}.webp`);

      // Skip if variant already exists (idempotent)
      if (fs.existsSync(variantPath)) {
        stats.skipped++;
        continue;
      }

      const result = await sharp(filePath)
        .resize(variant.width, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({ quality: variant.quality, effort: 4 })
        .toBuffer();

      fs.writeFileSync(variantPath, result);

      const originalSize = fs.statSync(filePath).size;
      const savedPerVariant = originalSize - result.length;
      stats.savedBytes += savedPerVariant > 0 ? savedPerVariant : 0;
      stats.generated++;
    }

    stats.processed++;
  } catch (err) {
    console.error(`  Error processing ${filePath}: ${err.message}`);
    stats.errors++;
  }
}

async function main() {
  console.log('Responsive Image Generator');
  console.log('==========================');
  console.log(`Source directory: ${IMAGES_DIR}`);
  console.log(`Variants: ${VARIANTS.map(v => `${v.width}px (q${v.quality})`).join(', ')}\n`);

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const files = await getWebpFiles(IMAGES_DIR);
  console.log(`Found ${files.length} original WebP files\n`);

  const batchSize = 5;
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    await Promise.all(batch.map(f => generateVariants(f)));

    // Progress indicator
    const progress = Math.min(i + batchSize, files.length);
    process.stdout.write(`\r  Progress: ${progress}/${files.length} files`);
  }

  console.log('\n\n==========================');
  console.log('Results:');
  console.log(`  Files processed: ${stats.processed}`);
  console.log(`  Variants generated: ${stats.generated}`);
  console.log(`  Variants skipped (existing/small): ${stats.skipped}`);
  console.log(`  Errors: ${stats.errors}`);
  console.log(`  Estimated bandwidth savings: ${(stats.savedBytes / 1024 / 1024).toFixed(1)} MB`);
}

main().catch(console.error);
