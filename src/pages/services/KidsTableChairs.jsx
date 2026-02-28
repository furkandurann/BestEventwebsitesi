import EventDetail from './EventDetail'

const KidsTableChairs = () => {
  const eventData = {
    title: "İstanbul'da Renkli Çocuk Masa Sandalye Kiralama",
    description: "Çocuk etkinlikleri için güvenli ve renkli masa sandalye kiralama - Kadıköy, Üsküdar, Maltepe ve tüm İstanbul'da hijyenik çocuk mobilyaları",
    canonicalPath: "/organizasyonlar/cocuk-masa-sandalye",
    serviceType: "Çocuk Mobilya Kiralama",
    longDescription: `Best Event olarak İstanbul'un her bölgesinde profesyonel çocuk masa sandalye kiralama hizmeti sunuyoruz. Tüm ilçelerde doğum günü partileri, okul etkinlikleri, açılış organizasyonları ve çocuk festivalleri için güvenli, renkli ve hijyenik çocuk mobilyaları ile hizmetinizdeyiz.

🪑 Çocuk Masa Sandalye Kiralama Nedir?

Çocuk masa sandalye kiralama, etkinliklerinizde çocukların boy ve ergonomilerine uygun, güvenli ve renkli masa sandalye setlerinin kiralanması hizmetidir. 10+ yıllık deneyimimizle İstanbul'da binlerce etkinlikte çocuklara konforlu oturma alanları sağladık.

✨ Neden Best Event Çocuk Masa Sandalye?

• 10 yıl+ profesyonel etkinlik tecrübesi
• Geniş mobilya stoğu (100+ set)
• Çocuk boyu ve ergonomisine uygun tasarım
• Güvenli plastik malzeme (sivri köşesiz)
• Hijyenik temizlik ve dezenfeksiyon
• Renkli ve eğlenceli tasarımlar

🎨 Çocuk Masa Sandalye Özellikleri:

• Renk Seçenekleri: Kırmızı, mavi, yeşil, sarı, turuncu, pembe
• Masa Boyutları: 60x60 cm (4 kişilik), 120x60 cm (8 kişilik)
• Sandalye Yüksekliği: 30 cm (3-6 yaş), 35 cm (7-10 yaş)
• Güvenlik: Sivri köşesiz, kaymaz taban
• Malzeme: Dayanıklı plastik (kırılmaz)
• Ağırlık Kapasitesi: 50 kg'a kadar
• Temizlik: Her kirada dezenfeksiyon
• Kurulum: Mekan içi yerleştirme

Her masa sandalye seti etkinlik süresince kiralanır ve sonrasında tarafımızca toplanır.`,
    
    features: [
      "100+ masa sandalye seti stoğu",
      "Çocuk boyu ve ergonomisine uygun (3-10 yaş)",
      "Renkli seçenekler (kırmızı, mavi, yeşil, sarı, pembe)",
      "Güvenli plastik malzeme (sivri köşesiz)",
      "Hijyenik temizlik ve dezenfeksiyon",
      "Hafif ve taşınabilir (kurulum kolay)",
      "İç ve dış mekan uyumlu",
      "Esnek kiralama süresi (günlük veya haftalık)",
      "Mekan içi kurulum ve toplama hizmeti",
      "İstanbul'un tüm bölgelerine hizmet"
    ],
    
    pricing: {
      startingPrice: 500,
      description: "Çocuk masa sandalye kiralama hizmetimiz, set sayısı, kiralama süresi ve teslimat mesafesine göre fiyatlandırılmaktadır.",
      note: "Detaylı fiyat teklifi için bizimle iletişime geçin. Büyük etkinlikler ve uzun süreli kiralamalar için özel indirimlerimiz mevcuttur."
    },
    
    faqs: [
      {
        question: "Kaç set masa sandalye kiralayabilirim?",
        answer: "Minimum 5 set, maksimum 100 set masa sandalye kiralama yapabilirsiniz. Her set 1 masa + 4 sandalyeden oluşur. 20 çocuk için yaklaşık 5 set (4 kişilik masa) yeterlidir."
      },
      {
        question: "Hangi yaş grubu için uygundur?",
        answer: "Çocuk masa sandalyelerimiz 3-10 yaş arası çocuklar için tasarlanmıştır. İki farklı yükseklik seçeneği var: Küçük çocuklar (3-6 yaş) için 30 cm, büyük çocuklar (7-10 yaş) için 35 cm sandalye yüksekliği."
      },
      {
        question: "Renkler karışık mı geliyor?",
        answer: "Evet, genellikle karışık renklerde gönderilir (kırmızı, mavi, yeşil, sarı). Ancak özel renk tercihiniz varsa (örneğin sadece mavi ve pembe) mümkün olduğunca karşılamaya çalışırız. Önceden belirtin."
      },
      {
        question: "Kurulum ve toplama yapıyor musunuz?",
        answer: "Evet! Masaları ve sandalyeleri etkinlik mekanına taşır, istediğiniz düzende kurarız. Etkinlik bitiminde de toplayıp götürürüz. Kurulum hizmeti ücretsizdir."
      },
      {
        question: "Temizlik ve hijyen nasıl sağlanıyor?",
        answer: "Her kiralama sonrası tüm masa ve sandalyeler özel temizlik solüsyonu ve dezenfektanla temizlenir. Hijyen sertifikalarımız mevcuttur. Pandemi sonrası hijyen standartlarına %100 uyum gösteriyoruz."
      },
      {
        question: "Dış mekanda kullanılabilir mi?",
        answer: "Evet! Bahçe, teras, park gibi dış mekanlarda da kullanılabilir. Plastik malzeme su geçirmez ve dayanıklıdır. Ancak yağmurlu havada üzeri örtülü alan tercih edilir."
      },
      {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine teslimat yapıyoruz."
      },
      {
        question: "Kiralama süresi ne kadar?",
        answer: "Standart kiralama süresi 1 gündür (sabah teslim, akşam toplama). Uzun süreli etkinlikler için (2-7 gün) haftalık kiralama paketlerimiz mevcuttur. Fiyatlandırma süreye göre değişir."
      }
    ],
    
    reviews: [
      {
        name: "Aylin Yılmaz",
        rating: 5,
        comment: "Kızımın 5 yaş doğum gününde 10 set masa sandalye kiraladık. Bahçede kurduk, çocuklar çok rahat etti. Renkli ve şirin görünüyorlardı. Kurulum ve toplama hizmeti çok pratikti!",
        date: "Ekim 2024"
      },
      {
        name: "Kerem Özcan - Anaokulu Müdürü",
        rating: 5,
        comment: "Okulumuzun bahçe şenliği için 30 set masa sandalye kiraladık. 120 öğrenci rahatça oturdu. Hijyen çok iyiydi, hepsi tertemizdi. Kesinlikle tavsiye ederim!",
        date: "Eylül 2024"
      },
      {
        name: "Deniz Kara",
        rating: 5,
        comment: "Açılış organizasyonumuzda çocuk köşesi için 15 set kiraladık. Renkli seçenekler çok güzeldi, çocuklar severek oturdu. Fiyat performans açısından mükemmel!",
        date: "Ağustos 2024"
      }
    ],
    
    seoKeywords: "çocuk masa sandalye kiralama istanbul, renkli masa sandalye, doğum günü masa sandalye, kadıköy çocuk mobilya, okul etkinliği masa kiralama",
    
    photos: [
      "/content/images/cocukdogumgunu/IMG_0790.JPG",
      "/content/images/cocukdogumgunu/IMG_0784.JPG",
      "/content/images/cocukdogumgunu/IMG_0787.JPG",
      "/content/images/cocukdogumgunu/8923162f-025e-41a5-8014-5738212c4172.JPG",
      "/content/images/cocukdogumgunu/c3f9812a-98cb-4f8e-a6c2-fcbda31a6dfd.JPG",
      "/content/images/cocukdogumgunu/konseptdogumgunu.JPG"
    ]
  }

  return <EventDetail {...eventData} />
}

export default KidsTableChairs
