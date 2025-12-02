# Hero Section Standartları

Bu dokümanda **Kostümlü Karakterler** sayfasından (CostumedCharacters.jsx) alınan hero section ve detay sayfası standartları yer almaktadır.

---

## 📐 Ana Hero Section Standartları

### Layout
```jsx
className="character-hero-section relative min-h-screen flex items-start justify-center overflow-hidden snap-start"
```

**Özellikler:**
- `min-h-screen` → %100 viewport yüksekliği (100vh)
- `flex items-start justify-center` → İçerik yukarıdan hizalı, ortada
- `overflow-hidden` → Taşan içeriği gizle
- `snap-start` → Scroll snap (Apple-style)

---

## 🔤 Typography Standartları

### Hero Başlık (h1)
```jsx
style={{
  fontSize: 'clamp(2.25rem, 6vw, 4rem)',  // 36px → 64px responsive
  letterSpacing: '-0.035em',               // Sıkı harf aralığı
  lineHeight: '1.25',                      // Kompakt satır yüksekliği
  fontWeight: '700',                       // Bold
  fontFamily: 'Poppins, sans-serif',       // Ana font
  textShadow: '0 2px 20px rgba(0,0,0,.45)' // Gölge efekti
}}
```

**Responsive Font Boyutları:**
- Mobile: `2.25rem` (36px)
- Tablet: `6vw` (viewport genişliğine göre)
- Desktop: `4rem` (64px)

### Alt Başlık (p)
```jsx
className="text-xl md:text-2xl"
fontFamily: "Inter, sans-serif"
lineHeight: "1.7"
```

---

## 🔘 İncele Butonu

```jsx
className="absolute bottom-8 right-8 z-20 min-h-[44px] px-7 py-3.5 bg-white/90 backdrop-blur-md text-purple-600 rounded-full font-semibold text-base hover:shadow-xl transition-all transform hover:scale-105"
```

**⚠️ ZORUNLU STANDART:**
- İncele/Detaylar buttonları **HER ZAMAN** hero'nun **SAĞ ALT** köşesinde olmalı
- `absolute bottom-8 right-8` pozisyonu **DEĞİŞTİRİLEMEZ**
- Merkezde veya başka konumda button kullanımı **YASAK**

**Özellikler:**
- Sağ alt köşe konumu (`absolute bottom-8 right-8`)
- Minimum 44px yükseklik (dokunma hedefi)
- Beyaz arka plan + blur efekti (`bg-white/90 backdrop-blur-md`)
- Purple text (`text-purple-600`)
- Hover'da shadow + scale efekti
- z-index 20 (üstte kalması için)

---

## 📍 Progress Indicators (Nokta Navigasyon)

```jsx
className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
```

**Aktif Nokta:**
```jsx
className="w-2 h-2 rounded-full bg-white scale-150"
```

**Pasif Nokta:**
```jsx
className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50"
```

---

## 🎬 Scroll Indicator

```jsx
<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
  <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="w-1.5 h-1.5 bg-white rounded-full"
    />
  </div>
</div>
```

**Kullanım:** Sadece ilk section'da göster

---

## 📸 Detay Sayfası Standartları (CharacterDetail.jsx)

### Detay Hero
```jsx
className="relative min-h-screen flex items-center justify-center"
```

**Başlık:**
```jsx
className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
fontFamily: "Poppins, sans-serif"
lineHeight: "1.25"
```

---

## 🖼️ Fotoğraf Çerçevesi (ÖNEMLİ!)

**STANDART FOTOĞRAF STİLİ:**
```jsx
className="w-full h-auto rounded-lg"
style={{
  boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)'
}}
```

**Efektler:**
- `inset 0 0 40px rgba(0,0,0,0.08)` → İç gölge (hafif)
- `0 10px 30px rgba(0,0,0,0.05)` → Dış gölge (yumuşak)
- `rounded-lg` → Yuvarlatılmış köşeler

**Wrapper:**
```jsx
<section className="w-full bg-white py-4">
  <div className="max-w-7xl mx-auto px-4">
    <img {...} />
  </div>
</section>
```

---

## 🚫 Emoji Politikası

**HAYIR:** Hero başlıklarında, butonlarda emoji kullanma
- ❌ `👧 Kız Çocuk Maskotları`
- ✅ `Kız Çocuk Maskotları`

**İSTİSNA:** FAQ başlıkları ve özel durumlarda emoji kullanılabilir (ama tercih edilmez)

---

## 🎨 Arka Plan Gradient

```jsx
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
```

**veya hover efekti için:**
```jsx
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 group-hover:from-black/60 group-hover:to-black/60 transition-all"></div>
```

---

## 📱 Responsive Davranış

### Mobile (<768px)
- Hero başlık: `text-4xl` (2.25rem)
- Alt başlık: `text-xl` (1.25rem)
- Padding: `px-4`

### Tablet (768px-1024px)
- Hero başlık: `text-5xl` (3rem)
- Alt başlık: `text-2xl` (1.5rem)
- Padding: `px-6`

### Desktop (>1024px)
- Hero başlık: `text-6xl` (3.75rem)
- Alt başlık: `text-2xl` (1.5rem)
- Padding: `px-8`
- Progress indicators görünür

---

## ⌨️ Keyboard Navigation

```jsx
useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.key === 'ArrowDown' && activeSection < sections.length - 1) {
      // Bir sonraki section'a scroll
    } else if (e.key === 'ArrowUp' && activeSection > 0) {
      // Bir önceki section'a scroll
    }
  }
  window.addEventListener('keydown', handleKeyPress)
  return () => window.removeEventListener('keydown', handleKeyPress)
}, [activeSection])
```

---

## 📋 Checklist - Yeni Sayfa Oluştururken

- [ ] Hero section `min-h-screen` mi?
- [ ] Başlık Poppins font kullanıyor mu?
- [ ] Font size responsive mi? (clamp veya breakpoints)
- [ ] İncele butonu sağ altta mı?
- [ ] Progress indicators eklendi mi?
- [ ] Scroll indicator sadece ilk section'da mı?
- [ ] Fotoğraflar standart box-shadow kullanıyor mu?
- [ ] Emoji kullanılmadı mı?
- [ ] Keyboard navigation eklendi mi?
- [ ] Mobile responsive test edildi mi?

---

## 🔗 İlgili Dosyalar

- Referans: `src/pages/services/CostumedCharacters.jsx`
- Detay Referans: `src/pages/services/CharacterDetail.jsx`
- Tipografi: `politikalar/TIPOGRAFI.md`
- Tasarım: `politikalar/TASARIM.md`

---

**Son güncelleme:** 11.11.2025  
**Versiyon:** 1.0.0
