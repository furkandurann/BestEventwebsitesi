# 🔍 SEO STANDARTLARI & OPTİMİZASYON - Google 2024

## 📅 Son Güncelleme: 31 Ekim 2025
## 📌 Versiyon: 2.0.0

---

## 🎯 Amaç

Best Event website'inin Google'da **üst sıralarda** yer alması için kapsamlı SEO stratejisi. Core Web Vitals, lokasyon bazlı SEO, içerik optimizasyonu ve teknik SEO gereksinimlerini kapsar.

---

## 📊 Google SEO Standartları (2024)

### 1️⃣ Core Web Vitals (Performans)

**Hedef Metrikler:**
- **LCP (Largest Contentful Paint):** < 2.5 saniye ✅
- **FID (First Input Delay):** < 100ms ✅
- **CLS (Cumulative Layout Shift):** < 0.1 ✅
- **FCP (First Contentful Paint):** < 1.8 saniye
- **TTI (Time to Interactive):** < 3.8 saniye
- **TBT (Total Blocking Time):** < 200ms

**Nasıl Sağlanır:**
- Image optimization (WebP format, lazy loading)
- Code splitting (dynamic imports)
- Bundle size: < 200KB (gzipped)
- Font preloading
- CSS/JS minification

### 2️⃣ Mobile-First Indexing

**Google öncelikle mobil versiyonu indeksliyor:**
- ✅ Responsive design (Tailwind)
- ✅ Touch-friendly (min 44x44px)
- ✅ Mobile font size: min 14px
- ✅ Viewport meta tag
- ✅ Mobile page speed optimization

### 3️⃣ Page Experience Signals

**Google'ın ranking faktörleri:**
- ✅ HTTPS (güvenli bağlantı)
- ✅ Mobile-friendly
- ✅ Safe browsing (no malware)
- ✅ No intrusive interstitials
- ✅ Core Web Vitals

---

## 🎯 Keyword Stratejisi

### 1️⃣ Ana Keywords (Primary)

**Format:** `[Hizmet] + Istanbul`

**Örnekler:**
- "istanbul palyaço kiralama"
- "istanbul sihirbaz kiralama"
- "istanbul sihirbaz etkinliği"
- "istanbul konsept doğum günü"
- "istanbul profesyonel yüz boyaması"
- "istanbul profesyonel make up"
- "istanbul açılış organizasyonu"
- "istanbul trio kiralama"
- "istanbul yetişkin doğum günü"
- "istanbul elsa kiralama"
- "istanbul pamuk prenses kiralama"
- "istanbul spiderman kiralama"
- "istanbul batman kiralama"
- "istanbul sonic kiralama"

**Hedef:** Google 1. sayfa (ilk 10)

### 2️⃣ Lokasyon Keywords (Local SEO)

**Format:** `[Semt] + [Hizmet]`

**Örnekler:**
- "kadıköy palyaço kiralama"
- "üsküdar sihirbaz kiralama"
- "ataşehir profesyonel yüz boyaması"
- "şişli açılış organizasyonu"
- "maslak trio kiralama"
- "sarıyer konsept doğum günü"
- "bodrum yalıkavak etkinlik organizasyonu"
- "beylikdüzü elsa kiralama"
- "başakşehir pamuk prenses kiralama"
- "kartal spiderman kiralama"

**Hedef:** Google 1-3 sıra (yerel aramalar)

**Detaylı strateji:** `LOKASYON.md` dosyasına bakın

### 3️⃣ Long-tail Keywords

**Format:** `[Semt] + [Hizmet] + [Detay]`

**Örnekler:**
- "kadıköy profesyonel yüz boyaması fiyatları"
- "üsküdar sihirbaz kiralama fiyatları"
- "ataşehir konsept doğum günü organizasyonu"
- "şişli açılış organizasyonu kiralama"
- "bodrum yalıkavak trio kiralama"
- "beylikdüzü elsa kiralama doğum günü"
- "başakşehir pamuk prenses kiralama fiyatları"
- "kartal spiderman kiralama etkinlik"

**Avantajı:** Düşük rekabet, yüksek conversion

### 4️⃣ Semantic Keywords (LSI)

