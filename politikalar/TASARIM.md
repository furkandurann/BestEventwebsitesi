  # 🎨 TASARIM KURALLARI & STANDARTLARI

## 📅 Son Güncelleme: 31 Ekim 2025
## 📌 Versiyon: 2.0.0
## 🎯 Amaç: Mobile-First, Apple-style, Conversion-focused tasarım sistemi

---

## 📱 MOBILE-FIRST YAKLAŞIM (En Kritik!)

### 🎯 Ana Direktif:

**HER TASARIM VE ÖZELLİK ÖNCE MOBİLDE MÜKEMMEL ÇALIŞMALI**

Bu sadece bir öneri değil, **ZORUNLULUKTUR**.

### Neden Mobile-First?

1. **Kullanıcı İstatistikleri:**
   - Mobil trafik: %60-70
   - Desktop trafik: %30-40
   - Google: Mobile-First indexing

2. **Tasarım Avantajları:**
   - Daha az complexity
   - Önemli olan önceliklendirilir
   - Performans odaklı

3. **Geliştirme Kolaylığı:**
   - Küçükten büyüğe ölçeklendirme kolay
   - Büyükten küçüğe sığdırma zor

---

## 🎨 Renk Paleti

### Tailwind Config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9333ea',  // Mor
          50: '#faf5ff',
          100: '#f3e8ff',
          500: '#9333ea',
          600: '#7e22ce',
          700: '#6b21a8',
        },
        secondary: {
          DEFAULT: '#ec4899',  // Pembe
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
        },
        accent: {
          DEFAULT: '#f59e0b',  // Turuncu/Amber
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        dark: {
          DEFAULT: '#1f2937',  // Koyu gri
          50: '#f9fafb',
          100: '#f3f4f6',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      }
    }
  }
}
```

### Kullanım Örnekleri:

```html
<!-- Primary (Mor) -->
<button class="bg-primary text-white hover:bg-primary-600">
  Keşfet
</button>

<!-- Secondary (Pembe) -->
<div class="bg-secondary-50 text-secondary-700">
  Premium özellik
</div>

<!-- Accent (Turuncu) -->
<span class="text-accent-600 font-semibold">
  Yeni!
</span>

<!-- Dark (Koyu gri) -->
<p class="text-dark-800">
  Body text
</p>
```

### Gradient Kombinasyonlar:

```html
<!-- Mor-Pembe (Ana gradient) -->
<div class="bg-gradient-to-r from-primary to-secondary">
  Hero section
</div>

<!-- Turuncu-Sarı (Warm) -->
<div class="bg-gradient-to-r from-amber-400 to-orange-500">
  CTA button
</div>

<!-- Mor-Mavi (Cool) -->
<div class="bg-gradient-to-br from-purple-600 to-blue-500">
  Feature card
</div>
```

---

## 📐 Responsive Breakpoints (Tailwind)

### Tailwind Varsayılan:

```javascript
sm: '640px'   // Tablet portre
md: '768px'   // Tablet landscape
lg: '1024px'  // Desktop küçük
xl: '1280px'  // Desktop orta
2xl: '1536px' // Desktop büyük
```

### Kullanım Mantığı:

```html
<!-- Mobile-First: Base style mobil için, md/lg desktop için -->
<div class="
  px-4           /* Mobil: 16px padding */
  md:px-8        /* Tablet: 32px padding */
  lg:px-12       /* Desktop: 48px padding */
  
  text-sm        /* Mobil: Küçük font */
  md:text-base   /* Tablet: Normal font */
  lg:text-lg     /* Desktop: Büyük font */
  
  grid grid-cols-1   /* Mobil: Tek sütun */
  md:grid-cols-2     /* Tablet: 2 sütun */
  lg:grid-cols-4     /* Desktop: 4 sütun */
">
  İçerik
</div>
```

### Yaygın Responsive Patterns:

#### 1. Flex Direction:
```html
<div class="
  flex flex-col     /* Mobil: Dikey */
  md:flex-row       /* Desktop: Yatay */
">
```

#### 2. Grid Columns:
```html
<div class="
  grid grid-cols-1      /* Mobil: 1 sütun */
  sm:grid-cols-2        /* Tablet: 2 sütun */
  lg:grid-cols-3        /* Desktop: 3 sütun */
  xl:grid-cols-4        /* Geniş desktop: 4 sütun */
  gap-4                 /* Tüm ekranlarda 16px gap */
">
```

#### 3. Hidden/Visible:
```html
<!-- Mobilde gizle, desktop'ta göster -->
<div class="hidden md:block">
  Desktop menu
