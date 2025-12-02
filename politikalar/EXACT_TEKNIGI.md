# EXACT TEKNİĞİ - Fotoğraf Boyutlandırma Standardı

## 🎯 Genel Bakış

**EXACT Tekniği**, Apple iPhone ürün sayfalarından ilham alınarak geliştirilmiş, fotoğrafların ekrana mükemmel şekilde oturmasını sağlayan fotoğraf boyutlandırma standardıdır.

## ✅ Ne Zaman Kullanılır?

- Ürün/hizmet detay sayfaları
- Tek fotoğraf gösterimleri
- Profesyonel görünüm istenen her sayfa

## 🔧 EXACT Formülü

### Container
```jsx
<div className="w-full flex justify-center items-center bg-white py-8">
```

### Image
```jsx
<img 
  src="/path/to/image.jpg"
  alt="Açıklayıcı alt text"
  className="object-contain max-h-[80vh] w-auto"
/>
```

## 📐 Teknik Detaylar

### Container Özellikleri
- `w-full` - Container tam genişlik
- `flex` - Flexbox layout
- `justify-center` - Yatayda ortala
- `items-center` - Dikeyde ortala
- `bg-white` - Beyaz arka plan
- `py-8` - Üst/alt padding (32px)

### Image Özellikleri
- `object-contain` - Aspect ratio koru, kırpma yok
- `max-h-[80vh]` - Maksimum yükseklik viewport'un %80'i
- `w-auto` - Genişlik otomatik (aspect ratio'ya göre ayarlanır)

## ✨ Avantajlar

✅ **Kırpılma Yok** - Fotoğrafın tamamı görünür
✅ **Responsive** - Her ekran boyutunda mükemmel
✅ **Profesyonel** - Apple kalitesinde görünüm
✅ **SEO Dostu** - Hızlı yükleme, optimize görsel
✅ **Kullanıcı Deneyimi** - Net ve anlaşılır

## 📋 Tam Örnek

```jsx
{/* Başlık */}
<section className="py-8 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 style={{ 
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: '1.08',
      color: '#1d1d1f',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
    }}>
      Hizmet Başlığı
    </h2>
  </div>
</section>

{/* EXACT Tekniği ile Fotoğraf */}
<div className="w-full flex justify-center items-center bg-white py-8">
  <img 
    src="/content/images/hizmet-fotografi.jpg"
    alt="Hizmet açıklaması - İstanbul"
    className="object-contain max-h-[80vh] w-auto"
  />
</div>

{/* Açıklama */}
<section className="py-8 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <p style={{
      fontSize: 'clamp(1.06rem, 2vw, 1.3rem)',
      lineHeight: '1.47',
      letterSpacing: '-0.01em',
      color: '#1d1d1f',
      maxWidth: '700px',
      margin: '0 auto'
    }}>
      Hizmet açıklaması buraya gelir...
    </p>
  </div>
</section>
```

## 🚨 Önemli Notlar

1. **Her yeni sayfa için** bu tekniği kullanın
2. **Fotoğraf kalitesi** yüksek olmalı (min. 1920px genişlik)
3. **Alt text** SEO için önemli, mutlaka ekleyin
4. **Max-height** değeri ihtiyaca göre ayarlanabilir (70vh, 80vh, 90vh)

## 📊 Viewport Height Önerileri

- **Landscape fotoğraflar**: `max-h-[70vh]`
- **Portrait fotoğraflar**: `max-h-[80vh]`
- **Kare fotoğraflar**: `max-h-[75vh]`

## 🎨 Tasarım Prensipleri

1. **Minimalizm** - Fotoğrafa odaklanma
2. **Beyaz Alan** - Nefes alan düzen
3. **Merkezleme** - Göz odağı
4. **Responsive** - Her cihazda uyumlu

## 🔍 Kullanım Prosedürü

**Her yeni sayfa oluştururken, mutlaka sorun:**

> **"Bu sayfa için EXACT Tekniği kullanılsın mı?"**

Cevap **EVET** ise, yukarıdaki formülü uygulayın.

---

**Örnek Uygulama:** `src/pages/services/FullPackageOrganization.jsx`

**Oluşturulma Tarihi:** 26.11.2025
**Versiyon:** 1.0.0
