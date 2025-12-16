import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

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

let hasErrors = false
let hasWarnings = false
let checkResults = []

// Utility functions
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function error(message) {
  hasErrors = true
  log(`❌ ${message}`, 'red')
  checkResults.push({ status: 'ERROR', message })
}

function warning(message) {
  hasWarnings = true
  log(`⚠️  ${message}`, 'yellow')
  checkResults.push({ status: 'WARNING', message })
}

function success(message) {
  log(`✅ ${message}`, 'green')
  checkResults.push({ status: 'SUCCESS', message })
}

function info(message) {
  log(`ℹ️  ${message}`, 'cyan')
}

function section(title) {
  console.log('')
  log('─'.repeat(60), 'cyan')
  log(`📋 ${title}`, 'bold')
  log('─'.repeat(60), 'cyan')
  console.log('')
}

// 1. Pre-deployment checks
function checkGitStatus() {
  info('Checking Git status...')
  
  try {
    // Check if there are uncommitted changes
    const status = execSync('git status --porcelain', { encoding: 'utf-8' })
    
    if (status.trim().length > 0) {
      warning('You have uncommitted changes. Consider committing before deployment.')
      const lines = status.trim().split('\n').slice(0, 5)
      lines.forEach(line => log(`  ${line}`, 'yellow'))
      if (status.trim().split('\n').length > 5) {
        log(`  ... and ${status.trim().split('\n').length - 5} more files`, 'yellow')
      }
    } else {
      success('Git working directory is clean')
    }
    
    // Get current branch
    const branch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim()
    info(`Current branch: ${branch}`)
    
    if (branch !== 'main' && branch !== 'master') {
      warning(`You are on '${branch}' branch. Consider deploying from 'main' or 'master'.`)
    } else {
      success(`On ${branch} branch`)
    }
    
  } catch (err) {
    warning('Could not check Git status (not a git repository or git not installed)')
  }
}

function checkNodeModules() {
  info('Checking node_modules...')
  
  const nodeModulesPath = path.join(__dirname, '..', 'node_modules')
  
  if (!fs.existsSync(nodeModulesPath)) {
    error('node_modules not found! Run "npm install" first.')
    return false
  }
  
  success('node_modules exists')
  return true
}

function checkPackageJson() {
  info('Checking package.json...')
  
  const packageJsonPath = path.join(__dirname, '..', 'package.json')
  
  if (!fs.existsSync(packageJsonPath)) {
    error('package.json not found!')
    return false
  }
  
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  
  // Check for required scripts
  const requiredScripts = ['build', 'generate-sitemap', 'fix-webp-names']
  const missingScripts = requiredScripts.filter(script => !packageJson.scripts[script])
  
  if (missingScripts.length > 0) {
    error(`Missing required scripts: ${missingScripts.join(', ')}`)
    return false
  }
  
  success('All required scripts present in package.json')
  
  // Check for critical dependencies
  const requiredDeps = ['react', 'react-dom', 'react-router-dom', 'vite']
  const missingDeps = requiredDeps.filter(dep => 
    !packageJson.dependencies[dep] && !packageJson.devDependencies[dep]
  )
  
  if (missingDeps.length > 0) {
    error(`Missing critical dependencies: ${missingDeps.join(', ')}`)
    return false
  }
  
  success('All critical dependencies present')
  return true
}

function checkEnvironmentFiles() {
  info('Checking environment files...')
  
  const envExamplePath = path.join(__dirname, '..', '.env.example')
  const envProdPath = path.join(__dirname, '..', '.env.production')
  
  if (!fs.existsSync(envExamplePath)) {
    warning('.env.example not found (recommended for documentation)')
  } else {
    success('.env.example exists')
  }
  
  if (!fs.existsSync(envProdPath)) {
    warning('.env.production not found (using default environment variables)')
  } else {
    success('.env.production exists')
    
    // Check for critical variables
    const envContent = fs.readFileSync(envProdPath, 'utf-8')
    const criticalVars = ['VITE_SITE_URL', 'VITE_WHATSAPP_NUMBER']
    
    criticalVars.forEach(varName => {
      if (envContent.includes(`${varName}=`)) {
        success(`${varName} is defined`)
      } else {
        warning(`${varName} not found in .env.production`)
      }
    })
  }
}

function checkPublicFiles() {
  info('Checking public files...')
  
  const publicDir = path.join(__dirname, '..', 'public')
  const requiredFiles = ['.htaccess', 'robots.txt', 'sitemap.xml']
  
  requiredFiles.forEach(file => {
    const filePath = path.join(publicDir, file)
    if (fs.existsSync(filePath)) {
      success(`${file} exists in public/`)
    } else {
      error(`${file} not found in public/`)
    }
  })
}

function checkViteConfig() {
  info('Checking vite.config.js...')
  
  const viteConfigPath = path.join(__dirname, '..', 'vite.config.js')
  
  if (!fs.existsSync(viteConfigPath)) {
    error('vite.config.js not found!')
    return false
  }
  
  const viteConfig = fs.readFileSync(viteConfigPath, 'utf-8')
  
  // Check for critical configurations
  const checks = [
    { pattern: /compression/, name: 'Compression plugin' },
    { pattern: /ViteImageOptimizer/, name: 'Image optimization' },
    { pattern: /VitePWA/, name: 'PWA support' },
    { pattern: /manualChunks/, name: 'Code splitting' },
  ]
  
  checks.forEach(({ pattern, name }) => {
    if (pattern.test(viteConfig)) {
      success(`${name} configured`)
    } else {
      warning(`${name} not found in vite.config.js`)
    }
  })
  
  return true
}

