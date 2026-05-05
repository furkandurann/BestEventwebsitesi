import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { blogPosts } from '../src/data/blogPosts.js'
import { allConcepts } from '../src/data/conceptsData.js'
import { serviceDetailPages } from '../src/data/serviceDetailPages.js'
import { getAllLocalPageUrls } from '../src/data/localPages.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Site base URL - www olmadan (htaccess www->non-www redirect yapiyor)
const BASE_URL = 'https://bestevent.com.tr'

// Bugunku tarih (ISO format)
const today = new Date().toISOString().split('T')[0]

// === SAYFA TANIMLARI ===

// Statik sayfalar (manuel)
const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/hakkimizda', priority: 0.8, changefreq: 'monthly' },
  { url: '/galeri', priority: 0.7, changefreq: 'weekly' },
  { url: '/iletisim', priority: 0.9, changefreq: 'monthly' },
  { url: '/is-ilanlari', priority: 0.8, changefreq: 'weekly' },
  { url: '/ekibimiz', priority: 0.7, changefreq: 'monthly' },
  { url: '/hizmet-bolgeleri', priority: 0.8, changefreq: 'monthly' },
  { url: '/organik-pastalar', priority: 0.8, changefreq: 'weekly' },
  { url: '/blog', priority: 0.8, changefreq: 'weekly' },
  { url: '/vaka-analizi', priority: 0.8, changefreq: 'monthly' },
]

const jobPages = [
  { url: '/is-ilanlari/palyaco-is-ilani', priority: 0.8, changefreq: 'weekly' },
  { url: '/is-ilanlari/animator-is-ilani', priority: 0.8, changefreq: 'weekly' },
  { url: '/is-ilanlari/maskot-is-ilani', priority: 0.8, changefreq: 'weekly' },
  { url: '/is-ilanlari/oyun-ablasi-abisi-is-ilani', priority: 0.8, changefreq: 'weekly' },
]

// Blog sayfalari - blogPosts.js'den dinamik olarak okunuyor
const blogPages = blogPosts.map(post => ({
  url: `/blog/${post.slug}`,
  priority: 0.4,
  changefreq: 'monthly'
}))

// Hizmet sayfalari (otomatik priority hesaplama)
const servicePages = [
  // Cocuk Etkinlikleri
  { url: '/organizasyonlar/cocuk-etkinlikleri', category: 'main' },

  // Gosteriler (yuksek oncelik)
  { url: '/organizasyonlar/yuz-boyama', category: 'show' },
  { url: '/organizasyonlar/magic-show', category: 'show' },
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

  // Dogum Gunu
  { url: '/organizasyonlar/dogum-gunu-organizasyonu', category: 'party' },
  { url: '/organizasyonlar/konsept-dogum-gunu', category: 'party' },

  // Noel Baba
  { url: '/organizasyonlar/noel-baba-kiralama', category: 'character' },

  // Full Paket
  { url: '/organizasyonlar/full-paket-organizasyon', category: 'party' },

  // Yiyecek & Icecek
  { url: '/organizasyonlar/pamuk-seker', category: 'food' },
  { url: '/organizasyonlar/cikolata-selalesi', category: 'food' },

  // Teknoloji & Eglence
  { url: '/organizasyonlar/karaoke-etkinligi', category: 'tech' },
  { url: '/organizasyonlar/gezegen-tanitim', category: 'tech' },
  { url: '/organizasyonlar/vr-sanal-gerceklik', category: 'tech' },
  { url: '/organizasyonlar/transformers-robot', category: 'tech' },
  { url: '/organizasyonlar/sisme-oyun-parki', category: 'tech' },
  { url: '/organizasyonlar/cocuk-masa-sandalye', category: 'tech' },
  { url: '/organizasyonlar/atolye-etkinlikleri', category: 'tech' },

  // Muzik & Dans
  { url: '/organizasyonlar/muzik-etkinlikleri', category: 'music' },
  { url: '/organizasyonlar/dj-kiralama', category: 'music' },
  { url: '/organizasyonlar/muzisyen-kiralama', category: 'music' },
  { url: '/organizasyonlar/dans-etkinlikleri', category: 'music' },
  { url: '/organizasyonlar/dansci-kiralama', category: 'music' },
  { url: '/organizasyonlar/hostes-kiralama', category: 'service' },
]

