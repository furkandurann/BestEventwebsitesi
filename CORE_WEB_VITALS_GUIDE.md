# 🚀 Core Web Vitals - Best Practices Rehberi

## 📅 Oluşturma: 1 Kasım 2025
## 🎯 Amaç: Yeni içerik eklerken performans optimizasyonunu korumak

---

## ✅ Yapılan Optimizasyonlar (Kalıcı)

### 1️⃣ Vite Build Config
**Dosya:** `vite.config.js`

**Yapılanlar:**
- ✅ Chunk splitting (vendor, motion, icons ayrı)
- ✅ Minification (terser ile)
- ✅ Console.log temizleme (production)
- ✅ CSS code splitting
- ✅ Sourcemap kapatma (daha küçük bundle)

**Sonuç:** Otomatik olarak tüm build'ler optimize edilecek!

---

### 2️⃣ Route-Based Code Splitting
**Dosya:** `src/App.jsx`

**Yapılanlar:**
- ✅ Tüm sayfalar React.lazy ile lazy loading
- ✅ Suspense + Loading component
- ✅ Her sayfa ayrı chunk olarak yükleniyor

**Sonuç:** Kullanıcı sadece ihtiyacı olan sayfayı yükler!

---

### 3️⃣ Font Preloading
**Dosya:** `index.html`

**Yapılanlar:**
- ✅ DNS prefetch (fonts.googleapis.com)
- ✅ Preconnect
- ✅ Font preload (Poppins, Inter)
- ✅ Async font loading (media="print" trick)

**Sonuç:** Fontlar daha hızlı yükleniyor, FOUT/FOIT yok!

---

### 4️⃣ OptimizedImage Component
**Dosya:** `src/components/OptimizedImage.jsx`

**Özellikler:**
- ✅ Lazy loading (varsayılan)
- ✅ WebP support (otomatik fallback)
- ✅ Blur placeholder
- ✅ Loading spinner
- ✅ Error handling
- ✅ Aspect ratio support

---

## 📝 Yeni İçerik Eklerken Dikkat Edilecekler

### 🖼️ Yeni Görsel Eklerken

#### ❌ YANLIŞ KULLANIM:
```jsx
<img src="/image.jpg" alt="Görsel" />
```

#### ✅ DOĞRU KULLANIM:
```jsx
import OptimizedImage from '@/components/OptimizedImage'

<OptimizedImage 
  src="/image.jpg" 
  alt="İstanbul'da palyaço kiralama - Best Event"
  className="w-full h-auto rounded-2xl"
  aspectRatio="16/9"
  loading="lazy"
/>
```

**Görsel Optimizasyon Kuralları:**
1. **Format:** WebP kullan (fallback için .jpg bırak)
2. **Boyut:** Hero images < 200KB, thumbnails < 50KB
3. **Alt Text:** SEO-friendly, açıklayıcı
4. **Lazy Loading:** Her zaman `loading="lazy"` (OptimizedImage varsayılan)
5. **Aspect Ratio:** Belirsiz yükseklik yerine aspect-ratio kullan

**Görsel Optimize Etme:**
```bash
# ImageMagick ile resize & optimize
convert image.jpg -resize 1920x1080^ -quality 85 -strip image-optimized.jpg

# WebP'ye dönüştürme
convert image.jpg -quality 80 image.webp
```

---

### 📄 Yeni Sayfa Eklerken

#### ❌ YANLIŞ (Direct Import):
```jsx
// App.jsx
import NewPage from './pages/NewPage'

<Route path="/yeni-sayfa" element={<NewPage />} />
```

#### ✅ DOĞRU (Lazy Loading):
```jsx
// App.jsx
const NewPage = lazy(() => import('./pages/NewPage'))

<Suspense fallback={<Loading />}>
  <Route path="/yeni-sayfa" element={<NewPage />} />
</Suspense>
```

**Neden?** Her sayfa ayrı chunk olur, ilk yükleme hızlanır.

---

### 📦 Yeni Library Eklerken

**Kontrol Listesi:**
1. **Bundle Size Check:** Library büyüklüğünü kontrol et
   ```bash
   npm install --save-dev webpack-bundle-analyzer
   ```

