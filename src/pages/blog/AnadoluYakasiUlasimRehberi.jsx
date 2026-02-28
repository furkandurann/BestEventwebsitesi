import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const AnadoluYakasiUlasimRehberi = () => {
  const faqData = [
    {
      question: 'İstanbul Anadolu Yakası\'nda en hızlı ulaşım aracı hangisidir?',
      answer: 'Anadolu Yakası\'nda en hızlı ulaşım aracı metro hatlarıdır. M4 Kadıköy-Sabiha Gökçen hattı ile Kadıköy\'den havalimanına yaklaşık 55 dakikada, M5 Üsküdar-Çekmeköy hattı ile Üsküdar\'dan Çekmeköy\'e yaklaşık 32 dakikada ulaşabilirsiniz. Marmaray ise Anadolu ve Avrupa yakalarını birbirine bağlayan en hızlı toplu taşıma aracıdır; Ayrılıkçeşme\'den Sirkeci\'ye sadece 4 dakikada geçiş yapılabilir.'
    },
    {
      question: 'Kadıköy\'den Sabiha Gökçen Havalimanı\'na metro ile nasıl gidilir?',
      answer: 'Kadıköy\'den Sabiha Gökçen Havalimanı\'na M4 metro hattını kullanarak doğrudan ulaşabilirsiniz. Kadıköy istasyonundan binerek Sabiha Gökçen istasyonunda inersiniz. Toplam yolculuk süresi yaklaşık 55 dakikadır ve aktarma gerektirmez. Metro sefer aralığı gündüz saatlerinde 5-7 dakikadır.'
    },
    {
      question: 'Marmaray ile Anadolu Yakası\'ndan Avrupa Yakası\'na geçiş ne kadar sürer?',
      answer: 'Marmaray ile Ayrılıkçeşme istasyonundan Sirkeci istasyonuna geçiş sadece 4 dakika sürer. Üsküdar istasyonundan Yenikapı istasyonuna ise yaklaşık 7-8 dakikada ulaşırsınız. Marmaray, İstanbul Boğazı\'nın altından geçen tüp tünel sayesinde Anadolu ve Avrupa yakalarını en hızlı şekilde birbirine bağlar.'
    },
    {
      question: 'Anadolu Yakası\'nda metrobüs hangi güzergahta çalışır?',
      answer: 'Anadolu Yakası\'nda metrobüs, Söğütlüçeşme\'den başlayarak D100 (E5) karayolu üzerinden Zincirlikuyu\'ya, oradan da Avrupa Yakası\'na doğru devam eder. Anadolu tarafındaki önemli duraklar Söğütlüçeşme, Uzunçayır ve Acıbadem\'dir. Metrobüs özellikle Kadıköy-Ataşehir bölgesinden Avrupa Yakası\'na geçmek isteyenler için hızlı bir alternatiftir.'
    },
    {
      question: 'Doğum günü organizasyonu için Anadolu Yakası\'nda ulaşımı en kolay ilçe hangisi?',
      answer: 'Kadıköy, Anadolu Yakası\'nda ulaşımı en kolay ilçedir. M4 metro, Marmaray, metrobüs ve çok sayıda otobüs hattının kesişim noktasında bulunur. Ayrıca vapur iskelesi sayesinde deniz yoluyla da erişilebilir. Doğum günü organizasyonlarında misafirlerin kolayca ulaşabilmesi için Kadıköy merkezli mekanlar büyük avantaj sağlar.'
    },
    {
      question: 'Anadolu Yakası\'nda metro ve Marmaray aktarma noktaları nerelerdir?',
      answer: 'Anadolu Yakası\'ndaki en önemli aktarma noktaları Kadıköy/Ayrılıkçeşme ve Üsküdar\'dır. Kadıköy\'de M4 metro hattı ile Marmaray arasında Ayrılıkçeşme istasyonunda aktarma yapılabilir. Ayrıca Kadıköy\'den vapurlara da geçiş yapılabilir. Üsküdar\'da ise M5 metro hattı ile Marmaray arasında doğrudan aktarma imkanı bulunur. Her iki aktarma noktası da İstanbulkart ile sorunsuz geçiş sağlar.'
    }
  ]

  const content = (
    <>
      {/* İçindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#giris" className="text-blue-600 hover:text-blue-700 font-semibold">1. Anadolu Yakası Ulaşım Ağına Genel Bakış</a></li>
          <li><a href="#m4-hatti" className="text-blue-600 hover:text-blue-700 font-semibold">2. M4 Metro Hattı: Kadıköy - Sabiha Gökçen</a></li>
          <li><a href="#m5-hatti" className="text-blue-600 hover:text-blue-700 font-semibold">3. M5 Metro Hattı: Üsküdar - Çekmeköy</a></li>
          <li><a href="#marmaray" className="text-blue-600 hover:text-blue-700 font-semibold">4. Marmaray: Halkalı - Gebze (Anadolu Yakası Bölümü)</a></li>
          <li><a href="#metrobus" className="text-blue-600 hover:text-blue-700 font-semibold">5. Metrobüs: Söğütlüçeşme - Avcılar (Anadolu Kısmı)</a></li>
          <li><a href="#bolgesel-tablo" className="text-blue-600 hover:text-blue-700 font-semibold">6. Bölgesel Ulaşım Tablosu: İlçe Bazlı Rehber</a></li>
          <li><a href="#aktarma-noktalari" className="text-blue-600 hover:text-blue-700 font-semibold">7. Aktarma Noktaları ve Bağlantı Hatları</a></li>
          <li><a href="#taksi-otopark" className="text-blue-600 hover:text-blue-700 font-semibold">8. Taksi, Otopark ve Pratik Bilgiler</a></li>
          <li><a href="#organizasyon-ulasim" className="text-blue-600 hover:text-blue-700 font-semibold">9. Organizasyonlarda Ulaşım Planlaması</a></li>
          <li><a href="#sss" className="text-blue-600 hover:text-blue-700 font-semibold">10. Sıkça Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giriş */}
      <h2 id="giris" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Anadolu Yakası Ulaşım Ağına Genel Bakış
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        İstanbul'un Anadolu Yakası, son yıllarda yapılan büyük raylı sistem yatırımlarıyla ulaşım açısından ciddi bir dönüşüm geçirdi. M4 Kadıköy-Sabiha Gökçen metro hattı, M5 Üsküdar-Çekmeköy metro hattı, Marmaray banliyö hattı ve metrobüs sistemi sayesinde Anadolu Yakası'nın her köşesine toplu taşıma ile ulaşmak artık çok daha kolay. Bu rehberde, Anadolu Yakası'ndaki tüm raylı sistem hatlarını, istasyon bilgilerini, seyahat sürelerini ve aktarma noktalarını detaylı şekilde inceleyeceğiz.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Anadolu Yakası, Kadıköy'den Tuzla'ya, Üsküdar'dan Çekmeköy'e kadar geniş bir coğrafi alanı kapsar. Bu alanda yaklaşık 5 milyon kişi yaşamakta ve günlük milyonlarca yolculuk gerçekleşmektedir. Özellikle doğum günü organizasyonu, çocuk etkinliği ve aile buluşmaları gibi etkinliklerde mekan seçiminde ulaşım kolaylığı en önemli kriterlerden biridir. Misafirlerinizin rahatça gelebileceği, toplu taşıma bağlantıları güçlü mekanlar tercih etmek, organizasyonunuzun başarısını doğrudan etkiler.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Bilgi:</strong> Anadolu Yakası'ndaki tüm metro, Marmaray ve metrobüs hatlarında İstanbulkart geçerlidir. Aktarmalarda 2 saat içinde yapılan ilk aktarma indirimli tarife ile ücretlendirilir. Günlük çok sayıda yolculuk yapacaksanız abonman yükleme seçeneklerini değerlendirin.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Anadolu Yakası'nın ulaşım ağı dört ana omurgadan oluşur: güney koridorunda D100 boyunca uzanan M4 metro hattı ve Marmaray; kuzey koridorunda Üsküdar'dan iç kesimlere doğru ilerleyen M5 metro hattı; doğu-batı ekseninde D100 üzerinden çalışan metrobüs; ve Boğaz geçişini sağlayan Marmaray tüp tüneli. Bu dört sistem birbirleriyle entegre çalışarak Anadolu Yakası'nın her noktasını İstanbul'un geri kalanıyla bağlar.
      </p>

      {/* Anadolu Yakası Ulaşım Haritası Özet Kartı */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-5 text-white text-center">
          <div className="text-3xl font-bold mb-1">M4</div>
          <div className="text-sm font-medium opacity-90">Kadıköy - Sabiha Gökçen</div>
          <div className="text-xs mt-2 opacity-80">23 istasyon | ~55 dk</div>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-5 text-white text-center">
          <div className="text-3xl font-bold mb-1">M5</div>
          <div className="text-sm font-medium opacity-90">Üsküdar - Çekmeköy</div>
          <div className="text-xs mt-2 opacity-80">16 istasyon | ~32 dk</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white text-center">
          <div className="text-3xl font-bold mb-1">Marmaray</div>
          <div className="text-sm font-medium opacity-90">Halkalı - Gebze</div>
          <div className="text-xs mt-2 opacity-80">43 istasyon | Boğaz geçişi</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-5 text-white text-center">
          <div className="text-3xl font-bold mb-1">BRT</div>
          <div className="text-sm font-medium opacity-90">Metrobüs (Anadolu)</div>
          <div className="text-xs mt-2 opacity-80">Söğütlüçeşme - Beylikdüzü</div>
        </div>
      </div>

      {/* M4 Metro Hattı */}
      <h2 id="m4-hatti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. M4 Metro Hattı: Kadıköy - Sabiha Gökçen
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        M4 metro hattı, Anadolu Yakası'nın en uzun ve en yoğun kullanılan raylı sistem hattıdır. Kadıköy'den başlayarak Sabiha Gökçen Havalimanı'na kadar uzanır. Hat, D100 (E-5) karayolunun güneyinde, sahil şeridine yakın bir güzergah izler. Günlük ortalama 400.000'in üzerinde yolcu taşıyan M4 hattı, Anadolu Yakası'nın ulaşım omurgasını oluşturur.
      </p>

      {/* M4 Hat Kartı */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 border border-gray-200">
        {/* Hat Başlığı - Pembe renk */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="bg-white text-pink-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">M4</div>
            <div>
              <h3 className="text-white font-bold text-xl">Kadıköy - Sabiha Gökçen Havalimanı</h3>
              <p className="text-white/80 text-sm">Toplam 23 istasyon | Sefer aralığı: 5-7 dakika (gündüz)</p>
            </div>
          </div>
        </div>

        {/* İstasyon Listesi */}
        <div className="p-6">
          <div className="relative">
            {/* Dikey çizgi */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-pink-300"></div>

            {/* İstasyonlar */}
            <div className="space-y-3">
              {[
                { name: 'Kadıköy', info: 'Marmaray, vapur, otobüs aktarma', time: '0 dk', highlight: true },
                { name: 'Ayrılıkçeşme', info: 'Marmaray aktarma noktası', time: '2 dk', highlight: true },
                { name: 'Acıbadem', info: 'Metrobüs bağlantısı yakın', time: '5 dk' },
                { name: 'Ünalan', info: '', time: '7 dk' },
                { name: 'Göztepe', info: 'Kadıköy iç mahalleler bağlantısı', time: '10 dk' },
                { name: 'Yenisahra', info: '', time: '12 dk' },
                { name: 'Kozyatağı', info: 'Ataşehir finans merkezi', time: '15 dk' },
                { name: 'Bostancı', info: 'Marmaray aktarma, vapur iskelesi', time: '18 dk', highlight: true },
                { name: 'Küçükyalı', info: '', time: '21 dk' },
                { name: 'Maltepe', info: 'Maltepe sahil bağlantısı', time: '24 dk' },
                { name: 'Huzurevi', info: '', time: '26 dk' },
                { name: 'Gülsuyu', info: '', time: '28 dk' },
                { name: 'Esenkent', info: '', time: '30 dk' },
                { name: 'Hastane-Adliye', info: 'Kartal devlet hastanesi', time: '33 dk' },
                { name: 'Soğanlık', info: '', time: '35 dk' },
                { name: 'Kartal', info: 'Marmaray aktarma', time: '37 dk', highlight: true },
                { name: 'Yakacık-Adnan Kahveci', info: '', time: '40 dk' },
                { name: 'Pendik', info: 'Marmaray aktarma, YHT bağlantısı', time: '44 dk', highlight: true },
                { name: 'Tavşantepe', info: '', time: '47 dk' },
                { name: 'Fevzi Çakmak', info: '', time: '49 dk' },
                { name: 'Yayalar', info: '', time: '51 dk' },
                { name: 'Kurtköy', info: '', time: '53 dk' },
                { name: 'Sabiha Gökçen Havalimanı', info: 'Havalimanı terminal bağlantısı', time: '55 dk', highlight: true }
              ].map((station, index) => (
                <div key={index} className="flex items-center gap-4 pl-1">
                  <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 z-10 ${station.highlight ? 'bg-pink-500 border-pink-600' : 'bg-white border-pink-400'}`}></div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className={`font-semibold ${station.highlight ? 'text-pink-600 text-base' : 'text-gray-800 text-sm'}`}>{station.name}</span>
                      {station.info && <span className="text-gray-500 text-xs ml-2">({station.info})</span>}
                    </div>
                    <span className="text-gray-400 text-xs font-mono">{station.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* M4 Seyahat Süreleri Tablosu */}
      <div className="bg-pink-50 rounded-xl p-6 mb-8 border border-pink-200">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">M4 Hattı Seyahat Süreleri Tablosu</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="text-left p-3 font-bold text-gray-900">Nereden</th>
                <th className="text-left p-3 font-bold text-gray-900">Nereye</th>
                <th className="text-center p-3 font-bold text-gray-900">Süre</th>
                <th className="text-center p-3 font-bold text-gray-900">Durak Sayısı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-pink-100">
                <td className="p-3 text-gray-700">Kadıköy</td>
                <td className="p-3 text-gray-700">Kozyatağı (Ataşehir)</td>
                <td className="p-3 text-center font-semibold text-pink-600">15 dk</td>
                <td className="p-3 text-center text-gray-500">6</td>
              </tr>
              <tr className="border-b border-pink-100 bg-pink-50/50">
                <td className="p-3 text-gray-700">Kadıköy</td>
                <td className="p-3 text-gray-700">Bostancı</td>
                <td className="p-3 text-center font-semibold text-pink-600">18 dk</td>
                <td className="p-3 text-center text-gray-500">7</td>
              </tr>
              <tr className="border-b border-pink-100">
                <td className="p-3 text-gray-700">Kadıköy</td>
                <td className="p-3 text-gray-700">Maltepe</td>
                <td className="p-3 text-center font-semibold text-pink-600">24 dk</td>
                <td className="p-3 text-center text-gray-500">9</td>
              </tr>
              <tr className="border-b border-pink-100 bg-pink-50/50">
                <td className="p-3 text-gray-700">Kadıköy</td>
                <td className="p-3 text-gray-700">Kartal</td>
                <td className="p-3 text-center font-semibold text-pink-600">37 dk</td>
                <td className="p-3 text-center text-gray-500">15</td>
              </tr>
              <tr className="border-b border-pink-100">
                <td className="p-3 text-gray-700">Kadıköy</td>
                <td className="p-3 text-gray-700">Pendik</td>
                <td className="p-3 text-center font-semibold text-pink-600">44 dk</td>
                <td className="p-3 text-center text-gray-500">17</td>
              </tr>
              <tr>
                <td className="p-3 text-gray-700">Kadıköy</td>
                <td className="p-3 text-gray-700">Sabiha Gökçen</td>
                <td className="p-3 text-center font-semibold text-pink-600">55 dk</td>
                <td className="p-3 text-center text-gray-500">22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        M4 hattı özellikle Kadıköy, Ataşehir, Maltepe, Kartal ve Pendik bölgelerinde yaşayanlar için vazgeçilmez bir ulaşım aracıdır. Hafta sonu düzenlenen doğum günü organizasyonlarına misafirler metro ile kolayca ulaşabilir. Kadıköy merkezdeki organizasyon mekanlarına M4 ile gelen misafirler, Kadıköy istasyonundan çıkarak birçok mekan ve cafeye yürüyerek erişebilir. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-600 hover:text-blue-700 font-semibold underline">Doğum günü organizasyonu</Link> planlarken M4 güzergahındaki mekanları öncelikli olarak değerlendirmek akıllıca olacaktır.
      </p>

      {/* M5 Metro Hattı */}
      <h2 id="m5-hatti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. M5 Metro Hattı: Üsküdar - Çekmeköy
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        M5 metro hattı, Anadolu Yakası'nın kuzey koridorunu oluşturan, sürücüsüz ve tam otomatik çalışan modern bir metro hattıdır. Üsküdar'dan başlayarak Ümraniye ve Sancaktepe üzerinden Çekmeköy'e kadar uzanır. Hattın en önemli özelliklerinden biri, Üsküdar'da Marmaray ile doğrudan aktarma imkanı sunmasıdır. Bu sayede Avrupa Yakası'ndan gelen yolcular, Marmaray ile Üsküdar'a geçip M5'e aktarma yaparak Ümraniye ve Çekmeköy'e ulaşabilir.
      </p>

      {/* M5 Hat Kartı */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 border border-gray-200">
        {/* Hat Başlığı - Mor renk */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="bg-white text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">M5</div>
            <div>
              <h3 className="text-white font-bold text-xl">Üsküdar - Çekmeköy</h3>
              <p className="text-white/80 text-sm">Toplam 16 istasyon | Sürücüsüz metro | Sefer aralığı: 3-5 dakika</p>
            </div>
          </div>
        </div>

        {/* İstasyon Listesi */}
        <div className="p-6">
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-purple-300"></div>

            <div className="space-y-3">
              {[
                { name: 'Üsküdar', info: 'Marmaray aktarma, vapur iskelesi', time: '0 dk', highlight: true },
                { name: 'Fıstıkağacı', info: '', time: '2 dk' },
                { name: 'Bağlarbaşı', info: '', time: '4 dk' },
                { name: 'Altunizade', info: 'Alışveriş merkezi, hastane', time: '6 dk', highlight: true },
                { name: 'Kısıklı', info: 'Büyük Çamlıca bağlantısı', time: '8 dk' },
                { name: 'Bulgurlu', info: '', time: '10 dk' },
                { name: 'Ümraniye', info: 'Ümraniye merkez', time: '14 dk', highlight: true },
                { name: 'Çarşı', info: 'Ümraniye çarşı merkezi', time: '16 dk' },
                { name: 'Yamanevler', info: '', time: '18 dk' },
                { name: 'Çakmak', info: 'Ümraniye-Sancaktepe geçişi', time: '20 dk', highlight: true },
                { name: 'Ihlamurkuyu', info: '', time: '22 dk' },
                { name: 'Altınşehir', info: '', time: '24 dk' },
                { name: 'İmam Hatip', info: '', time: '26 dk' },
                { name: 'Dudullu', info: 'Organize sanayi bölgesi', time: '28 dk' },
                { name: 'Necip Fazıl', info: '', time: '30 dk' },
                { name: 'Çekmeköy', info: 'Hat sonu, otopark', time: '32 dk', highlight: true }
              ].map((station, index) => (
                <div key={index} className="flex items-center gap-4 pl-1">
                  <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 z-10 ${station.highlight ? 'bg-purple-600 border-purple-700' : 'bg-white border-purple-400'}`}></div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className={`font-semibold ${station.highlight ? 'text-purple-600 text-base' : 'text-gray-800 text-sm'}`}>{station.name}</span>
                      {station.info && <span className="text-gray-500 text-xs ml-2">({station.info})</span>}
                    </div>
                    <span className="text-gray-400 text-xs font-mono">{station.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* M5 Seyahat Süreleri */}
      <div className="bg-purple-50 rounded-xl p-6 mb-8 border border-purple-200">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">M5 Hattı Seyahat Süreleri Tablosu</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="text-left p-3 font-bold text-gray-900">Nereden</th>
                <th className="text-left p-3 font-bold text-gray-900">Nereye</th>
                <th className="text-center p-3 font-bold text-gray-900">Süre</th>
                <th className="text-center p-3 font-bold text-gray-900">Durak Sayısı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-purple-100">
                <td className="p-3 text-gray-700">Üsküdar</td>
                <td className="p-3 text-gray-700">Altunizade</td>
                <td className="p-3 text-center font-semibold text-purple-600">6 dk</td>
                <td className="p-3 text-center text-gray-500">3</td>
              </tr>
              <tr className="border-b border-purple-100 bg-purple-50/50">
                <td className="p-3 text-gray-700">Üsküdar</td>
                <td className="p-3 text-gray-700">Ümraniye</td>
                <td className="p-3 text-center font-semibold text-purple-600">14 dk</td>
                <td className="p-3 text-center text-gray-500">6</td>
              </tr>
              <tr className="border-b border-purple-100">
                <td className="p-3 text-gray-700">Üsküdar</td>
                <td className="p-3 text-gray-700">Çakmak</td>
                <td className="p-3 text-center font-semibold text-purple-600">20 dk</td>
                <td className="p-3 text-center text-gray-500">9</td>
              </tr>
              <tr>
                <td className="p-3 text-gray-700">Üsküdar</td>
                <td className="p-3 text-gray-700">Çekmeköy</td>
                <td className="p-3 text-center font-semibold text-purple-600">32 dk</td>
                <td className="p-3 text-center text-gray-500">15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        M5 hattı sürücüsüz olarak çalışan Türkiye'nin ilk tam otomatik metro hattıdır. Bu teknoloji sayesinde sefer aralıkları oldukça kısa tutulur ve yolculuk güvenliği en üst düzeydedir. Ümraniye ve Çekmeköy bölgesinde çocuk etkinlikleri ve doğum günü organizasyonları için mekan arayanlar, M5 hattı güzergahını mutlaka değerlendirmelidir. Metro istasyonlarına yakın mekanlar, özellikle farklı ilçelerden gelen misafirlerin konforunu artırır.
      </p>

      {/* Marmaray */}
      <h2 id="marmaray" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Marmaray: Halkalı - Gebze (Anadolu Yakası Bölümü)
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Marmaray, İstanbul'un iki yakasını Boğaz'ın altından geçen tüp tünel ile birbirine bağlayan banliyö hattıdır. Halkalı'dan Gebze'ye kadar uzanan hat, toplam 76,6 kilometre uzunluğunda olup 43 istasyona sahiptir. Anadolu Yakası bölümü Söğütlüçeşme'den başlayarak Gebze'ye kadar uzanır ve bu güzergahta çok sayıda önemli istasyona hizmet verir.
      </p>

      {/* Marmaray Hat Kartı */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 border border-gray-200">
        {/* Hat Başlığı - Turuncu renk */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="bg-white text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">MR</div>
            <div>
              <h3 className="text-white font-bold text-xl">Marmaray - Anadolu Yakası İstasyonları</h3>
              <p className="text-white/80 text-sm">Boğaz geçişi + Banliyö hattı | Sefer aralığı: 6-10 dakika</p>
            </div>
          </div>
        </div>

        {/* İstasyon Listesi */}
        <div className="p-6">
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-orange-300"></div>

            <div className="space-y-3">
              {[
                { name: 'Ayrılıkçeşme', info: 'M4 metro aktarma, Kadıköy bağlantısı', time: 'Boğaz geçişi', highlight: true },
                { name: 'Söğütlüçeşme', info: 'Metrobüs aktarma, Kadıköy', time: '', highlight: true },
                { name: 'Feneryolu', info: '', time: '' },
                { name: 'Göztepe', info: 'M4 Göztepe istasyonu yakın', time: '' },
                { name: 'Erenköy', info: '', time: '' },
                { name: 'Suadiye', info: 'Sahil bölgesi', time: '' },
                { name: 'Bostancı', info: 'M4 aktarma, vapur iskelesi', time: '', highlight: true },
                { name: 'Küçükyalı', info: '', time: '' },
                { name: 'İdealtepe', info: '', time: '' },
                { name: 'Süreyya Plajı', info: 'Maltepe sahil parkı', time: '' },
                { name: 'Maltepe', info: 'Maltepe merkez', time: '' },
                { name: 'Cevizli', info: '', time: '' },
                { name: 'Atalar', info: '', time: '' },
                { name: 'Kartal', info: 'M4 metro aktarma', time: '', highlight: true },
                { name: 'Yunus', info: '', time: '' },
                { name: 'Pendik', info: 'M4 aktarma, YHT garı', time: '', highlight: true },
                { name: 'Kaynarca', info: '', time: '' },
                { name: 'Tersane', info: 'Tuzla tersaneler bölgesi', time: '' },
                { name: 'Aydıntepe', info: '', time: '' },
                { name: 'İçmeler', info: 'Tuzla merkez', time: '' },
                { name: 'Tuzla', info: '', time: '' },
                { name: 'Çayırova', info: '', time: '' },
                { name: 'Gebze', info: 'Hat sonu, OSB bağlantısı', time: '', highlight: true }
              ].map((station, index) => (
                <div key={index} className="flex items-center gap-4 pl-1">
                  <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 z-10 ${station.highlight ? 'bg-orange-500 border-orange-600' : 'bg-white border-orange-400'}`}></div>
                  <div className="flex-1">
                    <span className={`font-semibold ${station.highlight ? 'text-orange-600 text-base' : 'text-gray-800 text-sm'}`}>{station.name}</span>
                    {station.info && <span className="text-gray-500 text-xs ml-2">({station.info})</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Boğaz Geçişi Bilgi Kutusu */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-8 border border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3 text-lg">Marmaray Boğaz Geçişi Detayları</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">4 dk</div>
            <div className="text-sm text-gray-600">Ayrılıkçeşme - Sirkeci</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">7 dk</div>
            <div className="text-sm text-gray-600">Üsküdar - Yenikapı</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">~60 m</div>
            <div className="text-sm text-gray-600">Tüp tünel derinliği</div>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
          Marmaray'ın Boğaz geçişi bölümü, Ayrılıkçeşme ile Kazlıçeşme arasındaki 13,6 kilometrelik yeraltı bölümünden oluşur. Tüp tünel, deniz tabanının yaklaşık 60 metre altından geçer. Bu bölüm seferleri kesintisiz olarak çalışır ve günde yaklaşık 500.000 yolcu taşır. Marmaray'ın Anadolu ve Avrupa yakalarını birbirine bağlaması, özellikle iki yakadan misafir gelecek organizasyonlar için büyük kolaylık sağlar.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Marmaray özellikle Avrupa Yakası'ndan Anadolu Yakası'na geçecek misafirler için en pratik ulaşım aracıdır. Trafiğe takılmadan, öngörülebilir sürelerde yolculuk yapılabilir. Kadıköy'de Ayrılıkçeşme istasyonunda M4 metro hattına, Üsküdar'da ise M5 metro hattına aktarma yaparak Anadolu Yakası'nın iç kesimlerine kolayca ulaşılır. Bostancı ve Kartal istasyonlarında da M4 hattı ile aktarma noktaları bulunur.
      </p>

      {/* Metrobüs */}
      <h2 id="metrobus" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Metrobüs: Söğütlüçeşme - Avcılar (Anadolu Kısmı)
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        İstanbul metrobüs hattı, D100 (E-5) karayolu üzerinde özel şeritlerde çalışan hızlı otobüs taşıma sistemidir. Toplam 52 kilometre uzunluğundaki hat, Beylikdüzü Söğütlüçeşme'den (Avrupa) Söğütlüçeşme'ye (Anadolu) kadar uzanır. Anadolu Yakası kısmı nispeten kısa olmakla birlikte, D100 üzerindeki yoğun trafikten etkilenmeden hızlı ulaşım sağlar.
      </p>

      {/* Metrobüs Hat Kartı */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 border border-gray-200">
        {/* Hat Başlığı - Kırmızı renk */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="bg-white text-red-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">BRT</div>
            <div>
              <h3 className="text-white font-bold text-xl">Metrobüs - Anadolu Yakası Durakları</h3>
              <p className="text-white/80 text-sm">D100 (E-5) Karayolu üzeri | 7/24 hizmet</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-red-300"></div>

            <div className="space-y-3">
              {[
                { name: 'Söğütlüçeşme', info: 'Marmaray aktarma, Kadıköy bağlantısı', highlight: true },
                { name: 'Uzunçayır', info: 'Kadıköy-Ümraniye arası geçiş', highlight: true },
                { name: 'Acıbadem', info: 'M4 Acıbadem istasyonu yakın', highlight: true },
                { name: 'Hasanpaşa', info: 'Kadıköy iç mahalleler', highlight: false },
                { name: 'Fikirtepe', info: 'Yenilenen konut bölgesi', highlight: false },
                { name: 'Bostancı Köprüsü', info: '', highlight: false },
                { name: 'Kavacık', info: 'D100 Beykoz bağlantısı', highlight: false }
              ].map((station, index) => (
                <div key={index} className="flex items-center gap-4 pl-1">
                  <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 z-10 ${station.highlight ? 'bg-red-500 border-red-600' : 'bg-white border-red-400'}`}></div>
                  <div className="flex-1">
                    <span className={`font-semibold ${station.highlight ? 'text-red-600 text-base' : 'text-gray-800 text-sm'}`}>{station.name}</span>
                    {station.info && <span className="text-gray-500 text-xs ml-2">({station.info})</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-red-50 rounded-lg p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Not:</strong> Metrobüs Anadolu Yakası kısmı, Söğütlüçeşme'den başlayarak Zincirlikuyu (Boğaz köprüsü) üzerinden Avrupa Yakası'na geçer. Bu güzergah özellikle Kadıköy ve Ataşehir bölgesinden Avrupa Yakası'na geçmek isteyen yolcular için hızlı bir alternatiftir. Günlük yaklaşık 1 milyon yolcu taşıyan metrobüs, İstanbul'un en yoğun toplu taşıma hattıdır.
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Metrobüs, özellikle Avrupa Yakası ve Anadolu Yakası arasında hızlı geçiş imkanı sunar. Söğütlüçeşme durağında Marmaray ile aktarma yapılabilir. Uzunçayır durağı ise Kadıköy merkez ile Ümraniye arasındaki bağlantı noktasıdır. Acıbadem durağından M4 metro hattına yürüme mesafesinde ulaşılabilir. Metrobüs 7 gün 24 saat hizmet verdiği için gece organizasyonlarından dönüşte de kullanılabilir.
      </p>

      {/* Bölgesel Ulaşım Tablosu */}
      <h2 id="bolgesel-tablo" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Bölgesel Ulaşım Tablosu: İlçe Bazlı Rehber
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Anadolu Yakası'ndaki her ilçenin ulaşım profili farklıdır. Bazı ilçeler birden fazla raylı sistem hattına erişim sunarken, bazıları daha çok otobüs bağlantılarına dayalıdır. Aşağıdaki tabloda Anadolu Yakası'nın 10 önemli ilçesi için en yakın metro durağı, mesafe bilgisi ve ulaşım ipuçları yer almaktadır. Doğum günü organizasyonu veya çocuk etkinliği planlarken bu tabloyu referans olarak kullanabilirsiniz.
      </p>

      {/* En Yakın Durak Kartları */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          { ilce: 'Kadıköy', durak: 'Kadıköy (M4) / Ayrılıkçeşme (Marmaray)', mesafe: 'Merkez', hatlar: 'M4, Marmaray, Metrobüs, Vapur', renk: 'pink' },
          { ilce: 'Üsküdar', durak: 'Üsküdar (M5 + Marmaray)', mesafe: 'Merkez', hatlar: 'M5, Marmaray, Vapur', renk: 'purple' },
          { ilce: 'Ataşehir', durak: 'Kozyatağı / Ünalan (M4)', mesafe: '0-2 km', hatlar: 'M4', renk: 'pink' },
          { ilce: 'Ümraniye', durak: 'Ümraniye / Çakmak (M5)', mesafe: '0-1 km', hatlar: 'M5', renk: 'purple' },
          { ilce: 'Maltepe', durak: 'Maltepe (M4 + Marmaray)', mesafe: '0-3 km', hatlar: 'M4, Marmaray', renk: 'orange' },
          { ilce: 'Kartal', durak: 'Kartal (M4 + Marmaray)', mesafe: '0-2 km', hatlar: 'M4, Marmaray', renk: 'orange' },
          { ilce: 'Pendik', durak: 'Pendik (M4 + Marmaray + YHT)', mesafe: '0-3 km', hatlar: 'M4, Marmaray, YHT', renk: 'pink' },
          { ilce: 'Beykoz', durak: 'Üsküdar (M5) + Otobüs', mesafe: '10-15 km', hatlar: 'Otobüs (15, 15A, 15F)', renk: 'gray' },
          { ilce: 'Çekmeköy', durak: 'Çekmeköy (M5)', mesafe: '0-5 km', hatlar: 'M5', renk: 'purple' },
          { ilce: 'Tuzla', durak: 'Tuzla / İçmeler (Marmaray)', mesafe: '0-4 km', hatlar: 'Marmaray', renk: 'orange' }
        ].map((item, index) => (
          <div key={index} className={`bg-white rounded-xl p-5 border-l-4 shadow-sm ${
            item.renk === 'pink' ? 'border-pink-500' :
            item.renk === 'purple' ? 'border-purple-500' :
            item.renk === 'orange' ? 'border-orange-500' :
            'border-gray-400'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-900 text-lg">{item.ilce}</h4>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                item.mesafe === 'Merkez' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
              }`}>{item.mesafe}</span>
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>En Yakın Durak:</strong> {item.durak}</p>
            <p className="text-sm text-gray-500"><strong>Erişim:</strong> {item.hatlar}</p>
          </div>
        ))}
      </div>

      {/* Kapsamlı Seyahat Süreleri Tablosu */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">İlçeler Arası Toplu Taşıma Seyahat Süreleri</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-bold text-gray-900">Güzergah</th>
                <th className="text-center p-3 font-bold text-gray-900">Araç</th>
                <th className="text-center p-3 font-bold text-gray-900">Süre</th>
                <th className="text-center p-3 font-bold text-gray-900">Aktarma</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 text-gray-700">Kadıköy → Ümraniye</td>
                <td className="p-3 text-center"><span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-semibold">M4</span> + <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-semibold">M5</span></td>
                <td className="p-3 text-center font-semibold text-gray-900">~30 dk</td>
                <td className="p-3 text-center text-gray-500 text-xs">Ayrılıkçeşme → Üsküdar aktarma</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-3 text-gray-700">Kadıköy → Kartal</td>
                <td className="p-3 text-center"><span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-semibold">M4</span></td>
                <td className="p-3 text-center font-semibold text-gray-900">~37 dk</td>
                <td className="p-3 text-center text-gray-500 text-xs">Direkt</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 text-gray-700">Üsküdar → Çekmeköy</td>
                <td className="p-3 text-center"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-semibold">M5</span></td>
                <td className="p-3 text-center font-semibold text-gray-900">~32 dk</td>
                <td className="p-3 text-center text-gray-500 text-xs">Direkt</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-3 text-gray-700">Kadıköy → Pendik</td>
                <td className="p-3 text-center"><span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-semibold">M4</span></td>
                <td className="p-3 text-center font-semibold text-gray-900">~44 dk</td>
                <td className="p-3 text-center text-gray-500 text-xs">Direkt</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 text-gray-700">Kadıköy → Taksim (Avrupa)</td>
                <td className="p-3 text-center"><span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-semibold">MR</span> + Metro</td>
                <td className="p-3 text-center font-semibold text-gray-900">~25 dk</td>
                <td className="p-3 text-center text-gray-500 text-xs">Marmaray → Sirkeci → M2</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-3 text-gray-700">Ümraniye → Maltepe</td>
                <td className="p-3 text-center"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-semibold">M5</span> + <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-semibold">MR</span></td>
                <td className="p-3 text-center font-semibold text-gray-900">~35 dk</td>
                <td className="p-3 text-center text-gray-500 text-xs">Üsküdar → Marmaray aktarma</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 text-gray-700">Pendik → Tuzla</td>
                <td className="p-3 text-center"><span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-semibold">MR</span></td>
                <td className="p-3 text-center font-semibold text-gray-900">~15 dk</td>
                <td className="p-3 text-center text-gray-500 text-xs">Direkt</td>
              </tr>
              <tr>
                <td className="p-3 text-gray-700">Kadıköy → Sabiha Gökçen</td>
                <td className="p-3 text-center"><span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-semibold">M4</span></td>
                <td className="p-3 text-center font-semibold text-gray-900">~55 dk</td>
                <td className="p-3 text-center text-gray-500 text-xs">Direkt</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Aktarma Noktaları */}
      <h2 id="aktarma-noktalari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Aktarma Noktaları ve Bağlantı Hatları
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Anadolu Yakası'nda toplu taşıma hatları birbirleriyle belirli noktalarda kesişir. Bu aktarma noktalarını bilmek, seyahat süresini kısaltır ve ulaşım konforunu artırır. Aşağıda Anadolu Yakası'nın en önemli iki aktarma merkezi detaylı olarak açıklanmıştır.
      </p>

      {/* Kadıköy Aktarma Hub */}
      <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-amber-50 rounded-2xl p-6 mb-6 border border-pink-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">1</span>
          Kadıköy / Ayrılıkçeşme Aktarma Merkezi
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Kadıköy, Anadolu Yakası'nın en büyük ve en yoğun ulaşım merkezidir. Birden fazla ulaşım modu burada bir araya gelir. M4 metro hattının başlangıç noktası olan Kadıköy istasyonu ile Marmaray'ın Ayrılıkçeşme istasyonu yürüme mesafesindedir. Ayrıca Kadıköy iskelesi'nden Eminönü ve Karaköy'e vapur seferleri düzenlenir.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Bağlantı Hatları</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="bg-pink-500 text-white px-2 py-0.5 rounded text-xs font-bold">M4</span> Kadıköy - Sabiha Gökçen</li>
              <li className="flex items-center gap-2"><span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-bold">MR</span> Marmaray (Ayrılıkçeşme)</li>
              <li className="flex items-center gap-2"><span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">BRT</span> Metrobüs (Söğütlüçeşme)</li>
              <li className="flex items-center gap-2"><span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold">V</span> Vapur (Eminönü, Karaköy, Beşiktaş)</li>
              <li className="flex items-center gap-2"><span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">O</span> 50+ otobüs hattı</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Aktarma İpuçları</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>M4 → Marmaray: Ayrılıkçeşme'de alt kat geçişi (2 dk yürüme)</li>
              <li>M4 → Vapur: Kadıköy istasyonundan iskeleye 5 dk yürüme</li>
              <li>M4 → Metrobüs: Söğütlüçeşme yönünde 1 durak (Marmaray ile)</li>
              <li>Tüm aktarmalarda İstanbulkart geçerli, indirimli tarife uygulanır</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Üsküdar Aktarma Hub */}
      <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-6 mb-8 border border-purple-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">2</span>
          Üsküdar Aktarma Merkezi
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Üsküdar, M5 metro hattının başlangıç istasyonu olmasının yanı sıra Marmaray'ın Anadolu Yakası'ndaki en önemli aktarma noktasıdır. Avrupa Yakası'ndan Marmaray ile gelen yolcular, Üsküdar'da M5'e aktarma yaparak Ümraniye, Çekmeköy ve Sancaktepe bölgelerine ulaşabilir. Üsküdar iskelesi de vapur seferleri ile Beşiktaş, Eminönü ve Karaköy'e bağlantı sağlar.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Bağlantı Hatları</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs font-bold">M5</span> Üsküdar - Çekmeköy</li>
              <li className="flex items-center gap-2"><span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-bold">MR</span> Marmaray</li>
              <li className="flex items-center gap-2"><span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold">V</span> Vapur (Beşiktaş, Eminönü, Karaköy)</li>
              <li className="flex items-center gap-2"><span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">O</span> 30+ otobüs hattı</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Aktarma İpuçları</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>M5 → Marmaray: Yeraltı geçişi ile doğrudan aktarma (3 dk)</li>
              <li>M5 → Vapur: İstasyon çıkışından iskeleye 4 dk yürüme</li>
              <li>Marmaray → M5: Aynı bina içinde yönlendirme levhaları mevcut</li>
              <li>Yoğun saatlerde aktarma koridoru kalabalık olabilir</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bu iki ana aktarma merkezi dışında, Bostancı istasyonunda M4 ile Marmaray arasında, Kartal istasyonunda M4 ile Marmaray arasında ve Pendik istasyonunda M4, Marmaray ve YHT (Yüksek Hızlı Tren) arasında aktarma yapılabilir. Pendik'teki YHT garı sayesinde Ankara, Eskişehir ve Konya gibi şehirlerden gelen misafirler de Anadolu Yakası'ndaki organizasyonlara kolayca ulaşabilir.
      </p>

      {/* Taksi ve Otopark */}
      <h2 id="taksi-otopark" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        8. Taksi, Otopark ve Pratik Bilgiler
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Toplu taşıma dışında Anadolu Yakası'nda taksi ve özel araç kullanımı da yaygındır. Özellikle metro istasyonlarından uzak bölgelere giderken veya geç saatlerde taksi iyi bir alternatiftir. Doğum günü organizasyonuna gelen misafirler için otopark bilgisi de önemli bir detaydır.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <h4 className="font-bold text-gray-900 mb-4 text-lg">Taksi Bilgileri</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><strong>Açılış Ücreti:</strong> Taksimetre açılış ücreti güncel tarifeye göre belirlenir. Gece tarifesi (00:00-06:00) gündüz tarifesinin %50 fazlasıdır.</li>
            <li><strong>Dijital Taksi:</strong> BiTaksi, Uber ve iTaksi uygulamaları Anadolu Yakası'nda aktif olarak çalışır. Uygulama üzerinden önceden fiyat teklifi alabilirsiniz.</li>
            <li><strong>Havalimanı Transferi:</strong> Kadıköy'den Sabiha Gökçen'e taksi ile yaklaşık 35-50 dakika (trafiğe bağlı). Metro ile 55 dakika sabit süre ile ulaşılır.</li>
            <li><strong>Taksi Durakları:</strong> Her metro istasyonunun çıkışında taksi durağı bulunur. Kadıköy, Üsküdar ve Bostancı'da 7/24 hizmet veren taksi durakları mevcuttur.</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h4 className="font-bold text-gray-900 mb-4 text-lg">Otopark Bilgileri</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><strong>İSPARK:</strong> İstanbul genelinde İBB'ye bağlı İSPARK otoparkları uygun fiyatlı ve güvenilirdir. Kadıköy, Bostancı ve Kartal'da büyük kapasiteli İSPARK tesisleri bulunur.</li>
            <li><strong>Metro Park&Ride:</strong> Çekmeköy ve Pendik metro istasyonlarında park et-devam et (Park&Ride) otoparkları mevcuttur. Aracınızı bırakıp metroya aktarma yapabilirsiniz.</li>
            <li><strong>AVM Otoparkları:</strong> Akasya AVM (Acıbadem), Emaar Square (Ataşehir), Marmara Park (Maltepe) gibi AVM'lerin büyük otoparkları organizasyon günlerinde alternatif olabilir.</li>
            <li><strong>Sokak Parkı:</strong> Kadıköy merkez ve Üsküdar merkezde sokak parkı bulmak oldukça zordur. Metro ile gelmeyi veya otopark kullanmayı tercih edin.</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Pratik Bilgi - İstanbulkart:</strong> Tüm metro, Marmaray, metrobüs, otobüs, vapur ve tramvay hatlarında geçerli olan İstanbulkart, her istasyon girişinde satılmaktadır. Aktarmalarda 2 saat içinde yapılan geçişlerde indirimli tarife uygulanır. Anonim İstanbulkart, kişiselleştirilmiş İstanbulkart ve mobil İstanbulkart seçenekleri mevcuttur.
        </p>
      </div>

      {/* Organizasyonlarda Ulaşım Planlaması */}
      <h2 id="organizasyon-ulasim" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        9. Organizasyonlarda Ulaşım Planlaması
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Doğum günü organizasyonu veya çocuk etkinliği planlarken ulaşım, başarının en kritik bileşenlerinden biridir. Misafirlerinizin mekan adresini kolayca bulabilmesi, toplu taşıma veya özel araçla rahatça gelebilmesi ve park sorunu yaşamaması gerekir. Anadolu Yakası'nda ulaşımı kolay mekanlar seçmek, organizasyonunuzun konfor seviyesini doğrudan yükseltir.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white border-l-4 border-pink-500 p-5 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Metro Hattı Yakınlarında Mekan Seçimi</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Organizasyonunuz için mekan seçerken M4 veya M5 metro istasyonlarına yürüme mesafesindeki lokasyonları tercih edin. Metro çıkışından maksimum 10 dakika yürüme mesafesi ideal kabul edilir. Kadıköy, Kozyatağı (Ataşehir), Bostancı, Kartal ve Ümraniye istasyonları çevresinde geniş mekan seçenekleri bulunur. Misafirlerinize davetiyede en yakın metro istasyonunu ve yürüme süresini belirtmeyi unutmayın.
          </p>
        </div>
        <div className="bg-white border-l-4 border-purple-500 p-5 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">İki Yakadan Gelen Misafirler İçin Planlama</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Hem Avrupa hem Anadolu Yakası'ndan misafir gelecekse, Marmaray aktarma noktalarına yakın mekanlar büyük avantaj sağlar. Kadıköy/Ayrılıkçeşme ve Üsküdar, her iki yakadan da kolayca erişilebilen merkezlerdir. Avrupa Yakası'ndan gelen misafirlerinize Marmaray güzergahını önermeniz, köprü trafiğinden kaçınmalarını sağlar.
          </p>
        </div>
        <div className="bg-white border-l-4 border-orange-500 p-5 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Hafta Sonu vs Hafta İçi Ulaşım Farkları</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Hafta sonu organizasyonlarında trafik yoğunluğu hafta içine göre daha azdır, ancak toplu taşıma sefer aralıkları biraz uzayabilir. Metro sefer aralığı hafta sonu 7-10 dakikaya çıkabilir. Hafta içi ise özellikle 07:00-10:00 ve 17:00-20:00 saatlerinde yoğunluk yaşanır. Organizasyon saatinizi bu yoğunluk dışında planlamak, misafirlerinizin konforunu artırır.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Anadolu Yakası'ndaki etkinlikler için toplu taşıma ile ulaşım oldukça pratiktir. Özellikle <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-600 hover:text-blue-700 font-semibold underline">full paket doğum günü organizasyonu</Link> hizmetimizde, mekan seçiminden misafir ulaşım planlamasına kadar tüm detaylar profesyonel ekibimiz tarafından koordine edilir. Ayrıca <Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-700 font-semibold underline">bubble show</Link> gibi eğlence hizmetlerimizde ekibimiz tüm ekipmanlarıyla birlikte mekanınıza gelir; misafirlerinizin tek yapması gereken kolayca ulaşabilmektir.
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-200">
        <h4 className="font-bold text-gray-900 mb-3 text-lg">Misafirlerinize Göndereceğiniz Ulaşım Bilgisi Şablonu</h4>
        <div className="bg-white rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
          <p className="mb-2"><strong>Mekan Adresi:</strong> [Mekan adı ve tam adres]</p>
          <p className="mb-2"><strong>Metro ile Ulaşım:</strong> [Hat adı] hattı, [istasyon adı] istasyonunda inin. İstasyondan mekana yürüme süresi: [X] dakika.</p>
          <p className="mb-2"><strong>Marmaray ile Ulaşım (Avrupa Yakası'ndan):</strong> Marmaray ile [aktarma istasyonu] istasyonuna gelin, [hat adı] hattına aktarma yapın.</p>
          <p className="mb-2"><strong>Araç ile Ulaşım:</strong> [Yol tarifi]. Otopark: [Otopark bilgisi].</p>
          <p><strong>Google Maps Linki:</strong> [Harita linki]</p>
        </div>
      </div>

      {/* Sefer Saatleri ve Genel Bilgiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">Genel Sefer Bilgileri</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h5 className="font-bold text-gray-900 mb-2 text-sm">Metro (M4 ve M5)</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>İlk sefer:</strong> 06:00</li>
              <li><strong>Son sefer:</strong> 00:00 (gece 12)</li>
              <li><strong>Sefer aralığı (gündüz):</strong> 3-7 dakika</li>
              <li><strong>Sefer aralığı (gece):</strong> 7-10 dakika</li>
              <li><strong>Hafta sonu:</strong> 06:30 - 00:00</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h5 className="font-bold text-gray-900 mb-2 text-sm">Marmaray ve Metrobüs</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Marmaray ilk sefer:</strong> 06:00</li>
              <li><strong>Marmaray son sefer:</strong> 00:15</li>
              <li><strong>Marmaray sefer aralığı:</strong> 6-10 dakika</li>
              <li><strong>Metrobüs:</strong> 7/24 hizmet</li>
              <li><strong>Metrobüs gece aralığı:</strong> 15-20 dakika</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SSS Bölümü */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        10. Sıkça Sorulan Sorular
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Anadolu Yakası'nda Doğum Günü Organizasyonu Planlayın!</h3>
        <p className="mb-6 leading-relaxed">
          Anadolu Yakası'nın her noktasına profesyonel ekibimiz ile geliyoruz. Kadıköy'den Pendik'e, Üsküdar'dan Çekmeköy'e kadar doğum günü organizasyonu, bubble show, sihirbaz gösterisi, palyaço kiralama ve daha fazlası için bizi hemen arayın. Mekan seçiminden ulaşım planlamasına kadar her detay bizde!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Ara: 0530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Anadolu%20Yakas%C4%B1%20organizasyon%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp ile Yazın
          </a>
        </div>
      </div>

      {/* Hizmet CTA Kutusu */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Profesyonel Doğum Günü Organizasyonu Hizmeti</h3>
        <p className="text-gray-700 mb-4">
          Anadolu Yakası genelinde full paket doğum günü organizasyonu, çocuk etkinlikleri ve eğlence hizmetleri için detaylı bilgi alın.
        </p>
        <Link
          to="/organizasyonlar/full-paket-organizasyon"
          className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Full Paket Organizasyon Hakkında Bilgi Alın
        </Link>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="anadolu-yakasi-ulasim-rehberi"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/full-paket-organizasyon"
      relatedServiceName="Doğum Günü Organizasyonu"
    />
  )
}

export default AnadoluYakasiUlasimRehberi