const kingServicePriorities = new Set([
  '/organizasyonlar/cocuk-etkinlikleri',
  '/organizasyonlar/konsept-dogum-gunu',
  '/organizasyonlar/dogum-gunu-organizasyonu',
  '/organizasyonlar/kostumlu-karakterler',
  '/organizasyonlar/maskot-kiralama',
  '/organizasyonlar/palyaco-kiralama',
  '/organizasyonlar/magic-show',
  '/organizasyonlar/bubble-show',
  '/organizasyonlar/pamuk-seker',
  '/organizasyonlar/yuz-boyama',
  '/organizasyonlar/noel-baba-kiralama',
  '/organizasyonlar/full-paket-organizasyon'
])

const servicePagesWithPriority = servicePages.map(page => (
  kingServicePriorities.has(page.url)
    ? { ...page, priority: 1.0 }
    : page
))

const serviceDetailRoutes = serviceDetailPages.map((page) => ({
  url: `/hizmet-detay/${page.slug}`,
  priority: 0.7,
  changefreq: 'monthly'
}))

// Kostumlu karakter detay sayfalari
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

// Maskot detay sayfalari
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

// Konsept detay sayfalari
const conceptPages = allConcepts.map(c => ({
  url: `/konsept/${c.slug}`,
  priority: 0.8,
  changefreq: 'weekly'
}))

const localServiceAliasMap = {
  'sihirbaz-kiralama': 'magic-show',
  'bubble-show-kiralama': 'bubble-show',
  'profesyonel-yuz-boyama': 'yuz-boyama',
  'profesyonel-makyaj': 'yuz-boyama',
  'dogum-gunu': 'dogum-gunu-organizasyonu',
  'pamuk-seker-arabasi-kiralama': 'pamuk-seker',
  'popcorn-arabasi-kiralama': 'pamuk-seker',
}

const redirectedPaths = new Set([
  '/organizasyonlar',
  '/organizasyonlar/sihirbaz',
  '/organizasyonlar/sihirbaz-kiralama',
  '/organizasyonlar/bubble-show-kiralama',
  '/organizasyonlar/pamuk-seker-arabasi-kiralama',
  '/organizasyonlar/profesyonel-yuz-boyama',
  '/organizasyonlar/profesyonel-makyaj',
  '/organizasyonlar/dogum-gunu',
  '/organizasyonlar/dansci-kiralama',
  '/organizasyonlar/hostes-kiralama',
])

const localLandingPages = getAllLocalPageUrls().map(item => ({
  url: item.url,
  priority: 0.4,
  changefreq: 'monthly'
}))

// Case Study sayfalari (dinamik - varsa)
let caseStudyPages = []
try {
  const { caseStudies } = await import('../src/data/caseStudies.js')
  if (caseStudies && caseStudies.length > 0) {
    caseStudyPages = caseStudies.map(cs => ({
      url: `/vaka-analizi/${cs.slug}`,
      priority: 0.8,
      changefreq: 'monthly'
    }))
  }
} catch {
  // caseStudies.js henuz yok, skip
}

// Kategori bazli priority ve changefreq
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

// === SITEMAP GENERATION ===

