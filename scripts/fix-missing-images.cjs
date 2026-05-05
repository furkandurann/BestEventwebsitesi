#!/usr/bin/env node
/**
 * Fix missing image references by mapping to existing alternatives
 */
const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '..')

// Map: missing path -> replacement path (both without leading /)
const replacements = {
  // MomentsSlider
  'content/images/fullpaket/fullpaket1.webp': 'content/images/fullpaket/fullpaketanahero.webp',
  'content/images/bubbleshow/bubbleshow1.webp': 'content/images/bubbleshow/bubbleshowhero.webp',
  'content/images/kurumsal/kurumsal1.webp': 'content/images/kurumsal/061a8dec-ed17-44bb-a6b6-7e26347e9def.webp',
  'content/images/sihirbaz/sihirbaz1.webp': 'content/images/sihirbaz/sihirbazhero.webp',

  // blogPosts - acilis
  'content/images/acilisorganizasyonu/acilisacikgorsell.webp': 'content/images/acilisorganizasyonu/IMG_1379.webp',

  // blogPosts - Kostumlukarakterler
  'content/images/Kostumlukarakterler/elsayenii.webp': 'content/images/Kostumlukarakterler/elsacutee.webp',
  'content/images/Kostumlukarakterler/spidermanyenii.webp': 'content/images/Kostumlukarakterler/spidermancosku.webp',
  'content/images/Kostumlukarakterler/batmanyenii.webp': 'content/images/Kostumlukarakterler/batmanistan.webp',
  'content/images/Kostumlukarakterler/pawpatrolyenii.webp': 'content/images/Kostumlukarakterler/pawpetrolkesinhero.webp',
  'content/images/Kostumlukarakterler/unicornyenii.webp': 'content/images/Kostumlukarakterler/unicornyeniii.webp',
  'content/images/Kostumlukarakterler/denizkiziyenii.webp': 'content/images/Kostumlukarakterler/elsavodafonee.webp',

  // blogPosts - maskotlar
  'content/images/maskotlar/hellokittymaskot.webp': 'content/images/maskotlar/hellokitty.webp',
  'content/images/maskotlar/sonicmaskot.webp': 'content/images/maskotlar/sonicmascot.webp',
  'content/images/maskotlar/lolbebekmaskot.webp': 'content/images/maskotlar/lolbebek.webp',
  'content/images/maskotlar/supermariomaskot.webp': 'content/images/maskotlar/supermario.webp',

  // blogPosts - bubbleshow
  'content/images/bubbleshow/bubbleshoww.webp': 'content/images/bubbleshow/bubbleshownattive.webp',

  // blogPosts - profesyonel
  'content/images/profesyoneldogumgunucekimleri/anaherodogumgunu.webp': 'content/images/cocukdogumgunu/8AE06671-9601-4900-B09B-A4CC20A9E833.webp',

  // costumedCharactersData + CharacterDetail - palyaco
  'content/images/palyaco/palyaconattive3yuzboyamasi.webp': 'content/images/palyaco/palyacoyuzboyama2.webp',
  'content/images/palyaco/palyaconattive1.webp': 'content/images/palyaco/palyaconattivee.webp',
  'content/images/palyaco/palyaconattive2.webp': 'content/images/palyaco/palyaconattiveenbas.webp',
  'content/images/palyaco/palyaconattive.webp': 'content/images/palyaco/palyaconattiveguleryuz.webp',

  // heroSlides
  'content/images/cocukdogumgunu/elsakiralamaistanbul.webp': 'content/images/cocukdogumgunu/elsa.webp',
  // dance files fixed via NFC encoding normalization - no mapping needed
  'content/images/music/jordan-whitfield-eAYO8vKNeFQ-unsplash.webp': 'content/images/music/anamusik.webp',

  // istanbulEtkinlikData
  'content/images/palyaco/palyaco1.webp': 'content/images/palyaco/palyacooo.webp',
  'content/images/bubbleshow/bubble1.webp': 'content/images/bubbleshow/anabubble.webp',

  // localPages services (dir doesn't exist - map to existing)
  'content/images/services/palyaco.webp': 'content/images/palyaco/palyaconattiveguleryuz.webp',
  'content/images/services/bubble-show.webp': 'content/images/bubbleshow/bubbleshowhero.webp',
  'content/images/services/sihirbaz.webp': 'content/images/sihirbaz/sihirbazhero.webp',
  'content/images/services/dogum-gunu.webp': 'content/images/cocukdogumgunu/8AE06671-9601-4900-B09B-A4CC20A9E833.webp',
  'content/images/services/pamuk-seker.webp': 'content/images/Parti Ekipmanları/pamukseker.webp',
  'content/images/services/yuz-boyama.webp': 'content/images/profesyonelmakeup/profesyonelyuzboyamasianafoto.webp',
  'content/images/services/popcorn.webp': 'content/images/Parti Ekipmanları/popcornpamukseker.webp',

  // mascotsData - köpekbaligi
  'content/images/maskotlar/köpekbaligi3.webp': 'content/images/maskotlar/kopekbaligi.webp',

  // dance/lüksledlidansekibi.webp - fixed via NFC encoding normalization
  // music/çellist.webp - fixed via NFC encoding normalization

  // Gallery - root IMG
  'content/images/IMG_9586.webp': 'content/images/cocukdogumgunu/IMG_0612.webp',
  'content/images/IMG_9587.webp': 'content/images/cocukdogumgunu/IMG_0777.webp',
  'content/images/IMG_9588.webp': 'content/images/cocukdogumgunu/IMG_0787.webp',
  'content/images/IMG_9589.webp': 'content/images/cocukdogumgunu/IMG_0790.webp',

  // MagicShow
  'content/images/sihirbaz/IMG_3293.webp': 'content/images/bubbleshow/IMG_3293.webp',
  'content/images/sihirbaz/IMG_4800.webp': 'content/images/sihirbaz/IMG_4864.webp',

  // PlanetEducation + TransformersRobot
  'content/images/cocukdogumgunu/66a266b0-ef8f-4a4a-9e3e-39c657157777.webp': 'content/images/cocukdogumgunu/8e6ea844-2168-4287-bda0-ba0bb00453c8.webp',
}

