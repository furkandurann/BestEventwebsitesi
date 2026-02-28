const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../src/data/localPages.js');
const content = fs.readFileSync(srcFile, 'utf-8');

// Extract the 7 service slugs
const serviceSlugs = [
  'palyaco-kiralama',
  'bubble-show-kiralama',
  'sihirbaz-kiralama',
  'dogum-gunu-organizasyonu',
  'pamuk-seker-arabasi-kiralama',
  'profesyonel-yuz-boyama',
  'popcorn-arabasi-kiralama'
];

// Find all district slugs
const districtMatches = content.matchAll(/slug:\s*'([^']+)',\s*\n\s*name:/g);
const districtSlugs = [];
for (const m of districtMatches) {
  if (!serviceSlugs.includes(m[1])) {
    districtSlugs.push(m[1]);
  }
}
console.log(`Found ${districtSlugs.length} districts`);

// For each service, extract all localContent entries
for (const svc of serviceSlugs) {
  const entries = {};
  
  for (const district of districtSlugs) {
    const key = `${district}-${svc}`;
    // Find the entry in localContent using regex
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`'${escapedKey}':\\s*\\{`, 'g');
    const match = regex.exec(content);
    
    if (match) {
      // Find matching closing brace by counting
      let depth = 0;
      let start = match.index;
      let i = content.indexOf('{', start);
      let end = -1;
      
      for (; i < content.length; i++) {
        if (content[i] === '{') depth++;
        if (content[i] === '}') {
          depth--;
          if (depth === 0) {
            end = i + 1;
            break;
          }
        }
      }
      
      if (end > 0) {
        // Extract the value part (after the key and colon)
        const valueStart = content.indexOf('{', start);
        const valueStr = content.substring(valueStart, end);
        entries[key] = valueStr;
      }
    }
  }
  
  // Write the file for this service
  const fileName = `localContent-${svc}.js`;
  const filePath = path.join(__dirname, '../src/data', fileName);
  
  let fileContent = `// Local content for ${svc}\n`;
  fileContent += `// Auto-generated from localPages.js\n\n`;
  fileContent += `const content = {\n`;
  
  for (const [key, value] of Object.entries(entries)) {
    fileContent += `  '${key}': ${value},\n`;
  }
  
  fileContent += `}\n\n`;
  fileContent += `export default content\n`;
  
  fs.writeFileSync(filePath, fileContent, 'utf-8');
  
  const sizeKB = (Buffer.byteLength(fileContent, 'utf-8') / 1024).toFixed(1);
  console.log(`  ✅ ${fileName} (${Object.keys(entries).length} entries, ${sizeKB} KB)`);
}

console.log('\nDone! Now update localPages.js to use dynamic imports.');
