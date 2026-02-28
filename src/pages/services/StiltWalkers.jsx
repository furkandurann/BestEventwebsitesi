import EventDetail from './EventDetail'

const StiltWalkers = () => {
  const eventData = {
    title: "İstanbul'da Tahtabacak Gösterisi - Uzun Bacaklı Karakterler",
    description: "Etkinlikleriniz için profesyonel tahtabacak gösterisi - Kadıköy, Üsküdar, Maltepe ve tüm İstanbul'da etkileyici stilt walkers performansları",
    canonicalPath: "/organizasyonlar/tahtabacak",
    serviceType: "Tahtabacak Gösterisi",
    longDescription: `Best Event olarak İstanbul'un her bölgesinde profesyonel tahtabacak gösterileri sunuyoruz. Tüm ilçelerde festival organizasyonları, açılış etkinlikleri, sokak şenlikleri ve kurumsal etkinlikler için etkileyici tahtabacak performansları ile hizmetinizdeyiz.

🦒 Tahtabacak Gösterisi Nedir?

Tahtabacak gösterisi (stilt walking), profesyonel sanatçıların 2-3 metre yüksekliğindeki tahta veya metal bacaklar üzerinde yürüyerek, dans ederek ve etkileşime girerek sergiledikleri görsel olarak etkileyici bir performans sanatıdır. 10+ yıllık deneyimimizle İstanbul'da binlerce etkinlikte izleyicileri büyülemiştir.

✨ Neden Best Event Tahtabacak Gösterisi?

• 10 yıl+ profesyonel performans tecrübesi
• Farklı karakter kostümleri (palyaço, prenses, robot)
• 2-3 metre yükseklikte etkileyici görünüm
• Profesyonel ve deneyimli performans sanatçıları
• İç ve dış mekan uyumlu
• Çocuk ve yetişkin etkileşimi

🎭 Tahtabacak Performansında Neler Var?

• Yüksek Boy: 2-3 metre yükseklikte etkileyici görünüm
• Farklı Karakterler: Palyaço, prenses, robot, fantastik figürler
• Sokak Performansı: Yürüyüş, dans, poz verme
• Fotoğraf Çekimi: İzleyicilerle özel anlar
• Balon Dağıtımı: Çocuklara balon hediye (opsiyonel)
• Müzik Eşliği: Neşeli müziklerle gösteri
• İnteraktif Etkileşim: El sıkışma, sarılma, fotoğraf
• Kostüm Detayları: Renkli ve göz alıcı kıyafetler

Her tahtabacak performansı 60-90 dakika sürer ve kostüm ağırlığı nedeniyle 15-20 dakikalık molalar verilir.`,
    
    features: [
      "2-3 metre yükseklikte profesyonel tahtabacak",
      "Farklı karakter kostümleri (palyaço, prenses, robot)",
      "Profesyonel deneyimli performans sanatçıları",
      "Sokak performansı ve yürüyüş",
      "Fotoğraf çekimi ve çocuk etkileşimi",
      "Balon dağıtımı (opsiyonel)",
      "İç ve dış mekan uyumlu",
      "60-90 dakika esnek performans süresi",
      "Tüm yaş grupları için uygun içerik",
      "İstanbul'un tüm bölgelerine hizmet"
    ],
    
    pricing: {
      startingPrice: 1800,
      description: "Tahtabacak performansı hizmetimiz, performans süresi, sanatçı sayısı ve kostüm tipi (klasik/tematik) seçeneklerine göre fiyatlandırılmaktadır.",
      note: "Detaylı fiyat teklifi için bizimle iletişime geçin. İki veya daha fazla tahtabacak sanatçısı ile grup performansları için özel paketlerimiz mevcuttur."
    },
    
    faqs: [
      {
        question: "Tahtabacak gösterisi ne kadar sürer?",
        answer: "Standart performans 60-90 dakika arasıdır. Kostüm ağırlığı ve yorulma nedeniyle 15-20 dakikalık molalar verilir. 2+ saat sürecek etkinlikler için iki performans sanatçısı ile dönüşümlü çalışma önerilir."
      },
      {
        question: "Tahtabacak ne kadar yüksek?",
        answer: "Tahtabacaklarımız 2-3 metre yüksekliğindedir. İçeride 1.70-1.80m boyunda performans sanatçısı bulunur. Yükseklik tercih edilebilir: 2m (başlangıç seviye), 2.5m (orta), 3m (ileri seviye)."
      },
      {
        question: "Hangi karakter kostümleri mevcut?",
        answer: "Palyaço (en popüler), prenses, robot, fantastik figürler, hayvan karakterleri ve özel tema kostümleri mevcuttur. Etkinlik temanıza uygun kostüm seçebilir veya özel kostüm tasarlatabilirsiniz."
      },
      {
        question: "Güvenli mi?",
        answer: "Evet! Profesyonel sanatçılarımız yıllarca eğitim almıştır ve deneyimlidir. Düşme riski minimumdur. İzleyici mesafesi korunur ve performans güvenli alanlarda yapılır. Yardımcı personel her zaman hazır bulundurulur."
      },
      {
        question: "Çocuklar tahtabacakla etkileşime girebilir mi?",
        answer: "Kesinlikle! Tahtabacaklar çocuklarla el sıkışma, fotoğraf çekimi ve sohbet için idealdir. Ancak küçük çocuklar yükseklik nedeniyle korkabilir, bu normal bir reaksiyondur."
      },
      {
        question: "İç mekanda kullanılabilir mi?",
        answer: "Evet! Hem iç hem dış mekanlarda kullanılabilir. İç mekan için minimum 3.5 metre tavan yüksekliği gereklidir. Kapılardan geçebilmek için genişlik minimum 1.2 metre olmalıdır. Dış mekan festivaller için idealdir."
      },
      {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine gidiyoruz. Festival ve sokak etkinlikleri önceliğimizdir."
      },
      {
        question: "Balon dağıtımı dahil mi?",
        answer: "Balon dağıtımı opsiyoneldir ve ek ücret karşılığı eklenebilir. Tahtabacak performansı sırasında çocuklara balon dağıtılabilir. Balonlar tarafımızdan sağlanır ve şekillendirilebilir."
      }
    ],
    
    reviews: [
      {
        name: "Merve Yıldız - Festival Organizatörü",
        rating: 5,
        comment: "Sokak festivalimizde 2 tahtabacak (palyaço ve prenses) çok ilgi gördü! 3 saat boyunca yüzlerce kişi fotoğraf çekti. Çocuklar bayıldı, çok etkileyiciydi!",
        date: "Ekim 2024"
      },
      {
        name: "Ahmet Demir",
        rating: 5,
        comment: "AVM açılışımızda tahtabacak robot performansı ana atraksiyon oldu. Herkes şok oldu, sosyal medyada viral oldu! Çok profesyonel bir hizmet.",
        date: "Eylül 2024"
      },
      {
        name: "Elif Arslan",
        rating: 5,
        comment: "Kızımın 8 yaş doğum gününde tahtabacak prenses kiralama hizmeti aldık. Çocuklar 'dev prenses' diye çığlık attı! Unutulmaz bir deneyimdi, kesinlikle tavsiye ederim!",
        date: "Ağustos 2024"
      }
    ],
    
    seoKeywords: "tahtabacak istanbul, stilt walkers, uzun bacak gösterisi, kadıköy tahtabacak, festival tahtabacak, sokak performansı istanbul, dev karakter",
    
    photos: [
      "/content/images/cocukdogumgunu/082041d3-58ff-4b19-81e0-5a6e39d81532.webp",
      "/content/images/cocukdogumgunu/IMG_0777.webp",
      "/content/images/cocukdogumgunu/palyacokiralamakartal.webp",
      "/content/images/cocukdogumgunu/3cc6171f-7a84-42ce-9592-b7cdeda4a0a8.webp",
      "/content/images/cocukdogumgunu/8923162f-025e-41a5-8014-5738212c4172.webp",
      "/content/images/cocukdogumgunu/IMG_0612.webp"
    ]
  }

  return <EventDetail {...eventData} />
}

export default StiltWalkers
