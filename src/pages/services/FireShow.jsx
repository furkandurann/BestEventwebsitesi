import EventDetail from './EventDetail'

const FireShow = () => {
  const eventData = {
    title: "İstanbul'da Profesyonel Ateş Gösterisi - Fire Show",
    description: "Etkinlikleriniz için etkileyici ateş gösterisi - Kadıköy, Üsküdar, Maltepe ve tüm İstanbul'da profesyonel fire show performansları",
    canonicalPath: "/organizasyonlar/ates-gosterisi",
    serviceType: "Ateş Gösterisi",
    longDescription: `Best Event olarak İstanbul'un her bölgesinde profesyonel ateş gösterisi sunuyoruz. Tüm ilçelerde düğün organizasyonları, açılış etkinlikleri, kurumsal toplantılar ve özel geceler için göz alıcı ateş performansları ile hizmetinizdeyiz.

🔥 Ateş Gösterisi Nedir?

Ateş gösterisi (fire show), profesyonel sanatçıların ateşli ekipmanlarla (ateş topları, ateş sopalar, ateş halkalar) müzik eşliğinde sergiledikleri etkileyici ve tehlikeli görünen ancak güvenli bir performans sanatıdır. 10+ yıllık deneyimimizle İstanbul'da binlerce etkinlikte izleyicileri büyülemiştir.

✨ Neden Best Event Ateş Gösterisi?

• 10 yıl+ profesyonel performans tecrübesi
• Güvenlik sertifikalı profesyonel sanatçılar
• Çoklu ateş efektleri ve teknikler
• Yangın söndürme ekipmanı ile güvenlik
• Müzik eşliğinde koreografili gösteri
• Gece ve dış mekan idealdir

🔥 Ateş Gösterisinde Neler Var?

• Ateş Topu Jonglörlüğü: 3-5 ateşli top ile havada dans
• Ateş Sopası: Dönen alevli sopalarla etkileyici hareketler
• Ateş Halkası: Renkli alevlerle çember gösterisi
• Ateş Soluması: Profesyonel yangın yutma
• Ateş Dansı: Müzik eşliğinde koreografili performans
• LED + Ateş Kombinasyonu: Işık ve alev birleşimi
• Final Şovu: Büyük alev patlaması
• Güvenlik Mesafesi: 5+ metre izleyici koruma

Her ateş gösterisi 15-20 dakika sürer ve karanlıkta en etkileyicidir. Dış mekan şarttır (güvenlik nedeniyle).`,
    
    features: [
      "Profesyonel güvenlik sertifikalı sanatçılar",
      "Çoklu ateş efektleri (top, sopa, halka)",
      "Yangın söndürme ekipmanı (her zaman hazır)",
      "Müzik eşliğinde koreografili gösteri",
      "Güvenli mesafe protokolleri (5+ metre)",
      "Gece performansı (karanlıkta en etkileyici)",
      "Dış mekan özel (bahçe, park, açık alan)",
      "15-20 dakika etkileyici performans",
      "LED ve ateş kombinasyonu (opsiyonel)",
      "İstanbul'un tüm bölgelerine hizmet"
    ],
    
    pricing: {
      startingPrice: 2000,
      description: "Ateş gösterisi hizmetimiz, performans süresi, gösteri tipi (temel/ileri düzey) ve mekan özelliklerine göre fiyatlandırılmaktadır.",
      note: "Detaylı fiyat teklifi için bizimle iletişime geçin. Ateş gösterisi sadece dış mekanda yapılır. Güvenlik mesafesi ve yangın söndürme ekipmanı zorunludur."
    },
    
    faqs: [
      {
        question: "Ateş gösterisi güvenli mi?",
        answer: "Evet! Profesyonel sanatçılarımız güvenlik sertifikalıdır ve yıllarca eğitim almıştır. Yangın söndürme ekipmanı (söndürücü, battaniye) her zaman hazır bulundurulur. Minimum 5 metre izleyici mesafesi uygulanır. Güvenlik protokollerine %100 uyum gösteriyoruz."
      },
      {
        question: "Ateş gösterisi ne kadar sürer?",
        answer: "Standart ateş gösterisi 15-20 dakika sürer. Uzun etkinlikler için 2 set (toplam 30-40 dakika) yapılabilir. Gösteri karanlıkta (akşam veya gece) en etkileyicidir."
      },
      {
        question: "İç mekanda yapılabilir mi?",
        answer: "Hayır! Ateş gösterisi sadece dış mekanlarda yapılır (güvenlik ve yangın riski nedeniyle). Bahçe, park, açık alan, teras gibi açık hava mekanları idealdir. İç mekan için LED jonglörlük önerilir."
      },
      {
        question: "Hangi hava koşullarında yapılabilir?",
        answer: "Hafif rüzgarda yapılabilir ancak kuvvetli rüzgar (20+ km/saat) tehlikelidir ve performans iptal edilir. Yağmurlu havada yapılmaz. Hava durumu önceden değerlendirilir ve alternatif tarih önerilir."
      },
      {
        question: "İzleyici mesafesi ne kadar olmalı?",
        answer: "Minimum 5 metre güvenli mesafe şarttır. Çocuklar ve ebeveynler belirlenen çizginin arkasında durmalıdır. Güvenlik görevlisi veya personel mesafeyi kontrol eder."
      },
      {
        question: "Hangi yaş grubu için uygundur?",
        answer: "Ateş gösterisi tüm yaş grupları için izlenebilir ancak küçük çocuklar korkabilir. 7+ yaş için idealdir. Yetişkin etkinlikleri (düğün, kurumsal) için en çok tercih edilir."
      },
      {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine gidiyoruz. Açık alan şart."
      },
      {
        question: "Ek güvenlik önlemleri var mı?",
        answer: "Evet! Yangın söndürme ekipmanı (CO2 söndürücü, yangın battaniyesi, kum kovası) hazır bulundurulur. Performans öncesi alan kontrol edilir (yanıcı maddeler uzaklaştırılır). Güvenlik briefing'i yapılır."
      }
    ],
    
    reviews: [
      {
        name: "Emre Yıldırım",
        rating: 5,
        comment: "Düğünümüzde ateş gösterisi muhteşemdi! Bahçede yapıldı, tüm misafirler ayakta alkışladı. Sanatçı çok profesyoneldi, güvenlik önlemleri mükemmeldi. En iyi karar!",
        date: "Ekim 2024"
      },
      {
        name: "Can Öztürk - Etkinlik Koordinatörü",
        rating: 5,
        comment: "Şirket yılbaşı gecesinde ateş gösterisi çok ses getirdi! 200 kişi nefeslerini tutarak izledi. Final şovu inanılmazdı. Kesinlikle tavsiye ederim!",
        date: "Eylül 2024"
      },
      {
        name: "Ayşe Demir",
        rating: 5,
        comment: "25. yıl dönümü etkinliğimizde ateş gösterisi sürpriz oldu. Herkes şoke oldu, çok etkileyiciydi! Güvenlik konusunda çok titiz davrandılar, rahat ettik.",
        date: "Ağustos 2024"
      }
    ],
    
    seoKeywords: "ateş gösterisi istanbul, fire show, yangın showu, kadıköy fire show, düğün ateş gösterisi, açılış ateş performansı, profesyonel fire show",
    
    photos: [
      "/content/images/cocukdogumgunu/082041d3-58ff-4b19-81e0-5a6e39d81532.webp",
      "/content/images/cocukdogumgunu/556fe6ff-e557-4b33-b59d-16b1690624ac.webp",
      "/content/images/cocukdogumgunu/21380558-d41b-42eb-8885-5588f0b8931f.webp",
      "/content/images/cocukdogumgunu/14445323-1fe3-4dea-8055-831975e83963.webp",
      "/content/images/cocukdogumgunu/8923162f-025e-41a5-8014-5738212c4172.webp",
      "/content/images/cocukdogumgunu/IMG_0612.webp"
    ]
  }

  return <EventDetail {...eventData} />
}

export default FireShow
