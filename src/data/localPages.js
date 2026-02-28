// ============================================================
// LOCAL LANDING PAGES - Programmatic SEO Data
// 7 Hizmet x 22 Semt = 154 Local Landing Page
// ============================================================

// ─── SEMTLER ───────────────────────────────────────────────
export const districts = [
  {
    slug: 'kadikoy',
    name: 'Kadıköy',
    neighborhoods: ['Moda', 'Fenerbahçe', 'Caddebostan', 'Acıbadem', 'Koşuyolu', 'Göztepe', 'Erenköy', 'Suadiye', 'Bostancı'],
    lat: 40.9826,
    lng: 29.0290,
    description: 'İstanbul\'un Anadolu Yakası\'nın en hareketli ilçesi Kadıköy, sahil şeridi ve modern yaşam alanlarıyla etkinlikler için ideal lokasyonlar sunmaktadır.',
    eventVenues: ['Caddebostan Sahili', 'Moda Parkı', 'Göztepe Parkı', 'Fenerbahçe Parkı', 'Suadiye Sahili'],
    population: '500.000+',
    localInsight: 'Kadıköy\'ün Moda sahili ve Caddebostan parkları hafta sonları açık hava etkinliklerinin merkezi haline gelmiştir. Bostancı\'dan Moda\'ya uzanan sahil bandında her hafta sonu düzinelerce çocuk partisi düzenlenmektedir.'
  },
  {
    slug: 'besiktas',
    name: 'Beşiktaş',
    neighborhoods: ['Ortaköy', 'Bebek', 'Etiler', 'Levent', 'Arnavutköy', 'Nişantaşı', 'Fulya', 'Dikilitaş'],
    lat: 41.0422,
    lng: 29.0070,
    description: 'Boğaz kıyısındaki prestijli semtleriyle İstanbul\'un en gözde ilçelerinden Beşiktaş, lüks mekanlar ve şık organizasyon alanları sunmaktadır.',
    eventVenues: ['Ortaköy Meydanı', 'Bebek Sahili', 'Yıldız Parkı', 'Maçka Parkı', 'Levent AVM\'leri'],
    population: '180.000+',
    localInsight: 'Beşiktaş\'ın Swissotel ve DoubleTree by Hilton gibi 5 yıldızlı otellerinde düzenlenen çocuk etkinlikleri, Boğaz manzarası eşliğinde unutulmaz deneyimler sunmaktadır. Ortaköy\'deki tarihi kiliseler ve Yazıcıoğlu Hanı gibi benzersiz mekanlar da özel organizasyonlar için tercih edilmektedir.'
  },
  {
    slug: 'sisli',
    name: 'Şişli',
    neighborhoods: ['Mecidiyeköy', 'Gayrettepe', 'Bomonti', 'Osmanbey', 'Feriköy', 'Halaskargazi', 'Teşvikiye', 'Harbiye'],
    lat: 41.0602,
    lng: 28.9877,
    description: 'İstanbul\'un merkezinde yer alan Şişli, iş merkezleri, oteller ve kapalı mekanlarıyla kurumsal ve özel etkinlikler için tercih edilen bir bölgedir.',
    eventVenues: ['Hilton Oteli', 'Bomonti Alanları', 'Cevahir AVM', 'Trump Towers', 'Harbiye Kongre Merkezi'],
    population: '320.000+',
    localInsight: 'Şişli\'nin Bomonti semtindeki dönüştürülmüş endüstriyel mekanlar ve Nişantaşı\'nın butik kafeleri, şehrin merkezinde yaratıcı çocuk etkinlikleri için benzersiz alternatifler sunmaktadır.'
  },
  {
    slug: 'bakirkoy',
    name: 'Bakırköy',
    neighborhoods: ['Ataköy', 'Yeşilköy', 'Florya', 'Yeşilyurt', 'Zuhuratbaba', 'Osmaniye', 'Kartaltepe'],
    lat: 40.9798,
    lng: 28.8772,
    description: 'Sahil şeridi boyunca uzanan Bakırköy, geniş parkları ve modern yaşam alanlarıyla çocuk etkinlikleri için popüler bir bölgedir.',
    eventVenues: ['Florya Sahili', 'Ataköy Marina', 'Bakırköy Botanik Parkı', 'Capacity AVM', 'Galleria AVM'],
    population: '230.000+',
    localInsight: 'Bakırköy\'ün Florya sahili ve Ataköy marina bölgesi, özellikle yaz aylarında açık hava çocuk partileri için İstanbul\'un en gözde lokasyonlarından biridir. Yeşilköy\'ün villalı sokakları bahçe organizasyonları için idealdir.'
  },
  {
    slug: 'atasehir',
    name: 'Ataşehir',
    neighborhoods: ['Küçükbakkalköy', 'Barbaros', 'İçerenköy', 'Kayışdağı', 'Yenisahra', 'Ferhatpaşa', 'Mustafa Kemal'],
    lat: 40.9923,
    lng: 29.1244,
    description: 'Modern konut projeleri ve iş merkezleriyle gelişen Ataşehir, kurumsal etkinlikler ve site içi organizasyonlar için ideal bir lokasyondur.',
    eventVenues: ['Watergarden AVM', 'Palladium AVM', 'Brandium AVM', 'Ataşehir Parkları', 'Finans Merkezi'],
    population: '430.000+',
    localInsight: 'Ataşehir\'in finans merkezi çevresindeki lüks rezidanslar ve Watergarden, Palladium gibi AVM\'ler, hem kurumsal aile günleri hem de çocuk doğum günleri için yoğun talep görmektedir.'
  },
  {
    slug: 'uskudar',
    name: 'Üsküdar',
    neighborhoods: ['Kuzguncuk', 'Çengelköy', 'Altunizade', 'Beylerbeyi', 'Ünalan', 'Acıbadem', 'Bulgurlu'],
    lat: 41.0234,
    lng: 29.0155,
    description: 'Boğaz manzarası ve tarihi dokusuyla İstanbul\'un kültür merkezi Üsküdar, hem geleneksel hem modern mekanlarda etkinlikler düzenlenmektedir.',
    eventVenues: ['Çamlıca Tepesi', 'Üsküdar Sahili', 'Beylerbeyi Sarayı', 'Fethi Paşa Korusu', 'Capitol AVM'],
    population: '540.000+',
    localInsight: 'Üsküdar\'ın Kuzguncuk ve Çengelköy gibi tarihi semtleri, dar sokaklarında saklı bahçeli evleriyle samimi doğum günü organizasyonları için eşsiz bir atmosfer sunmaktadır. Çamlıca Tepesi\'nden Boğaz manzarası eşliğinde etkinlikler ayrıcalıklı bir deneyimdir.'
  },
  {
    slug: 'maltepe',
    name: 'Maltepe',
    neighborhoods: ['Cevizli', 'Küçükyalı', 'Bağlarbaşı', 'İdealtepe', 'Altıntepe', 'Zümrütevler', 'Fındıklı'],
    lat: 40.9348,
    lng: 29.1310,
    description: 'İstanbul\'un en uzun sahil şeridine sahip Maltepe, açık hava etkinlikleri ve sahil organizasyonları için mükemmel bir ilçedir.',
    eventVenues: ['Maltepe Sahil Parkı', 'İdealtepe Sahili', 'Başıbüyük Parkı', 'Maltepe Piazza AVM'],
    population: '510.000+',
    localInsight: 'Maltepe\'nin eski İstanbul döneminde yazlık bostan olarak kullanılan alanları, bugün İstanbul\'un en geniş sahil parkına dönüşmüştür. Maltepe Sahil Parkı\'nın 5 km\'lik yeşil şeridi, açık hava çocuk etkinlikleri ve piknik organizasyonları için emsalsiz bir alan sunmaktadır.'
  },
  {
    slug: 'kartal',
    name: 'Kartal',
    neighborhoods: ['Soğanlık', 'Yakacık', 'Uğur Mumcu', 'Cevizli', 'Hürriyet', 'Topselvi', 'Kordonboyu'],
    lat: 40.8898,
    lng: 29.1886,
    description: 'Dönüşüm projeleriyle yenilenen Kartal, modern konutlar ve sahil şeridiyle çocuk etkinlikleri için büyüyen bir bölgedir.',
    eventVenues: ['Kartal Sahili', 'Dragos Tepesi', 'Kordonboyu Yürüyüş Yolu', 'Via Port AVM'],
    population: '470.000+',
    localInsight: 'Kartal\'ın eski İstanbul yazlık bostanları, bugün kentsel dönüşümle modern çocuk oyun alanlarına ve parklara dönüşmüştür. Dragos Tepesi\'nin panoramik manzarası ve Kordonboyu sahil şeridi, doğum günü partileri için giderek daha fazla tercih edilmektedir.'
  },
  {
    slug: 'pendik',
    name: 'Pendik',
    neighborhoods: ['Kaynarca', 'Kurtköy', 'Yenişehir', 'Esenyalı', 'Güzelyalı', 'Sapanbağları', 'Velibaba'],
    lat: 40.8756,
    lng: 29.2339,
    description: 'Sabiha Gökçen Havalimanı\'na yakınlığıyla bilinen Pendik, yeni konut alanları ve geniş nüfusuyla organizasyon talebinin yoğun olduğu bir ilçedir.',
    eventVenues: ['Pendik Sahili', 'Tuzla Marina yakını', 'Kurtköy AVM\'leri', 'Pendik Belediye Parkları'],
    population: '700.000+',
    localInsight: 'Pendik\'in Kurtköy bölgesi havalimanı yakınlığı ve yeni konut projelerinin yoğunluğuyla genç ailelerin tercih ettiği bir yerleşim alanıdır. Kaynarca sahil şeridi ve Pendik\'in geniş parkları hafta sonu çocuk etkinlikleri için ideal mekanlardır.'
  },
  {
    slug: 'umraniye',
    name: 'Ümraniye',
    neighborhoods: ['Çakmak', 'Atatürk', 'Hekimbaşı', 'Ihlamurkuyu', 'Altınşehir', 'Tantavi', 'Esenşehir'],
    lat: 41.0166,
    lng: 29.0920,
    description: 'İstanbul\'un en kalabalık ilçelerinden Ümraniye, yoğun nüfusu ve site yaşamıyla çocuk etkinliklerine yüksek talep gösteren bir bölgedir.',
    eventVenues: ['Meydan AVM', 'Çamlıca Koru Parkı', 'Forum İstanbul yakını', 'Ümraniye Belediye Parkları'],
    population: '700.000+',
    localInsight: 'Ümraniye\'nin yoğun site yaşamı, özellikle kapalı otopark ve ortak alan organizasyonları için sürekli talep yaratmaktadır. Meydan AVM ve çevresindeki eğlence merkezleri, kış aylarında kapalı mekan partileri için tercih edilen noktalar arasındadır.'
  },
  {
    slug: 'beylikduzu',
    name: 'Beylikdüzü',
    neighborhoods: ['Yakuplu', 'Büyükşehir', 'Kavakli', 'Adnan Kahveci', 'Cumhuriyet', 'Barış', 'Dereağzı'],
    lat: 41.0030,
    lng: 28.6440,
    description: 'Modern siteler ve geniş yaşam alanlarıyla Beylikdüzü, site içi doğum günleri ve toplu çocuk etkinlikleri için yoğun talep alan bir ilçedir.',
    eventVenues: ['Beylikdüzü Marina', 'Migros AVM', 'Tüyap Fuar Merkezi', 'Yaşam Vadisi', 'Valley Parkı'],
    population: '350.000+',
    localInsight: 'Beylikdüzü\'nün yeni yapılaşması ve güvenli aile ortamı, İstanbul\'un en yoğun çocuk etkinliği talebi olan bölgelerinden birini oluşturmaktadır. Metrobüs hattı sayesinde kolay ulaşım, genç ailelerin bu bölgeyi tercih etmesinin başlıca nedenlerinden biridir.'
  },
  {
    slug: 'sariyer',
    name: 'Sarıyer',
    neighborhoods: ['İstinye', 'Tarabya', 'Emirgan', 'Rumelihisarı', 'Bahçeköy', 'Zekeriyaköy'],
    lat: 41.1672,
    lng: 29.0568,
    description: 'Boğaz\'ın kuzeyinde doğayla iç içe Sarıyer, villalar, koruluklar ve lüks mekanlarıyla özel organizasyonlar için tercih edilen bir ilçedir.',
    eventVenues: ['Emirgan Korusu', 'Atatürk Arboretumu', 'İstinye Park AVM', 'Tarabya Sahili', 'Belgrad Ormanı'],
    population: '350.000+',
    localInsight: 'Sarıyer\'in Belgrad Ormanı girişindeki piknik alanları ve Emirgan Korusu, doğa içi çocuk etkinlikleri için İstanbul\'un en özel mekanlarını barındırmaktadır. Zekeriyaköy ve Bahçeköy\'ün villa bahçeleri, özel davetler ve bahçe partileri için idealdir.'
  },
  {
    slug: 'fatih',
    name: 'Fatih',
    neighborhoods: ['Sultanahmet', 'Aksaray', 'Laleli', 'Çapa', 'Vefa', 'Balat', 'Fener', 'Eminönü'],
    lat: 41.0186,
    lng: 28.9395,
    description: 'İstanbul\'un tarihi yarımadasında yer alan Fatih, kültürel organizasyonlar ve açılış etkinlikleri için benzersiz bir atmosfer sunmaktadır.',
    eventVenues: ['Sultanahmet Meydanı', 'Gülhane Parkı', 'Eminönü Sahili', 'Vefa Mekanları'],
    population: '440.000+',
    localInsight: 'Fatih\'in Balat ve Fener sokakları, renkli evleri ve tarihi dokusuyla fotoğrafçıların gözdesi olan bu bölge, konsept doğum günü çekimleri için eşsiz bir dekor sunmaktadır. Gülhane Parkı ise açık hava çocuk etkinlikleri için merkezi bir konumdadır.'
  },
  {
    slug: 'eyupsultan',
    name: 'Eyüpsultan',
    neighborhoods: ['Alibeyköy', 'Rami', 'Göktürk', 'Kemerburgaz', 'İslambey', 'Akşemsettin', 'Yeşilpınar'],
    lat: 41.0476,
    lng: 28.9344,
    description: 'Göktürk ve Kemerburgaz villaları ile bilinen Eyüpsultan, özel bahçeli mekanlar ve doğa içi etkinlikler için geniş seçenekler sunmaktadır.',
    eventVenues: ['Pierre Loti Tepesi', 'Göktürk Villaları', 'Kemerburgaz Kent Ormanı', 'Feshane'],
    population: '400.000+',
    localInsight: 'Eyüpsultan\'ın Göktürk ve Kemerburgaz bölgeleri, geniş bahçeli villaları ve at çiftlikleriyle İstanbul\'da doğa temalı çocuk etkinlikleri için en çok aranan lokasyonlardandır. Pierre Loti Tepesi\'ndeki nostaljik atmosfer ise farklı bir organizasyon konsepti sunmaktadır.'
  },
  {
    slug: 'beyoglu',
    name: 'Beyoğlu',
    neighborhoods: ['Taksim', 'Galata', 'Cihangir', 'Karaköy', 'Asmalımescit', 'Dolapdere', 'Kasımpaşa'],
    lat: 41.0370,
    lng: 28.9770,
    description: 'İstanbul\'un kültür ve eğlence merkezi Beyoğlu, sanat mekanları ve butik alanlarıyla yaratıcı organizasyonlar için ilham verici bir ilçedir.',
    eventVenues: ['Taksim Meydanı', 'Galata Kulesi çevresi', 'İstiklal Caddesi', 'Müze Gazhane', 'Karaköy Mekanları'],
    population: '250.000+',
    localInsight: 'Beyoğlu\'nun Galata ve Karaköy semtleri, endüstriyel loft mekanları ve çatı katı teraslarıyla İstanbul\'da en yaratıcı çocuk partilerine ev sahipliği yapmaktadır. İstiklal Caddesi çevresindeki butik etkinlik salonları ise küçük grup organizasyonları için idealdir.'
  },
  {
    slug: 'basaksehir',
    name: 'Başakşehir',
    neighborhoods: ['Kayabaşı', 'Bahçeşehir', 'Güvercintepe', 'Altınşehir', 'Şahintepe', 'İkitelli'],
    lat: 41.0940,
    lng: 28.8080,
    description: 'Bahçeşehir\'in göl kenarı yaşamı ve modern siteleriyle Başakşehir, aile odaklı etkinlikler ve site şenlikleri için popüler bir bölgedir.',
    eventVenues: ['Bahçeşehir Gölet', 'Başakşehir Millet Bahçesi', 'Bahçeşehir Parkları', 'Olimpik Stadyum çevresi'],
    population: '450.000+',
    localInsight: 'Başakşehir\'in Bahçeşehir gölet çevresi, yılın her mevsimi açık hava çocuk etkinlikleri için İstanbul\'un batı yakasındaki en popüler toplanma noktasıdır. Kayabaşı\'nın büyük siteleri ise toplu organizasyonlar ve site şenlikleri için yoğun talep görmektedir.'
  },
  {
    slug: 'kucukcekmece',
    name: 'Küçükçekmece',
    neighborhoods: ['Halkalı', 'Sefaköy', 'Cennet', 'İnönü', 'Atakent', 'Söğütlüçeşme', 'Kanarya'],
    lat: 41.0015,
    lng: 28.7800,
    description: 'Geniş nüfusu ve konut alanlarıyla Küçükçekmece, çocuk doğum günleri ve mahalle etkinlikleri için sürekli talep alan yoğun bir ilçedir.',
    eventVenues: ['Küçükçekmece Gölü', 'Halkalı Parkları', 'Atakent Yaşam Alanları', 'Sefaköy Meydanı'],
    population: '790.000+',
    localInsight: 'Küçükçekmece Gölü kıyısındaki piknik ve etkinlik alanları, geniş ailelerin toplu organizasyonları için İstanbul\'un batı yakasındaki en uygun lokasyonlardandır. Halkalı\'nın yeni konut siteleri ise hafta sonu çocuk partileri için sürekli artan bir talep oluşturmaktadır.'
  },
  {
    slug: 'tuzla',
    name: 'Tuzla',
    neighborhoods: ['Aydınlı', 'İçmeler', 'Şifa', 'Mimar Sinan', 'Postane', 'Aydıntepe', 'Orhanlı'],
    lat: 40.8181,
    lng: 29.2997,
    description: 'İstanbul\'un güney ucunda yer alan Tuzla, deniz kenarı mekanları ve yeni yerleşim alanlarıyla çocuk organizasyonlarına artan talep gösteren bir ilçedir.',
    eventVenues: ['Tuzla Sahili', 'Viaport Marina', 'İçmeler Plajı', 'Tuzla Belediye Parkları'],
    population: '270.000+',
    localInsight: 'Tuzla\'nın İçmeler sahil bölgesi ve Viaport Marina, özellikle yaz aylarında deniz kenarı çocuk partileri için İstanbul\'un en cazip lokasyonlarından biridir. Aydınlı\'daki yeni konut projeleri genç aile nüfusunu hızla artırmaktadır.'
  },
  {
    slug: 'cekmekoy',
    name: 'Çekmeköy',
    neighborhoods: ['Alemdağ', 'Mehmet Akif', 'Hamidiye', 'Mimar Sinan', 'Merkez', 'Ömerli'],
    lat: 41.0375,
    lng: 29.1775,
    description: 'Doğa ile iç içe konumuyla Çekmeköy, ormanlık alanları ve villa semtleriyle açık hava etkinlikleri ve bahçe organizasyonları için tercih edilmektedir.',
    eventVenues: ['Alemdağ Ormanı', 'Çekmeköy Parkları', 'Ömerli Barajı çevresi', 'Villa Bahçeleri'],
    population: '250.000+',
    localInsight: 'Çekmeköy\'ün Alemdağ ormanları ve Ömerli Barajı çevresi, İstanbul\'da doğa temalı çocuk etkinlikleri için Anadolu Yakası\'nın en değerli yeşil alanlarını barındırmaktadır. Villa semtlerinin geniş bahçeleri kalabalık gruplar için rahat organizasyon imkanı sağlamaktadır.'
  },
  {
    slug: 'zeytinburnu',
    name: 'Zeytinburnu',
    neighborhoods: ['Merkezefendi', 'Kazlıçeşme', 'Sümer', 'Yeşiltepe', 'Telsiz', 'Beştelsiz', 'Nuripaşa'],
    lat: 41.0044,
    lng: 28.9036,
    description: 'Tarihi surlar ve sahil şeridinin buluştuğu Zeytinburnu, merkezi konumu sayesinde ulaşımı kolay organizasyonlar için pratik bir bölgedir.',
    eventVenues: ['Kazlıçeşme Sahili', 'Zeytinburnu Sahil Parkı', 'Olivium AVM', 'Merkezefendi Parkı'],
    population: '290.000+',
    localInsight: 'Zeytinburnu\'nun Kazlıçeşme sahil bölgesi, İstanbul surlarının eteğinde deniz manzaralı çocuk etkinlikleri için benzersiz bir atmosfer sunmaktadır. Merkezi konumu sayesinde Avrupa Yakası\'nın her noktasından kolay ulaşım avantajı sağlamaktadır.'
  },
  {
    slug: 'maslak',
    name: 'Maslak',
    neighborhoods: ['Maslak 1453', 'Ağaoğlu My Office', 'Orjin Maslak', 'Spring Giz', 'Polat Tower', 'Sun Plaza'],
    lat: 41.1086,
    lng: 29.0203,
    description: 'İstanbul\'un finans ve iş merkezi Maslak, AVM\'leri, plazaları ve modern rezidanslarıyla hem kurumsal etkinlikler hem de genç profesyonel ailelerin çocuk organizasyonları için ideal bir bölgedir.',
    eventVenues: ['Maslak 1453 AVM', 'Vadi İstanbul AVM', 'Ağaoğlu My World', 'İTÜ Ayazağa Kampüsü çevresi'],
    population: '80.000+',
    localInsight: 'Maslak\'ın gökdelen silüetinin hemen arkasındaki Belgrad Ormanı etekleri, hafta sonları iş dünyasının yoğun tempolarından kaçan ailelerin çocuk partileri için doğal bir sığınak oluşturmaktadır. Maslak 1453 ve Vadi İstanbul gibi AVM\'ler kış aylarında kapalı mekan organizasyonları için popüler tercihlerdir.'
  },
  {
    slug: 'esenyurt',
    name: 'Esenyurt',
    neighborhoods: ['Kıraç', 'Saadetdere', 'Fatih', 'Yenikent', 'Ardıçlı', 'İnönü', 'Pınar', 'Akçaburgaz'],
    lat: 41.0342,
    lng: 28.6778,
    description: 'İstanbul\'un en kalabalık ilçesi Esenyurt, yoğun nüfusu ve genç aile profiliyle çocuk doğum günü ve etkinlik organizasyonlarına en yüksek talebin olduğu bölgelerden biridir.',
    eventVenues: ['Torium AVM', 'Esenyurt Belediye Parkları', 'Akbatı AVM', 'Koza Park'],
    population: '950.000+',
    localInsight: 'İstanbul\'un en genç nüfuslu ilçesi Esenyurt, sürekli büyüyen yerleşim alanlarıyla her hafta sonu yüzlerce çocuk etkinliğine ev sahipliği yapmaktadır. Uygun fiyatlı geniş daireler ve site ortak alanları, toplu çocuk partileri için en çok tercih edilen organizasyon mekanlarıdır.'
  }
]

