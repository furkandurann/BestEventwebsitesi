#!/usr/bin/env node
/**
 * Update Image References Script
 *
 * Replaces .jpg, .jpeg, .png references with .webp in source files
 * Only updates references to files in content/images/
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src');

// Files to process
const filesToProcess = [
  'pages/Home.jsx',
  'pages/services/CharacterDetail.jsx',
  'pages/services/DanceEvents.jsx',
  'pages/services/CottonCandyCart.jsx',
  'pages/services/MascotRental.jsx',
  'pages/services/ProfessionalMakeup.jsx',
  'pages/services/PlanetEducation.jsx',
  'pages/services/MagicShow.jsx',
  'pages/services/ChildEvents.jsx',
  'pages/services/MusicEvents.jsx',
  'pages/services/ConceptBirthday.jsx',
  'pages/services/FacePainting.jsx',
  'pages/services/TransformersRobot.jsx',
  'pages/services/ClownRental.jsx',
  'pages/services/CostumedCharacters.jsx',
  'pages/services/BubbleShow.jsx',
  'pages/services/FullPackageOrganization.jsx',
  'pages/services/Karaoke.jsx',
  'pages/Gallery.jsx',
  'pages/OrganicCakes.jsx',
  'pages/organizations/FullBirthdayOrganization.jsx',
  'pages/organizations/SantaClausRental.jsx',
  'components/Seo.jsx',
  'components/MomentsSlider.jsx',
  'components/HeroSlider.jsx',
  'components/Footer.jsx',
  'components/SantaClausFeatured.jsx',
  'data/fullPackageSlides.js',
  'data/blogPosts.js',
  'data/kidsSections.js',
  'data/heroSlides.js',
  'data/mascotsData.js',
  'data/organicCakesData.js',
  'data/costumedCharactersData.js',
];

// Stats
const stats = {
  filesProcessed: 0,
  filesModified: 0,
  totalReplacements: 0,
};

async function processFile(relPath) {
  const fullPath = path.join(srcDir, relPath);

  try {
    let content = await fs.readFile(fullPath, 'utf-8');
    const originalContent = content;

    // Replace image extensions in content/images paths
    // Pattern: content/images/...filename.jpg -> content/images/...filename.webp
    const pattern = /(content\/images\/[^"'\s)]+)\.(jpg|jpeg|png)/gi;

    let replacements = 0;
    content = content.replace(pattern, (match, p1, ext) => {
      replacements++;
      return `${p1}.webp`;
    });

    if (content !== originalContent) {
      await fs.writeFile(fullPath, content, 'utf-8');
      stats.filesModified++;
      stats.totalReplacements += replacements;
      console.log(`  ✅ ${relPath} - ${replacements} değişiklik`);
    } else {
      console.log(`  ⏭️  ${relPath} - değişiklik yok`);
    }

    stats.filesProcessed++;
  } catch (error) {
    console.log(`  ❌ ${relPath} - Hata: ${error.message}`);
  }
}

async function main() {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║     🔄 Görsel Referansları Güncelleme Script\'i                 ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`📁 Kaynak: ${srcDir}`);
  console.log(`📝 İşlenecek dosya sayısı: ${filesToProcess.length}`);
  console.log('');
  console.log('🚀 İşleniyor...');
  console.log('');

  for (const file of filesToProcess) {
    await processFile(file);
  }

  console.log('');
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║                    📊 SONUÇ RAPORU                             ║');
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log(`║  İşlenen Dosya:      ${stats.filesProcessed.toString().padStart(6)}`);
  console.log(`║  Değiştirilen:       ${stats.filesModified.toString().padStart(6)}`);
  console.log(`║  Toplam Değişiklik:  ${stats.totalReplacements.toString().padStart(6)}`);
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log('✨ Tamamlandı!');
}

main().catch(console.error);
