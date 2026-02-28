import EventDetail from './EventDetail'

const ChocolateFountain = () => {
  const eventData = {
    title: "Istanbul Popcorn Pamuk Şeker Çikolata Şelalesi Konfeti Makinası Osmanlı Macunu Sıcak Çikolata Kiralama ve Organizasyonu",
    description: "Istanbul'da popcorn, pamuk şeker, çikolata şelalesi, konfeti makinası, osmanlı macunu, sıcak çikolata kiralama ve organizasyon hizmetleri.",
    canonicalPath: "/organizasyonlar/cikolata-selalesi",
    serviceType: "İkram Kiralama ve Organizasyonu",
    longDescription: `Best Event olarak İstanbul'un her bölgesinde profesyonel çikolata şelalesi kiralama hizmeti sunuyoruz. Tüm ilçelerde doğum günü partileri, düğün organizasyonları, açılış etkinlikleri ve kurumsal toplantılar için lezzetli çikolata şelalesi ile hizmetinizdeyiz.

🍫 Çikolata Şelalesi Nedir?

Çikolata şelalesi (chocolate fountain), sıcak çikolatanın çeşmeden aşağı doğru akarak göz alıcı bir şelale oluşturduğu, misafirlerin meyve, marshmallow ve bisküvileri daldırarak tatlı keyfi yaşadığı bir ikram sistemidir. 10+ yıllık deneyimimizle İstanbul'da binlerce etkinlikte unutulmaz tatlı anlar yarattık.

✨ Neden Best Event Çikolata Şelalesi?

• 10 yıl+ profesyonel etkinlik tecrübesi
• Hijyenik ve kaliteli çikolata kullanımı
• Profesyonel paslanmaz çelik şelale
• Geniş meyve ve çubuk seçenekleri
• Görevli personel hizmeti
• Temiz ve düzenli sunum

🍓 Çikolata Şelalesinde Neler Var?

• Çikolata Çeşitleri: Sütlü, bitter, beyaz çikolata
• Meyve Seçenekleri: Çilek, muz, kivi, ananas, üzüm
• Ekstra Seçenekler: Marshmallow, bisküvi, waffle küpleri
• Profesyonel Şelale: 3 katlı veya 4 katlı paslanmaz çelik
• Hijyenik Sunum: Tek kullanımlık çubuklar, peçete
• Görevli Personel: Kurulum, bakım, temizlik
• Dekoratif Sunum: Meyve tabağı düzenlemesi
• Sıcaklık Kontrolü: Sürekli ısıtma sistemi

Çikolata şelalesi etkinlik süresince açık kalır ve sürekli çikolata ikmali yapılır.`,
    
    features: [
      "3-4 katlı profesyonel paslanmaz çelik şelale",
      "Kaliteli çikolata seçenekleri (sütlü, bitter, beyaz)",
      "Taze meyve seçenekleri (çilek, muz, kivi, ananas)",
      "Marshmallow ve bisküvi seçenekleri",
      "Hijyenik tek kullanımlık çubuklar",
      "Profesyonel görevli personel",
      "Dekoratif meyve sunumu",
      "Sürekli sıcaklık kontrolü",
      "İç ve dış mekan uyumlu",
      "İstanbul'un tüm bölgelerine hizmet"
    ],
    
    pricing: {
      startingPrice: 1500,
      description: "Çikolata şelalesi kiralama hizmetimiz, şelale boyutu, çikolata miktarı, meyve çeşitliliği ve etkinlik süresine göre fiyatlandırılmaktadır.",
      note: "Detaylı fiyat teklifi için bizimle iletişime geçin. Çikolata ve meyve miktarı misafir sayısına göre hesaplanır. Uzun süreli etkinlikler için özel paketler mevcuttur."
    },
    
    faqs: [
      {
        question: "Çikolata şelalesi ne kadar süreyle kiralanabilir?",
        answer: "Standart kiralama 2-4 saattir. Düğün ve uzun etkinlikler için 6-8 saatlik paketler de mevcuttur. Şelale etkinlik boyunca açık kalır ve sürekli çikolata ikmali yapılır."
      },
      {
        question: "Hangi çikolata çeşitleri mevcut?",
        answer: "Sütlü çikolata (en popüler), bitter çikolata (yetişkinler için) ve beyaz çikolata seçeneklerimiz var. İki veya üç çikolatayı kombine edebilirsiniz (ek ücret karşılığı)."
      },
      {
        question: "Meyve ve çubuklar dahil mi?",
        answer: "Evet! Standart pakette çilek, muz, ananas ve marshmallow dahildir. Ek meyve seçenekleri (kivi, üzüm, mango) ve waffle küpleri ekstra ücret karşılığında eklenebilir."
      },
      {
        question: "Personel hizmeti var mı?",
        answer: "Evet! Görevli personelimiz kurulum, işletme, bakım ve temizlik işlemlerini yapar. Misafirlerinize yardımcı olur, şelalenin sürekli temiz ve düzenli kalmasını sağlar."
      },
      {
        question: "Hijyenik mi?",
        answer: "Kesinlikle! Şelale her kullanımdan önce ve sonra detaylı temizlenir. Tek kullanımlık çubuklar kullanılır. Meyve ve malzemeler taze ve hijyenik şekilde hazırlanır. Sağlık standartlarına %100 uyum gösteriyoruz."
      },
      {
        question: "Kaç kişilik etkinlikler için uygun?",
        answer: "Minimum 30, maksimum 300 kişilik etkinlikler için uygundur. 3 katlı şelale 30-100 kişi, 4 katlı şelale 100-300 kişi için idealdir. Çikolata ve meyve miktarı misafir sayısına göre ayarlanır."
      },
      {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine gidiyoruz."
      },
      {
        question: "Elektrik ve su gerekir mi?",
        answer: "Elektrik prizi gereklidir (220V, standart). Su bağlantısı gerekmez ancak yakınında el yıkama imkanı olması önerilir. Masa üzerine kurulur, minimum 1x1 metre düz alan yeterlidir."
      }
    ],
    
    reviews: [
      {
        name: "Ayşe Yıldırım",
        rating: 5,
        comment: "Düğünümüzde çikolata şelalesi çok beğenildi! 200 misafir vardı, herkes daldırdı. Çilekler taze ve lezzetliydi, çikolata mükemmeldi. Görevli personel çok ilgiliydi!",
        date: "Ekim 2024"
      },
      {
        name: "Mehmet Kaya",
        rating: 5,
        comment: "Kızımın 10 yaş doğum gününde çikolata şelalesi yaptırdık. Çocuklar bayıldı, büyükler de çok beğendi. 4 saat boyunca kesintisiz hizmet aldık. Kesinlikle tavsiye ederim!",
        date: "Eylül 2024"
      },
      {
        name: "Zeynep Arslan - Etkinlik Koordinatörü",
        rating: 5,
        comment: "Şirket yılbaşı etkinliğinde çikolata şelalesi çok ilgi gördü. 150 kişilik etkinlikti, herkes fotoğraf çekti. Hem görsel hem de lezzetli bir deneyimdi!",
        date: "Ağustos 2024"
      }
    ],
    
    seoKeywords: [
      'istanbul popcorn kiralama',
      'pamuk şeker organizasyonu',
      'çikolata şelalesi kiralama',
      'konfeti makinası kiralama',
      'osmanlı macunu organizasyonu',
      'sıcak çikolata kiralama',
      'istanbul parti ekipmanları'
    ],
    
    photos: [
      "/content/images/Parti Ekipmanları/popcornpamukseker.webp",
      "/content/images/cocukdogumgunu/IMG_0790.webp",
      "/content/images/cocukdogumgunu/konseptdogumgunu.webp",
      "/content/images/cocukdogumgunu/c3f9812a-98cb-4f8e-a6c2-fcbda31a6dfd.webp",
      "/content/images/cocukdogumgunu/IMG_0612.webp",
      "/content/images/cocukdogumgunu/IMG_0787.webp",
      "/content/images/cocukdogumgunu/8923162f-025e-41a5-8014-5738212c4172.webp"
    ]
  }

  return <EventDetail {...eventData} />
}

export default ChocolateFountain
