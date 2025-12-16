/**
 * WebP Dosya İsimlendirme Düzeltici
 *
 * ViteImageOptimizer, dosyaları "image.JPG.webp" formatında oluşturuyor
 * ancak kodda "image.webp" olarak referans veriliyor.
 *
 * Bu script:
 * 1. ".JPG.webp", ".JPEG.webp", ".PNG.webp" dosyalarını bulur
 * 2. Onları ".webp" olarak yeniden adlandırır
 */

import fs from 'fs'
import path from 'path'

const distImagesDir = process.argv[2] || './dist/content/images'

// Düzeltilecek uzantı kalıpları
const patterns = [
  { from: '.JPG.webp', to: '.webp' },
  { from: '.JPEG.webp', to: '.webp' },
  { from: '.PNG.webp', to: '.webp' },
  { from: '.jpg.webp', to: '.webp' },
  { from: '.jpeg.webp', to: '.webp' },
  { from: '.png.webp', to: '.webp' },
]

function fixWebpNames(dir) {
  let fixedCount = 0

  function processDirectory(currentDir) {
    // Dizin yoksa atla
    if (!fs.existsSync(currentDir)) {
      return
    }

    let items
    try {
      items = fs.readdirSync(currentDir, { withFileTypes: true })
    } catch (err) {
      console.log(`⚠️  Dizin okunamadı: ${currentDir}`)
      return
    }

    for (const item of items) {
      const fullPath = path.join(currentDir, item.name)

      if (item.isDirectory()) {
        // Alt klasörleri de tara
        processDirectory(fullPath)
      } else if (item.isFile()) {
        // Dosya adını kontrol et
        for (const pattern of patterns) {
          if (item.name.endsWith(pattern.from)) {
            const newName = item.name.replace(pattern.from, pattern.to)
            const newPath = path.join(currentDir, newName)

            // Eğer hedef dosya zaten varsa, atla
            if (fs.existsSync(newPath)) {
              console.log(`⚠️  Atlandı (zaten var): ${item.name}`)
              continue
            }

            // Yeniden adlandır
            try {
              fs.renameSync(fullPath, newPath)
              console.log(`✅ ${item.name} → ${newName}`)
              fixedCount++
            } catch (err) {
              console.log(`❌ Yeniden adlandırılamadı: ${item.name}`)
            }
            break
          }
        }
      }
    }
  }

  if (!fs.existsSync(dir)) {
    console.log(`❌ Klasör bulunamadı: ${dir}`)
    return 0
  }

  processDirectory(dir)
  return fixedCount
}

console.log('🔧 WebP dosya isimlerini düzeltme başlıyor...\n')
const count = fixWebpNames(distImagesDir)
console.log(`\n✨ Toplam ${count} dosya düzeltildi.`)
