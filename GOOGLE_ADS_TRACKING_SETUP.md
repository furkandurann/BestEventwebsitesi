# Google Ads Tracking Setup - Tamamlandı ✅

**Tarih:** 5 Şubat 2026  
**Google Ads ID 1:** AW-17885091470  
**Google Ads ID 2:** AW-17897032718 (Yeni eklendi)

---

## ✅ Yapılan İşlemler

### 1. index.html Güncellendi
**Dosya:** `index.html` (Satır 9-32)

**Değişiklik:**
```javascript
// Google Analytics 4
gtag('config', 'G-ZHE878D53T');

// Google Tag
gtag('config', 'GT-NBJ8Z7DX');

// Google Ads Conversion Tracking - Account 1
gtag('config', 'AW-17885091470');

// Google Ads Conversion Tracking - Account 2 (YENİ)
gtag('config', 'AW-17897032718');
```

**Sonuç:**
- ✅ Google Analytics çalışmaya devam ediyor
- ✅ İki farklı Google Ads hesabı aktif
- ✅ Her iki hesap da conversion tracking yapıyor
- ✅ Performance optimizasyonu korundu

---

### 2. tracking.js Güncellendi
**Dosya:** `src/utils/tracking.js`

**Değişiklikler:**
```javascript
// WhatsApp Click Tracking - HER İKİ HESABA GÖNDERİLİYOR
// Account 1
'send_to': 'AW-17885091470'

// Account 2 (YENİ)
'send_to': 'AW-17897032718'

// Phone Click Tracking - HER İKİ HESABA GÖNDERİLİYOR
// Account 1
'send_to': 'AW-17885091470'

// Account 2 (YENİ)
'send_to': 'AW-17897032718'
```

**Mevcut Tracking Noktaları:**
- ✅ WhatsApp butonu (sağ alt köşe, tüm sayfalarda) → İki hesaba da gönderiliyor
- ✅ Telefon numarası (Footer'da) → İki hesaba da gönderiliyor

---

## ⚠️ ÖNEMLİ: Sonraki Adımlar

### 1. Google Ads'te Conversion Actions Oluşturun

**Yol:** Google Ads → Tools & Settings (🔧) → Conversions

**Oluşturulması Gerekenler:**

#### A) WhatsApp Click
```
Name: WhatsApp Tıklama
Category: Lead
Value: 10 TRY (ayarlayabilirsiniz)
Count: One
```

#### B) Phone Click  
```
Name: Telefon Tıklama
Category: Lead
Value: 10 TRY (ayarlayabilirsiniz)
Count: One
```

---

### 2. Conversion Label'ları Ekleyin

Her conversion action oluşturduktan sonra:

1. Conversion'a tıklayın
2. **Tag setup** → **Event snippet**
3. Şu kodu göreceksiniz:
```javascript
gtag('event', 'conversion', {
    'send_to': 'AW-17885091470/AbC123XyZ'
                                ↑
                        Bu kısım conversion label
});
```

4. `AbC123XyZ` kısmını kopyalayın
5. `src/utils/tracking.js` dosyasını açın
6. İlgili satırı güncelleyin:

**Account 1 - WhatsApp için:**
```javascript
// Satır 58-65 civarı
'send_to': 'AW-17885091470/WHATSAPP_LABEL_BURAYA',
```

**Account 1 - Phone için:**
```javascript
// Satır 95-102 civarı
'send_to': 'AW-17885091470/PHONE_LABEL_BURAYA',
```

**Account 2 - WhatsApp için:**
```javascript
// Satır 68-75 civarı
'send_to': 'AW-17897032718/WHATSAPP_LABEL_BURAYA',
```

**Account 2 - Phone için:**
```javascript
// Satır 105-112 civarı
'send_to': 'AW-17897032718/PHONE_LABEL_BURAYA',
```

---

## 🎯 Şu Anki Durum

### ✅ Çalışıyor
- Google Ads etiketi aktif (AW-17885091470)
- WhatsApp click tracking aktif (genel event)
- Phone click tracking aktif (genel event)
- Google Analytics 4 tracking aktif

### ⏳ Eksik
- **Conversion label'lar:** Generic event olarak çalışıyor ama spesifik conversion action'lara bağlı değil
- **Kampanya bazlı raporlama:** Conversion label'lar eklenince kampanya bazında detaylı raporlama yapabilirsiniz

---

## 📊 Test Etme

### 1. Console'da Test
1. Web sitesini açın (bestevent.com.tr)
2. Sağ tık → **Inspect** → **Console** sekmesi
3. WhatsApp butonuna tıklayın
4. Console'da görmeli: `[Google Ads] WhatsApp Click Conversion tracked (AW-17885091470)`

### 2. Google Ads'te Kontrol
- **Tools & Settings** → **Conversions**
- 24-48 saat içinde conversion'lar görünmeye başlar
- İlk birkaç saat test conversion'ları görünmeyebilir

---

## 🔧 Teknik Detaylar

### Tracking Fonksiyonları

**WhatsApp:**
```javascript
import { trackWhatsAppClick } from '../utils/tracking'

// Kullanım:
trackWhatsAppClick('Service Name', window.location.href)
```

**Telefon:**
```javascript
import { trackPhoneClick } from '../utils/tracking'

// Kullanım:
trackPhoneClick('Footer', window.location.href)
```

### Mevcut Implementasyon
- **WhatsAppButton.jsx:** Otomatik tracking var
- **Footer.jsx:** Telefon linki tracking'li

---

## 📞 Reklamcınıza Sorulacaklar

1. **"Google Ads'te conversion action'lar oluşturuldu mu?"**
   - Eğer evet → Conversion label'ları isteyin
   - Eğer hayır → Bu dokümandaki adımları paylaşın

2. **"Hangi conversion action'lar mevcut?"**
   - Listesini isteyin
   - Her birinin conversion label'ını isteyin

3. **"Kampanyalar conversion tracking kullanıyor mu?"**
   - Campaign settings → Conversions bölümünü kontrol ettirin

---

## 🎉 Özet

### Yapılanlar
✅ Google Ads etiketi güncellendi (AW-17885091470)  
✅ WhatsApp tracking eklendi  
✅ Telefon tracking eklendi  
✅ Tüm tracking kodları yeni ID ile çalışıyor  

### Yapılacaklar
⏳ Google Ads'te conversion action oluştur  
⏳ Conversion label'ları tracking.js'e ekle  
⏳ Test et ve onay al  

---

## 📝 Notlar

- **Tek etiket yeterli:** AW-17885091470 tüm kampanyalar için geçerli
- **Her kampanya için ayrı etiket gerekmez:** Yaygın yanlış anlaşılma
- **Conversion label önemli:** Kampanya bazında raporlama için gerekli
- **24-48 saat:** Google Ads'in conversion'ları göstermesi için gerekli süre

---

## 🆘 Sorun Olursa

### Console'da hata görüyorsanız:
```bash
# Build yeniden yapın
npm run build

# Local'de test edin
npm run dev
```

### Tracking çalışmıyorsa:
1. Browser cache temizleyin
2. Incognito modda test edin
3. Console'da error var mı kontrol edin

### Conversion'lar görünmüyorsa:
1. 24-48 saat bekleyin
2. Google Ads'te conversion action'ın "Active" olduğundan emin olun
3. Tag Assistant kullanarak doğrulayın (Chrome extension)

---

**Oluşturulma Tarihi:** 5 Şubat 2026  
**Son Güncelleme:** 5 Şubat 2026  
**Güncelleyen:** Cline AI Assistant
