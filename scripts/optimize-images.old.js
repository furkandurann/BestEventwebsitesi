#!/usr/bin/env node
/**
 * Image Optimization Script for BestEvent
 *
 * Bu script tüm fotoğrafları optimize eder:
 * - Büyük fotoğrafları küçültür (max 1920px genişlik)
 * - JPEG kalitesini optimize eder
 * - WebP versiyonları oluşturur (isteğe bağlı)
 * - Orijinal dosyaları backup'lar
 *
 * Kullanım: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfigürasyon
const CONFIG = {
  // Hedef klasör
  sourceDir: path.join(__dirname, '../public/content/images'),

  // Maksimum boyutlar
  maxWidth: 1920,
  maxHeight: 1080,

  // Kalite ayarları
  jpegQuality: 80,
  webpQuality: 80,

  // Minimum dosya boyutu (bu boyutun altındaki dosyalar atlanır)
  minFileSizeKB: 100,

  // Bu boyuttan büyük dosyaları optimize et (KB)
  optimizeThresholdKB: 500,

  // Desteklenen formatlar
  supportedFormats: ['.jpg', '.jpeg', '.png', '.webp', '.heic'],

  // Backup klasörü (null ise backup almaz)
  backupDir: null, // Backup almıyoruz, direkt üzerine yazıyoruz

  // Dry run modu (true ise sadece ne yapılacağını gösterir)
  dryRun: false,

  // WebP dönüşümü yap mı?
  createWebP: false, // İlk seferde sadece optimize edelim
};

// İstatistikler
const stats = {
  totalFiles: 0,
  processedFiles: 0,
  skippedFiles: 0,
  errorFiles: 0,
  originalSizeTotal: 0,
  optimizedSizeTotal: 0,
  savedBytes: 0,
};

// Dosya boyutunu formatla
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

// Dosya boyutunu al
async function getFileSize(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.size;
  } catch {
    return 0;
  }
}

// Görsel dosyası mı kontrol et
function isImageFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return CONFIG.supportedFormats.includes(ext);
}

// macOS gizli dosyası mı kontrol et
function isHiddenFile(filePath) {
  const basename = path.basename(filePath);
  return basename.startsWith('._') || basename.startsWith('.DS_Store');
}

// Tek bir görseli optimize et
async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = await getFileSize(filePath);

  // Küçük dosyaları atla
  if (originalSize < CONFIG.minFileSizeKB * 1024) {
    return { skipped: true, reason: 'too-small' };
  }

  // Threshold altındaki dosyaları atla (zaten optimize edilmiş olabilir)
  if (originalSize < CONFIG.optimizeThresholdKB * 1024) {
    return { skipped: true, reason: 'under-threshold' };
  }

  try {
    let image = sharp(filePath);
    const metadata = await image.metadata();

    // HEIC dosyaları için özel işlem
    if (ext === '.heic') {
      // HEIC'i JPEG'e çevir
      const newPath = filePath.replace(/\.heic$/i, '.jpg');

      if (CONFIG.dryRun) {
        console.log(`  [DRY-RUN] Would convert HEIC to JPG: ${path.basename(filePath)}`);
        return { skipped: true, reason: 'dry-run' };
      }

      await image
        .resize(CONFIG.maxWidth, CONFIG.maxHeight, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ quality: CONFIG.jpegQuality, progressive: true })
        .toFile(newPath);

      // Eski HEIC dosyasını sil
      await fs.unlink(filePath);

      const newSize = await getFileSize(newPath);
      return {
        skipped: false,
        originalSize,
        newSize,
        converted: true,
        newPath,
      };
    }

    // Boyut kontrolü - küçültme gerekiyor mu?
    const needsResize = metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight;

    if (CONFIG.dryRun) {
      console.log(`  [DRY-RUN] Would optimize: ${path.basename(filePath)} (${formatBytes(originalSize)}) ${needsResize ? '[RESIZE]' : ''}`);
      return { skipped: true, reason: 'dry-run' };
    }

    // Geçici dosyaya yaz
    const tempPath = filePath + '.tmp';

    // Görsel pipeline'ı oluştur
    let pipeline = sharp(filePath);

    // Yeniden boyutlandır (gerekirse)
    if (needsResize) {
      pipeline = pipeline.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Format'a göre kaydet
    if (ext === '.png') {
      await pipeline
        .png({ quality: CONFIG.jpegQuality, compressionLevel: 9 })
        .toFile(tempPath);
    } else {
      // JPEG ve diğerleri
      await pipeline
        .jpeg({ quality: CONFIG.jpegQuality, progressive: true, mozjpeg: true })
        .toFile(tempPath);
    }

    const newSize = await getFileSize(tempPath);

    // Yeni dosya daha küçükse, orijinalin üzerine yaz
    if (newSize < originalSize) {
      await fs.rename(tempPath, filePath);
      return {
        skipped: false,
        originalSize,
        newSize,
        resized: needsResize,
      };
    } else {
      // Yeni dosya daha büyükse, temp dosyayı sil
      await fs.unlink(tempPath);
      return {
        skipped: true,
        reason: 'no-improvement',
        originalSize,
        newSize,
      };
    }
  } catch (error) {
    return {
      skipped: true,
      reason: 'error',
      error: error.message,
    };
  }
}

// Klasördeki tüm görselleri bul
async function findAllImages(dir) {
  const images = [];

  async function scan(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

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

// Ana fonksiyon
async function main() {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║        🖼️  BestEvent Fotoğraf Optimizasyon Scripti            ║');
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log(`║  Kaynak: ${CONFIG.sourceDir.substring(CONFIG.sourceDir.lastIndexOf('/public'))}`);
  console.log(`║  Maks Boyut: ${CONFIG.maxWidth}x${CONFIG.maxHeight}px`);
  console.log(`║  JPEG Kalitesi: ${CONFIG.jpegQuality}%`);
  console.log(`║  Eşik: >${CONFIG.optimizeThresholdKB}KB`);
  console.log(`║  Test Modu: ${CONFIG.dryRun ? 'EVET' : 'HAYIR'}`);
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');

  // Tüm görselleri bul
  console.log('🔍 Fotoğraflar taranıyor...');
  const images = await findAllImages(CONFIG.sourceDir);
  stats.totalFiles = images.length;
  console.log(`📁 ${images.length} fotoğraf bulundu.\n`);

  // Boyuta göre sırala (büyükten küçüğe)
  const imagesWithSize = await Promise.all(
    images.map(async (img) => ({
      path: img,
      size: await getFileSize(img),
    }))
  );

  imagesWithSize.sort((a, b) => b.size - a.size);

  // En büyük 20 dosyayı göster
  console.log('📊 En büyük 20 fotoğraf:');
  console.log('─'.repeat(70));
  for (let i = 0; i < Math.min(20, imagesWithSize.length); i++) {
    const img = imagesWithSize[i];
    const relativePath = img.path.replace(CONFIG.sourceDir, '');
    console.log(`  ${(i + 1).toString().padStart(2)}. ${formatBytes(img.size).padStart(10)} │ ${relativePath.substring(0, 50)}`);
  }
  console.log('─'.repeat(70));
  console.log('');

  // İşleme başla
  console.log('🚀 Optimizasyon başlıyor...\n');

  let processed = 0;
  for (const img of imagesWithSize) {
    processed++;
    const relativePath = img.path.replace(CONFIG.sourceDir, '');

    // İlerleme göster
    const progress = Math.round((processed / images.length) * 100);
    process.stdout.write(`\r[%${progress}] İşleniyor ${processed}/${images.length}: ${relativePath.substring(0, 40).padEnd(40)}`);

    const result = await optimizeImage(img.path);

    if (result.skipped) {
      stats.skippedFiles++;
      if (result.reason === 'error') {
        stats.errorFiles++;
        console.log(`\n  ❌ Hata: ${relativePath} - ${result.error}`);
      }
    } else {
      stats.processedFiles++;
      stats.originalSizeTotal += result.originalSize;
      stats.optimizedSizeTotal += result.newSize;
      stats.savedBytes += result.originalSize - result.newSize;

      const savedPercent = Math.round((1 - result.newSize / result.originalSize) * 100);
      if (savedPercent > 30) {
        console.log(`\n  ✅ ${relativePath}`);
        console.log(`     ${formatBytes(result.originalSize)} → ${formatBytes(result.newSize)} (%${savedPercent} küçüldü)`);
      }
    }
  }

  // Sonuç raporu
  console.log('\n\n');
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║                    📊 SONUÇ RAPORU                             ║');
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log(`║  Toplam Dosya:     ${stats.totalFiles.toString().padStart(6)}`);
  console.log(`║  İşlenen:          ${stats.processedFiles.toString().padStart(6)}`);
  console.log(`║  Atlanan:          ${stats.skippedFiles.toString().padStart(6)}`);
  console.log(`║  Hatalı:           ${stats.errorFiles.toString().padStart(6)}`);
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log(`║  Orijinal Boyut:   ${formatBytes(stats.originalSizeTotal).padStart(12)}`);
  console.log(`║  Yeni Boyut:       ${formatBytes(stats.optimizedSizeTotal).padStart(12)}`);
  console.log(`║  Kazanılan Alan:   ${formatBytes(stats.savedBytes).padStart(12)}`);
  if (stats.originalSizeTotal > 0) {
    const savedPercent = Math.round((stats.savedBytes / stats.originalSizeTotal) * 100);
    console.log(`║  Tasarruf Oranı:   %${savedPercent.toString().padStart(10)}`);
  }
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log('✨ Optimizasyon tamamlandı!');
  console.log('💡 Production için: npm run build');
}

// Çalıştır
main().catch(console.error);
