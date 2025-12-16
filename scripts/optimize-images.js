#!/usr/bin/env node
/**
 * WebP Image Conversion Script for BestEvent
 *
 * This script:
 * - Converts all JPG/JPEG/PNG images to WebP format
 * - Backs up originals to 'orig_jpg' subfolder in each directory
 * - Resizes images to max 2000px width
 * - Maintains folder structure
 * - Provides detailed statistics
 *
 * Usage: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  sourceDir: path.join(__dirname, '../public/content/images'),
  maxWidth: 2000,
  maxHeight: 2000,
  webpQuality: 82,
  backupFolderName: 'orig_jpg',
  supportedFormats: ['.jpg', '.jpeg', '.png'],
};

// Statistics
const stats = {
  totalFiles: 0,
  processedFiles: 0,
  skippedFiles: 0,
  errorFiles: 0,
  originalSizeTotal: 0,
  webpSizeTotal: 0,
};

// Format bytes to human readable
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

// Get file size
async function getFileSize(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.size;
  } catch {
    return 0;
  }
}

// Check if file is an image
function isImageFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return CONFIG.supportedFormats.includes(ext);
}

// Check if hidden file
function isHiddenFile(filePath) {
  const basename = path.basename(filePath);
  return basename.startsWith('._') || basename.startsWith('.DS_Store');
}

// Process single image
async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const filename = path.basename(filePath, ext);

  // Create backup directory
  const backupDir = path.join(dir, CONFIG.backupFolderName);
  if (!existsSync(backupDir)) {
    await fs.mkdir(backupDir, { recursive: true });
  }

  try {
    // Get original size
    const originalSize = await getFileSize(filePath);
    const metadata = await sharp(filePath).metadata();

    // Backup original
    const backupPath = path.join(backupDir, path.basename(filePath));
    await fs.copyFile(filePath, backupPath);

    // Create WebP version
    const webpPath = path.join(dir, `${filename}.webp`);

    let image = sharp(filePath);

    // Resize if needed
    if (metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight) {
      image = image.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Convert to WebP
    await image.webp({ quality: CONFIG.webpQuality, effort: 6 }).toFile(webpPath);

    const webpSize = await getFileSize(webpPath);
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    // Update stats
    stats.originalSizeTotal += originalSize;
    stats.webpSizeTotal += webpSize;
    stats.processedFiles++;

    return {
      success: true,
      originalSize,
      webpSize,
      savings,
      resized: metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight,
      dimensions: `${metadata.width}x${metadata.height}`,
    };

  } catch (error) {
    stats.errorFiles++;
    return {
      success: false,
      error: error.message,
    };
  }
}

// Find all images recursively
async function findAllImages(dir) {
  const images = [];

  async function scan(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      // Skip backup directories
      if (entry.isDirectory() && entry.name === CONFIG.backupFolderName) {
        continue;
      }

      if (entry.isDirectory()) {
        await scan(fullPath);
      } else if (entry.isFile() && isImageFile(fullPath) && !isHiddenFile(fullPath)) {
        images.push(fullPath);
      }
    }
  }

  await scan(dir);
  return images;
}

// Main function
async function main() {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║        🖼️  WebP Image Conversion Script - BestEvent           ║');
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log(`║  Source: ${CONFIG.sourceDir.substring(CONFIG.sourceDir.lastIndexOf('/public'))}`);
  console.log(`║  Max Size: ${CONFIG.maxWidth}x${CONFIG.maxHeight}px`);
  console.log(`║  WebP Quality: ${CONFIG.webpQuality}%`);
  console.log(`║  Backup Folder: ${CONFIG.backupFolderName}/`);
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');

  // Find all images
  console.log('🔍 Scanning for images...');
  const images = await findAllImages(CONFIG.sourceDir);
  stats.totalFiles = images.length;
  console.log(`📁 Found ${images.length} images.\n`);

  if (images.length === 0) {
    console.log('❌ No images found to process.');
    return;
  }

  // Sort by size (largest first)
  const imagesWithSize = await Promise.all(
    images.map(async (img) => ({
      path: img,
      size: await getFileSize(img),
    }))
  );

  imagesWithSize.sort((a, b) => b.size - a.size);

  // Show top 10 largest files
  console.log('📊 Top 10 largest images:');
  console.log('─'.repeat(80));
  for (let i = 0; i < Math.min(10, imagesWithSize.length); i++) {
    const img = imagesWithSize[i];
    const relativePath = img.path.replace(CONFIG.sourceDir, '');
    console.log(`  ${(i + 1).toString().padStart(2)}. ${formatBytes(img.size).padStart(10)} │ ${relativePath}`);
  }
  console.log('─'.repeat(80));
  console.log('');

  // Process images
  console.log('🚀 Starting conversion...\n');

  let processed = 0;
  const startTime = Date.now();

  for (const img of imagesWithSize) {
    processed++;
    const relativePath = img.path.replace(CONFIG.sourceDir, '');
    const progress = Math.round((processed / images.length) * 100);

    process.stdout.write(`\r[${progress}%] Processing ${processed}/${images.length}...`);

    const result = await processImage(img.path);

    if (result.success) {
      if (parseFloat(result.savings) > 50) {
        console.log(`\n  ✅ ${relativePath}`);
        console.log(`     ${formatBytes(result.originalSize)} → ${formatBytes(result.webpSize)} (${result.savings}% smaller)`);
        if (result.resized) {
          console.log(`     🔄 Resized from ${result.dimensions}`);
        }
      }
    } else {
      console.log(`\n  ❌ Error: ${relativePath}`);
      console.log(`     ${result.error}`);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  const totalSavings = ((1 - stats.webpSizeTotal / stats.originalSizeTotal) * 100).toFixed(1);

  // Final report
  console.log('\n\n');
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║                    📊 CONVERSION REPORT                        ║');
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log(`║  Total Files:      ${stats.totalFiles.toString().padStart(6)}`);
  console.log(`║  Processed:        ${stats.processedFiles.toString().padStart(6)}`);
  console.log(`║  Errors:           ${stats.errorFiles.toString().padStart(6)}`);
  console.log(`║  Time:             ${duration.padStart(6)}s`);
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log(`║  Original Size:    ${formatBytes(stats.originalSizeTotal).padStart(12)}`);
  console.log(`║  WebP Size:        ${formatBytes(stats.webpSizeTotal).padStart(12)}`);
  console.log(`║  Space Saved:      ${formatBytes(stats.originalSizeTotal - stats.webpSizeTotal).padStart(12)}`);
  console.log(`║  Savings:          ${totalSavings.padStart(11)}%`);
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log('✨ Conversion complete!');
  console.log('');
  console.log('📝 Next steps:');
  console.log('   1. Update image references in data files (.jpg → .webp)');
  console.log('   2. Test site to ensure images load correctly');
  console.log('   3. Originals backed up in orig_jpg/ folders');
  console.log('   4. Run: npm run build');
  console.log('');
}

main().catch(console.error);