</div>

<!-- Mobilde göster, desktop'ta gizle -->
<div class="block md:hidden">
  Hamburger menu
</div>
```

---

## 🎯 Touch Targets (Mobil Standartları)

### Apple/Google Standartları:

**Minimum dokunma hedefi:** 44x44px

### Tailwind ile Uygulama:

```html
<!-- Butonlar -->
<button class="
  min-h-[44px]    /* Min yükseklik */
  min-w-[44px]    /* Min genişlik */
  px-6 py-3       /* İç padding */
  text-base       /* Okunabilir font */
">
  CTA Butonu
</button>

<!-- Linkler (navbar vb.) -->
<a class="
  inline-block
  py-3            /* 48px toplam yükseklik (16px font + 24px padding) */
  px-4
">
  Menü Link
</a>

<!-- Icon butonlar -->
<button class="
  w-12 h-12       /* 48x48px */
  flex items-center justify-center
  rounded-full
">
  <svg class="w-6 h-6">...</svg>
</button>
```

### Component Örneği:

```jsx
// TouchButton.jsx
const TouchButton = ({ children, ...props }) => {
  return (
    <button 
      className="
        min-h-[44px] min-w-[44px]
        px-6 py-3
        bg-primary text-white
        rounded-full
        font-semibold
        hover:bg-primary-600
        active:scale-95
        transition-all
      "
      {...props}
    >
      {children}
    </button>
  );
};
```

---

## 📦 Layout Patterns

### 1. Container (Max-Width):

```html
<!-- Standart container -->
<div class="
  max-w-7xl      /* Max 1280px */
  mx-auto        /* Ortala */
  px-4           /* Mobil padding */
  md:px-8        /* Tablet padding */
  lg:px-12       /* Desktop padding */
">
  İçerik
</div>

<!-- Geniş container -->
<div class="
  max-w-screen-2xl  /* Max 1536px */
  mx-auto
  px-4
">
  Full-width içerik
</div>

<!-- Dar container (blog, form vb.) -->
<div class="
  max-w-3xl      /* Max 768px */
  mx-auto
  px-4
">
  Dar içerik
</div>
```

### 2. Section Spacing:

```html
<!-- Standart section -->
<section class="
  py-12         /* Mobil: 48px dikey */
  md:py-16      /* Tablet: 64px */
  lg:py-24      /* Desktop: 96px */
">
  <div class="max-w-7xl mx-auto px-4">
    Section içeriği
  </div>
</section>
```

### 3. Card Layout:

```html
<div class="
  bg-white
  rounded-2xl         /* Yuvarlatılmış köşeler (16px) */
  shadow-lg           /* Büyük gölge */
  hover:shadow-2xl    /* Hover'da daha büyük */
  transition-shadow   /* Smooth geçiş */
  p-6                 /* İç padding */
  border border-gray-100
">
  <h3 class="text-xl font-semibold mb-3">Başlık</h3>
  <p class="text-gray-600">Açıklama</p>
</div>
```

### 4. Hero Section (Full-Height):

```html
<section class="
  relative
  min-h-screen        /* Minimum tam ekran */
  flex items-center   /* Dikey ortala */
  bg-gradient-to-r from-primary to-secondary
">
  <div class="
    max-w-7xl mx-auto px-4
    text-white text-center
  ">
    <h1 class="text-4xl md:text-6xl font-bold mb-6">
      Hero Başlık
    </h1>
    <p class="text-xl md:text-2xl mb-8">
      Alt başlık
    </p>
    <button class="min-h-[44px] px-8 py-3 bg-white text-primary rounded-full">
      CTA
    </button>
  </div>
</section>
```

---

## 🧩 Component Standartları

### 1. Button Variants:

```html
<!-- Primary Button -->
<button class="
  bg-gradient-to-r from-primary to-secondary
  text-white
  px-8 py-4
  rounded-full
  font-semibold
  hover:shadow-xl
  transform hover:scale-105
  transition-all
  min-h-[44px]
">
  Primary CTA
</button>

<!-- Secondary Button -->
<button class="
  bg-white
  text-primary
  border-2 border-primary
  px-8 py-4
  rounded-full
  font-semibold
  hover:bg-primary-50
  transition-all
  min-h-[44px]
">
  Secondary
</button>

<!-- Outline Button -->
<button class="
  border-2 border-white
  text-white
  px-8 py-4
  rounded-full
  font-semibold
  hover:bg-white/10
  transition-all
  min-h-[44px]
">
  Outline
</button>

