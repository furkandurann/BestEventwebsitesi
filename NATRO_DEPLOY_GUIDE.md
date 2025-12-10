# 🚀 NATRO HOSTING DEPLOY KILAVUZU

## 📅 Son Güncelleme: 10 Aralık 2025
## 🎯 Proje: Best Event Website - React SPA

---

## ✅ HAZIRLIK ADIMLARI

### 1. **Production Build Oluşturun**

Terminal'de:
```bash
npm run build
```

Bu komut `dist/` klasörü oluşturur. İçinde:
- `index.html`
- `assets/` (JS, CSS, images)
- `robots.txt`
- `sitemap.xml`
- `.htaccess` (public/ klasöründen kopyalanır)

**KONTROL EDİN:**
- [ ] `dist/` klasörü oluştu mu?
- [ ] `dist/index.html` var mı?
- [ ] `dist/.htaccess` var mı?

---

## 🌐 NATRO CPANEL'E GİRİŞ

### 1. **Natro Panel'e Giriş**
```
URL: https://panel.natro.com
Kullanıcı Adı: [Domain adınız veya kullanıcı adınız]
Şifre: [Natro şifreniz]
```

### 2. **cPanel'i Açın**
- Giriş yaptıktan sonra **"cPanel Giriş"** butonuna tıklayın
- cPanel arayüzü açılacak

---

## 📁 DOSYA YÖNETİMİ

### **Yöntem 1: cPanel File Manager (Önerilen - Kolay)**

