const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const INPUT_DIR = path.join(__dirname, '..', 'public', 'konseptdogumgunumutlugunumm')
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'content', 'images', 'konseptdetay')

const SIZES = [
  { suffix: '-400w', width: 400 },
  { suffix: '-640w', width: 640 },
  { suffix: '-1024w', width: 1024 },
]

function cleanFilename(name) {
  return name
    .replace(/√/g, '')
    .replace(/[^\w\d.-]/g, '')
    .toLowerCase()
}

async function convertImage(inputPath, baseName) {
  const cleanName = cleanFilename(baseName)

  // Full size webp
  await sharp(inputPath)
    .webp({ quality: 82 })
    .toFile(path.join(OUTPUT_DIR, `${cleanName}.webp`))

  // Responsive variants
  for (const size of SIZES) {
    await sharp(inputPath)
      .resize(size.width, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(OUTPUT_DIR, `${cleanName}${size.suffix}.webp`))
  }

  console.log(`  OK: ${cleanName}`)
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const files = fs.readdirSync(INPUT_DIR).filter(f =>
    /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f)
  )

  console.log(`${files.length} gorsel bulundu, donusturuluyor...\n`)

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file)
    const baseName = path.parse(file).name
    try {
      await convertImage(inputPath, baseName)
    } catch (err) {
      console.error(`  HATA: ${file} - ${err.message}`)
    }
  }

  console.log(`\nTamamlandi! Cikti: ${OUTPUT_DIR}`)
}

main()