// ─── HİZMETLER ─────────────────────────────────────────────
export const services = [
  {
    slug: 'palyaco-kiralama',
    name: 'Palyaço Kiralama',
    shortName: 'Palyaço',
    pillarUrl: '/organizasyonlar/palyaco-kiralama',
    keywords: ['palyaço kiralama', 'palyaço', 'animatör', 'çocuk animasyonu', 'sosis balon', 'yüz boyama'],
    icon: '🤡',
    priceRange: '₺₺',
    duration: '1-2 saat',
    description: 'Profesyonel palyaço ekibimiz, sosis balon şekillendirme, yüz boyama, grup oyunları ve mini disko ile çocukların yüzünü güldürür.',
    includes: ['Sosis Balon Şekillendirme', 'Yüz Boyama', 'Grup Oyunları', 'Mini Disko', 'Müzikli Eğlence', 'Kar Show Finali'],
    image: '/content/images/services/palyaco.webp'
  },
  {
    slug: 'bubble-show-kiralama',
    name: 'Bubble Show Kiralama',
    shortName: 'Bubble Show',
    pillarUrl: '/organizasyonlar/bubble-show',
    keywords: ['bubble show', 'köpük gösterisi', 'balon show', 'sabun köpüğü gösterisi'],
    icon: '🫧',
    priceRange: '₺₺',
    duration: '30-45 dakika',
    description: 'Dev baloncuklar, ışıklı köpük gösterisi ve interaktif bubble show performansı ile etkinliklerinize büyülü bir atmosfer katıyoruz.',
    includes: ['Dev Baloncuk Gösterisi', 'Çocuk İçine Girilen Balon', 'UV Işıklı Bubble Show', 'Duman Baloncukları', 'İnteraktif Katılım'],
    image: '/content/images/services/bubble-show.webp'
  },
  {
    slug: 'sihirbaz-kiralama',
    name: 'Sihirbaz Kiralama',
    shortName: 'Sihirbaz',
    pillarUrl: '/organizasyonlar/magic-show',
    keywords: ['sihirbaz kiralama', 'sihirbaz', 'illüzyon gösterisi', 'magic show', 'sihir gösterisi'],
    icon: '🎩',
    priceRange: '₺₺',
    duration: '30-45 dakika',
    description: 'Profesyonel sahne sihirbazlarımız, yakın plan sihirbazlık ve illüzyon gösterileriyle çocukların hayal dünyasını zenginleştirir.',
    includes: ['Sahne İllüzyonları', 'Yakın Plan Sihirbazlık', 'İnteraktif Sihir Gösterisi', 'Kart Numaraları', 'Tavşan Çıkarma', 'Komedi Sihir'],
    image: '/content/images/services/sihirbaz.webp'
  },
  {
    slug: 'dogum-gunu-organizasyonu',
    name: 'Doğum Günü Organizasyonu',
    shortName: 'Doğum Günü',
    pillarUrl: '/organizasyonlar/dogum-gunu-organizasyonu',
    keywords: ['doğum günü organizasyonu', 'çocuk doğum günü', 'parti organizasyonu', 'doğum günü partisi'],
    icon: '🎂',
    priceRange: '₺₺₺',
    duration: '2-4 saat',
    description: 'A\'dan Z\'ye doğum günü organizasyonu: konsept tasarım, dekorasyon, animasyon, ikramlar ve eğlence paketleriyle hayalinizdeki partiyi gerçeğe dönüştürüyoruz.',
    includes: ['Konsept Tasarım', 'Balon Dekorasyon', 'Animatör Ekibi', 'Pasta & İkramlar', 'Müzik & Işık', 'Fotoğraf Çekimi'],
    image: '/content/images/services/dogum-gunu.webp'
  },
  {
    slug: 'pamuk-seker-arabasi-kiralama',
    name: 'Pamuk Şeker Arabası Kiralama',
    shortName: 'Pamuk Şeker',
    pillarUrl: '/organizasyonlar/pamuk-seker',
    keywords: ['pamuk şeker arabası', 'pamuk şeker kiralama', 'pamuk şeker makinesi', 'pamuk şeker standı'],
    icon: '🍭',
    priceRange: '₺',
    duration: '2-4 saat',
    description: 'Nostaljik pamuk şeker arabamız ile etkinliklerinize tatlı bir dokunuş katıyoruz. Hijyenik üretim, rengarenk pamuk şekerler.',
    includes: ['Pamuk Şeker Arabası', 'Operatör Personeli', 'Sınırsız Pamuk Şeker', 'Hijyenik Çubuklar', 'Renkli Şeker Seçenekleri'],
    image: '/content/images/services/pamuk-seker.webp'
  },
  {
    slug: 'profesyonel-yuz-boyama',
    name: 'Profesyonel Yüz Boyama',
    shortName: 'Yüz Boyama',
    pillarUrl: '/organizasyonlar/yuz-boyama',
    keywords: ['yüz boyama', 'face painting', 'çocuk yüz boyama', 'profesyonel yüz boyama'],
    icon: '🎨',
    priceRange: '₺₺',
    duration: '1-3 saat',
    description: 'FDA onaylı, cilde zararsız boyalarla profesyonel yüz boyama hizmeti. 100+ farklı tasarım, kelebek, kaplan, süper kahraman ve daha fazlası.',
    includes: ['FDA Onaylı Boyalar', '100+ Tasarım Seçeneği', 'Profesyonel Sanatçı', 'Hijyen Protokolü', 'Glitter & Taş Uygulaması'],
    image: '/content/images/services/yuz-boyama.webp'
  },
  {
    slug: 'popcorn-arabasi-kiralama',
    name: 'Popcorn Arabası Kiralama',
    shortName: 'Popcorn',
    pillarUrl: '/organizasyonlar/pamuk-seker',
    keywords: ['popcorn arabası', 'popcorn kiralama', 'mısır patlatma arabası', 'popcorn makinesi kiralama'],
    icon: '🍿',
    priceRange: '₺',
    duration: '2-4 saat',
    description: 'Retro tarzı popcorn arabamız ile etkinliklerinize sinema keyfi katıyoruz. Taze patlamış mısır, karamel ve peynirli seçenekler.',
    includes: ['Popcorn Arabası', 'Operatör Personeli', 'Sınırsız Popcorn', 'Farklı Aroma Seçenekleri', 'Hijyenik Servis'],
    image: '/content/images/services/popcorn.webp'
  }
]

