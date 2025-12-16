import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ANSI Color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
}

// Build directory
const DIST_DIR = path.join(__dirname, '..', 'dist')

// Critical files that MUST exist
const CRITICAL_FILES = [
  'index.html',
  '.htaccess',
  'robots.txt',
  'sitemap.xml',
]

// Critical directories
const CRITICAL_DIRS = [
  'assets',
  'assets/js',
  'assets/css',
]

// Size thresholds (bytes)
const SIZE_LIMITS = {
  maxBundleSize: 5 * 1024 * 1024, // 5MB (total)
  maxChunkSize: 1 * 1024 * 1024,  // 1MB (per chunk)
  warnBundleSize: 3 * 1024 * 1024, // 3MB warning
}

let hasErrors = false
let hasWarnings = false

// Utility functions
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function error(message) {
  hasErrors = true
  log(`❌ ERROR: ${message}`, 'red')
}

function warning(message) {
  hasWarnings = true
  log(`⚠️  WARNING: ${message}`, 'yellow')
}

function success(message) {
  log(`✅ ${message}`, 'green')
}

function info(message) {
  log(`ℹ️  ${message}`, 'cyan')
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

// 1. Check if dist/ directory exists
function checkDistExists() {
  info('Checking dist/ directory...')
  
  if (!fs.existsSync(DIST_DIR)) {
    error('dist/ directory does not exist! Run "npm run build" first.')
    return false
  }
  
  success('dist/ directory exists')
  return true
}

// 2. Check critical files
function checkCriticalFiles() {
  info('Checking critical files...')
  
  let allFilesExist = true
  
  CRITICAL_FILES.forEach(file => {
    const filePath = path.join(DIST_DIR, file)
    if (!fs.existsSync(filePath)) {
      error(`Missing critical file: ${file}`)
      allFilesExist = false
    } else {
      const stats = fs.statSync(filePath)
      success(`${file} (${formatBytes(stats.size)})`)
    }
  })
  
  return allFilesExist
}

// 3. Check critical directories
function checkCriticalDirs() {
  info('Checking critical directories...')
  
  let allDirsExist = true
  
  CRITICAL_DIRS.forEach(dir => {
    const dirPath = path.join(DIST_DIR, dir)
    if (!fs.existsSync(dirPath)) {
      error(`Missing critical directory: ${dir}`)
      allDirsExist = false
    } else {
      const files = fs.readdirSync(dirPath)
      success(`${dir}/ (${files.length} files)`)
    }
  })
  
  return allDirsExist
}

// 4. Check bundle sizes
function checkBundleSizes() {
  info('Checking bundle sizes...')
  
  const jsDir = path.join(DIST_DIR, 'assets', 'js')
  
  if (!fs.existsSync(jsDir)) {
    error('assets/js directory not found!')
    return false
  }
  
  const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js') && !f.endsWith('.gz') && !f.endsWith('.br'))
  
  let totalSize = 0
  let largeChunks = []
  
  jsFiles.forEach(file => {
    const filePath = path.join(jsDir, file)
    const stats = fs.statSync(filePath)
    totalSize += stats.size
    
    if (stats.size > SIZE_LIMITS.maxChunkSize) {
      largeChunks.push({ file, size: stats.size })
    }
  })
  
  // Total bundle size check
  if (totalSize > SIZE_LIMITS.maxBundleSize) {
    error(`Total JS bundle size (${formatBytes(totalSize)}) exceeds limit (${formatBytes(SIZE_LIMITS.maxBundleSize)})`)
  } else if (totalSize > SIZE_LIMITS.warnBundleSize) {
    warning(`Total JS bundle size is ${formatBytes(totalSize)} (approaching limit)`)
  } else {
    success(`Total JS bundle size: ${formatBytes(totalSize)}`)
  }
  
  // Individual chunk size check
  if (largeChunks.length > 0) {
    warning(`${largeChunks.length} chunk(s) exceed ${formatBytes(SIZE_LIMITS.maxChunkSize)}:`)
    largeChunks.forEach(({ file, size }) => {
      log(`  • ${file}: ${formatBytes(size)}`, 'yellow')
    })
  } else {
    success(`All JS chunks are under ${formatBytes(SIZE_LIMITS.maxChunkSize)}`)
  }
  
  return totalSize <= SIZE_LIMITS.maxBundleSize
}

// 5. Check index.html content
function checkIndexHtml() {
  info('Checking index.html content...')
  
  const indexPath = path.join(DIST_DIR, 'index.html')
  const content = fs.readFileSync(indexPath, 'utf-8')
  
  // Check for critical elements
  const checks = [
    { pattern: /<script[^>]*type="module"/, name: 'Module script' },
    { pattern: /<link[^>]*rel="stylesheet"/, name: 'CSS link' },
    { pattern: /<meta[^>]*charset/, name: 'Charset meta' },
    { pattern: /<meta[^>]*viewport/, name: 'Viewport meta' },
    { pattern: /<title>/, name: 'Title tag' },
  ]
  
  checks.forEach(({ pattern, name }) => {
    if (pattern.test(content)) {
      success(`${name} found`)
    } else {
      warning(`${name} not found in index.html`)
    }
  })
  
  return true
}

// 6. Check .htaccess content
function checkHtaccess() {
  info('Checking .htaccess configuration...')
  
  const htaccessPath = path.join(DIST_DIR, '.htaccess')
  
  if (!fs.existsSync(htaccessPath)) {
    error('.htaccess file not found!')
    return false
  }
  
  const content = fs.readFileSync(htaccessPath, 'utf-8')
  
  // Check for critical rules
  const checks = [
    { pattern: /RewriteEngine On/i, name: 'RewriteEngine enabled' },
    { pattern: /RewriteRule.*index\.html/i, name: 'SPA rewrite rule' },
    { pattern: /RewriteCond.*!-f/i, name: 'File check condition' },
  ]
  
  checks.forEach(({ pattern, name }) => {
    if (pattern.test(content)) {
      success(`${name}`)
    } else {
      error(`${name} not found in .htaccess`)
    }
  })
  
  return true
}

// 7. Check sitemap.xml
function checkSitemap() {
  info('Checking sitemap.xml...')
  
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml')
  
  if (!fs.existsSync(sitemapPath)) {
    error('sitemap.xml not found!')
    return false
  }
  
  const content = fs.readFileSync(sitemapPath, 'utf-8')
  
  // Count URLs
  const urlMatches = content.match(/<loc>/g)
  const urlCount = urlMatches ? urlMatches.length : 0
  
  if (urlCount === 0) {
    error('sitemap.xml contains no URLs!')
    return false
  }
  
  success(`sitemap.xml contains ${urlCount} URLs`)
  
  // Check for base URL
  if (content.includes('https://www.bestevent.com.tr')) {
    success('Correct base URL found in sitemap')
  } else {
    error('Base URL not correct in sitemap.xml')
  }
  
  return true
}

// 8. Check robots.txt
function checkRobots() {
  info('Checking robots.txt...')
  
  const robotsPath = path.join(DIST_DIR, 'robots.txt')
  
  if (!fs.existsSync(robotsPath)) {
    warning('robots.txt not found (not critical but recommended)')
    return true
  }
  
  const content = fs.readFileSync(robotsPath, 'utf-8')
  
  if (content.includes('Sitemap:')) {
    success('Sitemap reference found in robots.txt')
  } else {
    warning('robots.txt does not reference sitemap')
  }
  
  return true
}

// 9. Check for source maps (should not exist in production)
function checkSourceMaps() {
  info('Checking for source maps...')
  
  const jsDir = path.join(DIST_DIR, 'assets', 'js')
  
  if (!fs.existsSync(jsDir)) {
    return true
  }
  
  const sourceMapFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.map'))
  
  if (sourceMapFiles.length > 0) {
    warning(`Found ${sourceMapFiles.length} source map file(s) - consider disabling for production`)
    sourceMapFiles.slice(0, 5).forEach(file => {
      log(`  • ${file}`, 'yellow')
    })
  } else {
    success('No source maps found (good for production)')
  }
  
  return true
}

// 10. Calculate total build size
function calculateTotalSize() {
  info('Calculating total build size...')
  
  let totalSize = 0
  
  function getDirectorySize(dir) {
    const files = fs.readdirSync(dir)
    
    files.forEach(file => {
      const filePath = path.join(dir, file)
      const stats = fs.statSync(filePath)
      
      if (stats.isDirectory()) {
        getDirectorySize(filePath)
      } else {
        totalSize += stats.size
      }
    })
  }
  
  getDirectorySize(DIST_DIR)
  
  success(`Total build size: ${formatBytes(totalSize)}`)
  
  return true
}

// Main verification function
function verifyBuild() {
  log('\n' + '='.repeat(60), 'bold')
  log('🔍 BUILD VERIFICATION STARTED', 'bold')
  log('='.repeat(60) + '\n', 'bold')
  
  const startTime = Date.now()
  
  // Run all checks
  const checks = [
    checkDistExists,
    checkCriticalFiles,
    checkCriticalDirs,
    checkBundleSizes,
    checkIndexHtml,
    checkHtaccess,
    checkSitemap,
    checkRobots,
    checkSourceMaps,
    calculateTotalSize,
  ]
  
  checks.forEach(check => {
    console.log('')
    check()
  })
  
  const duration = ((Date.now() - startTime) / 1000).toFixed(2)
  
  // Summary
  console.log('')
  log('='.repeat(60), 'bold')
  log('📊 VERIFICATION SUMMARY', 'bold')
  log('='.repeat(60), 'bold')
  
  if (hasErrors) {
    log('❌ BUILD VERIFICATION FAILED', 'red')
    log(`Found critical errors that must be fixed before deployment`, 'red')
    log(`\nDuration: ${duration}s\n`, 'cyan')
    process.exit(1)
  } else if (hasWarnings) {
    log('⚠️  BUILD VERIFICATION PASSED WITH WARNINGS', 'yellow')
    log(`Build is deployable but consider fixing warnings`, 'yellow')
    log(`\nDuration: ${duration}s\n`, 'cyan')
    process.exit(0)
  } else {
    log('✅ BUILD VERIFICATION PASSED', 'green')
    log(`All checks passed! Build is ready for deployment 🚀`, 'green')
    log(`\nDuration: ${duration}s\n`, 'cyan')
    process.exit(0)
  }
}

// Run verification
verifyBuild()
