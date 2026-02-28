import EventDetail from './EventDetail'

const WorkshopActivities = () => {
  const eventData = {
    title: "İstanbul'da Çocuk Atölye Etkinlikleri - Yaratıcı Workshoplar",
    description: "Çocuklar için eğitici ve eğlenceli atölye etkinlikleri - Kadıköy, Üsküdar, Maltepe ve tüm İstanbul'da profesyonel workshop organizasyonu",
    canonicalPath: "/organizasyonlar/atolye-etkinlikleri",
    serviceType: "Çocuk Atölye Etkinlikleri",
    longDescription: `Best Event olarak İstanbul'un her bölgesinde profesyonel çocuk atölye etkinlikleri sunuyoruz. Tüm ilçelerde doğum günü partileri, okul etkinlikleri, karne günleri ve çocuk festivalleri için eğitici, yaratıcı ve eğlenceli atölye programları ile hizmetinizdeyiz.

🎨 Çocuk Atölye Etkinliği Nedir?

Çocuk atölye etkinliği, profesyonel eğitmenler eşliğinde çocukların el becerilerini geliştirdiği, yaratıcılıklarını ortaya koyduğu ve eğlenerek öğrendiği interaktif programlardır. 10+ yıllık deneyimimizle İstanbul'da binlerce çocuğa unutulmaz atölye deneyimleri yaşattık.

✨ Neden Best Event Atölye Etkinlikleri?

• 10 yıl+ profesyonel eğitim tecrübesi
• Çok çeşitli atölye seçenekleri (10+ kategori)
• Profesyonel eğitmenler ve malzemeler
• Yaş grubuna özel içerik
• Her çocuğa hediye (yaptıkları ürün)
• Güvenli ve hijyenik malzeme kullanımı

🎭 Atölye Çeşitleri:

• Slime Atölyesi: Renkli, ışıltılı slime yapımı (en popüler!)
• Boyama Atölyesi: Tuval, ahşap, seramik boyama
• Kil Atölyesi: Hamur, kil şekillendirme, seramik
• Takı Tasarımı: Bileklik, kolye, küpe yapımı
• Bilim Atölyesi: Basit deneyler, keşif
• Yemek Atölyesi: Kurabiye, pizza yapımı
• El Sanatları: Keçe, makas, yapıştır
• Origami: Kağıt katlama sanatı
• Sabun Yapımı: Doğal sabun atölyesi
• Mozaik Atölyesi: Renkli mozaik tasarım

Her atölye 60-90 dakika sürer ve çocuklar kendi yaptıkları ürünü eve götürür.`,
    
    features: [
      "10+ farklı atölye kategorisi",
      "Profesyonel eğitmen ve malzemeler",
      "Yaş grubuna uygun içerik (4-12 yaş)",
      "Her çocuğa kendi yaptığı ürün hediye",
      "Güvenli, toksik olmayan malzemeler",
      "Küçük grup çalışması (10-30 çocuk)",
      "Eğitici ve eğlenceli içerik",
      "İç mekan kullanımı (masa-sandalye gerekli)",
      "60-90 dakika esnek atölye süresi",
      "İstanbul'un tüm bölgelerine hizmet"
    ],
    
    pricing: {
      startingPrice: 800,
      description: "Atölye etkinliği hizmetimiz, atölye tipi, katılımcı sayısı ve malzeme kalitesine göre fiyatlandırılmaktadır.",
      note: "Detaylı fiyat teklifi için bizimle iletişime geçin. Malzeme maliyeti katılımcı sayısına göre değişir. Okul ve eğitim kurumları için özel paketler mevcuttur."
    },
    
    faqs: [
      {
        question: "Atölye etkinliği ne kadar sürer?",
        answer: "Standart atölye 60-90 dakika sürer. Slime ve boyama atölyeleri genellikle 60 dakika, yemek ve kil atölyeleri 90 dakika sürer. Süre katılımcı sayısı ve yaş grubuna göre ayarlanabilir."
      },
      {
        question: "Hangi yaş grubu için uygundur?",
        answer: "Atölyelerimiz 4-12 yaş arası çocuklar için tasarlanmıştır. 4-6 yaş için daha basit, 7-12 yaş için daha detaylı projeler yapılır. Yaş grubuna göre içerik ve zorluk seviyesi özelleştirilir."
      },
      {
        question: "En popüler atölye hangisi?",
        answer: "Slime atölyesi en popüler seçenektir! Çocuklar renkli, ışıltılı, kokulu slime yapar ve kendi yaptıklarını kapta eve götürür. Takı tasarımı ve boyama atölyeleri de çok tercih ediliyor."
      },
      {
        question: "Malzemeler sizde mi?",
        answer: "Evet! Tüm atölye malzemeleri (boyalar, kağıtlar, yapıştırıcılar, takı malzemeleri, slime malzemeleri vs.) tarafımızdan sağlanır. Sadece masa-sandalye ve temiz çalışma alanı gereklidir."
      },
      {
        question: "Çocuklar yaptıklarını eve götürebilir mi?",
        answer: "Kesinlikle! Her çocuk kendi yaptığı ürünü (slime, tablo, takı, seramik vb.) eve götürür. Bu, atölyenin en özel kısmıdır. Ürünler güzel paketlerde veya kutularda verilir."
      },
      {
        question: "Kaç çocuk katılabilir?",
        answer: "Minimum 10, maksimum 30 çocuk ideal. Büyük gruplar için (50+) birden fazla eğitmen ile eş zamanlı atölye düzenlenebilir. Küçük gruplarda her çocuğa daha fazla ilgi gösterilebilir."
      },
      {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine gidiyoruz."
      },
      {
        question: "Ebeveynler katılabilir mi?",
        answer: "Küçük yaş gruplarında (4-6 yaş) ebeveyn desteği faydalı olabilir. Büyük çocuklar (7+ yaş) bağımsız çalışabilir. Ebeveynler izleyebilir ve fotoğraf çekebilir ancak eğitmen liderliği yapmalıdır."
      }
    ],
    
    reviews: [
      {
        name: "Sevgi Arslan",
        rating: 5,
        comment: "Kızımın 8 yaş doğum gününde slime atölyesi yaptırdık. 15 çocuk vardı, hepsi bayıldı! Her çocuk kendi slime'ını yaptı, çok eğlenceliydi. Eğitmen harika, malzemeler kaliteliydi!",
        date: "Ekim 2024"
      },
      {
        name: "Can Yılmaz - Öğretmen",
        rating: 5,
        comment: "Okulumuzun karne günü etkinliğinde 3 farklı atölye kurduk (boyama, takı, origami). 60 öğrenci 3 grup halinde dönerek katıldı. Çok organize ve profesyoneldi. Kesinlikle tavsiye ederim!",
        date: "Eylül 2024"
      },
      {
        name: "Elif Demir",
        rating: 5,
        comment: "Oğlumun 6 yaş doğum gününde kurabiye atölyesi yaptırdık. Çocuklar kendi kurabiyelerini yaptı, süslediler ve eve götürdüler. Hem eğlendiler hem de yediler. Muhteşemdi!",
        date: "Ağustos 2024"
      }
    ],
    
    seoKeywords: "çocuk atölyesi istanbul, workshop etkinlik, yaratıcı atölye, slime atölyesi, kadıköy workshop, doğum günü atölye, el sanatları çocuk",
    
    photos: [
      "/content/images/cocukdogumgunu/IMG_0612.JPG",
      "/content/images/cocukdogumgunu/IMG_0787.JPG",
      "/content/images/cocukdogumgunu/IMG_0790.JPG",
      "/content/images/cocukdogumgunu/c3f9812a-98cb-4f8e-a6c2-fcbda31a6dfd.JPG",
      "/content/images/cocukdogumgunu/konseptdogumgunu.JPG",
      "/content/images/cocukdogumgunu/8923162f-025e-41a5-8014-5738212c4172.JPG"
    ]
  }

  return <EventDetail {...eventData} />
}

export default WorkshopActivities