// ─── SEMT+HİZMET KOMBİNASYON İÇERİKLERİ ──────────────────
// İçerikler hizmet bazlı dosyalara bölünmüştür (code splitting)
// Her hizmet kendi chunk'ında yüklenir

const contentLoaders = {
  'palyaco-kiralama': () => import('./localContent-palyaco-kiralama.js'),
  'bubble-show-kiralama': () => import('./localContent-bubble-show-kiralama.js'),
  'sihirbaz-kiralama': () => import('./localContent-sihirbaz-kiralama.js'),
  'dogum-gunu-organizasyonu': () => import('./localContent-dogum-gunu-organizasyonu.js'),
  'pamuk-seker-arabasi-kiralama': () => import('./localContent-pamuk-seker-arabasi-kiralama.js'),
  'profesyonel-yuz-boyama': () => import('./localContent-profesyonel-yuz-boyama.js'),
  'popcorn-arabasi-kiralama': () => import('./localContent-popcorn-arabasi-kiralama.js'),
}

// Cache yüklenen içerikleri
const contentCache = {}

// ─── YARDIMCI FONKSİYONLAR ────────────────────────────────

/**
 * Semt slug'ından semt verisini getir
 */
export const getDistrict = (slug) => districts.find(d => d.slug === slug)

/**
 * Hizmet slug'ından hizmet verisini getir
 */