**Ana hizmet kategorileri için ilişkili keywords:**

**"palyaço kiralama":**
- palyaço etkinliği
- çocuk palyaçosu
- doğum günü palyaçosu

**"sihirbaz kiralama":**
- sihirbaz etkinliği
- sihirbaz gösterisi
- çocuk sihirbazı

**"profesyonel yüz boyaması":**
- face painting
- çocuk yüz boyama
- doğum günü yüz boyama

**"konsept doğum günü":**
- tema partisi
- doğum günü organizasyonu
- çocuk doğum günü

**"kostümlü karakterler":**
- elsa kiralama
- pamuk prenses kiralama
- spiderman kiralama
- batman kiralama
- sonic kiralama

**Kullanım:** İçerikte doğal bir şekilde serpiştirilir

---

## 📝 İçerik Yapısı (Her Sayfa İçin)

### 1️⃣ İdeal İçerik Uzunluğu

**Minimum:**
- Ana sayfalar: 800+ kelime
- Hizmet sayfaları: 1000+ kelime
- Blog yazıları: 1500+ kelime

**Neden:** Google uzun, detaylı içeriği tercih eder

### 2️⃣ H1-H6 Hiyerarşisi

**Yapı:**
```html
<h1>Ana Başlık (1x) - Ana keyword içermeli</h1>
  <h2>Bölüm 1 (3-5x) - Long-tail keywords</h2>
    <h3>Alt Başlık (5-10x) - Semantic keywords</h3>
  <h2>Bölüm 2</h2>
    <h3>Alt Başlık</h3>
```

**Kurallar:**
- Sadece 1 tane H1
- H2-H3 sıralaması korunmalı (H1 → H3 atlama yapma)
- Her başlıkta keyword variation kullan

**Örnek:**
```html
<h1>İstanbul'da Profesyonel Yüz Boyaması</h1>
<h2>Kadıköy, Üsküdar, Ataşehir ve Tüm İstanbul'da</h2>
<h2>Profesyonel Yüz Boyaması Nedir?</h2>
<h3>Çocuklar İçin Yüz Boyaması</h3>
<h3>Profesyonel Yüz Boyaması Malzemeleri</h3>
<h2>Neden Best Event?</h2>
<h3>10 Yıl+ Deneyim</h3>
<h3>5000+ Mutlu Müşteri</h3>
```

### 3️⃣ Keyword Density (Yoğunluk)

**Optimal:**
- Ana keyword: %1-2 (1000 kelimede 10-20 kez)
- Long-tail: %0.5-1%
- Semantic: Doğal kullanım

**Önemli:** Keyword stuffing yapma! Doğal akış şart.

### 4️⃣ İçerik Şablonu

**Her hizmet sayfası için:**

```markdown
# [H1] İstanbul'da [Hizmet Adı]

## [H2] [Semtler] ve Çevresinde Profesyonel Hizmet

[150-200 kelime giriş paragrafı]
- Hizmetin tanıtımı
- Best Event'in deneyimi
- Neden tercih edilmeli
- CTA (Call-to-Action)

## [H2] [Hizmet] Nedir?

[300-400 kelime detaylı açıklama]
- Hizmetin detayları
- Nasıl çalışır
- Kimler için uygun
- Süre, alan, gereksinimler

## [H2] Neden Best Event?

[200-300 kelime]
- 10 özellik maddesi
- Trust signals
- Müşteri yorumları

## [H2] Fiyatlandırma

[100-150 kelime]
- Paket detayları
- Başlangıç fiyatları
- Ek hizmetler

## [H2] Sıkça Sorulan Sorular (FAQ)

[300-400 kelime]
- 8 soru-cevap
- Schema markup ile

## [H2] Hangi Bölgelerde Hizmet Veriyoruz?

[150-200 kelime]
- Lokasyon listesi
- Komşu semtler

## [H2] Hemen Rezervasyon Yapın!

[CTA section]
```

**Toplam:** ~1000-1500 kelime ✅

---

## 🔖 Meta Tags (Her Sayfa)

### 1️⃣ Title Tag

**Format:**
```
[Hizmet] İstanbul | [Semtler] | Best Event
```

