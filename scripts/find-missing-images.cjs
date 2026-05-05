#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, '../src')
const publicDir = path.join(__dirname, '../public')
const missing = []

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const regex = /["'`](\/content\/images\/[^"'`\s})]+\.(?:webp|jpg|jpeg|png|gif|avif|svg))/gi
  let match
  while ((match = regex.exec(content)) !== null) {
    let imgPath = match[1]
    if (imgPath.startsWith('/')) imgPath = imgPath.substring(1)
    const fullPath = path.join(publicDir, imgPath)
    if (!fs.existsSync(fullPath)) {
      const lineNum = content.substring(0, match.index).split('\n').length
      missing.push({ file: filePath, image: imgPath, line: lineNum })
    }
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      walkDir(fullPath)
    } else if (entry.isFile() && /\.(jsx?|tsx?)$/.test(entry.name)) {
      scanFile(fullPath)
    }
  }
}

walkDir(srcDir)

// Group by image
const byImage = {}
missing.forEach(m => {
  if (!byImage[m.image]) byImage[m.image] = []
  byImage[m.image].push({ file: path.relative(path.join(__dirname, '..'), m.file), line: m.line })
})

console.log(`=== MISSING IMAGES (${Object.keys(byImage).length} unique) ===\n`)

Object.entries(byImage).forEach(([img, refs]) => {
  console.log(img)
  refs.forEach(r => console.log(`  -> ${r.file}:${r.line}`))

  // Check if alternative exists in same directory
  const dir = path.dirname(path.join(publicDir, img))
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir)
    const basename = path.basename(img, path.extname(img)).toLowerCase()
    // Try exact base match with different extension
    const exactMatch = files.filter(f => {
      const fb = path.basename(f, path.extname(f)).toLowerCase()
      return fb === basename && f !== path.basename(img)
    })
    if (exactMatch.length > 0) {
      console.log(`  EXACT ALT: ${exactMatch.join(', ')}`)
    }
    // Try partial match (first 10 chars)
    const partial = basename.substring(0, Math.min(10, basename.length))
    const partialMatch = files.filter(f => f.toLowerCase().includes(partial) && !exactMatch.includes(f))
    if (partialMatch.length > 0 && partialMatch.length <= 5) {
      console.log(`  SIMILAR: ${partialMatch.join(', ')}`)
    }
  } else {
    console.log(`  DIR MISSING: ${dir}`)
  }
  console.log()
})

console.log(`\nTotal: ${Object.keys(byImage).length} missing images, ${missing.length} total references`)