// 2. Build preparation
function cleanDist() {
  info('Cleaning old dist/ directory...')
  
  const distPath = path.join(__dirname, '..', 'dist')
  
  if (fs.existsSync(distPath)) {
    try {
      fs.rmSync(distPath, { recursive: true, force: true })
      success('Old dist/ directory removed')
    } catch (err) {
      error(`Failed to remove dist/: ${err.message}`)
      return false
    }
  } else {
    info('No existing dist/ directory to clean')
  }
  
  return true
}

// 3. Post-build checks (links to verify-build.js)
function runBuildVerification() {
  info('Running build verification...')
  
  try {
    execSync('node scripts/verify-build.js', { 
      stdio: 'inherit',
      encoding: 'utf-8'
    })
    success('Build verification passed')
    return true
  } catch (err) {
    error('Build verification failed! Check output above.')
    return false
  }
}

// 4. Deployment readiness summary
function generateDeploymentSummary() {
  section('DEPLOYMENT SUMMARY')
  
  const errorCount = checkResults.filter(r => r.status === 'ERROR').length
  const warningCount = checkResults.filter(r => r.status === 'WARNING').length
  const successCount = checkResults.filter(r => r.status === 'SUCCESS').length
  
  log(`Total Checks: ${checkResults.length}`, 'cyan')
  log(`✅ Passed: ${successCount}`, 'green')
  log(`⚠️  Warnings: ${warningCount}`, 'yellow')
  log(`❌ Errors: ${errorCount}`, 'red')
  
  console.log('')
  
  if (errorCount > 0) {
    log('🚫 DEPLOYMENT NOT RECOMMENDED', 'red')
    log('Fix critical errors before deploying to production', 'red')
    return false
  } else if (warningCount > 0) {
    log('⚠️  DEPLOYMENT POSSIBLE WITH CAUTION', 'yellow')
    log('Consider fixing warnings for optimal deployment', 'yellow')
    return true
  } else {
    log('✅ READY FOR DEPLOYMENT', 'green')
    log('All checks passed! You can proceed with deployment.', 'green')
    return true
  }
}

// 5. Generate deployment instructions
function generateDeploymentInstructions() {
  section('DEPLOYMENT INSTRUCTIONS')
  
  log('Next steps:', 'cyan')
  console.log('')
  log('1. Build the project:', 'bold')
  log('   npm run build', 'cyan')
  console.log('')
  log('2. Verify build:', 'bold')
  log('   node scripts/verify-build.js', 'cyan')
  console.log('')
  log('3. Deploy to Natro Hosting:', 'bold')
  log('   - Login to cPanel (https://panel.natro.com)', 'cyan')
  log('   - Navigate to File Manager → public_html/', 'cyan')
  log('   - Upload all files from dist/ directory', 'cyan')
  log('   - Ensure .htaccess is uploaded', 'cyan')
  console.log('')
  log('4. Test the deployment:', 'bold')
  log('   - Visit https://www.bestevent.com.tr', 'cyan')
  log('   - Check multiple pages for 404 errors', 'cyan')
  log('   - Test WhatsApp buttons', 'cyan')
  log('   - Clear cache (Ctrl+Shift+R) and test again', 'cyan')
  console.log('')
  log('5. Monitor for issues:', 'bold')
  log('   - Check browser console for errors (F12)', 'cyan')
  log('   - Test on mobile devices', 'cyan')
  log('   - Verify SEO tags (View Page Source)', 'cyan')
  console.log('')
}

// Main checklist function
async function runDeploymentChecklist(options = {}) {
  const { skipBuild = false, skipVerification = false } = options
  
  log('\n' + '='.repeat(60), 'bold')
  log('🚀 DEPLOYMENT CHECKLIST', 'bold')
  log('='.repeat(60) + '\n', 'bold')
  
  const startTime = Date.now()
  
  // Pre-deployment checks
  section('PRE-DEPLOYMENT CHECKS')
  checkGitStatus()
  checkNodeModules()
  checkPackageJson()
  checkEnvironmentFiles()
  checkPublicFiles()
  checkViteConfig()
  
  // Build preparation
  if (!skipBuild) {
    section('BUILD PREPARATION')
    cleanDist()
  }
  
  // Post-build verification
  if (!skipBuild && !skipVerification) {
    section('BUILD VERIFICATION')
    info('Build verification will run after you execute "npm run build"')
    info('To run verification manually: node scripts/verify-build.js')
  }
  
  const duration = ((Date.now() - startTime) / 1000).toFixed(2)
  
  // Summary
  console.log('')
  const isReady = generateDeploymentSummary()
  
  console.log('')
  log(`Duration: ${duration}s`, 'cyan')
  console.log('')
  
  // Deployment instructions
  if (isReady) {
    generateDeploymentInstructions()
  }
  
  // Exit code
  if (hasErrors) {
    process.exit(1)
  } else {
    process.exit(0)
  }
}

// Parse command line arguments
const args = process.argv.slice(2)
const options = {
  skipBuild: args.includes('--skip-build'),
  skipVerification: args.includes('--skip-verification'),
}

// Run checklist
runDeploymentChecklist(options)