**Örnekler:**
```html
<title>Palyaço Kiralama İstanbul | Kadıköy, Üsküdar, Ataşehir | Best Event</title>
<title>Sihirbaz Kiralama İstanbul | Sihirbaz Etkinliği | Best Event</title>
<title>Profesyonel Yüz Boyaması İstanbul | Kadıköy, Şişli | Best Event</title>
<title>Konsept Doğum Günü İstanbul | Tema Partisi | Best Event</title>
<title>Elsa Kiralama İstanbul | Pamuk Prenses, Spiderman | Best Event</title>
```

**Kurallar:**
- Max 60 karakter (Google keser)
- Ana keyword başta
- Lokasyon mention
- Brand name sonda

### 2️⃣ Meta Description

**Format:**
```
[Hizmet açıklaması]. [Lokasyonlar] ve tüm İstanbul'da [deneyim]. [CTA]. [İletişim].
```

**Örnekler:**
```html
<meta name="description" content="Palyaço kiralama hizmeti. Kadıköy, Üsküdar, Ataşehir ve tüm İstanbul'da 10 yıl+ deneyim. Hemen rezervasyon yapın! ☎ 0534 930 67 99">
<meta name="description" content="Sihirbaz kiralama ve sihirbaz etkinliği. Şişli, Maslak, Sarıyer'de profesyonel hizmet. İletişim: 0534 930 67 99">
<meta name="description" content="Elsa kiralama, Pamuk Prenses, Spiderman, Batman kiralama. İstanbul geneli doğum günü etkinlikleri. ☎ 0534 930 67 99">
```

**Kurallar:**
- 150-160 karakter
- Ana keyword + lokasyon
- CTA ekle
- Telefon numarası (isteğe bağlı)

### 3️⃣ Open Graph (Sosyal Medya)

```html
<meta property="og:title" content="Palyaço Kiralama İstanbul | Best Event">
<meta property="og:description" content="İstanbul'da 10 yıl+ deneyimle palyaço kiralama hizmeti">
<meta property="og:image" content="/og-image-palyaco.jpg">
<meta property="og:url" content="https://bestevent.com/hizmetler/palyaco-kiralama">
<meta property="og:type" content="website">
```

### 4️⃣ Geo Tags (Lokasyon)

```html
<meta name="geo.region" content="TR-34">
<meta name="geo.placename" content="Istanbul">
<meta name="geo.position" content="40.9872;29.0301">
```

---

## 📋 Schema Markup (Yapılandırılmış Veri)

### 1️⃣ LocalBusiness Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Best Event - Etkinlik Organizasyonu",
  "image": "https://bestevent.com/logo.png",
  "telephone": "+905349306799",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Şemsettin Günaltay Cad. No:175",
    "addressLocality": "Kadıköy",
    "addressRegion": "Istanbul",
    "postalCode": "34000",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.9872,
    "longitude": 29.0301
  },
  "url": "https://bestevent.com",
  "priceRange": "₺₺",
  "openingHours": "Mo-Su 09:00-22:00",
  "areaServed": [
    "Kadıköy",
    "Üsküdar",
    "Ataşehir",
    "Ümraniye",
    "Şişli",
    "Maslak",
    "Sarıyer"
  ]
}
```

### 2️⃣ Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Palyaço Kiralama",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Best Event"
  },
  "areaServed": {
    "@type": "City",
    "name": "Istanbul"
  },
  "offers": {
    "@type": "Offer",
    "price": "500",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock"
  }
}
```

