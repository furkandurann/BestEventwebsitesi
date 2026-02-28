import EventDetail from './EventDetail'

const Juggler = () => {
  const eventData = {
    title: "İstanbul'da Profesyonel Jonklör Gösterisi",
    description: "Etkinlikleriniz için profesyonel jonklör ve hokkabaz gösterisi - Kadıköy, Üsküdar, Maltepe ve tüm İstanbul'da göz alıcı jonglörlük performansları",
    canonicalPath: "/organizasyonlar/jonklor",
    serviceType: "Jonklör Gösterisi",
    longDescription: `Best Event olarak İstanbul'un her bölgesinde profesyonel jonklör gösterileri sunuyoruz. Tüm ilçelerde doğum günü partileri, açılış organizasyonları, kurumsal etkinlikler ve festival şenlikleri için etkileyici jonglörlük performansları ile hizmetinizdeyiz.

🤹 Jonklör Gösterisi Nedir?

Jonglör gösterisi (juggling), profesyonel sanatçıların top, halka, sopa ve diğer nesneleri havada döndürerek, fırlatarak ve yakalayarak sergilediği göz alıcı bir performans sanatıdır. LED efektler, ateş gösterisi ve müzik eşliğinde 10+ yıllık deneyimimizle İstanbul'da binlerce etkinlikte izleyicileri büyülemiştir.

✨ Neden Best Event Jonklör Gösterisi?

• 10 yıl+ profesyonel performans tecrübesi
• Çok yönlü jonglörlük teknikleri
• LED ve ateş gösterisi seçenekleri
• Profesyonel performans sanatçıları
• İç ve dış mekan uyumlu
• Her yaş grubuna uygun içerik

🎪 Jonglör Gösterisinde Neler Var?

• Klasik Top Jonglörlüğü: 3-7 top ile havada dans
• Halka Jonglörlüğü: Renkli halkalarla göz alıcı hareketler
• Sopa Jonglörlüğü: Dönen sopalarla ritimli gösteri
• LED Jonglörlük: Karanlıkta ışıklı toplar ve halkalar
• Ateş Gösterisi: Alev toplar ile tehlikeli ve etkileyici gösteri (dış mekan)
• Diyabolo: Çin yoyo'su ile özel numaralar
• Dengeli Objeler: Baston, şemsiye, sandalye dengesi
• İnteraktif Bölüm: İzleyicilerin katılımı

Her jonklör gösterisi 15-30 dakika sürer ve müzik eşliğinde gerçekleştirilir. Etkinlik süresine göre birden fazla set yapılabilir.`,
    
    features: [
      "Çok yönlü jonglörlük teknikleri (top, halka, sopa)",
      "LED ışıklı jonglörlük (gece gösterileri için)",
      "Ateş jonglörlüğü (dış mekan, güvenli mesafe ile)",
      "Profesyonel performans sanatçıları",
      "Müzik eşliğinde senkronize gösteri",
      "İnteraktif izleyici katılımı",
      "İç ve dış mekan uyumlu",
      "15-30 dakika esnek gösteri süresi",
      "Tüm yaş grupları için uygun içerik",
      "İstanbul'un tüm bölgelerine hizmet"
    ],
    
    pricing: {
      startingPrice: 1000,
      description: "Jonklör gösterisi hizmetimiz, performans süresi, gösteri tipi (klasik/LED/ateş) ve mekan özelliklerine göre fiyatlandırılmaktadır.",
      note: "Detaylı fiyat teklifi için bizimle iletişime geçin. Ateş gösterisi için dış mekan ve güvenlik mesafesi gereklidir (ek ücret)."
    },
    
    faqs: [
      {
        question: "Jonklör gösterisi ne kadar sürer?",
        answer: "Standart jonklör gösterisi 15-20 dakika sürer. Uzun etkinlikler için 2-3 set (toplam 30-45 dakika) yapılabilir. Her set arasında 15-20 dakika mola verilir."
      },
      {
        question: "Hangi yaş grubu için uygundur?",
        answer: "Jonklör gösterisi 3 yaş ve üzeri tüm yaş grupları için uygundur. Çocuklar için renkli ve eğlenceli, yetişkinler için etkileyici ve sanatsal içerik sunulur. Ateş gösterisi daha çok yetişkin etkinlikleri için tercih edilir."
      },
      {
        question: "LED jonglörlük nedir?",
        answer: "LED jonglörlük, ışıklı toplar ve halkalar kullanılarak karanlıkta sergilenen göz alıcı bir performanstır. Renkli LED ışıklar havada iz bırakır ve müzik ile senkronize edilir. Gece etkinlikleri ve kapalı mekanlarda çok etkileyicidir."
      },
      {
        question: "Ateş gösterisi güvenli mi?",
        answer: "Evet! Ateş gösterisi profesyonel sanatçılarımız tarafından güvenli mesafe kurallarına uygun olarak gerçekleştirilir. Dış mekan şarttır. Minimum 5 metre izleyici mesafesi gereklidir. Yangın söndürme ekipmanı hazır bulundurulur. Rüzgarlı havada yapılmaz."
      },
      {
        question: "İç mekanda ateş gösterisi yapılabilir mi?",
        answer: "Hayır, ateş gösterisi sadece dış mekanlarda yapılır (güvenlik nedeniyle). İç mekan için LED jonglörlük önerilir ki bu da aynı derecede etkileyicidir ve daha güvenlidir."
      },
      {
        question: "Gösteriye izleyiciler katılabilir mi?",
        answer: "Evet! Performansın sonunda gönüllü izleyiciler (genellikle çocuklar) basit jonglörlük denemeleri yapabilir. Sanatçımız kısa bir eğitim verir, bu interaktif bölüm çok eğlenceli geçer."
      },
      {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer: "İstanbul'un tüm ilçelerine hizmet veriyoruz. Kadıköy, Erenköy, Üsküdar, Maltepe, Kartal, Ataşehir, Pendik başta olmak üzere Anadolu ve Avrupa yakasının her bölgesine gidiyoruz."
      },
      {
        question: "Hangi ekipmanları getiriyorsunuz?",
        answer: "Tüm jonglörlük ekipmanları (toplar, halkalar, sopalar, LED setler, ateş topları) tarafımızdan sağlanır. Ses sistemi mekan tarafından sağlanabilir veya talep halinde bizim portatif hoparlörümüz kullanılır."
      }
    ],
    
    reviews: [
      {
        name: "Emre Yılmaz - Etkinlik Organizatörü",
        rating: 5,
        comment: "Festival etkinliğimizde LED jonglörlük gösterisi çok ses getirdi! Karanlıkta renkli ışıklar muhteşemdi, izleyiciler büyülendi. Sanatçı çok profesyoneldi, kesinlikle tavsiye ederim!",
        date: "Ekim 2024"
      },
      {
        name: "Zeynep Kaya",
        rating: 5,
        comment: "Oğlumun 8 yaş doğum gününde jonklör gösterisi yaptırdık. Çocuklar ağızları açık izledi! Sonunda çocuklar deneme yaptı, o kısım çok eğlenceliydi. 5 yıldız!",
        date: "Eylül 2024"
      },
      {
        name: "Ahmet Demir",
        rating: 5,
        comment: "Şirket yılbaşı etkinliğinde ateş gösterisi aldık. Bahçede yapıldı, herkes şoke oldu. Çok etkileyiciydi, hem güvenli hem de muhteşem bir performanstı!",
        date: "Ağustos 2024"
      }
    ],
    
    seoKeywords: "jonklör istanbul, juggler show, hokkabaz gösterisi, led jonglörlük, ateş gösterisi, kadıköy jonklör, doğum günü jonglör",
    
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

export default Juggler
