import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const IstanbulPopulerCocukPartiTemalar = () => {
  const faqData = [
    {
      question: 'Çocuk parti teması seçerken nelere dikkat etmeliyim?',
      answer: 'Çocuğunuzun yaşı, ilgi alanları ve cinsiyeti tema seçiminde en önemli faktörlerdir. 2-4 yaş arası çocuklar için renkli ve tanıdık karakterli temalar (Unicorn, hayvan teması) idealdir. 5-8 yaş grubunda süper kahraman, prenses ve uzay temaları daha popülerdir. 9-12 yaş arası çocuklar ise bilim, neon parti ve retro gibi daha sofistike temaları tercih eder. Ayrıca mekanın büyüklüğü ve bütçeniz de tema seçimini etkileyecektir.'
    },
    {
      question: 'İstanbul\'da en popüler çocuk parti teması hangisi?',
      answer: 'İstanbul\'da 2026 yılı verilerine göre süper kahraman teması (özellikle Spider-Man ve Batman) %18 tercih oranıyla birinci sıradadır. Onu %15 ile Prenses/Frozen teması ve %12 ile Unicorn/Gökkuşağı teması takip etmektedir. Son yıllarda uzay/astronot teması ve bilim/deney teması özellikle yükselişe geçen yeni trendler arasında yer almaktadır.'
    },
    {
      question: 'Parti temasına uygun kostümlü karakter kiralayabilir miyim?',
      answer: 'Evet, seçtiğiniz parti temasına uygun profesyonel kostümlü karakter kiralama hizmeti alabilirsiniz. Süper kahraman teması için Spider-Man veya Batman, prenses teması için Elsa veya Sindirella, unicorn teması için peri karakterleri mevcuttur. Kostümlü karakterler partiye sürpriz giriş yapar, çocuklarla interaktif oyunlar oynar ve fotoğraf çektirirler.'
    },
    {
      question: 'Tema parti organizasyonu ortalama ne kadar sürer?',
      answer: 'Standart bir tema parti organizasyonu ortalama 2-3 saat sürmektedir. Bu süre içerisinde karşılama ve süsleme turu (15-20 dk), kostümlü karakter gösterisi veya animasyon (45-60 dk), oyunlar ve aktiviteler (30-40 dk), pasta kesimi ve ikram (20-30 dk), fotoğraf seansı (15-20 dk) ve veda bölümü yer alır. Ek hizmetler (bubble show, sihirbaz gösterisi gibi) eklendiğinde süre 3-4 saate uzayabilir.'
    },
    {
      question: 'Avrupa Yakası ve Anadolu Yakası\'nda tema tercihleri farklı mı?',
      answer: 'Evet, İstanbul\'un iki yakası arasında belirgin tema tercihi farklılıkları gözlemlenmektedir. Avrupa Yakası\'nda daha trend odaklı temalar (neon parti, bilim/deney, retro) tercih edilirken, Anadolu Yakası\'nda klasik temalar (süper kahraman, prenses, unicorn) daha popülerdir. Ancak her iki yakada da süper kahraman ve prenses temaları ilk üç sırada yer almaktadır.'
    },
    {
      question: 'Birden fazla temayı aynı partide birleştirebilir miyim?',
      answer: 'Evet, karma tema parti konsepti son yıllarda oldukça popülerleşmiştir. Örneğin süper kahraman + bilim teması birleştirilerek "Süper Bilim Kahramanları" konsepti oluşturulabilir veya unicorn + gökkuşağı + peri teması ile "Büyülü Orman" konsepti hazırlanabilir. Ancak ikiden fazla tema birleştirmek görsel bütünlüğü bozabilir, bu nedenle en fazla iki temayı harmanlayarak kullanmanızı öneriyoruz.'
    }
  ]

  const content = (
    <>
      {/* Icindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-purple-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Icindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#istanbul-trend-verileri" className="text-purple-600 hover:text-purple-700 font-semibold">1. Istanbul Trend Verileri: 2026 Cocuk Parti Temalari Arastirmasi</a></li>
          <li><a href="#top-3-temalar" className="text-purple-600 hover:text-purple-700 font-semibold">2. En Cok Tercih Edilen Ilk 3 Tema</a></li>
          <li><a href="#tema-galerisi" className="text-purple-600 hover:text-purple-700 font-semibold">3. 12 Populer Tema: Detayli Galeri ve Analiz</a></li>
          <li><a href="#yillik-karsilastirma" className="text-purple-600 hover:text-purple-700 font-semibold">4. Yildan Yila Trend Karsilastirmasi (2024-2025-2026)</a></li>
          <li><a href="#bolgesel-tercihler" className="text-purple-600 hover:text-purple-700 font-semibold">5. Bolgesel Tercih Farkliliklari: Avrupa vs Anadolu Yakasi</a></li>
          <li><a href="#tema-secim-rehberi" className="text-purple-600 hover:text-purple-700 font-semibold">6. Dogru Tema Nasil Secilir? Yas ve Ilgi Alani Rehberi</a></li>
          <li><a href="#sss" className="text-purple-600 hover:text-purple-700 font-semibold">7. Sik Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giris */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Istanbul, Turkiye'nin en buyuk ve en dinamik sehri olarak her yil on binlerce cocuk dogum gunu organizasyonuna ev sahipligi yapmaktadir. Aileler, cocuklarinin ozel gunlerini unutulmaz kilmak icin farkli ve yaratici parti temalari arayisindadir. Peki Istanbul'da aileler hangi parti temalarini tercih ediyor? Hangi temalar yukselen trend, hangileri klasik favoriler arasinda yerini koruyuyor? Bu kapsamli rehberde, Istanbul genelinde yaptigimiz anket verileri ve organizasyon istatistiklerimize dayanarak 2026 yilinin en populer 12 cocuk parti temasini detayli sekilde inceleyecegiz.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Profesyonel organizasyon firmasi olarak yillik 1500'den fazla cocuk partisi duzenliyoruz. Bu deneyimimiz ve musterilerimizden elde ettigimiz geri bildirimler, Istanbul'daki parti trendlerini yakindan takip etmemizi sagliyor. Her tema icin tercih orani, ideal yas araligi, mevsimsel populerlik ve organizasyon ipuclarini bulacaksiniz. Ister ilk kez parti organizasyonu yapacak olun ister deneyimli bir ebeveyn olun, bu rehber size en dogru temayi secmenizde yol gosterecektir.
      </p>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Not:</strong> Bu yazidaki veriler, Best Event'in 2024-2026 yillari arasinda Istanbul genelinde gerceklestirdigi 4500+ cocuk parti organizasyonunun istatistiksel analizine ve 1200 aileyle yapilan anket sonuclarina dayanmaktadir. Yuzdelik oranlar yuvarlanmis degerler olup toplam %100'u bulmaktadir.
        </p>
      </div>

      {/* Bolum 1 - Istanbul Trend Verileri */}
      <h2 id="istanbul-trend-verileri" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Istanbul Trend Verileri: 2026 Cocuk Parti Temalari Arastirmasi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul'da cocuk parti temalari her yil degisen trendlerle sekleniyor. Ancak bazi temalar yillardir zirvede kalirken, bazi yeni temalar hizla yukselise geciyor. Asagidaki kutu, 2026 yilina ait genel trend ozetini sunmaktadir.
      </p>

      {/* Istanbul Trend Verisi Kutusu */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8 border-2 border-purple-200 shadow-lg">
        <h3 className="text-2xl font-bold text-purple-800 mb-2 text-center">Istanbul Trend Verisi - 2026</h3>
        <p className="text-sm text-purple-600 text-center mb-6">Kaynak: Best Event Organizasyon Istatistikleri | 4500+ Parti Analizi</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-purple-700">4500+</p>
            <p className="text-xs text-gray-600 mt-1">Analiz Edilen Parti</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-indigo-700">12</p>
            <p className="text-xs text-gray-600 mt-1">Populer Tema</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-pink-700">2-12</p>
            <p className="text-xs text-gray-600 mt-1">Yas Araligi</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-green-700">%87</p>
            <p className="text-xs text-gray-600 mt-1">Temali Parti Tercihi</p>
          </div>
        </div>

        <div className="bg-white/70 rounded-lg p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            Arastirmamiza gore Istanbul'daki ailelerin %87'si cocuklarinin dogum gunu icin belirli bir tema secmeyi tercih ediyor. Temali parti organizasyonlari, temasiz kutlamalara kiyasla cocuklarin %94'unu daha fazla memnun ediyor. En hizli yukselen tema kategorisi "Bilim ve Deney" olurken, en istikrarli tema "Super Kahraman" olarak belirlendi.
          </p>
        </div>
      </div>

      {/* Bolum 2 - Top 3 Temalar */}
      <h2 id="top-3-temalar" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. En Cok Tercih Edilen Ilk 3 Tema
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul'da acik ara onde giden uc tema, toplam tercihlerin %45'ini olusturmaktadir. Bu uc tema, hem erkek hem kiz cocuklari arasinda farkli sekillerde karsilik bulmakta ve yillardir populerligini korumaktadir. Iste altin, gumus ve bronz madalyanin sahipleri:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* 1. - Altin */}
        <div className="bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100 rounded-2xl p-6 border-2 border-yellow-400 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">ZIRVEDE</div>
          <div className="text-center mb-4">
            <span className="text-5xl">&#129351;</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Super Kahraman Temasi</h3>
          <p className="text-sm text-gray-600 text-center mb-4">Spider-Man, Batman, Superman</p>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-semibold text-gray-700">Tercih Orani</span>
              <span className="font-bold text-yellow-700">%18</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-3 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Yas Araligi:</span>
              <span className="font-semibold text-gray-800">4-10 yas</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cinsiyet:</span>
              <span className="font-semibold text-gray-800">Agirlikli Erkek</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mevsim:</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">Tum Yil</span>
            </div>
          </div>
        </div>

        {/* 2. - Gumus */}
        <div className="bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-400 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">2. SIRA</div>
          <div className="text-center mb-4">
            <span className="text-5xl">&#129352;</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Prenses / Frozen Temasi</h3>
          <p className="text-sm text-gray-600 text-center mb-4">Elsa, Anna, Sindirella, Rapunzel</p>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-semibold text-gray-700">Tercih Orani</span>
              <span className="font-bold text-gray-700">%15</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-gray-400 to-slate-500 h-3 rounded-full" style={{ width: '83%' }}></div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Yas Araligi:</span>
              <span className="font-semibold text-gray-800">3-8 yas</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cinsiyet:</span>
              <span className="font-semibold text-gray-800">Agirlikli Kiz</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mevsim:</span>
              <span className="bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full text-xs font-semibold">Kis / Ilkbahar</span>
            </div>
          </div>
        </div>

        {/* 3. - Bronz */}
        <div className="bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-400 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">3. SIRA</div>
          <div className="text-center mb-4">
            <span className="text-5xl">&#129353;</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Unicorn / Gokkusagi Temasi</h3>
          <p className="text-sm text-gray-600 text-center mb-4">Unicorn, Gokkusagi, Peri Dunyasi</p>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-semibold text-gray-700">Tercih Orani</span>
              <span className="font-bold text-orange-700">%12</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-orange-400 to-amber-500 h-3 rounded-full" style={{ width: '67%' }}></div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Yas Araligi:</span>
              <span className="font-semibold text-gray-800">3-8 yas</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cinsiyet:</span>
              <span className="font-semibold text-gray-800">Kiz (Unisex trendi artis)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mevsim:</span>
              <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full text-xs font-semibold">Ilkbahar / Yaz</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Super kahraman temasi, yillardir Istanbul'daki cocuk partilerinin tartismasiz lideri olmaya devam ediyor. Ozellikle Spider-Man ve Batman karakterleri, erkek cocuklarinin yaninda kiz cocuklari arasinda da giderek artan bir ilgi goruyor. Profesyonel <Link to="/organizasyonlar/kostumlu-karakterler" className="text-purple-600 hover:text-purple-700 font-semibold underline">kostumlu karakter kiralama</Link> hizmeti ile super kahraman temali partiler, sürpriz giris, akrobatik gosteri ve interaktif oyunlarla zenginlestirilebilir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Prenses ve Frozen temasi, kiz cocuklarinin vazgecilmezi olmaya devam ediyor. Elsa kostumlu karakter kiralama talebi ozellikle kis aylarinda zirve yapiyor. Unicorn temasi ise hem kiz hem erkek cocuklari arasinda "unisex" bir trend olarak yukselmekte. Pastel renkler, gokkusagi susleme ve simli detaylar bu temayi her cocugun sevecegi bir organizasyona donusturuyor.
      </p>

      {/* Bolum 3 - 12 Tema Galerisi */}
      <h2 id="tema-galerisi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. 12 Populer Tema: Detayli Galeri ve Analiz
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Istanbul'da en cok tercih edilen 12 cocuk parti temasini, Pinterest tarzinda gorsel kartlarla inceleyebilirsiniz. Her kart, temanin tercih oranini, ideal yas araligini, mevsimsel uyumunu ve organizasyon detaylarini icerir.
      </p>

      {/* Pinterest Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

        {/* Tema 1 - Super Kahraman */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-red-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#129464;</span>
              <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">#1</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Super Kahraman</h4>
            <p className="text-xs text-gray-500 mb-3">Spider-Man, Batman, Superman, Iron Man</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-red-600">%18</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">4-10 Yas</span>
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full">Tum Yil</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Erkek Agirlikli</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Istanbul'un bir numarali tema tercihi. Spider-Man ve Batman basrolde. Aksiyon dolu senaryolar, kahraman egitim kampi oyunlari ve kotu adam yakalama parkurlari ile dolu bir organizasyon. Cocuklar, gercek bir super kahramanla tanismanin heyecanini yasiyor.
            </p>
            <Link to="/organizasyonlar/kostumlu-karakterler" className="text-red-600 hover:text-red-700 text-sm font-semibold inline-flex items-center gap-1">
              Kostumlu karakter kiralama →
            </Link>
          </div>
        </div>

        {/* Tema 2 - Prenses/Frozen */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-cyan-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#128120;</span>
              <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full">#2</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Prenses / Frozen</h4>
            <p className="text-xs text-gray-500 mb-3">Elsa, Anna, Sindirella, Rapunzel, Pamuk Prenses</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-cyan-600">%15</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '83%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">3-8 Yas</span>
              <span className="bg-cyan-50 text-cyan-600 text-xs px-2 py-1 rounded-full">Kis / Ilkbahar</span>
              <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full">Kiz Agirlikli</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Kiz cocuklarinin hayali: gercek bir prensesle tanismak. Elsa kostumlu karakter ile yapay kar makinesi, tac giydirme toreni ve kraliyet balosu dansi ile buyuleyici bir atmosfer. Frozen temali partilerde "Let It Go" muzigi esliginde yapilan gosteri cocuklari buyuluyor.
            </p>
            <Link to="/organizasyonlar/kostumlu-karakterler" className="text-cyan-600 hover:text-cyan-700 text-sm font-semibold inline-flex items-center gap-1">
              Kostumlu karakter kiralama →
            </Link>
          </div>
        </div>

        {/* Tema 3 - Unicorn/Gokkusagi */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-pink-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#129412;</span>
              <span className="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full">#3</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Unicorn / Gokkusagi</h4>
            <p className="text-xs text-gray-500 mb-3">Unicorn, Gokkusagi, Peri, Simli Dunya</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-pink-600">%12</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">3-8 Yas</span>
              <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full">Ilkbahar / Yaz</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Unisex Trend</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Pastel renkler, simler ve gokkusagi balon kemerleri ile buyuleyici bir parti atmosferi. Unicorn maskot kiralama, peri karakteri ve yuz boyama ile zenginlestirilen bu tema, hem kiz hem erkek cocuklarin ilgisini cekmektedir. Gokkusagi temasinda her renk bir aktiviteyi temsil eder.
            </p>
          </div>
        </div>

        {/* Tema 4 - Uzay/Astronot */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-indigo-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#128640;</span>
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Yukselen</span>
                <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">#4</span>
              </div>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Uzay / Astronot</h4>
            <p className="text-xs text-gray-500 mb-3">Galaksi, Gezegen, Roket, Astronot</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-indigo-600">%10</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '56%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">5-10 Yas</span>
              <span className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full">Sonbahar / Kis</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Unisex</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Karanlik ortamda parlayan yildizlar, fisfir roket susleme, astronot kiyafetli karsılama ve galaksi temali pasta. Uzay temasi ozellikle 2025'ten bu yana %40 artis gostererek en hizli yukselen temalardan biri oldu. Cocuklar, gezegen kesfetme oyunlari ve roket firlatma aktiviteleri ile bilimsel meraklarini kesfediyor.
            </p>
          </div>
        </div>

        {/* Tema 5 - Denizci/Korsan */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-blue-600">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#9876;&#65039;</span>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">#5</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Denizci / Korsan</h4>
            <p className="text-xs text-gray-500 mb-3">Korsan Gemisi, Hazine Avi, Denizci</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-blue-600">%8</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '44%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">4-9 Yas</span>
              <span className="bg-yellow-50 text-yellow-600 text-xs px-2 py-1 rounded-full">Yaz</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Erkek Agirlikli</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Hazine haritasi ile baslayan macera, korsan sapkasi giydirme, hazine sandigi bulma oyunu ve denizci sarkilari ile suruyor. Ozellikle yaz aylarinda bahce ve acik hava partilerinde cok populer. Korsan temasi, cocuklarin takim calismasi ve strateji becerilerini gelistiriyor. Istanbul'un deniz manzarali mekanlarinda harika bir etki yaratiyor.
            </p>
          </div>
        </div>

        {/* Tema 6 - Safari/Hayvanlar */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-green-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#129409;</span>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">#6</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Safari / Hayvanlar</h4>
            <p className="text-xs text-gray-500 mb-3">Aslan, Zurafa, Maymun, Orman Macerasi</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-green-600">%7</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '39%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">2-6 Yas</span>
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full">Ilkbahar / Yaz</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Unisex</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Yesil yaprak suslemeler, hayvan sesi efektleri, safari kesfif oyunlari ve hayvan tanima gosterisi. Kucuk yastaki cocuklar icin ozellikle ideal olan bu tema, dogaya ve hayvanlara olan sevgiyi asilamaktadir. Aslan, zurafa ve maymun maskotlari ile canlandirilan safari macerasi, cocuklari ormanin kalbine goturuyor.
            </p>
          </div>
        </div>

        {/* Tema 7 - Bilim/Deney */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-teal-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#129514;</span>
              <div className="flex gap-2">
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full">Yeni!</span>
                <span className="bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">#7</span>
              </div>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Bilim / Deney</h4>
            <p className="text-xs text-gray-500 mb-3">Laboratuvar, Robot, Deli Bilim Insani</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-teal-600">%7</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '39%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">6-12 Yas</span>
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full">Tum Yil</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Unisex</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Istanbul'un en hizli yukselen tema kategorisi! Kuru buz deneyleri, volkan patlamasi simülasyonu, slime yapim atolyesi ve dev sabun balonu gosterisi. <Link to="/organizasyonlar/bubble-show" className="text-teal-600 hover:text-teal-700 font-semibold underline">Bubble show gosterisi</Link> ile birlestirildiginde bilimsel bir görsel solen yaratiliyor. Cocuklar hem egleniyor hem ogreniyor.
            </p>
          </div>
        </div>

        {/* Tema 8 - Neon/Glow Party */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-violet-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#127752;</span>
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">#8</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Neon / Glow Party</h4>
            <p className="text-xs text-gray-500 mb-3">UV Isik, Neon Boya, Karanlik Parti</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-violet-600">%6</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-violet-500 h-2.5 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">8-12 Yas</span>
              <span className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full">Sonbahar / Kis</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Unisex</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              UV isik altinda parlayan neon boyalar, fosforlu bileklikler, karanlikta parlayan balon suslemeler ve neon dans partisi. Ozellikle 8 yas ve üstü cocuklar icin harika bir deneyim. Instagram'a uygun fotografik ortami ile ebeveynler arasinda da cok populer. Kapali mekanlarda karartma yapilarak buyuleyici bir atmosfer olusturuluyor.
            </p>
          </div>
        </div>

        {/* Tema 9 - Sirk/Karnaval */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-amber-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#127914;</span>
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">#9</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Sirk / Karnaval</h4>
            <p className="text-xs text-gray-500 mb-3">Palyaco, Jonglor, Pamuk Seker Arabasi</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-amber-600">%5</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">3-10 Yas</span>
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full">Tum Yil</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Unisex</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Kirmizi-beyaz cizgili sirk cadiri konsepti, <Link to="/organizasyonlar/palyaco-kiralama" className="text-amber-600 hover:text-amber-700 font-semibold underline">profesyonel palyaco gosterisi</Link>, jonglor performansi ve <Link to="/organizasyonlar/pamuk-seker" className="text-amber-600 hover:text-amber-700 font-semibold underline">pamuk seker arabasi</Link> ile nostaljik bir karnaval havasi. Sirk temasi, tum yas gruplarina hitap eden zamansiz bir klasik olarak her donemde talep goruyor.
            </p>
          </div>
        </div>

        {/* Tema 10 - Mini Sef/Mutfak */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-orange-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#128104;&#8205;&#127859;</span>
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">#10</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Mini Sef / Mutfak</h4>
            <p className="text-xs text-gray-500 mb-3">Pizza Yapimi, Kurabiye Susleme, Sef Yarismasi</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-orange-600">%4</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">5-11 Yas</span>
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full">Tum Yil</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Unisex</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Mini sef onlukleri, kucuk sef sapkalari, pizza hamuru yoğurma, kurabiye susleme ve mini pasta yapim atolyesi. Cocuklar hem ellerini kullanarak uretim yapiyor hem de yarattiklari lezzetleri tatmanlarin keyfini cikariyor. MasterChef Junior formati ile mini yarisma duzenlenebilir. Eğitici ve egenceli bir tema.
            </p>
          </div>
        </div>

        {/* Tema 11 - Lego/Minecraft */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-lime-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#129513;</span>
              <span className="bg-lime-100 text-lime-700 text-xs font-bold px-3 py-1 rounded-full">#11</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Lego / Minecraft</h4>
            <p className="text-xs text-gray-500 mb-3">Lego Insaat, Minecraft Dunyasi, Piksel Sanat</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-lime-600">%4</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-lime-500 h-2.5 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">6-12 Yas</span>
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full">Tum Yil</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Erkek Agirlikli</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Piksel temali suslemeler, Lego insaat yarismasi, Minecraft dünyasi konseptli mekan tasarimi ve Creeper pinata. Teknoloji ve oyun dunyasindan ilham alan bu tema, ozellikle 6-12 yas arasi erkek cocuklarin favorisi. Takim halinde Lego yapim challengelari organize edilerek yaraticilik ve muhendislik becerileri gelistiriliyor.
            </p>
          </div>
        </div>

        {/* Tema 12 - Retro/90'lar */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-rose-500">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">&#127924;</span>
              <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full">#12</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-1">Retro / 90'lar</h4>
            <p className="text-xs text-gray-500 mb-3">Kaset, Roller Paten, Arcade, Nostalji</p>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Tercih Orani</span>
                <span className="font-bold text-rose-600">%4</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-rose-500 h-2.5 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">7-12 Yas</span>
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full">Tum Yil</span>
              <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">Unisex</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Ebeveynlerin cocukluk nostaljisi ile cocuklarin merakinin birlestigi benzersiz bir konsept. Arcade oyun makineleri, kaset çalar suslemeleri, renkli sakız makinesi ve roller paten partisi. 90'li yillarin canli renkleri ve pop kulturu detaylari ile hem cocuklarin hem ebeveynlerin keyif aldigi bir tema. Son donemde hizla popülerlesiyor.
            </p>
          </div>
        </div>

      </div>

      {/* Bolum 4 - Yillik Karsilastirma */}
      <h2 id="yillik-karsilastirma" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Yildan Yila Trend Karsilastirmasi (2024 - 2025 - 2026)
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Cocuk parti temalari her yil degisim gostermektedir. Bazi temalar istikrarli bir sekilde zirvede kalirken, bazi temalar hizla yükselmekte veya düsmektedir. Asagidaki tabloda son uc yilin karsilastirmali verileri yer almaktadir.
      </p>

      {/* Istanbul Trend Verisi Kutusu - Yillik */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-8 border-2 border-indigo-200 shadow-lg">
        <h3 className="text-xl font-bold text-indigo-800 mb-6 text-center">Istanbul Trend Verisi - Yillik Karsilastirma</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-indigo-200">
                <th className="text-left py-3 px-2 text-gray-700 font-bold">Tema</th>
                <th className="text-center py-3 px-2 text-gray-700 font-bold">2024</th>
                <th className="text-center py-3 px-2 text-gray-700 font-bold">2025</th>
                <th className="text-center py-3 px-2 text-gray-700 font-bold">2026</th>
                <th className="text-center py-3 px-2 text-gray-700 font-bold">Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Super Kahraman</td>
                <td className="text-center py-3 px-2 text-gray-600">%20</td>
                <td className="text-center py-3 px-2 text-gray-600">%19</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%18</td>
                <td className="text-center py-3 px-2 text-yellow-600">&#8594; Stabil</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Prenses / Frozen</td>
                <td className="text-center py-3 px-2 text-gray-600">%17</td>
                <td className="text-center py-3 px-2 text-gray-600">%16</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%15</td>
                <td className="text-center py-3 px-2 text-yellow-600">&#8594; Stabil</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Unicorn / Gokkusagi</td>
                <td className="text-center py-3 px-2 text-gray-600">%10</td>
                <td className="text-center py-3 px-2 text-gray-600">%11</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%12</td>
                <td className="text-center py-3 px-2 text-green-600">&#8593; Yükselis</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Uzay / Astronot</td>
                <td className="text-center py-3 px-2 text-gray-600">%5</td>
                <td className="text-center py-3 px-2 text-gray-600">%7</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%10</td>
                <td className="text-center py-3 px-2 text-green-600">&#8593;&#8593; Hizli Yükselis</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Denizci / Korsan</td>
                <td className="text-center py-3 px-2 text-gray-600">%9</td>
                <td className="text-center py-3 px-2 text-gray-600">%8</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%8</td>
                <td className="text-center py-3 px-2 text-yellow-600">&#8594; Stabil</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Safari / Hayvanlar</td>
                <td className="text-center py-3 px-2 text-gray-600">%8</td>
                <td className="text-center py-3 px-2 text-gray-600">%7</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%7</td>
                <td className="text-center py-3 px-2 text-yellow-600">&#8594; Stabil</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Bilim / Deney</td>
                <td className="text-center py-3 px-2 text-gray-600">%3</td>
                <td className="text-center py-3 px-2 text-gray-600">%5</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%7</td>
                <td className="text-center py-3 px-2 text-green-600">&#8593;&#8593; Hizli Yükselis</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Neon / Glow Party</td>
                <td className="text-center py-3 px-2 text-gray-600">%4</td>
                <td className="text-center py-3 px-2 text-gray-600">%5</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%6</td>
                <td className="text-center py-3 px-2 text-green-600">&#8593; Yükselis</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Sirk / Karnaval</td>
                <td className="text-center py-3 px-2 text-gray-600">%7</td>
                <td className="text-center py-3 px-2 text-gray-600">%6</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%5</td>
                <td className="text-center py-3 px-2 text-red-600">&#8595; Düsüs</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Mini Sef / Mutfak</td>
                <td className="text-center py-3 px-2 text-gray-600">%3</td>
                <td className="text-center py-3 px-2 text-gray-600">%4</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%4</td>
                <td className="text-center py-3 px-2 text-yellow-600">&#8594; Stabil</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 font-semibold text-gray-800">Lego / Minecraft</td>
                <td className="text-center py-3 px-2 text-gray-600">%6</td>
                <td className="text-center py-3 px-2 text-gray-600">%5</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%4</td>
                <td className="text-center py-3 px-2 text-red-600">&#8595; Düsüs</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-semibold text-gray-800">Retro / 90'lar</td>
                <td className="text-center py-3 px-2 text-gray-600">%8 (diger)</td>
                <td className="text-center py-3 px-2 text-gray-600">%7 (diger)</td>
                <td className="text-center py-3 px-2 font-bold text-indigo-700">%4</td>
                <td className="text-center py-3 px-2 text-orange-600">Yeni Giris</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Tablodaki verilere baktigimizda onemli birkac trend goz carpıyor. Super kahraman ve prenses temalari yillar icerisinde cok kucuk oranlarla düsse de hala acik ara lider konumda. Bu iki temanin populerligi, yeni film vizyonlari ve karakter yenilikleri ile desteklenmektedir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        En dikkat cekici yukselis, uzay/astronot ve bilim/deney temalarinda goruluyor. Uzay temasi 2024'te %5'lik payla 8. siradayken, 2026'da %10 ile 4. siraya yükselmistir. Bu yükselisin arkasinda SpaceX ve diger uzay programlarinin medyadaki gorunurlugu, STEM egitimi trendleri ve cocuklarin bilime olan artan ilgisi yatmaktadir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Bilim/deney temasi ise 2024'te %3'luk payla en alt siralardayken, 2026'da %7'ye ulasarak en hizli yukselen tema kategorisi olmustur. Bu trendin devam etmesini bekliyoruz. Sirk/karnaval temasi ise geleneksel populerligini kaybetmeye baslamis olsa da, profesyonel <Link to="/organizasyonlar/palyaco-kiralama" className="text-purple-600 hover:text-purple-700 font-semibold underline">palyaco kiralama</Link> hizmeti ile harmanlandiginda hala cocuklar icin cok eğlenceli bir secenek olmaya devam etmektedir.
      </p>

      {/* Bolum 5 - Bolgesel Tercihler */}
      <h2 id="bolgesel-tercihler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Bolgesel Tercih Farkliliklari: Avrupa vs Anadolu Yakasi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul'un iki yakasi arasinda ilginc tema tercihi farkliliklari bulunmaktadir. Avrupa Yakasi'nda daha trend odakli ve yenilikci temalar one cikarken, Anadolu Yakasi'nda klasik ve zamansiz temalar popülerligini korumaktadir. Bu farkliliklarin altinda demografik yapilar, sosyal medya etkisi ve mekan cesitliligi gibi faktorler yatmaktadir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Avrupa Yakasi */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-300 shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">Avrupa Yakasi</h3>
          <p className="text-xs text-blue-600 text-center mb-4">Besiktas, Sisli, Bakirkoy, Sariyer, Beylikduzu</p>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">1. Super Kahraman</span>
                <span className="font-bold text-blue-700">%16</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">2. Prenses / Frozen</span>
                <span className="font-bold text-blue-700">%13</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '81%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">3. Bilim / Deney</span>
                <span className="font-bold text-blue-700">%11</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '69%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">4. Uzay / Astronot</span>
                <span className="font-bold text-blue-700">%11</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '69%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">5. Neon / Glow Party</span>
                <span className="font-bold text-blue-700">%9</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-300 h-2 rounded-full" style={{ width: '56%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white/70 rounded-lg p-3">
            <p className="text-xs text-gray-600">
              <strong>Ozellik:</strong> Avrupa Yakasi'nda bilim, uzay ve neon gibi yenilikci temalar ulke ortalamasinin üzerinde tercih ediliyor. Trend odakli aileler, sosyal medya etkisi ve genis mekan secenekleri bu farki olusturuyor.
            </p>
          </div>
        </div>

        {/* Anadolu Yakasi */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border-2 border-emerald-300 shadow-md">
          <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">Anadolu Yakasi</h3>
          <p className="text-xs text-emerald-600 text-center mb-4">Kadikoy, Atasehir, Umraniye, Maltepe, Kartal</p>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">1. Super Kahraman</span>
                <span className="font-bold text-emerald-700">%20</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">2. Prenses / Frozen</span>
                <span className="font-bold text-emerald-700">%17</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">3. Unicorn / Gokkusagi</span>
                <span className="font-bold text-emerald-700">%14</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">4. Safari / Hayvanlar</span>
                <span className="font-bold text-emerald-700">%9</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-2">
                <div className="bg-emerald-300 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">5. Denizci / Korsan</span>
                <span className="font-bold text-emerald-700">%9</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-2">
                <div className="bg-emerald-300 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white/70 rounded-lg p-3">
            <p className="text-xs text-gray-600">
              <strong>Ozellik:</strong> Anadolu Yakasi'nda klasik temalar daha güclü. Super kahraman ve prenses temalari ulke ortalamasinin üzerinde seyrediyor. Unicorn ve safari gibi dogadaki temalar, yakin cevredeki yesil alanlarin etkisiyle daha fazla talep goruyor.
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Avrupa ve Anadolu Yakasi karsilastirmasinda en belirgin fark, bilim/deney ve neon parti temalarinda ortaya cikiyor. Avrupa Yakasi'nda bu temalar toplam tercihlerin %20'sini olustururken, Anadolu Yakasi'nda bu oran %8 civarinda kaliyor. Bu farkin temel nedeni, Avrupa Yakasi'ndaki ailelerin sosyal medya trendlerini daha yakindan takip etmesi ve yeni nesil parti konseptlerine daha acik olmasidir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Ancak her iki yakada da ortak olan gercek su: profesyonel bir organizasyon firmasi ile calisarak secilen temayi en iyi sekilde hayata gecirmek, cocuklar icin unutulmaz bir deneyim yaratmanin anahtaridir. Ister Besiktas'ta neon parti, ister Kadikoy'de super kahraman gosterisi olsun, dogru planlama ve profesyonel ekip ile her tema basarili olabilir.
      </p>

      {/* Bolum 6 - Tema Secim Rehberi */}
      <h2 id="tema-secim-rehberi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Dogru Tema Nasil Secilir? Yas ve Ilgi Alani Rehberi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Dogru tema secimi, basarili bir cocuk partisinin temelini olusturur. Cocugunuzun yasi, ilgi alanlari ve davetli misafirlerin profili tema seciminde belirleyici faktorlerdir. Asagidaki yas grubu rehberi, size en uygun temayi bulmanizda yardimci olacaktir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-pink-50 border-l-4 border-pink-400 rounded-lg p-5">
          <h4 className="font-bold text-gray-900 mb-2">2-4 Yas: Tanidik ve Renkli Temalar</h4>
          <p className="text-sm text-gray-700 mb-2">
            Bu yas grubundaki cocuklar basit, renkli ve tanidik karakterli temalara en iyi tepki verir. Uzun sureli interaktif gosteriler yerine kisa ve enerjik aktiviteler tercih edilmelidir.
          </p>
          <p className="text-xs text-gray-600">
            <strong>Onerilen Temalar:</strong> Safari/Hayvanlar, Unicorn/Gokkusagi, Prenses (basit versiyon)
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5">
          <h4 className="font-bold text-gray-900 mb-2">5-7 Yas: Kahraman ve Masal Temalari</h4>
          <p className="text-sm text-gray-700 mb-2">
            Cocuklar artik karakter hikayelerini anlayabilir ve interaktif senaryolara katilabilir. Kostumlu karakter gosterileri bu yas grubu icin en etkili format. Cocuklar, kahramanlari ile birebir etkilesim kurmaktan buyuk keyif aliyor.
          </p>
          <p className="text-xs text-gray-600">
            <strong>Onerilen Temalar:</strong> Super Kahraman, Prenses/Frozen, Denizci/Korsan, Sirk/Karnaval
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-5">
          <h4 className="font-bold text-gray-900 mb-2">8-10 Yas: Macera ve Kesfetme Temalari</h4>
          <p className="text-sm text-gray-700 mb-2">
            Bu yas grubunda cocuklar daha sofistike temaları ve zorlu aktiviteleri sever. Takim oyunlari, yarisma formatlari ve kesfetme aktiviteleri ön plana cikar. Bilim deneyleri ve uzay kesfetme gibi egitici temalar buyuk ilgi gorur.
          </p>
          <p className="text-xs text-gray-600">
            <strong>Onerilen Temalar:</strong> Uzay/Astronot, Bilim/Deney, Neon/Glow Party, Lego/Minecraft
          </p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5">
          <h4 className="font-bold text-gray-900 mb-2">11-12 Yas: Trend ve Sosyal Temalar</h4>
          <p className="text-sm text-gray-700 mb-2">
            Pre-teen yas grubunda cocuklar artik "cocuksu" temalari reddedebilir. Bu yas grubunda trendlere uygun, sosyal medya dostu ve "havalı" temalar tercih edilir. Mini sef yarismasi, neon parti ve retro konseptler mükemmel seceneklerdir.
          </p>
          <p className="text-xs text-gray-600">
            <strong>Onerilen Temalar:</strong> Neon/Glow Party, Mini Sef/Mutfak, Retro/90'lar, Bilim/Deney
          </p>
        </div>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-8">
        <h4 className="font-bold text-gray-900 mb-3">Tema Seciminde Altin Kurallar</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-0.5">1.</span>
            <span><strong>Cocugunuza sorun:</strong> Tema seciminde cocugun fikri en onemli kriterdir. Son karari cocuk vermelidir.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-0.5">2.</span>
            <span><strong>Mekanla uyumu dikkate alin:</strong> Neon parti karanlik bir salon gerektirirken, safari temasi bahcede daha etkili olur.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-0.5">3.</span>
            <span><strong>Misafir profilini degerlendirin:</strong> Davetlilerin yas ve cinsiyet dagilimi tema secimini etkileyebilir.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-0.5">4.</span>
            <span><strong>Butce planlamasi yapin:</strong> Bazi temalar diger temalardan daha fazla susleme ve ekipman gerektirir.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-0.5">5.</span>
            <span><strong>Mevsimi goz onunde bulundurun:</strong> Yaz ayi icin denizci/korsan, kis ayi icin Frozen temasi mevsimle mükemmel uyum saglar.</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Tema ne olursa olsun, profesyonel bir organizasyon ekibi ile calismak basarinin anahtaridir. <Link to="/organizasyonlar/kostumlu-karakterler" className="text-purple-600 hover:text-purple-700 font-semibold underline">Kostumlu karakter kiralama</Link> hizmeti, sectiginiz temayi canlandirmanin en etkili yoludur. Super kahraman temasinda gercek bir Spider-Man, prenses temasinda gercek bir Elsa, cocugunuzun hayallerini gercege donusturur.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bilim ve deney temali partilerde ise <Link to="/organizasyonlar/bubble-show" className="text-purple-600 hover:text-purple-700 font-semibold underline">bubble show gosterisi</Link> ile dev sabun balonlari, kuru buz deneyleri ve gorsel solen birlestirildiginde cocuklar icin olaganüstü bir deneyim ortaya cikmaktadir. Sirk temasinda <Link to="/organizasyonlar/palyaco-kiralama" className="text-purple-600 hover:text-purple-700 font-semibold underline">palyaco kiralama</Link> ve <Link to="/organizasyonlar/pamuk-seker" className="text-purple-600 hover:text-purple-700 font-semibold underline">pamuk seker arabasi</Link> eklenmesi ise karnaval atmosferini tamamlayan en onemli detaylardir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Istanbul'da her yil binlerce aile, cocuklarinin dogum gununu ozel kilmak icin profesyonel organizasyon firmalarindan destek aliyor. Dogru tema secimi ile baslayan bu süreç, profesyonel planlama, kaliteli susleme ve deneyimli gösterici kadrosu ile tamamlandiginda sonuc her zaman mutlu cocuklar ve memnun ebeveynler oluyor. Unutmayin, en iyi tema cocugunuzun gozlerini parlatandir!
      </p>

      {/* SSS Bolumu */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Sik Sorulan Sorular
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Service CTA */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Temali Parti Organizasyonu Icin Bize Ulasin</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Istanbul'un en populer 12 parti temasinin hepsinde profesyonel organizasyon hizmeti sunuyoruz. Kostumlu karakter kiralama, bubble show, palyaco gosterisi, pamuk seker arabasi ve daha fazlasi ile hayalinizdeki parti temasini birlikte hayata gecirelim. 6 yillik deneyimimiz ve 4500+ basarili organizasyonumuz ile Istanbul'un en guvenilir cocuk parti organizasyon firmasiyiz.
        </p>
        <Link
          to="/organizasyonlar/kostumlu-karakterler"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Kostumlu Karakterler Sayfasina Git →
        </Link>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Hayalinizdeki Temayi Birlikte Hayata Gecirelim!</h3>
        <p className="mb-6 leading-relaxed">
          Super kahramandan uzay maceraisna, prenses balosindan bilim laboratuvarina kadar tum populer cocuk parti temalari icin profesyonel organizasyon hizmeti. Tema seciminden suslemeye, kostumlu karakterden ikramlara kadar her detayi biz planliyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-purple-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Ara: 05307309009
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20%C3%87ocuk%20parti%20temas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp ile Bilgi Alin
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="istanbul-populer-cocuk-parti-temalari"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/kostumlu-karakterler"
      relatedServiceName="Kostümlü Karakterler"
    />
  )
}

export default IstanbulPopulerCocukPartiTemalar