### 3️⃣ FAQPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Palyaço kiralama hizmeti kaç saat sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Palyaço kiralama hizmeti genellikle 1-2 saat arası sürer. İhtiyacınıza göre süre uzatılabilir. Detaylı bilgi için 0534 930 67 99 numarasından bize ulaşabilirsiniz."
      }
    }
  ]
}
```

**Faydası:** Google'da "Featured Snippet" olarak çıkabilir!

---

## ❓ FAQ (Sıkça Sorulan Sorular) Stratejisi

### Her Hizmet Sayfasında 8 FAQ

**Örnek Sorular (Hizmet Bazlı):**

**Palyaço Kiralama:**
1. "Palyaço kiralama hizmeti kaç saat sürer?"
2. "Kadıköy'de palyaço kiralama fiyatları nedir?"
3. "Hangi bölgelere palyaço kiralama hizmeti veriyorsunuz?"

**Sihirbaz Kiralama:**
1. "Sihirbaz kiralama ve sihirbaz etkinliği ne kadar sürer?"
2. "Üsküdar'da sihirbaz kiralama yapıyor musunuz?"
3. "Sihirbaz etkinliği için kaç gün önceden rezervasyon gerekir?"

**Profesyonel Yüz Boyaması:**
1. "Profesyonel yüz boyaması kaç dakika sürer?"
2. "Yüz boyaması malzemeleri zararlı mı?"
3. "Ataşehir'de profesyonel yüz boyaması yapıyor musunuz?"

**Konsept Doğum Günü:**
1. "Konsept doğum günü organizasyonu nedir?"
2. "Hangi konsept temalar mevcut?"
3. "Şişli'de konsept doğum günü yapıyor musunuz?"

**Kostümlü Karakterler:**
1. "Elsa kiralama, Pamuk Prenses kiralama yapıyor musunuz?"
2. "Spiderman, Batman, Sonic kiralama hizmeti var mı?"
3. "Kostümlü karakter kiralama fiyatları nedir?"

**SEO Faydası:**
- Long-tail keywords yakalar
- "People Also Ask" bölümünde çıkar
- Kullanıcı sorularını cevaplar → düşük bounce rate

---

## 🖼️ Görsel Optimizasyonu

### 1️⃣ Alt Text (Alternative Text)

**Format:**
```
[Keyword] - [Açıklama] - [Lokasyon/Bağlam]
```

**Örnekler:**
```html
<img src="palyaco.jpg" alt="Kadıköy palyaço kiralama - Çocuk doğum günü etkinliği - Best Event">

<img src="sihirbaz.jpg" alt="İstanbul sihirbaz kiralama - Sihirbaz etkinliği - Üsküdar">

<img src="yuz-boyama.jpg" alt="Profesyonel yüz boyaması İstanbul - Ataşehir çocuk etkinliği">

<img src="elsa.jpg" alt="Elsa kiralama İstanbul - Pamuk Prenses kiralama - Beylikdüzü">

<img src="spiderman.jpg" alt="Spiderman kiralama - Batman kiralama - Sonic - İstanbul">
```

**Kurallar:**
- 125 karakter max
- Keyword içermeli
- Açıklayıcı olmalı
- Keyword stuffing yapma

### 2️⃣ Dosya İsimleri

**İyi:**
- `kadikoy-palyaco-kiralama.jpg`
- `istanbul-sihirbaz-kiralama-2024.jpg`
- `uskudar-profesyonel-yuz-boyamasi.jpg`
- `elsa-kiralama-istanbul.jpg`
- `spiderman-kiralama-dogum-gunu.jpg`

**Kötü:**
- `IMG_1234.jpg`
- `photo.jpg`
- `untitled.png`

### 3️⃣ Görsel Format & Boyut

**Format:**
- WebP (en küçük boyut, modern tarayıcılar)
- JPEG (fallback)
- PNG (şeffaf görseller için)

**Boyut:**
- Hero images: max 200KB
- Thumbnail: max 50KB
- Icon: max 10KB

**Lazy Loading:**
```html
<img src="image.jpg" loading="lazy" alt="...">
```

---

## 🔗 Internal Linking (İç Linkleme)

### Strateji:

**1. Ana Sayfadan Hizmetlere:**
```
Home → Yüz Boyama
Home → Magic Show
Home → Bubble Show
```

**2. Hizmetler Arası:**
```
Yüz Boyama → "İlginizi çekebilir: Magic Show"
Magic Show → "Ayrıca: Bubble Show"
```

**3. Blog → Hizmetler:**
```
Blog: "Doğum Günü İpuçları" → Yüz Boyama sayfası
```

**Anchor Text:**
- Doğal dil kullan
- Tam keyword kullanma
- "Profesyonel yüz boyama hizmetimiz" ✅
- "yüz boyama" ❌ (exact match, spam riski)

---

## 📊 Teknik SEO Checklist

### ✅ Yapılması Gerekenler:

**1. Sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bestevent.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://bestevent.com/hizmetler/yuz-boyama</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

**2. Robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://bestevent.com/sitemap.xml
```

