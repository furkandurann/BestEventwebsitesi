# Anasayfa Scroll Fotoğrafları - Yedekleme

**Tarih:** 3 Şubat 2026  
**Amaç:** CinemaStrip bileşenindeki fotoğrafların yedeklenmesi

## 📁 Dosya Konumu
`public/content/images/Anasayfa/anasayfascroll/`

## 🖼️ Kullanılan Fotoğraflar Listesi

Mevcut `CinemaStrip` bileşeninde kullanılan fotoğraflar:

1. **IMG_1879 2_LE_upscale_strong_x4_tone_enhance_30_color_enhance_30.webp**
   - Alt: Özel doğum günü organizasyonu ve etkinlik İstanbul - Best Event

2. **MST04619.webp**
   - Alt: Profesyonel etkinlik organizasyonu İstanbul - Best Event çalışma referansı

3. **MST04637.webp**
   - Alt: Etkinlik ve organizasyon hizmetleri İstanbul - Best Event portfolio

4. **pexels-maksgelatin-5046522.webp**
   - Alt: Özel etkinlik organizasyonu ve kutlama İstanbul - Best Event

5. **pexels-tima-miroshnichenko-5805041.webp**
   - Alt: Etkinlik organizasyonu ve profesyonel hizmetler İstanbul - Best Event

6. **vodafone1.jpeg**
   - Alt: Vodafone kurumsal etkinlik organizasyonu İstanbul - Best Event referans çalışması

7. **sencard3.jpg**
   - Alt: SenCard kurumsal organizasyon etkinliği İstanbul - Best Event portfolio

8. **kocholdıng1.jpg**
   - Alt: Koç Holding kurumsal etkinlik ve organizasyon İstanbul - Best Event

9. **dansanagorsel1.jpeg**
   - Alt: Profesyonel dans gösterisi İstanbul - Oryantal dans etkinliği - Best Event

10. **dansgirl.jpeg**
    - Alt: Modern dans gösterisi ve dans etkinliği organizasyonu İstanbul - Best Event

11. **allianz1.jpeg**
    - Alt: Allianz kurumsal etkinlik organizasyonu İstanbul - Best Event referans

12. **anabubbleeklee.JPG**
    - Alt: Bubble show etkinliği İstanbul - Best Event

13. **bandoekle.jpg**
    - Alt: Bando ve müzik gösterisi İstanbul - Best Event

14. **ekle.JPG**
    - Alt: Etkinlik organizasyonu İstanbul - Best Event

15. **ekleee.jpg**
    - Alt: Özel etkinlik organizasyonu İstanbul - Best Event

16. **eklee.jpg**
    - Alt: Profesyonel etkinlik hizmeti İstanbul - Best Event

17. **sencard2ekle.webp**
    - Alt: SenCard kurumsal etkinlik İstanbul - Best Event

18. **vodafone3ekle.JPG**
    - Alt: Vodafone kurumsal organizasyon İstanbul - Best Event

19. **360selfie.jpeg**
    - Alt: 360 derece selfie standı kiralama İstanbul - İnteraktif fotoğraf çekimi etkinliği - Best Event

20. **360selifee.jpeg**
    - Alt: 360 selfie booth etkinlik hizmeti İstanbul - Özel anlar için fotoğraf çözümleri - Best Event

21. **heryasauygunbubbleshowpartisi.webp**
    - Alt: Her yaşa uygun bubble show partisi İstanbul - Köpük gösterisi ve eğlence organizasyonu - Best Event

22. **sihirbazlıkgosterisivekomedishow.jpg**
    - Alt: Sihirbazlık gösterisi ve komedi show İstanbul - Eğlenceli etkinlik organizasyonu - Best Event

23. **vedafotograf.webp**
    - Alt: Veda partisi organizasyonu İstanbul - Özel anlar için profesyonel etkinlik hizmeti - Best Event

## 📂 Yedek Konumu
Orijinal fotoğraflar: `public/content/images/Anasayfa/anasayfascroll/orig_jpg/`

## ⚠️ Tespit Edilen Sorunlar

1. Bazı dosyalar kodda `.webp` uzantısıyla çağrılıyor ama gerçek dosya farklı uzantıda
2. Shuffle algoritması her yüklemede fotoğraf sırasını değiştiriyor
3. Karmaşık state management ve drag/touch logic hataya açık
4. Bazı fotoğraflar yüklenmiyor veya görüntülenmiyor

## 🔧 Yapılacak İşlemler

1. ✅ Bu yedekleme dosyasını oluştur
2. ⏳ Mevcut CinemaStrip bileşenini basitleştir
3. ⏳ Sadece çalışan fotoğrafları kullan
4. ⏳ Basit, güvenilir bir slider implementasyonu yap

---

**Not:** Bu dosya silmeden önce yedekleme amaçlı oluşturulmuştur.
