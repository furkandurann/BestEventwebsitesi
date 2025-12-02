# FOTOĞRAF STANDARTLARI

**Son Güncelleme:** 12 Kasım 2025

---

## 📸 Genel Fotoğraf Yapısı

Sitedeki **tüm içerik fotoğrafları** (hero sections hariç) aşağıdaki standart yapıyı kullanmalıdır:

### Standart HTML/JSX Yapısı:

```jsx
<section className="w-full bg-white py-4">
  <div className="max-w-7xl mx-auto px-4">
    <img 
      src={image}
      alt="Açıklayıcı alt text"
      className="w-full h-auto rounded-lg"
      style={{
        boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)'
      }}
    />
  </div>
</section>
```

---

## 🎨 Stil Detayları

### 1️⃣ **Wrapper Section**
```jsx
className="w-full bg-white py-4"
```
- Tam genişlik (`w-full`)
- Beyaz arka plan (`bg-white`)
- Dikey padding 16px (`py-4`)

### 2️⃣ **Container Div**
```jsx
className="max-w-7xl mx-auto px-4"
```
- Maksimum genişlik: 1280px (`max-w-7xl`)
- Ortalanmış (`mx-auto`)
- Yatay padding: 16px (`px-4`)

### 3️⃣ **Image Element**
```jsx
className="w-full h-auto rounded-lg"
```
- Tam genişlik (`w-full`)
- Otomatik yükseklik - aspect ratio korunur (`h-auto`)
- Yuvarlatılmış köşeler: 8px (`rounded-lg`)

### 4️⃣ **Box Shadow (İÇ + DIŞ)**
```css
boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)'
```
- **İç gölge:** `inset 0 0 40px rgba(0,0,0,0.08)` → Hafif iç gölge, derinlik hissi
- **Dış gölge:** `0 10px 30px rgba(0,0,0,0.05)` → Yumuşak dış gölge, kağıt efekti

---

## 📱 Responsive Davranış

### Mobil (< 640px):
- Container: px-4 (16px yatay padding)
- Fotoğraf: Tam genişlik (ekran - 32px)
- Box-shadow: Aynı

### Tablet (640px - 1024px):
- Container: px-4 (16px yatay padding)
- Fotoğraf: Container genişliği kadar
- Box-shadow: Aynı

### Desktop (> 1024px):
- Container: max-w-7xl (1280px)
- Fotoğraf: Container genişliği kadar
- Box-shadow: Aynı
- Ortalanmış (mx-auto)

---

## ❌ HARİÇ TUTULANLAR

Bu standart **aşağıdaki fotoğraf tipleri için kullanılmaz:**

1. **Hero Sections** → FullBleedHero component kullanılır
2. **Background Images** → Hero arka plan görselleri
3. **Apple-style Sliders** → AppleHeroSlider, EventDetailSlider
4. **Konsept Rail** → Yatay scroll galeri (ConceptBirthday)
5. **Logo ve İkonlar**

---

## 🔧 Teknik Notlar

### Performance:
- `loading="lazy"` kullan (ilk görseller hariç)
- Hover efekti YOK → Daha performanslı
- Sabit aspect-ratio YOK → Her görselin doğal oranı korunur

### SEO:
- Her fotoğrafta **açıklayıcı alt text** zorunludur
- Alt text formatı: `"{Karakter/Hizmet} kiralama İstanbul - {Bölüm açıklaması}"`
- Örnek: `"Elsa kiralama İstanbul - Profesyonel hizmet"`

### Accessibility:
- Alt text zorunlu
- Box-shadow kontrast oranı: WCAG AA uyumlu
- Keyboard navigation: Gerekli değil (statik görsel)

---

## 📋 Uygulama Checklist

Yeni fotoğraf eklerken kontrol et:

- [ ] `w-full bg-white py-4` wrapper section var mı?
- [ ] `max-w-7xl mx-auto px-4` container var mı?
- [ ] `className="w-full h-auto rounded-lg"` kullanıldı mı?
- [ ] Box-shadow inline style eklendi mi?
- [ ] Alt text açıklayıcı mı?
- [ ] Hero section değil mi? (O zaman FullBleedHero kullan)

---

## 🎯 Referans Dosyalar

- **CharacterDetail.jsx** → Örnek kullanım (Elsa sayfası)
- **EventDetail.jsx** → Base component (26+ sayfa)
- **ConceptBirthday.jsx** → Özel durum (konsept rail hariç)

---

## 🤖 AI Talimatları

Claude veya başka AI'lara talimat:

> "Sitedeki tüm içerik fotoğrafları (hero hariç) şu yapıyı kullanmalı: white section wrapper, max-w-7xl container, rounded-lg image, box-shadow inline style (iç + dış gölge). Hero sections için FullBleedHero component kullan. Hover efekti veya aspect-ratio sabitleme YAPMA."

---

**Örnek Kullanım (CharacterDetail.jsx):**
```jsx
{character.images && character.images.map((image, index) => (
  <div key={index}>
    <NarrativeSection {...} />
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <img 
          src={image}
          alt={`${character.name} kiralama İstanbul - ${section.title}`}
          className="w-full h-auto rounded-lg"
          style={{
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)'
          }}
        />
      </div>
    </section>
  </div>
))}
