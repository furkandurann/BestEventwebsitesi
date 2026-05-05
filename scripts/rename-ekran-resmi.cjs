/**
 * "Ekran Resmi ..." gibi boşluklu/Türkçe karakterli dosyaları
 * klasör ismi + sıralı numara formatına çevirir.
 *
 * Önce dry-run yapar (gerçekten rename etmez), --apply ile uygular.
 *
 * Örnek:
 *   node scripts/rename-ekran-resmi.cjs           → ne yapacağını listeler
 *   node scripts/rename-ekran-resmi.cjs --apply   → rename uygular
 */

const fs = require('fs')
const path = require('path')

const DRY_RUN = !process.argv.includes('--apply')
const ROOT = path.join(__dirname, '..', 'public')

// Klasördeki "Ekran Resmi" ile başlayan dosyaları bul,
// timestamp'e göre sırala, ardından klasör_ismi-1, klasör_ismi-2 ... ver.
// Responsive suffix'leri (-400w, -640w, -1024w) koru.

const RESPONSIVE_SUFFIXES = ['-1024w', '-640w', '-400w']

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[öÖ]/g, 'o')
    .replace(/[üÜ]/g, 'u')
    .replace(/[şŞ]/g, 's')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ğĞ]/g, 'g')
    .replace(/[ıİ]/g, 'i')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function getResponsiveSuffix(name) {
  for (const s of RESPONSIVE_SUFFIXES) {
    if (name.includes(s)) return s
  }
  return ''
}

function getExtension(name) {
  return path.extname(name)
}

function getBaseName(name) {
  // "Ekran Resmi 2025-11-15 ÖS 1.42.14-640w.webp"
  // → base = "Ekran Resmi 2025-11-15 ÖS 1.42.14"  suffix = "-640w"  ext = ".webp"
  const ext = getExtension(name)
  const withoutExt = name.slice(0, -ext.length)
  for (const s of RESPONSIVE_SUFFIXES) {
    if (withoutExt.endsWith(s)) {
      return withoutExt.slice(0, -s.length)
    }
  }
  return withoutExt
}

function processDir(dir) {
  if (!fs.existsSync(dir)) return

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  // Alt klasörleri de işle
  for (const e of entries) {
    if (e.isDirectory()) processDir(path.join(dir, e.name))
  }

  // Bu klasördeki "Ekran Resmi" dosyaları
  const ekranFiles = entries
    .filter(e => e.isFile() && e.name.startsWith('Ekran Resmi'))
    .map(e => e.name)

  if (ekranFiles.length === 0) return

  // Unique base isimleri bul (timestamp grupları)
  const baseSet = new Set(ekranFiles.map(getBaseName))
  const bases = [...baseSet].sort() // timestamp'e göre alfabetik = kronolojik

  const folderSlug = slugify(path.basename(dir))

  let counter = 1
  for (const base of bases) {
    const newBase = `${folderSlug}-${counter}`
    counter++

    // Bu base'e ait tüm dosyaları (orijinal + responsive) işle
    const related = ekranFiles.filter(f => getBaseName(f) === base)
    for (const fname of related) {
      const ext = getExtension(fname)
      const resSuffix = getResponsiveSuffix(fname)
      const newName = `${newBase}${resSuffix}${ext}`

      const oldPath = path.join(dir, fname)
      const newPath = path.join(dir, newName)

      if (fs.existsSync(newPath)) {
        console.log(`⚠️  Atlandı (zaten var): ${newName}`)
        continue
      }

      console.log(`${DRY_RUN ? '[DRY]' : '✅'} ${path.relative(ROOT, oldPath)}  →  ${newName}`)

      if (!DRY_RUN) {
        fs.renameSync(oldPath, newPath)
      }
    }
  }
}

if (DRY_RUN) {
  console.log('🔍 DRY RUN — Değişiklik uygulanmayacak. Uygulamak için: --apply\n')
} else {
  console.log('🔧 Rename uygulanıyor...\n')
}

processDir(ROOT)
console.log('\nTamamlandı.')