// konseptpasta - map to existing files in that directory
const pastaFiles = fs.readdirSync(path.join(rootDir, 'public/content/images/konseptpasta'))
  .filter(f => f.endsWith('.webp'))
  .sort()

const pastaMap = {
  'content/images/konseptpasta/pasta1.webp': pastaFiles[0] ? `content/images/konseptpasta/${pastaFiles[0]}` : null,
  'content/images/konseptpasta/pasta2.webp': pastaFiles[1] ? `content/images/konseptpasta/${pastaFiles[1]}` : null,
  'content/images/konseptpasta/pasta3.webp': pastaFiles[2] ? `content/images/konseptpasta/${pastaFiles[2]}` : null,
  'content/images/konseptpasta/pasta4.webp': pastaFiles[3] ? `content/images/konseptpasta/${pastaFiles[3]}` : null,
  'content/images/konseptpasta/pasta5.webp': pastaFiles[4] ? `content/images/konseptpasta/${pastaFiles[4]}` : null,
  'content/images/konseptpasta/pasta6.webp': pastaFiles[5] ? `content/images/konseptpasta/${pastaFiles[5]}` : null,
  'content/images/konseptpasta/pasta7.webp': pastaFiles[6] ? `content/images/konseptpasta/${pastaFiles[6]}` : null,
  'content/images/konseptpasta/pasta8.webp': pastaFiles[7] ? `content/images/konseptpasta/${pastaFiles[7]}` : null,
  'content/images/konseptpasta/default-cake.webp': pastaFiles[0] ? `content/images/konseptpasta/${pastaFiles[0]}` : null,
  'content/images/konseptpasta/pasta-pattern.webp': pastaFiles[9] ? `content/images/konseptpasta/${pastaFiles[9]}` : null,
}

Object.entries(pastaMap).forEach(([k, v]) => {
  if (v) replacements[k] = v
})

let totalFixed = 0
let totalSkipped = 0

// Process each replacement
Object.entries(replacements).forEach(([missing, replacement]) => {
  // Verify replacement exists
  const replacementPath = path.join(rootDir, 'public', replacement)
  if (!fs.existsSync(replacementPath)) {
    console.log(`SKIP: replacement not found: ${replacement}`)
    totalSkipped++
    return
  }

  // Find all source files referencing the missing image
  const missingWithSlash = '/' + missing
  const searchPattern = missing.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  // Scan all src files
  function fixInDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'dist') {
        fixInDir(fullPath)
      } else if (entry.isFile() && /\.(jsx?|tsx?|css|html)$/.test(entry.name)) {
        let content = fs.readFileSync(fullPath, 'utf-8')
        if (content.includes(missing)) {
          const replacementWithSlash = '/' + replacement
          // Replace both with and without leading slash
          let newContent = content
          newContent = newContent.split(missingWithSlash).join(replacementWithSlash)
          newContent = newContent.split(missing).join(replacement)
          if (newContent !== content) {
            fs.writeFileSync(fullPath, newContent, 'utf-8')
            const relPath = path.relative(rootDir, fullPath)
            console.log(`FIXED: ${relPath}: ${path.basename(missing)} -> ${path.basename(replacement)}`)
            totalFixed++
          }
        }
      }
    }
  }

  fixInDir(path.join(rootDir, 'src'))
})

console.log(`\nDone: ${totalFixed} fixes applied, ${totalSkipped} skipped`)
