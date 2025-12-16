# 🚀 DEPLOYMENT AUTOMATION GUIDE

## 📅 Tarih: 16 Aralık 2025

---

## 🎯 GENEL BAKIŞ

BestEvent web sitesi için otomatik deployment ve doğrulama sistemi kuruldu.

### Tamamlanan Yüksek Öncelikli İyileştirmeler ✅

1. ✅ **`.gitignore` Güncellemesi** - dist/, .env dosyaları
2. ✅ **Build Verification Script** - Otomatik build kontrolü
3. ✅ **Environment Variables Setup** - Merkezi env yönetimi
4. ✅ **Deployment Checklist Automation** - Pre-deployment kontroller

---

## 🆕 YENİ NPM SCRIPTS

### Production Build (ÖNERİLEN)
```bash
npm run build:production
```
- ✅ Deployment checklist çalıştırır
- ✅ Build yapar
- ✅ Build verification çalıştırır

### Diğer Komutlar
```bash
npm run verify-build      # Build doğrulaması
npm run deploy-check      # Pre-deployment kontrol
npm run build             # Normal build (mevcut)
```

---

## 📁 OLUŞTURULAN DOSYALAR

### 1. `.gitignore` (Güncellendi)
- Build outputs (dist/)
- Environment variables (.env*)
- Logs, temp files
- Backup files

### 2. `scripts/verify-build.js`
Kontrol eder:
- dist/ klasörü varlığı
- Kritik dosyalar (index.html, .htaccess, robots.txt, sitemap.xml)
- Bundle sizes (toplam < 5MB, chunk < 1MB)
- index.html içeriği
- .htaccess SPA routing
- sitemap.xml URL'leri
- Source maps (production'da olmamalı)

### 3. `scripts/deploy-checklist.js`
Kontrol eder:
- Git status (uncommitted changes)
- Git branch (main/master)
- node_modules
- package.json scripts
- Environment files
- Public files
- Vite configuration

### 4. Environment Files
- `.env.example` - Template
- `.env.production` - Production değerleri
- `src/utils/env.js` - Utility

---

## 🔄 DEPLOYMENT WORKFLOW

### Önerilen (Tam Güvenlik)
```bash
# 1. Commit yap
git add .
git commit -m "feat: güncelleme"

# 2. Production build
npm run build:production

# 3. Çıktıyı kontrol et
# - Errors varsa düzelt
# - Warnings'leri gözden geçir

# 4. Natro'ya yükle (Natro Deploy Guide)

# 5. Test et
# - https://www.bestevent.com.tr
# - WhatsApp butonları
# - Console errors (F12)
```

### Hızlı (Küçük Güncellemeler)
```bash
npm run build
npm run verify-build  # Opsiyonel
# Natro'ya yükle
```

---

## 🌍 ENVIRONMENT VARIABLES

### Kullanım
```javascript
// Kodda
import { WHATSAPP_CONFIG, CONTACT_INFO } from './utils/env'

const link = WHATSAPP_CONFIG.getLink('Özel mesaj')
const phone = CONTACT_INFO.phone
```

### Değerler (.env.production)
```env
VITE_SITE_URL=https://www.bestevent.com.tr
VITE_WHATSAPP_NUMBER=905349306799
VITE_PHONE_NUMBER=905349306799
VITE_EMAIL=info@bestevent.com.tr
```

---

## 🐛 SORUN GİDERME

### Build Verification Failed
```bash
# dist/ yok → Build yap
npm run build

# Kritik dosya eksik → public/ klasörünü kontrol et
# Bundle çok büyük → vite.config.js chunk splitting
```

### Environment Variables Çalışmıyor
```bash
# Prefix kontrolü (VITE_ ile başlamalı)
# Build sonrası test
npm run build && npm run preview
```

### Deployment Checklist Errors
```bash
# node_modules eksik
npm install

# Git issues → Skip git checks
node scripts/deploy-checklist.js --skip-git
```

---

## 📊 SCRIPT ÇIKTILARI

### Başarılı Çıktı
```
✅ BUILD VERIFICATION PASSED
All checks passed! Build is ready for deployment 🚀

Duration: 1.2s
```

### Uyarılı Çıktı
```
⚠️  BUILD VERIFICATION PASSED WITH WARNINGS
Build is deployable but consider fixing warnings

Duration: 1.3s
```

### Hatalı Çıktı
```
❌ BUILD VERIFICATION FAILED
Found critical errors that must be fixed before deployment

Duration: 0.8s
```

---

## ✅ DEPLOYMENT CHECKLIST

Canlıya almadan önce:

- [ ] `npm run build:production` başarılı
- [ ] Verification passed (errors yok)
- [ ] Uncommitted changes commit edildi
- [ ] Main/master branch'tesin
- [ ] Local'de test edildi
- [ ] dist/ klasörü Natro'ya yüklendi
- [ ] Canlıda test edildi
- [ ] WhatsApp butonları çalışıyor
- [ ] Console'da error yok

---

## 📚 BEST PRACTICES

1. **Her zaman production build kullan**
   ```bash
   npm run build:production
   ```

2. **Environment variables asla commit etme**
   - `.gitignore` kontrol et (✅ yapıldı)
   - Sensitive data için `.env.example` kullan

3. **Build size optimize et**
   - Total JS < 5MB
   - Chunk < 1MB
   - Lazy loading kullan

4. **Test stratejisi**
   - Local: `npm run preview`
   - Production: Hard refresh (Ctrl+Shift+R)
   - Mobile test
   - Multiple pages test

---

## 🔐 GÜVENLİK

### Asla Commit Etme
```env
VITE_API_KEY=secret_key
VITE_FIREBASE_API_KEY=...
VITE_SENTRY_DSN=...
```

### Production vs Development
```javascript
import { IS_PROD, IS_DEV } from './utils/env'

if (IS_PROD) {
  // Production only
}
```

---

## 📞 EK KAYNAKLAR

- `NATRO_DEPLOY_GUIDE.md` - Natro deployment
- `DEPLOYMENT_GUIDE_13_12_2025.md` - Önceki deployment
- `vite.config.js` - Build configuration
- `.htaccess` - Apache configuration

---

## 🎉 SONUÇ

Projenizde artık:
- ✅ Otomatik pre-deployment kontroller
- ✅ Build verification
- ✅ Environment yönetimi
- ✅ Hata önleme mekanizmaları

**Canlıya yansırken hiçbir aksaklık olmayacak! 🚀**

---

**Versiyon:** 1.0.0  
**Durum:** ✅ Production Ready
