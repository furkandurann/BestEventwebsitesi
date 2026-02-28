const fs = require('fs');
const path = require('path');
const PUBLIC = path.join(__dirname, '..', 'public');

// Daha geniş regex - boşluklu dosya adlarını da yakalar
const regex = /(["'`])(\/?content\/images\/[^"'`]+?\.(jpg|jpeg|png|JPG|JPEG|PNG))\1/g;

function scanDir(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'node_modules' && e.name !== 'dist') {
      results.push(...scanDir(full));
    } else if (e.isFile() && (e.name.endsWith('.jsx') || e.name.endsWith('.js'))) {
      results.push(full);
    }
  }
  return results;
}

const srcDir = path.join(__dirname, '..', 'src');
const files = scanDir(srcDir);
let total = 0;
let noWebP = [];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let changed = false;
  
  content = content.replace(regex, (match, q, imgPath, ext) => {
    // Normalize: ensure starts with /
    const normalized = imgPath.startsWith('/') ? imgPath : '/' + imgPath;
    const withoutExt = normalized.substring(0, normalized.lastIndexOf('.'));
    const webpPath = withoutExt + '.webp';
    
    // Check if WebP exists on disk
    const diskPath = path.join(PUBLIC, webpPath);
    if (fs.existsSync(diskPath)) {
      total++;
      changed = true;
      return q + webpPath + q;
    } else {
      // Check if original exists (for conversion)
      const origDisk = path.join(PUBLIC, normalized);
      if (fs.existsSync(origDisk)) {
        noWebP.push({ file: file.replace(srcDir, 'src'), path: normalized });
      }
      return match;
    }
  });
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('  ✅', file.replace(path.join(__dirname, '..'), ''));
  }
}

console.log('\nToplam güncellenen referans:', total);
if (noWebP.length > 0) {
  console.log('\n⚠️  WebP yok, dönüştürülmesi gereken dosyalar:');
  const unique = [...new Set(noWebP.map(n => n.path))];
  unique.forEach(p => console.log('  ', p));
}
