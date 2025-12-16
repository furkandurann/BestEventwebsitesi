/**
 * Her hizmet sekmesi için Apple-style tek görsel + büyük başlık slaytları.
 * Fotoğrafın ana öznesini kapatmamak için 'position' ve 'focal' alanlarını kullan.
 */
const heroSlides = {
  // Bubble Show
  bubbleShow: [
    {
      title: 'Bubble Show',
      subtitle: 'Çocuğunuz Buna Değer',
      image: '/content/images/bubbleshow/bubbleshowslideranahero.webp',
      focal: 'center 50%',
      position: 'top-left',
      ctaText: 'Hemen İncele',
      to: '/iletisim'
    },
    {
      title: 'Bubble Show',
      image: '/content/images/bubbleshow/bubbleshowslider.webp',
      focal: 'center 50%',
      position: 'top-left'
    },
    {
      title: 'Bubble Show',
      image: '/content/images/bubbleshow/bubbleshowslider2.webp',
      focal: 'center 50%',
      position: 'top-left'
    },
    {
      title: 'Bubble Show',
      image: '/content/images/bubbleshow/bubbleshowslider3.webp',
      focal: 'center 50%',
      position: 'top-left'
    },
    {
      title: 'Bubble Show',
      image: '/content/images/bubbleshow/bubbleshowslider5.webp',
      focal: 'center 50%',
      position: 'top-left'
    }
  ],

  // Magic Show
  magicShow: [
    {
      title: 'Magic Show',
      subtitle: 'Çocuğunuz Buna Değer',
      image: '/content/images/slider/cocuk-etkinlikleri-bestevent.webp',
      focal: 'center 50%',
      position: 'top-left',
      ctaText: 'Hemen İncele',
      to: '/iletisim'
    },
    {
      title: 'Magic Show',
      image: '/content/images/cocukdogumgunu/palyacokiralamakartal.webp',
      focal: 'center 50%',
      position: 'top-left'
    },
    {
      title: 'Magic Show',
      image: '/content/images/slider/hayalinizdeki-etkinlik-bestevent.webp',
      focal: 'center 50%',
      position: 'top-left'
    }
  ],

  // Yüz Boyama
  facePainting: [
    {
      title: 'Yüz Boyama',
      subtitle: 'Çocuğunuz Buna Değer',
      image: '/content/images/slider/cocuk-etkinlikleri-bestevent.webp',
      focal: 'center 50%',
      position: 'top-left',
      ctaText: 'Hemen İncele',
      to: '/iletisim'
    },
    {
      title: 'Yüz Boyama',
      image: '/content/images/profesyonelmakeup/profesyonel.webp',
      focal: 'center 50%',
      position: 'top-left'
    },
    {
      title: 'Yüz Boyama',
      image: '/content/images/slider/hayalinizdeki-etkinlik-bestevent.webp',
      focal: 'center 50%',
      position: 'top-left'
    }
  ],

  // Palyaço
  clown: [
    {
      title: 'Palyaço',
      subtitle: 'Çocuğunuz Buna Değer',
      image: '/content/images/cocukdogumgunu/palyacootelkiralamaistanbul.webp',
      focal: 'center 38%',
      position: 'top-left',
      ctaText: 'Hemen İncele',
      to: '/iletisim'
    }
  ],

  // Kostümlü Karakterler
  costumedCharacters: [
    {
      title: 'Kostümlü Karakterler',
      subtitle: 'Çocuğunuz Buna Değer',
      image: '/content/images/cocukdogumgunu/elsakiralamaistanbul.webp',
      focal: 'center 35%',
      position: 'top-left',
      ctaText: 'Hemen İncele',
      to: '/iletisim'
    }
  ],

  // Konsept Doğum Günü
  conceptBirthday: [
    {
      title: 'Konsept Doğum Günü',
      subtitle: 'Çocuğunuz Buna Değer',
      image: '/content/images/cocukdogumgunu/konseptdogumgunukartal.webp',
      focal: 'center 40%',
      position: 'top-left',
      ctaText: 'Hemen İncele',
      to: '/iletisim'
    }
  ],

  // Pamuk Şeker
  cottonCandy: [
    {
      title: 'Pamuk Şeker Arabası',
      subtitle: 'Çocuğunuz Buna Değer',
      image: '/content/images/cocukdogumgunu/IMG_0777.webp',
      focal: 'center 35%',
      position: 'top-left',
      ctaText: 'Hemen İncele',
      to: '/iletisim'
    }
  ],

  // Dans Etkinlikleri
  dance: [
    {
      title: 'Dans Etkinlikleri',
      subtitle: 'Enerjiyi sahneye taşıyoruz',
      image: '/content/images/dance/lüksdanskarsilamaekibi.webp',
      focal: 'center 42%',
      position: 'bottom-left',
      ctaText: 'Paketleri Gör',
      to: '/iletisim'
    }
  ],

  // Kurumsal Etkinlikler
  corporate: [
    {
      title: 'Kurumsal Etkinlikler',
      subtitle: 'Markanızı zarafetle temsil edin',
      image: '/content/images/kurumsal/kurumsaletkinlikk.webp',
      focal: 'center 45%',
      position: 'top-center',
      ctaText: 'Çözümleri İncele',
      to: '/iletisim'
    }
  ],

  // Müzik Etkinlikleri
  music: [
    {
      title: 'Müzik & DJ',
      subtitle: 'Ses, ışık ve sahne—tek ekipte',
      image: '/content/images/music/jordan-whitfield-eAYO8vKNeFQ-unsplash.webp',
      focal: 'center 38%',
      position: 'bottom-center',
      ctaText: 'Setupları Gör',
      to: '/iletisim'
    }
  ],

  // Çocuk Etkinlikleri (Genel)
  childEvents: [
    {
      title: 'Çocuk Etkinlikleri',
      subtitle: 'Hayalinizdeki parti burada başlar',
      image: '/content/images/cocukdogumgunu/IMG_0612.webp',
      focal: 'center 35%',
      position: 'top-left',
      ctaText: 'Hemen İncele',
      to: '/iletisim'
    }
  ]
}

export default heroSlides
