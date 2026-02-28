#!/usr/bin/env node
/**
 * Post-build: Inject font preload hints into dist/index.html
 * Critical fonts: Inter 400 (body), Montserrat 700 (headings), Poppins 700 (display)
 */
const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, '../dist/assets')
const indexPath = path.join(__dirname, '../dist/index.html')

const criticalFontPatterns = [
  'inter-latin-400-normal',
  'montserrat-latin-700-normal',
  'poppins-latin-700-normal',
]

try {
  const files = fs.readdirSync(distDir)
  const fontFiles = files.filter(f =>
    f.endsWith('.woff2') && criticalFontPatterns.some(p => f.includes(p))
  )

  if (fontFiles.length === 0) {
    console.log('No critical fonts found to preload')
    process.exit(0)
  }

  let html = fs.readFileSync(indexPath, 'utf-8')

  const preloadTags = fontFiles.map(f =>
    `<link rel="preload" as="font" type="font/woff2" crossorigin href="/assets/${f}">`
  ).join('\n    ')

  html = html.replace('</head>', `    ${preloadTags}\n  </head>`)
  fs.writeFileSync(indexPath, html, 'utf-8')

  console.log(`Injected ${fontFiles.length} font preload hints:`)
  fontFiles.forEach(f => console.log(`  ✅ /assets/${f}`))
} catch (err) {
  console.error('Font preload injection failed:', err.message)
}