<!-- İncele Button (Compact - Karakter Hero'lar için) -->
<a href="/detay" class="
  inline-block
  min-h-[44px]
  px-7 py-3.5
  bg-white
  text-purple-600
  rounded-full
  font-semibold
  text-base
  hover:shadow-xl
  transform hover:scale-105
  transition-all
">
  İncele →
</a>
```

#### İncele Butonu Standartları:
**Kullanım:** Karakter hero section'ları, ürün kartları vb. için compact buton.

**Boyutlar:**
- Padding: `px-7 py-3.5` (28px x 14px)
- Font: `text-base` (1rem / 16px)
- Min Height: `min-h-[44px]` (Apple/Google standartları)

**Renkler:**
- Background: `bg-white`
- Text: `text-purple-600`
- Hover: `hover:shadow-xl`

**Animasyon:**
- Transform: `hover:scale-105` (5% büyüme)
- Transition: `transition-all` (smooth geçiş)

**Not:** Primary CTA'dan %30 daha küçük boyutlandırılmıştır.

### 2. Input Fields:

```html
<input 
  type="text"
  class="
    w-full
    px-4 py-3
    border-2 border-gray-200
    rounded-lg
    focus:border-primary
    focus:ring-2 focus:ring-primary/20
    outline-none
    transition-all
    text-base
  "
  placeholder="İsminiz"
/>

<!-- Textarea -->
<textarea
  class="
    w-full
    px-4 py-3
    border-2 border-gray-200
    rounded-lg
    focus:border-primary
    focus:ring-2 focus:ring-primary/20
    outline-none
    transition-all
    resize-none
    min-h-[120px]
  "
  placeholder="Mesajınız"
></textarea>
```

### 3. Badge/Tag:

```html
<span class="
  inline-flex items-center
  px-3 py-1
  bg-primary-100
  text-primary-700
  rounded-full
  text-sm font-medium
">
  Yeni
</span>

<span class="
  inline-flex items-center
  px-3 py-1
  bg-green-100
  text-green-700
  rounded-full
  text-sm font-medium
">
  ✓ Aktif
</span>
```

---

## 🎭 Animation & Transitions

### Tailwind Transitions:

```html
<!-- Basit transition -->
<div class="
  transition-all duration-300
  hover:scale-105
">
  Hover'da büyür
</div>

<!-- Renkli transition -->
<button class="
  bg-primary
  transition-colors duration-200
  hover:bg-primary-600
">
  Renk geçişi
</button>

<!-- Transform + Shadow -->
<div class="
  transition-all duration-300
  hover:shadow-2xl
  hover:-translate-y-2
">
  Hover'da yukarı kalkar
</div>
```

### Framer Motion (React):

```jsx
import { motion } from 'framer-motion';

// Fade in animasyon
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  İçerik
</motion.div>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
    Item 1
  </motion.div>
  <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
    Item 2
  </motion.div>
</motion.div>
```

---

## 🖼️ Image Best Practices

### Responsive Images:

```html
<img 
  src="/image.jpg"
  alt="Açıklayıcı alt text"
  loading="lazy"                    /* Lazy loading */
  class="
    w-full                          /* Tam genişlik */
    h-auto                          /* Oran korunur */
    object-cover                    /* Crop et */
    rounded-2xl                     /* Yuvarlatılmış köşeler */
  "
/>

<!-- Aspect ratio ile -->
<div class="aspect-[16/9] overflow-hidden rounded-2xl">
  <img 
    src="/image.jpg" 
    alt="..."
    loading="lazy"
    class="w-full h-full object-cover"
  />
</div>
```

### Background Images:

```html
<div 
  class="
    bg-cover bg-center bg-no-repeat
    min-h-screen
  "
  style="background-image: url('/hero.jpg')"
>
  <!-- Overlay -->
  <div class="bg-black/50 min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto px-4 text-white">
      İçerik
    </div>
  </div>
</div>
```

---

## 📱 Mobile-Specific Patterns

### 1. Hamburger Menu:

```jsx
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">Logo</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/">Ana Sayfa</a>
            <a href="/hizmetler">Hizmetler</a>
            <a href="/iletisim">İletişim</a>
          </div>
          
          {/* Hamburger Button */}
          <button 
            className="md:hidden w-12 h-12 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6">...</svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <a href="/" className="block py-3">Ana Sayfa</a>
            <a href="/hizmetler" className="block py-3">Hizmetler</a>
            <a href="/iletisim" className="block py-3">İletişim</a>
          </div>
        )}
      </div>
    </nav>
  );
};
```

### 2. Sticky Header (Mobil):

```html
<header class="
  sticky top-0 z-50
  bg-white shadow-md
  transition-all duration-300
