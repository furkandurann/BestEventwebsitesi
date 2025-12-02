# 🎨 Apple-Style Tipografi Politikası

## 📅 Son Güncelleme: 31 Ekim 2025
## 📌 Versiyon: 2.0.0
## 🎯 Amaç: Apple estetiğinde, okunabilirlik + dönüşüm (conversion) odaklı, SEO uyumlu yazı sistemi

---

## 🍎 Genel Felsefe

### Ana İlkeler:
1. **Sadelik Güçtür:** Her kelime okunaklı, her başlık davetkâr olmalı
2. **Duygusal Bağ:** Apple gibi duygusal ve ilham verici iletişim
3. **Görsel Gürültüyü Sıfırla:** Minimum tasarım, maksimum etki
4. **Güç Sadelikten Gelir:** Az kelime, büyük anlam

### Apple'ın Tipografi Felsefesi:
- **Hiyerarşi:** Net başlık-içerik ayrımı
- **Boşluk:** Generous white space (nefes alan tasarım)
- **Kontrast:** Siyah-beyaz-gri dengesi
- **Okunabilirlik:** Her ekranda mükemmel görünüm

---

## ✍️ Font Seçimi

### 🎯 Font Aileleri:

#### 1. **Başlıklar (Display):**
```css
--be-font-apple-display: 'Poppins', 'SF Pro Display', 'Inter Display', sans-serif;
```
- **Kullanım:** H1, H2, Hero başlıklar, section başlıklar
- **Özellik:** Bold (700), Semibold (600)
- **Karakter:** Modern, temiz, güçlü

#### 2. **Paragraflar (Body):**
```css
--be-font-apple-body: 'Inter', 'Open Sans', 'Roboto', 'Helvetica Neue', sans-serif;
```
- **Kullanım:** P, span, uzun metinler
- **Özellik:** Regular (400), Medium (500)
- **Karakter:** Okunabilir, nötr, profesyonel

#### 3. **CTA ve Butonlar:**
```css
--be-font-apple-cta: 'Poppins', 'SF Pro Text', sans-serif;
```
- **Kullanım:** Button, link, badge
- **Özellik:** Semibold (600), uppercase
- **Karakter:** Dikkat çekici, yönlendirici

---

## 📏 Tipografi Ölçüleri

### Line Height (Satır Yüksekliği):
| Element | Line-Height | Açıklama |
|---------|-------------|----------|
| **Başlıklar** | 1.25 | Tight (sıkı, güçlü) |
| **Body Text** | 1.7 | Normal (rahat okunur) |
| **Uzun Metinler** | 1.9 | Relaxed (çok rahat) |

### Font Weight (Ağırlık):
| Ağırlık | Değer | Kullanım |
|---------|-------|----------|
| Light | 300 | Alt başlıklar (opsiyonel) |
| Regular | 400 | Body text |
| Medium | 500 | Vurgulu body, subtitles |
| Semibold | 600 | Section başlıklar, CTA |
| Bold | 700 | Hero başlıklar |

### Letter Spacing (Harf Aralığı):
| Tip | Değer | Kullanım |
|-----|-------|----------|
| Tight | -0.02em | Büyük başlıklar (H1, hero) |
| Normal | 0em | Body text |
| Wide | 0.05em | CTA, small caps, butonlar |

---

## 🎨 Renk Sistemi

### Metin Renkleri (Apple Contrast):
```css
--be-text-primary: #111111;    /* Siyah - Ana başlıklar */
--be-text-secondary: #555555;  /* Gri - Body text, alt başlıklar */
--be-text-white: #FFFFFF;      /* Beyaz - Dark mode, hero overlay */
```

### Arka Plan:
```css
--be-bg-white: #FFFFFF;        /* Temiz beyaz arka plan */
```

### Gradient (Warm Orange Tones):
```css
--be-gradient-warm: linear-gradient(135deg, #FFD480 0%, #FF9040 100%);
```
- **Kullanım:** CTA butonlar, vurgulu başlıklar, hover efektleri
- **Ton:** Sıcak, davetkar, premium

### Kontrast Standardı:
- **WCAG AA:** Min 4.5:1 (body text)
- **WCAG AAA:** Min 7:1 (başlıklar)
- **Apple Standardı:** #111 on #FFF = 16.1:1 ✅

---

## 📱 Responsive Font Sizing (Mobile-First)

### CSS Clamp Kullanımı:
```css
font-size: clamp(min, preferred, max);
```

### Ölçü Tablosu:

| Element | Mobile (min) | Preferred | Desktop (max) | CSS |
|---------|--------------|-----------|---------------|-----|
| **Hero H1** | 36px (2.25rem) | 6vw | 64px (4rem) | `clamp(2.25rem, 6vw, 4rem)` |
| **Section H2** | 24px (1.5rem) | 4vw | 40px (2.5rem) | `clamp(1.5rem, 4vw, 2.5rem)` |
| **Subtitle** | 18px (1.125rem) | 2.5vw | 24px (1.5rem) | `clamp(1.125rem, 2.5vw, 1.5rem)` |
| **Body Large** | 18px (1.125rem) | 2.2vw | 20px (1.25rem) | `clamp(1.125rem, 2.2vw, 1.25rem)` |
| **Body** | 16px (1rem) | 2vw | 18px (1.125rem) | `clamp(1rem, 2vw, 1.125rem)` |
| **CTA** | 14.4px (0.9rem) | 2vw | 17.6px (1.1rem) | `clamp(0.9rem, 2vw, 1.1rem)` |