**3. Canonical Tags:**
```html
<link rel="canonical" href="https://bestevent.com/hizmetler/yuz-boyama">
```

**4. Breadcrumb Navigation:**
```html
<nav aria-label="breadcrumb">
  <ol>
    <li><a href="/">Ana Sayfa</a></li>
    <li><a href="/hizmetler">Hizmetler</a></li>
    <li>Yüz Boyama</li>
  </ol>
</nav>
```

**5. HTTPS:**
- SSL sertifikası zorunlu
- HTTP → HTTPS redirect

**6. Mobile-Friendly Test:**
- Google Mobile-Friendly Test aracı kullan
- Tüm sayfalarda test et

---

## 📈 SEO Performans Takibi

### 1️⃣ Google Search Console

**Takip Edilecekler:**
- Impressions (gösterimler)
- Clicks (tıklamalar)
- CTR (Click-Through Rate)
- Average Position (ortalama sıra)

**Hedef:**
- İlk 3 ayda: 500+ impression
- 6 ayda: 2000+ impression
- CTR: %3-5

### 2️⃣ Google Analytics

**Metrikler:**
- Organic traffic
- Bounce rate (< %60 hedef)
- Average session duration (> 2 dakika)
- Pages per session (> 2 sayfa)

### 3️⃣ Keyword Ranking

**Araçlar:**
- Google Search Console
- SEMrush
- Ahrefs

**Hedef Keywords:**
- "istanbul palyaço kiralama" → Top 10
- "kadıköy sihirbaz kiralama" → Top 5
- "üsküdar profesyonel yüz boyaması" → Top 10
- "şişli konsept doğum günü" → Top 10
- "istanbul elsa kiralama" → Top 5
- "ataşehir trio kiralama" → Top 10

---

## 🚀 Öncelikli Aksiyon Planı

### Hemen Yapılacaklar (Bu Hafta):

1. ✅ Her sayfa için meta tags (title, description)
2. ✅ H1-H3 hiyerarşisini kontrol et
3. ✅ Alt text ekle (tüm görseller)
4. ✅ FAQ bölümü ekle (8 soru x her sayfa)
5. ✅ Schema markup (LocalBusiness + Service)
6. ✅ Sitemap.xml & robots.txt oluştur

### Bu Ay:

- [ ] 1000+ kelime içerik (her hizmet sayfası)
- [ ] Internal linking stratejisi uygula
- [ ] Google Search Console kayıt
- [ ] Google Analytics kurulum
- [ ] Google My Business profili oluştur

### 3 Ay İçinde:

- [ ] Blog bölümü (10 yazı)
- [ ] Backlink stratejisi
- [ ] Lokasyon sayfaları (/istanbul/kadikoy/)
- [ ] Video içerik (YouTube SEO)

---

## 🎯 Beklenen Sonuçlar

### 1-2 Hafta:
- Google tarafından index edilme
- Search Console'da ilk veriler

### 1-3 Ay:
- Long-tail keywords'de sıralama
- "kadıköy palyaço kiralama" → 2. sayfa
- "üsküdar sihirbaz kiralama" → 2. sayfa
- Organic traffic: 100+ ziyaretçi/ay

### 3-6 Ay:
- Ana keywords'de 1. sayfa
- "istanbul palyaço kiralama" → Top 10
- "istanbul sihirbaz kiralama" → Top 10
- "istanbul elsa kiralama" → Top 10
- Organic traffic: 500+ ziyaretçi/ay

### 6-12 Ay:
- Tier 1 keywords'de Top 3
- Local SEO dominance (her semtte)
- Organic traffic: 2000+ ziyaretçi/ay

---

## 📞 İletişim

- **Telefon:** +905349306799
- **Adres:** Şemsettin Günaltay Cad. No:175, Erenköy/İstanbul
- **E-posta:** info@bestevent.com
- **Instagram:** @palyacogezegenii

---

**Son Güncelleme:** 31 Ekim 2025  
**Bir sonraki revizyon:** Google algoritma güncellemes sonrası
