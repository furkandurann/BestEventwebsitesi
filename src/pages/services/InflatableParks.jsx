import EventDetail from './EventDetail'

const InflatableParks = () => {
  const eventData = {
    title: "İstanbul'da Şişme Oyun Parkı Kiralama - Şişme Şatolar",
    description: "Çocuk etkinlikleri için güvenli şişme oyun parkı ve şato kiralama - Kadıköy, Üsküdar, Maltepe ve tüm İstanbul'da profesyonel şişme parklar",
    canonicalPath: "/organizasyonlar/sisme-oyun-parki",
    serviceType: "Şişme Oyun Parkı Kiralama",
    longDescription: `Best Event olarak İstanbul'un her bölgesinde profesyonel şişme oyun parkı kiralama hizmeti sunuyoruz. Tüm ilçelerde doğum günü partileri, okul etkinlikleri, festival organizasyonları ve çocuk şenlikleri için güvenli, renkli ve eğlenceli şişme oyun parkları ile hizmetinizdeyiz.

🏰 Şişme Oyun Parkı Nedir?

Şişme oyun parkı (zıp zıp, bouncy castle), hava ile şişirilen güvenli yapılar içinde çocukların zıplayarak, tırmanarak ve kayarak eğlendiği oyun alanlarıdır. 10+ yıllık deneyimimizle İstanbul'da binlerce etkinlikte çocuklara güvenli ve eğlenceli oyun deneyimi sağladık.

✨ Neden Best Event Şişme Oyun Parkı?

• 10 yıl+ profesyonel etkinlik tecrübesi
• Geniş şişme park koleksiyonu (20+ model)
• CE sertifikalı güvenlik standartları
• Profesyonel kurulum ve gözetim
• Temiz ve hijyenik malzemeler
• Yaş gruplarına özel modeller

🎪 Şişme Oyun Parkı Çeşitleri:

• Prenses Şatosu: Pembe tema, kız çocukları için
• Korsan Gemisi: Deniz temalı, erkek çocukları için
• Orman Teması: Hayvan figürleri, karışık grup
• Gökkuşağı Parkı: Renkli, tüm yaş grupları
• Engel Parkuru: Tırmanma, atlama, kayma
• Mini Parklar: 3-6 yaş için küçük boyut
• Dev Parklar: 7-12 yaş için büyük boyut
• Kaydıraklı Modeller: Extra eğlence

Her şişme park etkinlik süresince kiralanır, profesyonel montaj ve gözetmen hizmeti dahildir.`,
    
    features: [
      "20+ farklı tema ve boyut seçeneği",
      "CE sertifikalı güvenlik standartları",
      "Yaş gruplarına özel modeller (3-6 yaş, 7-12 yaş)",
      "Profesyonel kurulum ve sökme hizmeti",
      "Etkinlik süresince güvenlik gözetmeni",
      "Temiz ve hijyenik malzeme (her kirada temizlik)",
      "Elektrikli hava üfleyici (sürekli çalışır)",
      "İç ve dış mekan uyumlu",
      "Esnek kiralama süresi (4-8 saat)",
      "İstanbul'un tüm bölgelerine hizmet"
    ],
    
    pricing: {
      startingPrice: 2000,
      description: "Şişme oyun parkı kiralama hizmetimiz, park boyutu, kiralama süresi ve teslimat mesafesine göre fiyatlandırılmaktadır.",
      note: "Detaylı fiyat teklifi için bizimle iletişime geçin. Büyük etkinlikler ve uzun süreli kiralamalar için özel paketlerimiz mevcuttur."
    },
    
    faqs: [
      {
        question: "Şişme oyun parkı ne kadar süreyle kiralanabilir?",
        answer: "Standart kiralama süresi 4-6 saattir (sabah kurulum, akşam sökme). Tam gün (8 saat) ve 2 gün kiralamalar da mevcuttur. Festival ve uzun süreli etkinlikler için özel paketler hazırlanır."
      },
      {
        question: "Hangi yaş grubu için uygundur?",
        answer: "Şişme parklarımız yaş grubuna göre ayrılır: Mini parklar (3-6 yaş, 10-15 çocuk kapasiteli), Orta parklar (5-10 yaş, 15-20 çocuk), Dev parklar (7-12 yaş, 20-30 çocuk). Her yaş grubuna uygun güvenlik standartları uygulanır."
      },
      {
        question: "Güvenlik sertifikası var mı?",
        answer: "Evet! Tüm şişme parklarımız CE sertifikalı olup, Avrupa güvenlik standartlarına uygun üretilmiştir. Dikişler sağlam, malzemeler çocuk dostu ve güvenli. Düzenli güvenlik kontrolleri yapılır."
      },
      {
        question: "Kurulum ve sökme yapıyor musunuz?",
        answer: "Evet! Profesyonel ekibimiz etkinlik öncesi kurulum, etkinlik sırasında gözetim ve etkinlik sonrası sökme işlemlerini yapar. Kurulum 20-30 dakika, sökme 15-20 dakika sürer. Elektrik bağlantısı gereklidir."
      },
      {
        question: "Gözetmen gerekli mi?",
        answer: "Evet, güvenlik için gözetmen zorunludur. Tarafımızdan profesyonel gözetmen sağlanır (ücrete dahil). Gözetmen çocuk sayısını kontrol eder, güvenlik kurallarını hatırlatır ve acil durumlarda müdahale eder."
      },
      {
        question: "Dış mekanda kullanılabilir mi?",
        answer: "Evet! Bahçe, park, teras gibi dış mekanlarda idealdir. Düz zemin gereklidir (çim, beton, parke). Minimum 5x6 metre alan ve elektrik prizi şart. Rüzgarlı ve yağmurlu havada güvenlik nedeniyle kullanım yapılmaz."
      },
      {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine teslimat ve kurulum yapıyoruz."
      },
      {
        question: "Temizlik ve hijyen nasıl sağlanıyor?",
        answer: "Her kiralama sonrası şişme parklar özel temizlik solüsyonu ve dezenfektanla temizlenir, güneşte kurutulur. Hijyen sertifikalarımız mevcuttur. Pandemi sonrası standartlara %100 uyum sağlıyoruz."
      }
    ],
    
    reviews: [
      {
        name: "Seda Yılmaz",
        rating: 5,
        comment: "Kızımın 6 yaş doğum gününde prenses şatosu kiraladık. 20 çocuk 4 saat boyunca durmadan oynadı. Kurulum çok hızlı oldu, gözetmen de çok ilgiliydi. Çocuklar bayıldı!",
        date: "Ekim 2024"
      },
      {
        name: "Murat Demir - Okul Müdürü",
        rating: 5,
        comment: "Okulumuzun bahçe şenliğinde dev engel parkuru kiraladık. 150 öğrenci sırayla oynadı. Güvenlik standartları çok iyiydi, gözetmen profesyoneldi. Kesinlikle tavsiye ederim!",
        date: "Eylül 2024"
      },
      {
        name: "Ayşe Kara",
        rating: 5,
        comment: "Site şenliğimizde 2 farklı şişme park kiraladık (küçükler ve büyükler için). 50+ çocuk 6 saat eğlendi. Fiyat performans mükemmel, hizmet kaliteli!",
        date: "Ağustos 2024"
      }
    ],
    
    seoKeywords: "şişme oyun parkı istanbul, zıp zıp kiralama, bouncy castle, şişme şato kiralama, kadıköy şişme park, doğum günü zıp zıp",
    
    photos: [
      "/content/images/cocukdogumgunu/082041d3-58ff-4b19-81e0-5a6e39d81532.webp",
      "/content/images/cocukdogumgunu/IMG_0790.webp",
      "/content/images/cocukdogumgunu/8923162f-025e-41a5-8014-5738212c4172.webp",
      "/content/images/cocukdogumgunu/konseptdogumgunu.webp",
      "/content/images/cocukdogumgunu/c3f9812a-98cb-4f8e-a6c2-fcbda31a6dfd.webp",
      "/content/images/cocukdogumgunu/IMG_0612.webp"
    ]
  }

  return <EventDetail {...eventData} />
}

export default InflatableParks