function normalizeSitemapPath(rawPath) {
  const sanitized = String(rawPath || '')
    .split(/[?#]/)[0]
    .trim()
    .toLowerCase()

  if (!sanitized) return ''

  const withLeadingSlash = sanitized.startsWith('/') ? sanitized : `/${sanitized}`
  const noDoubleSlash = withLeadingSlash.replace(/\/{2,}/g, '/')
  let normalized = noDoubleSlash

  // URL standardizasyonu: /organizasyonlar/<service>/<district> ise service aliaslarını normalize et
  const parts = normalized.split('/').filter(Boolean)
  if (parts.length >= 2 && parts[0] === 'organizasyonlar') {
    const canonicalService = localServiceAliasMap[parts[1]] || parts[1]
    parts[1] = canonicalService
    normalized = `/${parts.join('/')}`
  }

  normalized = normalized.replace(/\/+$/, '')
  return normalized || '/'
}

function isValidSitemapPage(pathname) {
  if (!pathname || typeof pathname !== 'string') return false
  if (!pathname.startsWith('/')) return false
  if (pathname.includes(':') || pathname.includes('{') || pathname.includes('}') || pathname.includes('*')) return false
  if (pathname !== '/' && pathname.endsWith('/')) return false
  if (redirectedPaths.has(pathname)) return false
  return true
}

function normalizePageCollection(pages = []) {
  const seen = new Map()

  for (const page of pages) {
    const normalizedPath = normalizeSitemapPath(page?.url)
    if (!isValidSitemapPage(normalizedPath)) continue

    const next = { ...page, url: normalizedPath }
    const existing = seen.get(normalizedPath)

    if (!existing) {
      seen.set(normalizedPath, next)
      continue
    }

    const nextPriority = next.priority || categoryConfig[next.category]?.priority || 0.7
    const existingPriority = existing.priority || categoryConfig[existing.category]?.priority || 0.7

    if (nextPriority > existingPriority) {
      seen.set(normalizedPath, {
        ...existing,
        priority: next.priority || existing.priority,
        changefreq: next.changefreq || existing.changefreq,
        category: next.category || existing.category,
      })
    }
  }

  return [...seen.values()]
}

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

function generateSitemapXml(pages) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n'
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
  pages.forEach(page => { xml += buildUrlEntry(page) })
  xml += '</urlset>\n'
  return xml
}

function generateSitemapIndex(sitemapFiles) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  sitemapFiles.forEach(file => {
    xml += '  <sitemap>\n'
    xml += `    <loc>${BASE_URL}/${file}</loc>\n`
    xml += `    <lastmod>${today}</lastmod>\n`
    xml += '  </sitemap>\n'
  })
  xml += '</sitemapindex>\n'
  return xml
}

// === ANA SITEMAP (geriye uyumlu - tum URL'ler tek dosyada) ===

function generateFullSitemap() {
  const allPages = normalizePageCollection([
    ...staticPages,
    ...jobPages,
    ...servicePagesWithPriority,
    ...serviceDetailRoutes,
    ...blogPages,
    ...characterPages,
    ...mascotPages,
    ...conceptPages,
    ...localLandingPages,
    ...caseStudyPages,
  ])
  return generateSitemapXml(allPages)
}

// === SEGMENTED SITEMAPS ===

function generateSegmentedSitemaps() {
  const pagesAndServices = normalizePageCollection([...staticPages, ...jobPages, ...servicePagesWithPriority, ...serviceDetailRoutes, ...conceptPages, ...caseStudyPages])
  const normalizedBlogs = normalizePageCollection(blogPages)
  const normalizedLocal = normalizePageCollection(localLandingPages)
  const characters = [...characterPages, ...mascotPages]
  const normalizedCharacters = normalizePageCollection(characters)

  return {
    'sitemap-pages.xml': generateSitemapXml(pagesAndServices),
    'sitemap-blog.xml': generateSitemapXml(normalizedBlogs),
    'sitemap-local.xml': generateSitemapXml(normalizedLocal),
    'sitemap-characters.xml': generateSitemapXml(normalizedCharacters),
  }
}

// Dosyaya yaz
function writeSitemaps() {
  const publicDir = path.join(__dirname, '..', 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  // 1) Ana sitemap.xml (geriye uyumlu - robots.txt buna isaret ediyor)
  const fullSitemap = generateFullSitemap()
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), fullSitemap, 'utf-8')

  // 2) Segmented sitemaps
  const segmented = generateSegmentedSitemaps()
  const sitemapFiles = Object.keys(segmented)

  for (const [filename, content] of Object.entries(segmented)) {
    fs.writeFileSync(path.join(publicDir, filename), content, 'utf-8')
  }

  // 3) Sitemap index
  const indexContent = generateSitemapIndex(sitemapFiles)
  fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), indexContent, 'utf-8')

  // Ozet
  const totalUrls = normalizePageCollection([
    ...staticPages,
    ...jobPages,
    ...servicePagesWithPriority,
    ...serviceDetailRoutes,
    ...blogPages,
    ...characterPages,
    ...mascotPages,
    ...conceptPages,
    ...localLandingPages,
    ...caseStudyPages,
  ]).length

  console.log('Sitemaps generated successfully!')
  console.log(`Base URL: ${BASE_URL}`)
  console.log(`Last Modified: ${today}`)
  console.log(`Total URLs: ${totalUrls}`)
  console.log('Files generated:')
  console.log(`  - sitemap.xml (full - ${totalUrls} URLs)`)
  console.log(`  - sitemap-index.xml (index)`)
  sitemapFiles.forEach(f => {
    const count = segmented[f].split('<url>').length - 1
    console.log(`  - ${f} (${count} URLs)`)
  })
}

writeSitemaps()
