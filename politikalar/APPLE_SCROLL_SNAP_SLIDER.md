# Apple-Style Scroll-Snap Slider Yapısı

## Özet
Premium, FULL BLEED fotoğraflarla scroll-snap kullanan modern slider yapısı. Instagram/Apple tarzında native scroll davranışı.

## Temel Özellikler

### 1. Container Yapısı
```jsx
<div 
  className="relative overflow-x-auto overflow-y-hidden mx-auto"
  style={{
    width: '100vw',
    height: 'clamp(520px, 78vh, 680px)',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch'
  }}
>
```

### 2. Track Yapısı
```jsx
<div 
  className="flex h-full gap-10 md:gap-16"
  style={{ 
    paddingLeft: 'clamp(2%, 3%, 4%)',
    paddingRight: 'clamp(10%, 12%, 15%)'
  }}
>
```

### 3. Kart Yapısı
```jsx
<div 
  style={{ 
    width: 'clamp(94%, 96%, 98%)', 
    height: '100%',
    scrollSnapAlign: 'center'  // ÖNEMLİ!
  }}
>
  <div 
    style={{
      borderRadius: 'clamp(40px, 4.5vw, 48px)',
      backgroundColor: '#000',
      aspectRatio: '4/5'  // Tutarlı boyut
    }}
  >
    <img 
      className="w-full h-full object-cover"
      style={{
        objectPosition: '50% 20%'  // Üst odak
      }}
    />
  </div>
</div>
```

## Anahtar Değerler

| Özellik | Mobil | Desktop |
|---------|-------|---------|
| Gap | 40px (gap-10) | 64px (gap-16) |
| Height | clamp(520px, 78vh, 680px) | Same |
| Aspect Ratio | 4/5 | 4/5 |
| Border Radius | clamp(40px, 4.5vw, 48px) | Same |
| Card Width | 94-98% | 94-98% |
| Object Position | 50% 20% | 50% 20% |

## Kritik CSS Özellikleri

### Scroll Snap
```css
scroll-snap-type: x mandatory;
scroll-snap-align: center;
scroll-behavior: smooth;
```

### FULL BLEED
```css
object-fit: cover;        /* contain DEĞİL! */
object-position: 50% 20%; /* Üstten odak */
aspect-ratio: 4/5;        /* Tutarlı boyut */
overflow: hidden;         /* Taşma yok */
```

### Responsive Gap
```css
gap: 2.5rem;  /* 40px mobil */
gap: 4rem;    /* 64px desktop */
```

## Önemli Notlar

1. **Native Scroll Kullan**: `overflow-x-auto` ile native scroll
2. **Transform YOK**: Artık transform: translateX kullanmıyoruz
3. **Snap Points**: Her kart `scrollSnapAlign: center` ile otomatik ortaya yerleşir
4. **FULL BLEED**: `object-fit: contain` asla kullanma! Sadece `cover`
5. **Upper Focus**: `objectPosition: 50% 20%` ile yüzler kaçmaz
6. **Fixed Aspect Ratio**: `aspectRatio: 4/5` ile tutarlı boyutlar
7. **Geniş Boşluklar**: Premium hissi için 40-64px gap
8. **Smooth Scroll**: iOS için `-webkit-overflow-scrolling: touch`

## Kullanım Örneği

```jsx
// State
const [currentSlide, setCurrentSlide] = useState(0)

// Images
const showcaseImages = [
  '/path/to/image1.webp',
  '/path/to/image2.webp',
  // ...
]

// Container
<div className="relative overflow-x-auto overflow-y-hidden"
     style={{ scrollSnapType: 'x mandatory', ... }}>
  
  {/* Track */}
  <div className="flex gap-10 md:gap-16">
    
    {/* Cards */}
    {showcaseImages.map((image, index) => (
      <div key={index} style={{ scrollSnapAlign: 'center', ... }}>
        <div style={{ aspectRatio: '4/5', ... }}>
          <img 
            src={image}
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 20%' }}
          />
        </div>
      </div>
    ))}
  </div>
</div>
```

## Bu Yapıyı Kullanılan Sayfalar
- `/src/pages/services/MagicShow.jsx` ✅

## Son Güncelleme
23 Aralık 2025 - Scroll-snap ve FULL BLEED implementasyonu
