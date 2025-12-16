import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Site base URL
const BASE_URL = 'https://www.bestevent.com.tr'

// Bugünün tarihi (ISO format)
const today = new Date().toISOString().split('T')[0]

// Statik sayfalar (manuel)
const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/hakkimizda', priority: 0.8, changefreq: 'monthly' },
  { url: '/organizasyonlar', priority: 0.9, changefreq: 'weekly' },
  { url: '/galeri', priority: 0.7, changefreq: 'weekly' },
  { url: '/iletisim', priority: 0.9, changefreq: 'monthly' },
  { url: '/ekibimiz', priority: 0.7, changefreq: 'monthly' },
  { url: '/referanslar', priority: 0.8, changefreq: 'monthly' },
  { url: '/hizmet-bolgeleri', priority: 0.8, changefreq: 'monthly' },
  { url: '/organik-pastalar', priority: 0.8, changefreq: 'weekly' },
  { url: '/blog', priority: 0.8, changefreq: 'weekly' },
]

// Blog sayfaları
const blogPages = [
  { url: '/blog/acilis-organizasyonu-istanbul', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/palyaco-kiralama-istanbul', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/sihirbaz-gosterisi-istanbul', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/bubble-show-istanbul', priority: 0.7, changefreq: 'monthly' },
]

// Hizmet sayfaları (otomatik priority hesaplama)
const servicePages = [
  // Çocuk Etkinlikleri
  { url: '/organizasyonlar/cocuk-etkinlikleri', category: 'main' },
  
  // Gösteriler (yüksek öncelik)
  { url: '/organizasyonlar/yuz-boyama', category: 'show' },
  { url: '/organizasyonlar/profesyonel-makyaj', category: 'show' },
  { url: '/organizasyonlar/magic-show', category: 'show' },
  { url: '/organizasyonlar/sihirbaz', category: 'show' },
  { url: '/organizasyonlar/bubble-show', category: 'show' },
  { url: '/organizasyonlar/ates-gosterisi', category: 'show' },
  { url: '/organizasyonlar/jonklor', category: 'show' },
  { url: '/organizasyonlar/tahtabacak', category: 'show' },
  
  // Karakterler
  { url: '/organizasyonlar/palyaco-kiralama', category: 'character' },
  { url: '/organizasyonlar/kostumlu-karakterler', category: 'character' },
  { url: '/organizasyonlar/maskot-kiralama', category: 'character' },
  { url: '/organizasyonlar/kiz-maskotlari', category: 'character' },
  { url: '/organizasyonlar/erkek-maskotlari', category: 'character' },
  
  // Doğum Günü
  { url: '/organizasyonlar/dogum-gunu-organizasyonu', category: 'party' },
  { url: '/organizasyonlar/konsept-dogum-gunu', category: 'party' },
  { url: '/organizasyonlar/dogum-gunu', category: 'party' },
  
  // Yiyecek & İçecek
  { url: '/organizasyonlar/pamuk-seker', category: 'food' },
  { url: '/organizasyonlar/cikolata-selalesi', category: 'food' },
  
  // Teknoloji & Eğlence
  { url: '/organizasyonlar/karaoke-etkinligi', category: 'tech' },
  { url: '/organizasyonlar/gezegen-tanitim', category: 'tech' },
  { url: '/organizasyonlar/vr-sanal-gerceklik', category: 'tech' },
  { url: '/organizasyonlar/transformers-robot', category: 'tech' },
  { url: '/organizasyonlar/sisme-oyun-parki', category: 'tech' },
  { url: '/organizasyonlar/cocuk-masa-sandalye', category: 'tech' },
  { url: '/organizasyonlar/atolye-etkinlikleri', category: 'tech' },
  
  // Müzik & Dans
  { url: '/organizasyonlar/muzik-etkinlikleri', category: 'music' },
  { url: '/organizasyonlar/dj-kiralama', category: 'music' },
  { url: '/organizasyonlar/muzisyen-kiralama', category: 'music' },
  { url: '/organizasyonlar/dans-etkinlikleri', category: 'music' },
  { url: '/organizasyonlar/dansci-kiralama', category: 'music' },
  { url: '/organizasyonlar/hostes-kiralama', category: 'service' },
]

// Kategori bazlı priority ve changefreq
const categoryConfig = {
  main: { priority: 0.9, changefreq: 'weekly' },
  show: { priority: 0.9, changefreq: 'weekly' },
  character: { priority: 0.8, changefreq: 'weekly' },
  party: { priority: 0.9, changefreq: 'weekly' },
  food: { priority: 0.7, changefreq: 'weekly' },
  tech: { priority: 0.7, changefreq: 'weekly' },
  music: { priority: 0.8, changefreq: 'weekly' },
  service: { priority: 0.7, changefreq: 'weekly' },
}

// Sitemap XML oluştur
function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n'
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
  xml += '  \n'
  
  // Statik sayfaları ekle
  staticPages.forEach(page => {
    xml += '  <url>\n'
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`
    xml += `    <lastmod>${today}</lastmod>\n`
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`
    xml += `    <priority>${page.priority}</priority>\n`
    xml += '  </url>\n'
    xml += '  \n'
  })
  
  // Hizmet sayfalarını ekle
  servicePages.forEach(page => {
    const config = categoryConfig[page.category] || { priority: 0.7, changefreq: 'weekly' }

    xml += '  <url>\n'
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`
    xml += `    <lastmod>${today}</lastmod>\n`
    xml += `    <changefreq>${config.changefreq}</changefreq>\n`
    xml += `    <priority>${config.priority}</priority>\n`
    xml += '  </url>\n'
    xml += '  \n'
  })

  // Blog sayfalarını ekle
  blogPages.forEach(page => {
    xml += '  <url>\n'
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`
    xml += `    <lastmod>${today}</lastmod>\n`
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`
    xml += `    <priority>${page.priority}</priority>\n`
    xml += '  </url>\n'
    xml += '  \n'
  })

  xml += '</urlset>\n'
  
  return xml
}

// Dosyaya yaz
function writeSitemap() {
  const sitemapContent = generateSitemap()
  const publicDir = path.join(__dirname, '..', 'public')
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  
  // public klasörü yoksa oluştur
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  // Sitemap'i yaz
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8')
  
  console.log('✅ Sitemap generated successfully!')
  console.log(`📍 Location: ${sitemapPath}`)
  console.log(`📊 Total URLs: ${staticPages.length + servicePages.length + blogPages.length}`)
  console.log(`📅 Last Modified: ${today}`)
}

// Scripti çalıştır
writeSitemap()
