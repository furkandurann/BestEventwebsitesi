import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Site base URL - www olmadan (htaccess www→non-www redirect yapıyor)
const BASE_URL = 'https://bestevent.com.tr'

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
  { url: '/hizmet-bolgeleri', priority: 0.8, changefreq: 'monthly' },
  { url: '/organik-pastalar', priority: 0.8, changefreq: 'weekly' },
  { url: '/blog', priority: 0.8, changefreq: 'weekly' },
]

// Blog sayfaları
const blogPages = [
  // Mevcut 6 blog
  { url: '/blog/acilis-organizasyonu-istanbul', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/palyaco-kiralama-istanbul', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/sihirbaz-gosterisi-istanbul', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/bubble-show-istanbul', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/palyaco-gezegeni', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/istanbul-etkinlik-rehberi', priority: 0.7, changefreq: 'monthly' },
  // Yeni 14 blog
  { url: '/blog/palyaco-kiz-kulesi-organizasyonu', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/palyaco-dogum-gunu-rehberi', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/sihirbaz-gokturk-at-ciftligi', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/sihirbaz-kiralama-rehberi', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/bubble-show-ne-kadar-su-harcar', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/bubble-show-kiralama-rehberi', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/dogum-gunu-organizasyonu-rehberi', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/dogum-gunu-mekan-secimi', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/pamuk-seker-etkinlik-rehberi', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/pamuk-seker-dogum-gunu-organizasyonu', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/kostumlu-karakter-kiralama-rehberi', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/kostumlu-karakter-dogum-gunu', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/yuz-boyama-kiralama-rehberi', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/yuz-boyama-dogum-gunu-organizasyonu', priority: 0.7, changefreq: 'monthly' },
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

  // Noel Baba
  { url: '/organizasyonlar/noel-baba-kiralama', category: 'character' },

  // Full Paket
  { url: '/organizasyonlar/full-paket-organizasyon', category: 'party' },

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

// Kostümlü karakter detay sayfaları
const characterPages = [
  'elsa-kiralama-istanbul',
  'pamuk-prenses-kiralama-istanbul',
  'minnie-mouse-kiralama-istanbul',
  'deniz-kizi-kiralama-istanbul',
  'unicorn-kiralama-istanbul',
  'spiderman-kiralama-istanbul',
  'batman-kiralama-istanbul',
  'paw-patrol-kiralama-istanbul',
  'palyaco-kiralama-istanbul',
  'mickey-mouse-kiralama-istanbul',
  'masa-koca-ayi-kiralama-istanbul',
  'pikachu-kiralama-istanbul',
  'noel-baba-kiralama-istanbul',
].map(slug => ({ url: `/karakter/${slug}`, priority: 0.7, changefreq: 'monthly' }))

// Maskot detay sayfaları
const mascotPages = [
  'hello-kitty-maskot-istanbul',
  'minnie-mouse-maskot-istanbul',
  'kuromi-maskot-istanbul',
  'unicorn-maskot-istanbul',
  'lol-bebek-maskot-istanbul',
  'sevimli-tavsan-maskot-istanbul',
  'sevimli-kedi-maskot-istanbul',
  'kalp-maskot-istanbul',
  'sonic-maskot-istanbul',
  'super-mario-maskot-istanbul',
  'paw-patrol-maskot-istanbul',
  'pikachu-maskot-istanbul',
  'mickey-mouse-maskot-istanbul',
  'aslan-maskot-istanbul',
  'kopekbaligi-maskot-istanbul',
  'winnie-the-pooh-maskot-istanbul',
  'tweety-maskot-istanbul',
  'daffy-duck-maskot-istanbul',
  'panda-maskot-istanbul',
  'kutup-ayisi-maskot-istanbul',
  'masa-koca-ayi-maskot-istanbul',
  'labubu-maskot-istanbul',
  'halloween-maskot-istanbul',
].map(slug => ({ url: `/maskot/${slug}`, priority: 0.6, changefreq: 'monthly' }))

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

// URL oluşturma helper
function buildUrlEntry(page) {
  const priority = page.priority || (categoryConfig[page.category]?.priority || 0.7)
  const changefreq = page.changefreq || (categoryConfig[page.category]?.changefreq || 'weekly')

  let xml = '  <url>\n'
  xml += `    <loc>${BASE_URL}${page.url}</loc>\n`
  xml += `    <lastmod>${today}</lastmod>\n`
  xml += `    <changefreq>${changefreq}</changefreq>\n`
  xml += `    <priority>${priority}</priority>\n`
  xml += '  </url>\n'
  return xml
}

// Sitemap XML oluştur
function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n'
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'

  // Statik sayfalar
  staticPages.forEach(page => { xml += buildUrlEntry(page) })

  // Hizmet sayfaları
  servicePages.forEach(page => { xml += buildUrlEntry(page) })

  // Blog sayfaları
  blogPages.forEach(page => { xml += buildUrlEntry(page) })

  // Karakter detay sayfaları
  characterPages.forEach(page => { xml += buildUrlEntry(page) })

  // Maskot detay sayfaları
  mascotPages.forEach(page => { xml += buildUrlEntry(page) })

  xml += '</urlset>\n'

  return xml
}

// Dosyaya yaz
function writeSitemap() {
  const sitemapContent = generateSitemap()
  const publicDir = path.join(__dirname, '..', 'public')
  const sitemapPath = path.join(publicDir, 'sitemap.xml')

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8')

  const totalUrls = staticPages.length + servicePages.length + blogPages.length + characterPages.length + mascotPages.length
  console.log('Sitemap generated successfully!')
  console.log(`Location: ${sitemapPath}`)
  console.log(`Total URLs: ${totalUrls}`)
  console.log(`Base URL: ${BASE_URL}`)
  console.log(`Last Modified: ${today}`)
}

writeSitemap()