#### Adım 1: File Manager'ı Açın
1. cPanel → **"Dosya Yöneticisi"** (File Manager)
2. Sol menüden **"public_html"** veya **"httpdocs"** klasörünü seçin
   - (Natro'da genellikle `public_html` kullanılır)

#### Adım 2: Eski Dosyaları Yedekleyin (Opsiyonel)
1. `public_html` klasöründeki tüm dosyaları seçin
2. Sağ tık → **"Sıkıştır"** → **"Zip Archive"**
3. İsim verin: `backup_[tarih].zip`
4. Bu yedeği başka bir klasöre taşıyın

#### Adım 3: Eski Dosyaları Silin
⚠️ **DİKKAT:** Yedek aldıysanız devam edin!

`public_html` içinde şunları SİLMEYİN:
- ❌ `.htaccess` (eğer özel ayarlarınız varsa)
- ❌ `cgi-bin/` klasörü
- ❌ `.well-known/` klasörü (SSL için)
- ❌ Natro tarafından oluşturulan system dosyaları

Şunları SİLEBİLİRSİNİZ:
- ✅ Eski `index.html`
- ✅ Eski `assets/` klasörü
- ✅ Eski `js/`, `css/` klasörleri
- ✅ Diğer eski proje dosyaları

#### Adım 4: Yeni Dosyaları Yükleyin

**4a. ZIP ile Yükleme (Önerilen - Hızlı):**
1. Local'de `dist/` klasörünün içindeki tüm dosyaları seç
2. Sağ tık → Compress → `dist.zip` oluştur
3. cPanel File Manager → **"Upload"** (Yükle)
4. `dist.zip` dosyasını seç ve yükle
5. Yükleme tamamlanınca `dist.zip`'e sağ tık → **"Extract"** (Çıkart)
6. `dist.zip`'i sil

**4b. Manuel Yükleme (Yavaş ama kesin):**
1. File Manager → **"Upload"** butonu
2. Local'de `dist/` klasörünü açın
3. TÜM dosyaları seçin (`index.html`, `assets/`, `.htaccess`, vb.)
4. File Manager'a sürükle-bırak yapın
5. Yükleme tamamlanana kadar bekleyin

#### Adım 5: .htaccess Kontrolü
1. `public_html/.htaccess` dosyasını bulun
2. **EĞER YOKSA:**
   - "New File" → `.htaccess` oluşturun
   - Edit ile açın
   - Bu içeriği yapıştırın:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

3. **Save** yapın

---

### **Yöntem 2: FTP (FileZilla)**

#### Adım 1: FTP Bilgilerinizi Alın
1. Natro cPanel → **"FTP Hesapları"** (FTP Accounts)
2. Ana FTP kullanıcınızın bilgilerini görün:
   ```
   FTP Sunucusu: ftp.bestevent.com.tr (veya IP adresi)
   Kullanıcı Adı: [domain]@bestevent.com.tr
   Şifre: [FTP şifreniz]
   Port: 21
   ```

#### Adım 2: FileZilla Bağlantısı
1. FileZilla'yı açın
2. **Dosya** → **Site Manager** (Ctrl+S)
3. **Yeni Site** → İsim: "Natro - Best Event"
4. Ayarlar:
   ```
   Protocol: FTP
   Host: ftp.bestevent.com.tr
   Port: 21
   Encryption: Use explicit FTP over TLS if available
   Logon Type: Normal
   User: [FTP kullanıcı adı]
   Password: [FTP şifre]
   ```
5. **Bağlan**

#### Adım 3: Dosyaları Yükle
1. Sol taraf (Local): `dist/` klasörünü açın
2. Sağ taraf (Remote): `public_html/` veya `httpdocs/` klasörüne gidin
3. Sol taraftan tüm dosyaları seçin
4. Sağ tarafa sürükle-bırak yapın
5. **Overwrite** (Üzerine yaz) seçeneğini seçin
6. Yükleme tamamlanana kadar bekleyin

---

## 🧪 TEST

### 1. **Ana Sayfayı Test Edin**
```
https://bestevent.com.tr/
```
✅ Ana sayfa açılıyor mu?

### 2. **Çocuk Etkinlikleri Sayfasını Test Edin**
```
https://bestevent.com.tr/organizasyonlar/cocuk-etkinlikleri
```
✅ Sayfa açılıyor mu? (404 YOK!)

### 3. **Diğer Sayfaları Test Edin**
```
https://bestevent.com.tr/organizasyonlar/yuz-boyama
https://bestevent.com.tr/organizasyonlar/magic-show
https://bestevent.com.tr/organizasyonlar/bubble-show
```

### 4. **Developer Tools Kontrolü**
1. Chrome'da `F12` → **Console** tab
2. ❌ Kırmızı error var mı?
3. ✅ Sayfalar düzgün yükleniyor mu?

---

## 🐛 SORUN GİDERME

### Problem 1: 404 Hatası Hala Veriyor

**Çözüm A: .htaccess Yok veya Çalışmıyor**
1. cPanel File Manager → `public_html/.htaccess` var mı kontrol edin
2. Yoksa oluşturun (yukarıdaki içerikle)
3. Varsa **Edit** ile açın ve içeriğini kontrol edin

**Çözüm B: mod_rewrite Kapalı**
1. cPanel → **"PHP Version"** veya **"MultiPHP Manager"**
2. Apache modules kontrol edin
3. `mod_rewrite` enabled olmalı
4. Natro'da genellikle varsayılan olarak açıktır

**Çözüm C: Cache Problemi**
1. Tarayıcı cache temizleyin: `Ctrl+Shift+R`
2. Incognito mode'da test edin
3. Farklı tarayıcıda test edin

### Problem 2: Sayfalar Eski Versiyon Gösteriyor

**Çözüm:**
1. cPanel File Manager → `public_html/`
2. Tüm `assets/js/*.js` dosyalarının tarihini kontrol edin
3. Bugünün tarihi olmalı
4. Değilse → Yeniden build + upload yapın

### Problem 3: CSS/JS Yüklenmiyor

**Çözüm A: Path Problemi**
1. Tarayıcıda `F12` → **Network** tab
2. Kırmızı (404) dosyalar var mı?
3. `index.html`'i açın ve path'leri kontrol edin
   - `/assets/` ile başlamalı

**Çözüm B: Dosyalar Eksik**
1. Local `dist/assets/` klasörüne bakın
2. Remote `public_html/assets/` ile karşılaştırın
3. Eksik dosyaları tekrar yükleyin

### Problem 4: "500 Internal Server Error"

**Çözüm:**
1. `.htaccess` syntax hatası olabilir
2. cPanel → **"Error Log"** kontrol edin
3. `.htaccess`'i geçici olarak silin/rename edin
4. Sayfa açılıyorsa → `.htaccess` problemi
5. Düzgün syntax ile tekrar oluşturun

---

## 📊 BAŞARILI DEPLOY CHECKLİSTİ

Deploy sonrası kontrol edin:

- [ ] ✅ Ana sayfa açılıyor: https://bestevent.com.tr/
- [ ] ✅ Çocuk Etkinlikleri açılıyor: `.../organizasyonlar/cocuk-etkinlikleri`
- [ ] ✅ Diğer hizmet sayfaları açılıyor
- [ ] ✅ Görseller yükleniyor
- [ ] ✅ CSS doğru uygulanmış
- [ ] ✅ JavaScript çalışıyor (menu toggle, slider, vb.)
- [ ] ✅ Console'da error yok
- [ ] ✅ Mobile responsive çalışıyor
- [ ] ✅ WhatsApp butonu çalışıyor
- [ ] ✅ İletişim formu çalışıyor

---

## 🚀 GELECEKTEKİ DEPLOY'LAR

Bir sonraki güncelleme için:

```bash
# 1. Değişiklikleri yap
# 2. Build al
npm run build

# 3. Sadece dist/ klasörünü yükle
# cPanel File Manager veya FTP ile
# Tüm dosyaları değiştir
```

**NOT:** `.htaccess` sadece ilk deploy'da gerekir. Sonraki deploy'larda `dist/` içeriğini güncelleyin.

---

## 📞 DESTEK

**Natro Destek:**
- Web: https://www.natro.com/destek
- Telefon: [Natro destek hattı]
- Ticket: cPanel içinden açabilirsiniz

**Proje Destek:**
- Bu dokümantasyonu kontrol edin
- `.htaccess` dosyası `public/.htaccess` konumunda

---

## ✅ ÖZET: HIZLI DEPLOY

```bash
# 1. BUILD
npm run build

# 2. CPANEL'E GİR
https://panel.natro.com

# 3. FILE MANAGER
public_html/ klasörüne git

# 4. ESKİ DOSYALARI SİL/YEDEKLE

# 5. YENİ DOSYALARI YÜKLE
dist/ içindeki TÜM dosyalar

# 6. .HTACCESS KONTROL
Var mı? İçeriği doğru mu?

# 7. TEST
https://bestevent.com.tr/organizasyonlar/cocuk-etkinlikleri
```

**Başarılar! 🎉**