">
  <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
    Logo ve Menu
  </div>
</header>
```

### 3. Bottom Navigation (Mobil):

```html
<nav class="
  fixed bottom-0 left-0 right-0
  md:hidden
  bg-white border-t border-gray-200
  z-50
">
  <div class="flex justify-around py-2">
    <a href="/" class="flex flex-col items-center p-2 min-w-[60px]">
      <svg class="w-6 h-6 mb-1">...</svg>
      <span class="text-xs">Ana Sayfa</span>
    </a>
    <a href="/hizmetler" class="flex flex-col items-center p-2 min-w-[60px]">
      <svg class="w-6 h-6 mb-1">...</svg>
      <span class="text-xs">Hizmetler</span>
    </a>
    <a href="/iletisim" class="flex flex-col items-center p-2 min-w-[60px]">
      <svg class="w-6 h-6 mb-1">...</svg>
      <span class="text-xs">İletişim</span>
    </a>
  </div>
</nav>
```

---

## 🎨 Icon Usage

### Heroicons (Recommended):

```jsx
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

<PhoneIcon className="w-6 h-6 flex-shrink-0" />
<EnvelopeIcon className="w-5 h-5 text-primary" />
```

### Icon Sizing:

```html
<!-- Küçük -->
<svg class="w-4 h-4">...</svg>

<!-- Normal -->
<svg class="w-6 h-6">...</svg>

<!-- Büyük -->
<svg class="w-8 h-8">...</svg>

<!-- Icon + Text -->
<div class="flex items-center gap-2">
  <svg class="w-5 h-5 flex-shrink-0 text-primary">...</svg>
  <span>Metin</span>
</div>
```

**ÖNEMLİ:** Icon'lar mobilde düzgün görünmesi için `flex-shrink-0` kullan!

---

## 📊 Grid System

### Auto-Fit Grid (Responsive):

```html
<div class="
  grid
  grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
  gap-6
">
  <!-- Otomatik responsive -->
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Fixed Grid:

```html
<div class="
  grid
  grid-cols-1      /* Mobil: 1 sütun */
  sm:grid-cols-2   /* Tablet: 2 sütun */
  lg:grid-cols-3   /* Desktop: 3 sütun */
  gap-4 md:gap-6 lg:gap-8
">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## 🚀 Performance Best Practices

### 1. Image Optimization:

- WebP format kullan
- Lazy loading aktif et
- Responsive images (srcset)
- Max dosya boyutu: 200KB (hero), 50KB (thumbnail)

### 2. CSS Optimization:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Sadece kullanılan class'lar
  ],
  // ...
}
```

### 3. Code Splitting:

```jsx
// Lazy load components
const Services = lazy(() => import('./pages/Services'));

<Suspense fallback={<Loading />}>
  <Services />
</Suspense>
```

---

## ✅ Tasarım Checklist

### Her Sayfa İçin:

- [ ] Mobile-first yaklaşım uygulandı
- [ ] Touch targets min 44x44px
- [ ] Responsive grid kullanıldı (grid-cols-1 md:grid-cols-2)
- [ ] Padding/margin mobil uyumlu (px-4 md:px-8)
- [ ] Font boyutları responsive (text-sm md:text-base)
- [ ] İkon'lar flex-shrink-0 ile korunuyor
- [ ] Görseller lazy loading
- [ ] Hover efektleri var (desktop için)
- [ ] Active states var (mobil için)
- [ ] Kontrast WCAG AA uyumlu

### Component Checklist:

- [ ] Butonlar: min-h-[44px]
- [ ] Input'lar: focus states açık
- [ ] Card'lar: shadow + hover efekti
- [ ] Navigation: mobil hamburger menü
- [ ] Footer: responsive grid
- [ ] WhatsApp button: fixed position

---

## 📞 İletişim & Referans

- **Tailwind Config:** `/tailwind.config.js`
- **Versiyon:** 2.0.0
- **Tarih:** 31 Ekim 2025

---

## 🎉 Özet

**Mobile-First:** Her tasarım önce mobilde mükemmel  
**Touch Targets:** Min 44x44px  
**Responsive:** Tailwind breakpoints (sm, md, lg, xl)  
**Grid:** grid-cols-1 md:grid-cols-2 lg:grid-cols-4  
**Colors:** Primary (Mor), Secondary (Pembe), Accent (Turuncu)  
**Animation:** Framer Motion + Tailwind transitions  
**Performance:** Lazy loading, WebP, code splitting  

**Mobil kullanıcı = En önemli kullanıcı!** 📱
