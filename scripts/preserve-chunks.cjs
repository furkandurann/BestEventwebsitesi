/**
 * Eski build chunk'larını koruma script'i
 * Build öncesi: dist/assets/js ve dist/assets/css dosyalarını yedekler
 * Build sonrası: Eski chunk'ları geri kopyalar (yenileri ezmez)
 *
 * Neden: SPA fallback yüzünden var olmayan chunk'lar index.html olarak dönüyor
 * ve browser JS parse hatası veriyor. Eski chunk'ları koruyarak bu önlenir.
 */

const fs = require('fs')
const path = require('path')

const DIST_JS = path.join(__dirname, '..', 'dist', 'assets', 'js')
const DIST_CSS = path.join(__dirname, '..', 'dist', 'assets', 'css')
const BACKUP_DIR = path.join(__dirname, '..', '.chunk-backup')

const action = process.argv[2] // 'save' or 'restore'

if (action === 'save') {
  // Build öncesi: mevcut chunk'ları yedekle
  console.log('📦 Eski chunk dosyaları yedekleniyor...')

  if (fs.existsSync(BACKUP_DIR)) {
    fs.rmSync(BACKUP_DIR, { recursive: true })
  }
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
  fs.mkdirSync(path.join(BACKUP_DIR, 'js'), { recursive: true })
  fs.mkdirSync(path.join(BACKUP_DIR, 'css'), { recursive: true })

  let count = 0

  if (fs.existsSync(DIST_JS)) {
    for (const f of fs.readdirSync(DIST_JS)) {
      if (f.endsWith('.js')) {
        fs.copyFileSync(path.join(DIST_JS, f), path.join(BACKUP_DIR, 'js', f))
        count++
      }
    }
  }

  if (fs.existsSync(DIST_CSS)) {
    for (const f of fs.readdirSync(DIST_CSS)) {
      if (f.endsWith('.css')) {
        fs.copyFileSync(path.join(DIST_CSS, f), path.join(BACKUP_DIR, 'css', f))
        count++
      }
    }
  }

  console.log(`  ✅ ${count} dosya yedeklendi`)

} else if (action === 'restore') {
  // Build sonrası: eski chunk'ları geri kopyala (yeni dosyaları ezmeden)
  console.log('📦 Eski chunk dosyaları geri yükleniyor...')

  let restored = 0

  const restoreDir = (subdir) => {
    const backupPath = path.join(BACKUP_DIR, subdir)
    const distPath = subdir === 'js' ? DIST_JS : DIST_CSS

    if (!fs.existsSync(backupPath) || !fs.existsSync(distPath)) return

    for (const f of fs.readdirSync(backupPath)) {
      const target = path.join(distPath, f)
      if (!fs.existsSync(target)) {
        fs.copyFileSync(path.join(backupPath, f), target)
        restored++
      }
    }
  }

  restoreDir('js')
  restoreDir('css')

  // Backup'ı temizle
  if (fs.existsSync(BACKUP_DIR)) {
    fs.rmSync(BACKUP_DIR, { recursive: true })
  }

  console.log(`  ✅ ${restored} eski chunk geri yüklendi`)
}