### Breakpoint Referansı:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## 📝 Copywriting Kuralları (Conversion-Focused)

### 1️⃣ Başlıklar (Duygusal + Yönlendirici):

#### ✅ İyi Örnekler:
- "Hayalinizdeki Etkinlik Burada Başlar"
- "Siz Hayal Edin, Biz Gerçekleştirelim"
- "Unutulmaz Anlar Sizinle Başlar"
- "İstanbul'un En Güvenilir Etkinlik Ortağı"

#### ❌ Kötü Örnekler:
- "Biz etkinlik organizasyonu yapıyoruz" (teknik, soğuk)
- "Kurumsal çözümler sunuyoruz" (belirsiz)
- "Hizmetlerimiz hakkında bilgi" (pasif)

### 2️⃣ Alt Başlıklar (Açıklayıcı + Değer Önerisi):

#### ✅ İyi Örnekler:
- "10 yıl+ deneyim, 5000+ mutlu müşteri"
- "İstanbul'un her bölgesinde profesyonel hizmet"
- "Hayalinizi gerçeğe dönüştürmenin zamanı geldi"

#### ❌ Kötü Örnekler:
- "Şirketimiz 2015'te kurulmuştur" (tarihsel, sıkıcı)
- "Çeşitli hizmetler sunmaktayız" (belirsiz)

### 3️⃣ CTA (Call-to-Action) Kuralları:

#### Güçlü Fiiller:
- ✅ **Keşfet** (Discover)
- ✅ **Planla** (Plan)
- ✅ **İncele** (Explore)
- ✅ **Başlayalım** (Let's Start)
- ✅ **Hemen Ara** (Call Now)
- ✅ **Rezervasyon Yap** (Book Now)

#### Zayıf/Generic Fiiller:
- ❌ "Tıklayın" (Click)
- ❌ "Devam Et" (Continue)
- ❌ "Gönder" (Submit)
- ❌ "Buraya Tıklayın" (Click Here)

### 4️⃣ Hitap Biçimi (2. Şahıs):

#### ✅ Doğru:
- "**Sizin** hayaliniz, **bizim** tutkumuz"
- "**Etkinliğinizi** unutulmaz kılın"
- "**Kendinizi** özel hissedin"

#### ❌ Yanlış:
- "**Bizim** şirketimiz hizmet verir"
- "**Müşterilerimiz** memnun kalır"

### 5️⃣ Kısa, Net Cümleler:
- **Max 15 kelime** (başlıklar)
- **Max 25 kelime** (alt başlıklar)
- **Max 40 kelime** (paragraflar)

---

## 🎯 CSS Class Kullanım Kılavuzu

### Hero Section:
```html
<h1 class="be-hero-title">
  Hayalinizdeki Etkinlik Burada Başlar
</h1>
<p class="be-subtitle">
  Siz hayal edin, biz gerçekleştirelim
</p>
<button class="be-cta-button be-touch-target">
  Hemen Keşfet
</button>
```

### Section (Conversion-Focused):
```html
<h2 class="be-conversion-headline">
  Neden Best Event?
</h2>
<p class="be-conversion-subheadline">
  İstanbul'un en güvenilir etkinlik ortağı
</p>
```

### Body Content (SEO):
```html
<h2 class="be-section-title">
  Profesyonel Yüz Boyama Hizmeti
</h2>
<p class="be-body-text">
  Best Event olarak İstanbul'un her bölgesinde...
</p>
<p class="be-body-large">
  10 yıl+ deneyimimizle...
</p>
```

### Gradient Text (Premium):
```html
<h2 class="be-section-title be-gradient-warm">
  Premium Etkinlik Deneyimi
</h2>
```

---

## 🎨 Görsel Yapı (Apple Product Section Mantığı)

### Tek Mesaj Blokları:
```
┌─────────────────────────────────────┐
│   [BAŞLIK]                          │
│   Güçlü, kısa, duygusal             │
│                                     │
│   [GÖRSEL]                          │
│   Büyük, etkileyici                 │
│                                     │
│   [CTA]                             │
│   Net, yönlendirici                 │
└─────────────────────────────────────┘
```

### Gradient + Soft Shadow:
```css
/* Premium his */
background: var(--be-gradient-warm);
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
```

---

## 📱 Mobile-First Touch Targets

### Minimum Boyutlar:
- **Butonlar:** 44x44px (Apple standardı)
- **Link'ler:** 44px yükseklik
- **Icon butonlar:** 44x44px

### CSS:
```css
.be-touch-target {
  min-height: 44px;
  min-width: 44px;
}
```

---

## 🔍 SEO Uyumlu Tipografi

### H1-H6 Hiyerarşisi:
```html
<h1>Ana Sayfa Başlık (1x)</h1>
<h2>Bölüm Başlıklar (3-5x)</h2>
<h3>Alt Başlıklar (5-10x)</h3>
```

### Keyword Density:
- **H1:** Ana keyword
- **H2:** Long-tail keywords
- **Body:** Semantic keywords (doğal)

### Alt Text:
```html
<img 
  src="/image.jpg" 
  alt="İstanbul'da profesyonel palyaço kiralama - Best Event"
  class="be-img"
/>
```

---

## 🎭 Mikro Tipografi (Conversion-Focused)

### Trust Signals:
```html
<p class="be-body-text">
  ✅ 10 yıl+ deneyim
  ✅ 5000+ mutlu müşteri
  ✅ İstanbul'un her bölgesinde hizmet
</p>
```

### Social Proof:
```html
<blockquote class="be-body-large">
  "Best Event ile çalışmak harikaydı! 
  Profesyonel ekip, mükemmel organizasyon."
</blockquote>
<cite class="be-subtitle">— Ayşe Y., Kadıköy</cite>
```

### Urgency (Aciliyet):
```html
<p class="be-conversion-subheadline">
  <strong>Sınırlı kontenjan!</strong> Hemen rezervasyon yapın.
</p>
```

---

## 📊 Performans & Accessibility

### Font Loading:
```html
<!-- Preload kritik fontlar -->
<link rel="preload" href="/fonts/Poppins-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

### Font Display:
```css
@font-face {
  font-family: 'Poppins';
  font-display: swap; /* Hızlı yükleme */
}
```

### Accessibility (A11y):
- **Kontrast:** Min 4.5:1 (WCAG AA)
- **Font boyutu:** Min 16px (body)
- **Line height:** Min 1.5 (body)
- **Touch targets:** Min 44x44px

---

## 🚀 Uygulama Checklist

### Her Sayfa İçin:
- [ ] Hero başlık: `.be-hero-title`
- [ ] Alt başlık: `.be-subtitle`
- [ ] CTA buton: `.be-cta-button .be-touch-target`
- [ ] Body text: `.be-body-text` (line-height 1.9)
- [ ] Section başlıklar: `.be-section-title`
- [ ] Responsive font sizing (clamp)
- [ ] Touch-friendly butonlar (44x44px)
- [ ] Kontrast kontrolü (WCAG AA)

### Copywriting:
- [ ] 2. şahıs hitap ("Sizin", "Kendinizi")
- [ ] Güçlü CTA fiilleri ("Keşfet", "Planla")
- [ ] Kısa cümleler (max 15-25 kelime)
- [ ] Duygusal bağ kuran başlıklar
- [ ] Trust signals (10 yıl+, 5000+ müşteri)

---

## 🎯 Örnekler

### Örnek 1: Hero Section (Ana Sayfa)
```html
<section class="hero">
  <h1 class="be-hero-title">
    Hayalinizdeki Etkinlik Burada Başlar
  </h1>
  <p class="be-subtitle">
    Siz hayal edin, biz gerçekleştirelim. 
    İstanbul'un en güvenilir etkinlik ortağı.
  </p>
  <button class="be-cta-button be-touch-target">
    Hemen Keşfet
  </button>
</section>
```

### Örnek 2: Feature Section
```html
<section class="features">
  <h2 class="be-section-title">
    Neden Best Event?
  </h2>
  <div class="feature">
    <h3 class="be-conversion-headline">
      10 Yıl+ Deneyim
    </h3>
    <p class="be-body-text">
      2015'ten beri İstanbul'da binlerce etkinliğe imza attık.
      Profesyonel ekibimizle hayalinizi gerçeğe dönüştürüyoruz.
    </p>
  </div>
</section>
```

### Örnek 3: CTA Section
```html
<section class="cta">
  <h2 class="be-conversion-headline">
    Hemen Rezervasyon Yapın
  </h2>
  <p class="be-conversion-subheadline">
    Etkinliğinizi unutulmaz kılmak için profesyonel ekibimizle iletişime geçin
  </p>
  <button class="be-cta-button be-touch-target">
    📞 +90 534 930 67 99
  </button>
</section>
```

---

## 📞 İletişim & Referans

- **CSS Dosyası:** `/src/styles/standartlardosyasi.css`
- **Versiyon:** 2.0.0
- **Tarih:** 31 Ekim 2025

---

## 🎉 Özet

**Amaç:** Apple estetiğinde, okunabilir, dönüşüm odaklı tipografi  
**Font:** Poppins + Inter  
**Line-height:** 1.7-1.9 (body)  
**Renk:** #111 (siyah) + #555 (gri) + beyaz  
**Gradient:** #FFD480 → #FF9040  
**Mobil:** clamp() ile responsive sizing  
**Conversion:** 2. şahıs hitap, güçlü CTA'lar  
**SEO:** H1-H3 hiyerarşi, semantic HTML  

**Güç Sadelikten Gelir!** 🍎