export const getService = (slug) => services.find(s => s.slug === slug)

/**
 * Semt+Hizmet kombinasyonunun içeriğini async getir (dynamic import)
 */
export const getLocalContentAsync = async (districtSlug, serviceSlug) => {
  if (!contentCache[serviceSlug]) {
    const loader = contentLoaders[serviceSlug]
    if (!loader) return null
    const module = await loader()
    contentCache[serviceSlug] = module.default
  }
  const key = `${districtSlug}-${serviceSlug}`
  return contentCache[serviceSlug][key] || null
}

/**
 * Semt+Hizmet kombinasyonunun içeriğini senkron getir (eski API uyumluluğu)
 * Pre-loaded cache'den döner, yoksa null
 */
export const getLocalContent = (districtSlug, serviceSlug) => {
  if (!contentCache[serviceSlug]) return null
  const key = `${districtSlug}-${serviceSlug}`
  return contentCache[serviceSlug][key] || null
}

/**
 * Bir semt için tüm hizmetleri getir
 * Tüm semt-hizmet kombinasyonları mevcut olduğu için tüm hizmetleri döner
 */
export const getServicesForDistrict = (districtSlug) => {
  // Tüm semtler tüm hizmetlere sahip (22x7 = 154)
  return services
}

/**
 * Bir hizmet için tüm semtleri getir
 */
export const getDistrictsForService = (serviceSlug) => {
  return districts
}

/**
 * Tüm local landing page URL'lerini üret (sitemap için)
 */
export const getAllLocalPageUrls = () => {
  const urls = []
  districts.forEach(district => {
    services.forEach(service => {
      urls.push({
        url: `/organizasyonlar/${service.slug}/${district.slug}`,
        district: district.name,
        service: service.name,
        priority: 0.8
      })
    })
  })
  return urls
}