2. **Tree Shaking:** Named import kullan
   ```jsx
   // ❌ Kötü (tüm library yüklenir)
   import _ from 'lodash'
   
   // ✅ İyi (sadece ihtiyacın olan)
   import { debounce } from 'lodash-es'
   ```

3. **Lazy Import:** Büyük library'leri lazy yükle
   ```jsx
   // Sadece gerektiğinde yükle
   const Chart = lazy(() => import('react-chartjs-2'))
   ```

---

### 🎨 Yeni Component Eklerken

**Performance Checklist:**

1. **React.memo kullan** (gereksiz re-render önle)
   ```jsx
   const HeavyComponent = React.memo(({ data }) => {
     return <div>...</div>
   })
   ```

2. **useCallback/useMemo kullan** (hesaplama ağır ise)
   ```jsx
   const expensiveCalculation = useMemo(() => {
     return data.filter(...).map(...)
   }, [data])
   ```

3. **Lazy load** (büyük component ise)
   ```jsx
   const HeavyComponent = lazy(() => import('./HeavyComponent'))
   
   <Suspense fallback={<Loading />}>
     <HeavyComponent />
   </Suspense>
   ```

---

## 🎯 Core Web Vitals Hedefleri

### LCP (Largest Contentful Paint)
**Hedef:** < 2.5 saniye

**Nasıl?**
- ✅ Hero images optimize et (WebP, < 200KB)
- ✅ Font preload kullan
- ✅ Code splitting uygula
- ✅ Lazy loading aktif

### FID (First Input Delay)
**Hedef:** < 100ms

**Nasıl?**
- ✅ JavaScript bundle küçült (chunk splitting)
- ✅ Büyük hesaplamaları web worker'a taşı
- ✅ Event listener'ları optimize et

### CLS (Cumulative Layout Shift)
**Hedef:** < 0.1

**Nasıl?**
- ✅ Aspect ratio kullan (görsellerde)
- ✅ Font loading optimize et (FOUT önle)
- ✅ Skeleton loader kullan
- ✅ Fixed height belirle (dinamik içerik için)

---

## 🔍 Performans Test Araçları

### 1. Lighthouse (Chrome DevTools)
```bash
# Chrome'da
F12 → Lighthouse → Analyze page load
```

**Kontrol Et:**
- Performance score > 90
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### 2. WebPageTest
**URL:** https://www.webpagetest.org

**Test Et:**
- First Contentful Paint (FCP)
- Speed Index
- Time to Interactive (TTI)

### 3. PageSpeed Insights
**URL:** https://pagespeed.web.dev

**Kontrol Et:**
- Mobile score > 90
- Desktop score > 95
- Core Web Vitals "Good"

---

## 📊 Build Size Monitoring

### Production Build Çalıştır:
```bash
npm run build
```

### Bundle Size Kontrol:
```bash
# dist/ klasörünü incele
ls -lh dist/assets/

# Hedef:
# - Main JS chunk: < 150KB (gzipped)
# - Vendor chunk: < 200KB (gzipped)
# - Page chunks: < 50KB (each)
```

### Bundle Analyzer:
```bash
npm install --save-dev rollup-plugin-visualizer
```

```javascript
// vite.config.js
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
})
```

---

## 🚀 Deployment Checklist

### Build Öncesi:
- [ ] Tüm görseller optimize (WebP + fallback)
- [ ] Lazy loading aktif (sayfalar + görseller)
- [ ] Console.log'lar temizlenmiş
- [ ] Bundle size < 500KB (toplam gzipped)

### Build Sonrası:
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Mobile test yapıldı

---

## 💡 Hızlı Başvuru

### Yeni Görsel:
```jsx
<OptimizedImage src="/image.jpg" alt="..." className="..." />
```

### Yeni Sayfa:
```jsx
const NewPage = lazy(() => import('./pages/NewPage'))
```

### Yeni Component (büyük):
```jsx
const HeavyComponent = lazy(() => import('./components/HeavyComponent'))
```

### Bundle Size:
```bash
npm run build && ls -lh dist/assets/
```

---

## 📞 İletişim

Optimizasyon sorunları için: `CORE_WEB_VITALS_GUIDE.md` dosyasını kontrol et.

---

**Son Güncelleme:** 1 Kasım 2025  
**Versiyon:** 1.0.0  
**Hedef:** Google Core Web Vitals "Good" 🎯
