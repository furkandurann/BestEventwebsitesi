import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const AvrupaYakasiUlasimRehberi = () => {
  const faqData = [
    {
      question: 'Avrupa Yakası\'nda doğum günü organizasyonuna toplu taşıma ile nasıl gidilir?',
      answer: 'Avrupa Yakası\'nda metro, metrobüs ve tramvay ağı oldukça gelişmiştir. Organizasyon mekanınıza en yakın metro veya metrobüs durağını belirleyerek İstanbulkart ile kolayca ulaşabilirsiniz. M2 hattı Taksim-Levent-Hacıosman arasını, metrobüs ise Beylikdüzü-Zincirlikuyu arasını hızlıca bağlar. Aktarma noktalarını önceden planlayarak 1-2 aktarma ile İstanbul\'un her noktasından organizasyon mekanınıza ulaşmanız mümkündür.'
    },
    {
      question: 'Metrobüs ile doğum günü partisine giderken hediye ve pasta taşımak zor mu?',
      answer: 'Metrobüste yoğun saatlerde (08:00-10:00 ve 17:00-19:00) hediye ve pasta taşımak zorlayıcı olabilir. Bu nedenle hafta sonu veya hafta içi 11:00-16:00 arası tercih etmenizi öneririz. Pasta kutusunu düz tutabilecek bir çanta veya özel taşıma kutusu kullanmanız faydalı olacaktır. Alternatif olarak BestEvent olarak organizasyon yerine pasta ve süsleme malzemelerini biz getirebiliyoruz.'
    },
    {
      question: 'Beylikdüzü\'nden Beşiktaş\'a doğum günü organizasyonuna ne kadar sürede ulaşılır?',
      answer: 'Beylikdüzü\'nden Beşiktaş\'a metrobüs ile ortalama 55-70 dakikada ulaşabilirsiniz. Beylikdüzü Sondurak\'tan binerek Zincirlikuyu\'da inersiniz, ardından kısa bir yürüyüş veya otobüs aktarması ile Beşiktaş\'a varırsınız. Hafta sonu metrobüs daha az kalabalık olduğu için yolculuk daha konforlu geçer. Araçla ise TEM-E5 üzerinden trafik durumuna göre 40-90 dakika sürebilir.'
    },
    {
      question: 'Avrupa Yakası\'nda en kolay ulaşılan doğum günü mekanları nerelerde?',
      answer: 'Metro ve metrobüs hatlarının kesiştiği noktalar ulaşım açısından en avantajlı lokasyonlardır. Mecidiyeköy (M2-M7-metrobüs aktarma), Yenikapı (M1-M2-Marmaray aktarma), Taksim (M2-füniküler) ve Levent (M2-M6) bölgeleri misafirlerinizin her yönden kolay erişebileceği merkezlerdir. Bakırköy ve Bahçelievler de hem E5 hem metro erişimi sayesinde ulaşımı kolay bölgeler arasındadır.'
    },
    {
      question: 'Avrupa Yakası\'nda doğum günü organizasyonuna araçla gideceksek park yeri bulabilir miyiz?',
      answer: 'İstanbul\'un merkezi bölgelerinde (Taksim, Beşiktaş, Fatih) otopark bulmak zordur ve ücretler yüksektir. Beylikdüzü, Başakşehir, Bahçelievler gibi dış ilçelerde AVM otoparkları ve açık otopark alanları daha fazladır. Organizasyon mekanınızın otopark imkanını önceden sormanızı, AVM içi mekanlarda ise en az 2-3 saat ücretsiz otopark sunan yerleri tercih etmenizi öneriyoruz. Metro ile gelenlere park-et devam-et (P+R) otoparkları da iyi bir seçenektir.'
    },
    {
      question: 'Çocukla birlikte metroya binmek güvenli mi, nelere dikkat etmeliyiz?',
      answer: 'İstanbul metrosu çocuklar için güvenli bir ulaşım aracıdır. Peronda sarı güvenlik çizgisinin gerisinde beklemeye, vagon kapılarında sıkışmamaya dikkat edin. 6 yaş altı çocuklar ücretsiz seyahat eder. Kalabalık saatlerden kaçınmanız hem güvenlik hem konfor açısından önemlidir. Bebek arabalı aileler için asansör bulunan istasyonları tercih edin; M2 ve M7 hatlarındaki istasyonların büyük çoğunluğunda engelsiz erişim mevcuttur.'
    }
  ]

  const content = (
    <>
      {/* Icindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Icindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#giris" className="text-blue-600 hover:text-blue-700 font-semibold">1. Istanbul Avrupa Yakasi Ulasim Agi Genel Bakis</a></li>
          <li><a href="#m1-hatti" className="text-blue-600 hover:text-blue-700 font-semibold">2. M1A/M1B Metro Hatti: Yenikapi - Ataturk Havalimani / Kirazli</a></li>
          <li><a href="#m2-hatti" className="text-blue-600 hover:text-blue-700 font-semibold">3. M2 Metro Hatti: Yenikapi - Haciosman</a></li>
          <li><a href="#m3-hatti" className="text-blue-600 hover:text-blue-700 font-semibold">4. M3 Metro Hatti: Kirazli - Basaksehir / Kayasehir</a></li>
          <li><a href="#m7-hatti" className="text-blue-600 hover:text-blue-700 font-semibold">5. M7 Metro Hatti: Kabatas - Mahmutbey</a></li>
          <li><a href="#metrobus" className="text-blue-600 hover:text-blue-700 font-semibold">6. Metrobus Hatti: Beylikduzu - Sogutlucesme (Avrupa Bolgesi)</a></li>
          <li><a href="#tramvay" className="text-blue-600 hover:text-blue-700 font-semibold">7. Tramvay T1: Kabatas - Bagcilar</a></li>
          <li><a href="#bolgesel-tablo" className="text-blue-600 hover:text-blue-700 font-semibold">8. Bolgesel Ulasim Tablosu: Ilce Bazinda En Yakin Duraklar</a></li>
          <li><a href="#park-taksi" className="text-blue-600 hover:text-blue-700 font-semibold">9. Park Etme ve Taksi Bilgileri</a></li>
          <li><a href="#sss" className="text-blue-600 hover:text-blue-700 font-semibold">10. Sik Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giris */}
      <div id="giris">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Cocugunuzun dogum gunu organizasyonuna davet ettiginiz misafirlerinizin en buyuk sorularindan biri sudur: "Oraya nasil gelecegiz?" Istanbul gibi devasa bir sehirde ulasim planlamasi, organizasyonun basarisini dogrudan etkileyen kritik bir faktordur. Ozellikle Avrupa Yakasi'nin yogun trafigi ve genis cografyasi dusunuldugunde, misafirlerinize net ulasim bilgisi vermek buyuk onem tasir.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Bu kapsamli rehberde, Istanbul Avrupa Yakasi'ndaki tum metro hatlari, metrobus guzergahlari, tramvay baglantilari ve bolgesel ulasim seceneklerini detayli olarak inceliyoruz. Her hat icin istasyon listeleri, tahmini surus sureleri, aktarma noktalari ve pratik ipuclari sunuyoruz. Amacimiz, dogum gunu organizasyonunuza gelen misafirlerin yolculuklarini rahatca planlamasini saglamaktir.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <p className="text-gray-800 font-semibold">
            <strong>Ipucu:</strong> Organizasyon davetiyenizde mekanin adresinin yani sira en yakin metro/metrobus duragini ve yuruyus mesafesini de belirtmenizi siddetle tavsiye ediyoruz. Bu kucuk detay, misafirlerinizin zamaninda gelmesini ve organizasyonun aksamamasini saglar. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-600 hover:text-blue-700 font-semibold underline">Full paket dogum gunu organizasyonumuzda</Link> ulasim koordinasyonu da dahil tum detaylarla ilgileniyoruz.
          </p>
        </div>

        {/* Genel Ulasim Haritasi Ozeti */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Avrupa Yakasi Metro ve Metrobus Agi Ozeti</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm shrink-0">M1</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Yenikapi - Kirazli / Havalimani</p>
                <p className="text-gray-500 text-xs">18 istasyon | Batı koridor</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm shrink-0">M2</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Yenikapi - Haciosman</p>
                <p className="text-gray-500 text-xs">16 istasyon | Kuzey koridor</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">M3</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Kirazli - Kayasehir</p>
                <p className="text-gray-500 text-xs">11 istasyon | Basaksehir hattı</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-sm shrink-0">M7</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Kabatas - Mahmutbey</p>
                <p className="text-gray-500 text-xs">19 istasyon | Yeni hat</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">MB</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Beylikduzu - Sogutlucesme</p>
                <p className="text-gray-500 text-xs">Hizli | E5 uzerinde</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">T1</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Kabatas - Bagcilar</p>
                <p className="text-gray-500 text-xs">31 durak | Tarihi yari</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* M1 Hatti */}
      <h2 id="m1-hatti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. M1A/M1B Metro Hatti: Yenikapi - Ataturk Havalimani / Kirazli
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        M1 hatti, Istanbul Avrupa Yakasi'nin en eski ve en yogun kullanilan metro hatlarinan biridir. Yenikapi'dan baslayarak bati yonune ilerler ve Aksaray sonrasinda iki kola ayrilir: M1A Ataturk Havalimani yonune, M1B ise Kirazli yonune gider. Bagcilar, Gungoren, Bayrampasa ve Zeytinburnu gibi yogun yerlesim bolgelerini birbirine baglar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Dogum gunu organizasyonunuz Bakirkoy, Bahcelievler veya Bagcilar civarindaysa M1 hatti en pratik ulasim seceneginizdir. Yenikapi'dan aktarma yaparak Marmaray ile Anadolu Yakasi'ndan gelen misafirleriniz de bu hatta kolayca erisebilir.
      </p>

      {/* M1 Metro Haritasi Stili */}
      <div className="bg-white border-2 border-red-200 rounded-xl overflow-hidden mb-8 shadow-sm">
        <div className="bg-red-600 text-white p-4">
          <h3 className="text-xl font-bold flex items-center gap-3">
            <span className="bg-white text-red-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">M1</span>
            M1A/M1B Kirmizi Hat - Istasyon Listesi
          </h3>
        </div>
        <div className="p-6">
          {/* M1 Ortak Hat */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Ortak Guzergah</h4>
            <div className="flex flex-wrap items-center gap-1">
              {['Yenikapi', 'Aksaray', 'Emniyet-Fatih', 'Topkapi-Ulubatli', 'Bayrampasa-Maltepe', 'Sagmalcilar', 'Kocatepe', 'Otogar'].map((station, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex items-center bg-red-50 rounded-full px-3 py-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-600 mr-2 shrink-0"></div>
                    <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{station}</span>
                  </div>
                  {i < 7 && <div className="w-4 h-0.5 bg-red-400 mx-0.5 shrink-0"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* M1A Kolu */}
          <div className="mb-4">
            <h4 className="font-bold text-red-700 mb-3 text-sm">M1A: Otogar → Ataturk Havalimani</h4>
            <div className="flex flex-wrap items-center gap-1">
              {['Terazidere', 'Davutpasa-YTU', 'Merter', 'Zeytinburnu', 'Bakirkoy-Incirli', 'Bahcelievler', 'Ataköy-Sirinevler', 'DTM-Istanbul Fuar Merkezi', 'Ataturk Havalimani'].map((station, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex items-center bg-red-50 rounded-full px-3 py-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-600 mr-2 shrink-0"></div>
                    <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{station}</span>
                  </div>
                  {i < 8 && <div className="w-4 h-0.5 bg-red-400 mx-0.5 shrink-0"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* M1B Kolu */}
          <div>
            <h4 className="font-bold text-red-700 mb-3 text-sm">M1B: Otogar → Kirazli</h4>
            <div className="flex flex-wrap items-center gap-1">
              {['Esenler', 'Menderes', 'Ucyuzlu', 'Bagcilar-Meydan', 'Kirazli'].map((station, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex items-center bg-red-50 rounded-full px-3 py-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-600 mr-2 shrink-0"></div>
                    <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{station}</span>
                  </div>
                  {i < 4 && <div className="w-4 h-0.5 bg-red-400 mx-0.5 shrink-0"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* M1 Sure Tablosu */}
        <div className="border-t border-red-100 p-6 bg-red-50/30">
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Tahmini Yolculuk Sureleri (Yenikapi Cikisli)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { durak: 'Aksaray', sure: '2 dk' },
              { durak: 'Zeytinburnu', sure: '14 dk' },
              { durak: 'Bakirkoy-Incirli', sure: '17 dk' },
              { durak: 'Bahcelievler', sure: '20 dk' },
              { durak: 'Bayrampasa', sure: '8 dk' },
              { durak: 'Bagcilar Meydan', sure: '18 dk' },
              { durak: 'Kirazli', sure: '20 dk' },
              { durak: 'Ataturk Hv.', sure: '28 dk' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <p className="text-xs text-gray-500 mb-1">{item.durak}</p>
                <p className="text-lg font-bold text-red-600">{item.sure}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* M1 Nasil Gidilir Kutusu */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">M1 Hatti ile Dogum Gunu Organizasyonuna Nasil Gidilir?</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <p className="text-gray-700 text-sm"><strong>Yenikapi veya Aksaray istasyonundan</strong> M1 hattina binin. Anadolu Yakasi'ndan geliyorsaniz Marmaray ile Yenikapi'ya ulasin.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <p className="text-gray-700 text-sm"><strong>Otogar istasyonunda dikkatli olun:</strong> Tren M1A (Havalimani) veya M1B (Kirazli) yonune gidecek. Anons ve tabelayi kontrol edin.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <p className="text-gray-700 text-sm"><strong>Hedefinize en yakin istasyonda inin.</strong> Bakirkoy icin Bakirkoy-Incirli, Bahcelievler icin Bahcelievler, Bagcilar icin Bagcilar Meydan istasyonunu kullanin.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
            <p className="text-gray-700 text-sm"><strong>Istasyondan cikista</strong> organizasyon mekanina yuruyus veya kisa bir taksi/otobus yolculugu ile ulasin.</p>
          </div>
        </div>
      </div>

      {/* M2 Hatti */}
      <h2 id="m2-hatti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. M2 Metro Hatti: Yenikapi - Haciosman
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        M2 hatti, Istanbul'un en prestijli guzergahlarindan birini izler. Yenikapi'dan baslayarak Vezneciler, Haliç, Taksim, Sisli-Mecidiyekoy, Levent ve Haciosman'a kadar uzanir. Is merkezleri, alisveris merkezleri ve luks konut bolgeleri boyunca ilerler. Besiktas, Sisli ve Sariyer ilcelerindeki organizasyonlara ulasmak icin ideal hattir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Taksim istasyonu funkuler ile Kabatas'a, Sisli-Mecidiyekoy istasyonu ise M7 hattina ve metrobus hattina aktarma imkani sunar. Bu sayede M2 hatti, Avrupa Yakasi'nin ulaşim omurgasini olusturur. Ozellikle Levent ve Maslak civarindaki AVM'lerde yapilan cocuk etkinlikleri icin en pratik ulasim secenegidir.
      </p>

      {/* M2 Metro Haritasi */}
      <div className="bg-white border-2 border-green-200 rounded-xl overflow-hidden mb-8 shadow-sm">
        <div className="bg-green-600 text-white p-4">
          <h3 className="text-xl font-bold flex items-center gap-3">
            <span className="bg-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">M2</span>
            M2 Yesil Hat - Istasyon Listesi
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-1">
            {['Yenikapi', 'Vezneciler-Istanbul U.', 'Halic', 'Sishane', 'Taksim', 'Osmanbey', 'Sisli-Mecidiyekoy', 'Gayrettepe', 'Levent', '4.Levent', 'Ayazaga', 'ITU-Ayazaga', 'Darussafaka', 'Atatürk Oto Sanayi', 'Sanayi Mahallesi', 'Haciosman'].map((station, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center bg-green-50 rounded-full px-3 py-1.5">
                  <div className="w-3 h-3 rounded-full bg-green-600 mr-2 shrink-0"></div>
                  <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{station}</span>
                </div>
                {i < 15 && <div className="w-4 h-0.5 bg-green-400 mx-0.5 shrink-0"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-green-100 p-6 bg-green-50/30">
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Tahmini Yolculuk Sureleri (Yenikapi Cikisli)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { durak: 'Taksim', sure: '9 dk' },
              { durak: 'Sisli-Mecidiyekoy', sure: '13 dk' },
              { durak: 'Levent', sure: '18 dk' },
              { durak: '4.Levent', sure: '20 dk' },
              { durak: 'ITU-Ayazaga', sure: '24 dk' },
              { durak: 'Haciosman', sure: '30 dk' },
              { durak: 'Vezneciler', sure: '3 dk' },
              { durak: 'Gayrettepe', sure: '15 dk' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <p className="text-xs text-gray-500 mb-1">{item.durak}</p>
                <p className="text-lg font-bold text-green-600">{item.sure}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-3">M2 Hatti Aktarma Noktalari</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold text-gray-900 text-sm mb-1">Yenikapi</p>
            <p className="text-gray-600 text-xs">M1 Metro + Marmaray + T1 Tramvay aktarma</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold text-gray-900 text-sm mb-1">Taksim</p>
            <p className="text-gray-600 text-xs">F1 Funikuler (Kabatas baglantisi)</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold text-gray-900 text-sm mb-1">Sisli-Mecidiyekoy</p>
            <p className="text-gray-600 text-xs">M7 Metro + Metrobus aktarma</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold text-gray-900 text-sm mb-1">Halic</p>
            <p className="text-gray-600 text-xs">T5 Altin Boynuz Tramvay aktarma</p>
          </div>
        </div>
      </div>

      {/* M3 Hatti */}
      <h2 id="m3-hatti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. M3 Metro Hatti: Kirazli - Kayasehir
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        M3 hatti, Istanbul'un hizla buyuyen bati bolgelerini sehir merkezine baglar. Kirazli'da M1B hatti ile aktarma yapilarak sehrin diger bolgeleriyle baglanti saglanir. Basaksehir, Kayasehir, Ikitelli ve Olimpiyat gibi yogun nufuslu bolgelere hizmet verir. Bu bolgeler son yillarda yeni konut projeleriye hizla buyumus ve aile nufusu yogunlasmistir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Basaksehir ve Kayasehir'deki site iclerinde veya AVM'lerde dogum gunu organizasyonu planliyorsaniz, M3 hatti misafirleriniz icin en uygun ulasim secenegidir. Kirazli aktarma noktasi uzerinden M1B hatti ile Yenikapi'ya, oradan Marmaray ile Anadolu Yakasi'na erisim mumkundur.
      </p>

      {/* M3 Metro Haritasi */}
      <div className="bg-white border-2 border-blue-200 rounded-xl overflow-hidden mb-8 shadow-sm">
        <div className="bg-blue-600 text-white p-4">
          <h3 className="text-xl font-bold flex items-center gap-3">
            <span className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">M3</span>
            M3 Mavi Hat - Istasyon Listesi
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-1">
            {['Kirazli', 'Basak Konutlari', 'Siteler', 'Turgut Ozal', 'Ikitelli Sanayi', 'Ziya Gokalp', 'Olimpiyat', 'Basaksehir', 'Bahcesehir', 'Kayabasi', 'Kayasehir Merkez'].map((station, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center bg-blue-50 rounded-full px-3 py-1.5">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-2 shrink-0"></div>
                  <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{station}</span>
                </div>
                {i < 10 && <div className="w-4 h-0.5 bg-blue-400 mx-0.5 shrink-0"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-blue-100 p-6 bg-blue-50/30">
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Tahmini Yolculuk Sureleri (Kirazli Cikisli)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { durak: 'Ikitelli Sanayi', sure: '8 dk' },
              { durak: 'Olimpiyat', sure: '11 dk' },
              { durak: 'Basaksehir', sure: '14 dk' },
              { durak: 'Kayasehir Merkez', sure: '22 dk' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <p className="text-xs text-gray-500 mb-1">{item.durak}</p>
                <p className="text-lg font-bold text-blue-600">{item.sure}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">M3 Hatti ile Dogum Gunu Organizasyonuna Nasil Gidilir?</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <p className="text-gray-700 text-sm"><strong>Sehir merkezinden geliyorsaniz:</strong> Oncelikle M1 Yenikapi-Kirazli hattini kullanin. Kirazli istasyonunda M3 hattina aktarma yapin.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <p className="text-gray-700 text-sm"><strong>Kayasehir yonune binin.</strong> Basaksehir icin Basaksehir istasyonunda, Kayasehir icin Kayasehir Merkez istasyonunda inin.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <p className="text-gray-700 text-sm"><strong>Toplam seyahat suresi</strong> Yenikapi'dan Basaksehir'e yaklasik 35-40 dakikadir. Kayasehir'e ise 45-50 dakikadir.</p>
          </div>
        </div>
      </div>

      {/* M7 Hatti */}
      <h2 id="m7-hatti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. M7 Metro Hatti: Kabatas - Mahmutbey
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        M7, Istanbul'un en yeni ve en modern metro hatlarindan biridir. Kabatas'tan baslayarak Mecidiyekoy, Gulbag ve Mahmutbey'e kadar uzanir. Bu hat, ozellikle Beyoglu, Kagithane ve Esenler bolgelerindeki organizasyonlar icin buyuk kolaylik saglar. Kabatas'ta vapur iskelesi ile, Mecidiyekoy'de M2 ve metrobus ile aktarma imkani sunar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        M7 hattinin en buyuk avantaji, diger hatlarin ulasamadigi Kagithane, Alibeyköy ve Mahmutbey gibi bolgelere direkt erisim saglamasidir. Bu bolgeler son yillarda yeni konut projeleri ve AVM'ler ile hizla gelismistir. M7 hattinda engelsiz erisim olanagi tum istasyonlarda mevcuttur, bu da bebek arabali aileler icin buyuk bir kolayliktir.
      </p>

      {/* M7 Metro Haritasi */}
      <div className="bg-white border-2 border-pink-200 rounded-xl overflow-hidden mb-8 shadow-sm">
        <div className="bg-pink-500 text-white p-4">
          <h3 className="text-xl font-bold flex items-center gap-3">
            <span className="bg-white text-pink-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">M7</span>
            M7 Pembe Hat - Istasyon Listesi
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-1">
            {['Kabatas', 'Fulya', 'Mecidiyekoy', 'Caglayan', 'Kagithane', 'Nurtepe', 'Alibeyköy', 'Alibeyköy Cep Otogarı', 'Yesilpinar', 'Karadeniz Mah.', 'Kazim Karabekir', 'Yenimahalle', 'Karaburun', 'Goztepe Mah.', 'Mahmutbey'].map((station, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center bg-pink-50 rounded-full px-3 py-1.5">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mr-2 shrink-0"></div>
                  <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{station}</span>
                </div>
                {i < 14 && <div className="w-4 h-0.5 bg-pink-300 mx-0.5 shrink-0"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-pink-100 p-6 bg-pink-50/30">
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Tahmini Yolculuk Sureleri (Kabatas Cikisli)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { durak: 'Mecidiyekoy', sure: '6 dk' },
              { durak: 'Kagithane', sure: '10 dk' },
              { durak: 'Alibeyköy', sure: '15 dk' },
              { durak: 'Mahmutbey', sure: '28 dk' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <p className="text-xs text-gray-500 mb-1">{item.durak}</p>
                <p className="text-lg font-bold text-pink-500">{item.sure}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrobus */}
      <h2 id="metrobus" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Metrobus Hatti: Beylikduzu - Sogutlucesme (Avrupa Bolgesi)
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Metrobus, Istanbul'un en yogun kullanilan toplu tasima araci olup E-5 (D-100) karayolu uzerinde ozel seritinde calisir. Trafikten bagımsiz olarak hareket etmesi en buyuk avantajidir. Avrupa Yakasi'nda Beylikduzu'nden baslayarak Avcilar, Bahcelievler, Merter, Topkapi, Cevizlibag, Edirnekapı ve Zincirlikuyu uzerinden Anadolu Yakasi'na gecis yapar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Dogum gunu organizasyonunuz E-5 guzergahi uzerindeki herhangi bir bolgedeyse metrobus en hizli ve en ekonomik ulasim yoludur. Beylikduzu'nden Zincirlikuyu'ya ortalama 50-60 dakikada ulasabilirsiniz. Ancak sabah ve aksam is cikisi saatlerinde metrobus arac icinde oldukca kalabalik olabilir; bu nedenle hafta sonu veya gun ortasi saatlerini tercih etmeniz daha konforlu bir yolculuk saglar.
      </p>

      {/* Metrobus Haritasi */}
      <div className="bg-white border-2 border-orange-200 rounded-xl overflow-hidden mb-8 shadow-sm">
        <div className="bg-orange-500 text-white p-4">
          <h3 className="text-xl font-bold flex items-center gap-3">
            <span className="bg-white text-orange-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">MB</span>
            Metrobus - Avrupa Yakasi Ana Duraklari
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-1">
            {['Beylikduzu Sondurak', 'Haramidere', 'Avcilar', 'Cennet', 'Sefakoy', 'Yenibosna', 'Bahcelievler', 'Merter', 'Cevizlibag', 'Topkapi', 'Ayvansaray', 'Edirnekapı', 'Halıcıoğlu', 'Okmeydanı', 'Mecidiyeköy', 'Zincirlikuyu'].map((station, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center bg-orange-50 rounded-full px-3 py-1.5">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mr-2 shrink-0"></div>
                  <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{station}</span>
                </div>
                {i < 15 && <div className="w-4 h-0.5 bg-orange-300 mx-0.5 shrink-0"></div>}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-3 italic">* Zincirlikuyu sonrasi Bogaz Koprusu uzerinden Anadolu Yakasi'na devam eder.</p>
        </div>

        <div className="border-t border-orange-100 p-6 bg-orange-50/30">
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Tahmini Yolculuk Sureleri (Beylikduzu Sondurak Cikisli)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { durak: 'Avcilar', sure: '12 dk' },
              { durak: 'Bahcelievler', sure: '25 dk' },
              { durak: 'Merter', sure: '30 dk' },
              { durak: 'Cevizlibag', sure: '35 dk' },
              { durak: 'Topkapi', sure: '38 dk' },
              { durak: 'Mecidiyeköy', sure: '50 dk' },
              { durak: 'Zincirlikuyu', sure: '55 dk' },
              { durak: 'Sogutlucesme', sure: '75 dk' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <p className="text-xs text-gray-500 mb-1">{item.durak}</p>
                <p className="text-lg font-bold text-orange-500">{item.sure}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">Metrobus ile Dogum Gunu Organizasyonuna Nasil Gidilir?</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <p className="text-gray-700 text-sm"><strong>En yakin metrobus duragina gidin.</strong> Metrobus duraklari E-5 karayolu uzerinde konumlanamiştir. Durak girislerinde Istanbulkart'inizi okutun.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <p className="text-gray-700 text-sm"><strong>Gidis yonunuze dikkat edin:</strong> Beylikduzu yonu (Bati) veya Sogutlucesme yonu (Dogu). Yanlıs tarafa binmemek icin tabelaları kontrol edin.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <p className="text-gray-700 text-sm"><strong>Hedefinize en yakin durakta inin.</strong> Metrobus duraklari arasindaki mesafe kisa oldugu icin yanlis durakta inerseniz yuruyerek duzeltebilirsiniz.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
            <p className="text-gray-700 text-sm"><strong>Yogun saatlerden kacinin.</strong> Hafta ici 08:00-10:00 ve 17:00-19:30 saatlerinde metrobus çok kalabalik olur. Hediye ve pasta tasiyor iseniz bu saatlerden kacinin.</p>
          </div>
        </div>
      </div>

      {/* Tramvay T1 */}
      <h2 id="tramvay" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Tramvay T1: Kabatas - Bagcilar
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        T1 tramvay hatti, Istanbul'un tarihi yarimadasi boyunca uzanir. Kabatas'tan baslayarak Findikli, Karakoy, Eminonu, Sultanahmet, Beyazit, Laleli, Aksaray ve devaminda Topkapi, Cevizlibag uzerinden Bagcilar'a kadar gider. Tarihi yarimadada bulunan organizasyon mekanlarina ulasmak icin en pratik yoldur.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Tramvay, metroya göre daha yavas ilerler ancak durak araliginin kisa olmasi ve sik sefer yapmasiyla avantajlidir. Fatih, Beyoglu ve Eminonu bolgelerindeki restoran, cafe veya ozel mekanlarda yapilacak dogum gunu kutlamalari icin T1 tramvayini tavsiye ediyoruz. Yenikapi duraginda M1, M2 ve Marmaray aktarma imkani vardir.
      </p>

      {/* T1 Tramvay Haritasi */}
      <div className="bg-white border-2 border-indigo-200 rounded-xl overflow-hidden mb-8 shadow-sm">
        <div className="bg-indigo-600 text-white p-4">
          <h3 className="text-xl font-bold flex items-center gap-3">
            <span className="bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">T1</span>
            T1 Tramvay - Onemli Duraklar
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-1">
            {['Kabatas', 'Findikli', 'Tophane', 'Karakoy', 'Eminonu', 'Sirkeci', 'Gulhane', 'Sultanahmet', 'Cemberlitas', 'Beyazit-Kapalicarsı', 'Laleli-Universite', 'Aksaray', 'Yenikapi', 'Cevizlibag', 'Topkapi', 'Bagcilar'].map((station, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center bg-indigo-50 rounded-full px-3 py-1.5">
                  <div className="w-3 h-3 rounded-full bg-indigo-600 mr-2 shrink-0"></div>
                  <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{station}</span>
                </div>
                {i < 15 && <div className="w-4 h-0.5 bg-indigo-300 mx-0.5 shrink-0"></div>}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-3 italic">* Tabloda ana duraklar listelenmiştir. T1 hattinda toplam 31 durak bulunmaktadir.</p>
        </div>

        <div className="border-t border-indigo-100 p-6 bg-indigo-50/30">
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Tahmini Yolculuk Sureleri (Kabatas Cikisli)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { durak: 'Karakoy', sure: '8 dk' },
              { durak: 'Eminonu', sure: '12 dk' },
              { durak: 'Sultanahmet', sure: '16 dk' },
              { durak: 'Aksaray', sure: '24 dk' },
              { durak: 'Yenikapi', sure: '28 dk' },
              { durak: 'Cevizlibag', sure: '35 dk' },
              { durak: 'Topkapi', sure: '38 dk' },
              { durak: 'Bagcilar', sure: '48 dk' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <p className="text-xs text-gray-500 mb-1">{item.durak}</p>
                <p className="text-lg font-bold text-indigo-600">{item.sure}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bolgesel Ulasim Tablosu */}
      <h2 id="bolgesel-tablo" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        8. Bolgesel Ulasim Tablosu: Ilce Bazinda En Yakin Duraklar
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Asagidaki tabloda Istanbul Avrupa Yakasi'ndaki baslica ilceler, bu ilcelere en yakin metro/metrobus duraklari ve organizasyon mekanina tahmini ulasim sureleri listelenmiştir. Bu tablo, davetlilerinize ulasim bilgisi verirken referans olarak kullanabilirsiniz.
      </p>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8 shadow-sm">
        <div className="bg-gray-800 text-white p-4">
          <h3 className="text-xl font-bold text-center">Avrupa Yakasi Ilce Bazinda Ulasim Rehberi</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Ilce</th>
                <th className="px-4 py-3 text-left font-bold text-gray-900">En Yakin Metro/Metrobus</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Hat</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Merkeze Sure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-800">Bakirkoy</td>
                <td className="px-4 py-3 text-gray-700">Bakirkoy-Incirli</td>
                <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">M1A</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">17 dk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">Beylikduzu</td>
                <td className="px-4 py-3 text-gray-700">Beylikduzu Sondurak (Metrobus)</td>
                <td className="px-4 py-3 text-center"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">MB</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">55 dk</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-800">Sariyer</td>
                <td className="px-4 py-3 text-gray-700">Haciosman</td>
                <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">M2</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">30 dk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">Besiktas</td>
                <td className="px-4 py-3 text-gray-700">Kabatas (T1/F1) + Levent (M2)</td>
                <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">M2/F1</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">18 dk</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-800">Sisli</td>
                <td className="px-4 py-3 text-gray-700">Sisli-Mecidiyekoy</td>
                <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">M2/M7</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">13 dk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">Fatih</td>
                <td className="px-4 py-3 text-gray-700">Aksaray / Emniyet-Fatih / Vezneciler</td>
                <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">M1/M2/T1</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">3-5 dk</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-800">Beyoglu</td>
                <td className="px-4 py-3 text-gray-700">Taksim / Sishane</td>
                <td className="px-4 py-3 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">M2</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">9 dk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">Bahcelievler</td>
                <td className="px-4 py-3 text-gray-700">Bahcelievler (M1A) + Metrobus</td>
                <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">M1A/MB</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">20 dk</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-800">Basaksehir</td>
                <td className="px-4 py-3 text-gray-700">Basaksehir (M3)</td>
                <td className="px-4 py-3 text-center"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">M3</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">35 dk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">Kucukcekmece</td>
                <td className="px-4 py-3 text-gray-700">Cennet / Sefakoy (Metrobus)</td>
                <td className="px-4 py-3 text-center"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">MB</span></td>
                <td className="px-4 py-3 text-center font-semibold text-gray-900">30 dk</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-gray-50 text-xs text-gray-500">
          * Merkeze sure: Yenikapi referans alinarak hesaplanmiştir. Gercek sureler trafik ve aktarma bekleme surelerine göre degisebilir.
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Tablodan da gorulecegi gibi, Avrupa Yakası'nin hemen her ilcesinden toplu taşıma ile merkeze 30-55 dakika icinde ulasmak mumkundur. Davetlilerinize bu tabloyu paylasarak yolculuk planlamalarini kolaylastiabilirsiniz. Ozellikle farkli ilcelerden gelecek misafirlerin hepsinin ortak bir bulusma noktasi belirlemesi icin aktarma merkezleri (Yenikapi, Mecidiyekoy, Aksaray) ideal noktalardir.
      </p>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-3">Aktarma Merkezi Onerileri</h4>
        <p className="text-gray-700 text-sm mb-4">
          Farkli bolgelerden gelen misafirleriniz varsa, asagidaki aktarma merkezlerinin yakininda bir organizasyon mekanı secmeniz herkesin isini kolaylastirir:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="font-bold text-purple-700 text-lg mb-1">Yenikapi</p>
            <p className="text-gray-600 text-xs">M1 + M2 + Marmaray + T1</p>
            <p className="text-gray-500 text-xs mt-1">Her yonden erisim imkani</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="font-bold text-purple-700 text-lg mb-1">Mecidiyeköy</p>
            <p className="text-gray-600 text-xs">M2 + M7 + Metrobus</p>
            <p className="text-gray-500 text-xs mt-1">Kuzey koridor merkezi</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="font-bold text-purple-700 text-lg mb-1">Aksaray</p>
            <p className="text-gray-600 text-xs">M1 + T1 Tramvay</p>
            <p className="text-gray-500 text-xs mt-1">Tarihi yarimada giris noktasi</p>
          </div>
        </div>
      </div>

      {/* Park ve Taksi */}
      <h2 id="park-taksi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        9. Park Etme ve Taksi Bilgileri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Toplu taşıma disinda aracla veya taksi ile gelecek misafirleriniz icin de bazi onemli bilgiler paylasmak gerekir. Istanbul'un Avrupa Yakası'nda otopark bulmak bolgeden bolgeye buyuk farklilik gosterir. Ayrica taksi ucretleri hakkinda bilgi sahibi olmak, misafirlerinizin butce planlamasi yapabilmesini saglar.
      </p>

      {/* Park Bilgileri */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">P</span> Otopark Bilgileri
          </h4>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-800 text-sm">Merkezi Bolgeler (Taksim, Besiktas, Fatih)</p>
              <p className="text-gray-600 text-xs">Acik otopark sinirli, kapali otopark saatlik 40-80 TL. Sok üstü park yapma sansi dusuk. AVM otoparkı oncelikli tercih olmali.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Orta Bolgeler (Bakirkoy, Bahcelievler, Sisli)</p>
              <p className="text-gray-600 text-xs">AVM otoparkları yaygın, saatlik 20-40 TL. Cadde ustu otopark (ISPARK) mevcut. Cuma ve cumartesi yogun.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Dis Bolgeler (Beylikduzu, Basaksehir, Avcilar)</p>
              <p className="text-gray-600 text-xs">Otopark bulmak kolay, ucretler uygun (saatlik 10-25 TL). Site iclerinde ve AVM'lerde genellikle ucretsiz otopark imkani mevcut.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">P+R</span> Park Et Devam Et
          </h4>
          <p className="text-gray-700 text-sm mb-4">
            Istanbul'da bazi metro istasyonlarinin yakininda "Park Et Devam Et" (P+R) otoparkları bulunmaktadir. Aracinizi buraya park edip metro ile yolculugunuza devam edebilirsiniz:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">*</span>
              <span><strong>Haciosman (M2):</strong> Genis otopark alani, metro ile merkeze 30 dk</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">*</span>
              <span><strong>Kirazli (M1B/M3):</strong> Aktarma merkezi, Basaksehir yonune gecis imkani</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">*</span>
              <span><strong>Olimpiyat (M3):</strong> Genis otopark, Basaksehir bolgesi icin ideal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">*</span>
              <span><strong>Beylikduzu (Metrobüs):</strong> Sondurak yakininda otopark alanlari</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Taksi Bilgileri */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">Taksi Tahmini Ucret Tablosu (Avrupa Yakasi Ici)</h4>
        <p className="text-gray-600 text-sm mb-4">Asagidaki ucretler ortalama tahminlerdir. Trafik yogunluguna göre degisiklik gosterebilir. 2026 yili taksimetre tarifesi baz alinmiştir.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { guzergah: 'Taksim → Bakirkoy', ucret: '250-350 TL', sure: '25-40 dk' },
            { guzergah: 'Besiktas → Bahcelievler', ucret: '200-300 TL', sure: '20-35 dk' },
            { guzergah: 'Sisli → Basaksehir', ucret: '300-450 TL', sure: '30-50 dk' },
            { guzergah: 'Fatih → Beylikduzu', ucret: '400-550 TL', sure: '40-60 dk' },
            { guzergah: 'Levent → Sariyer', ucret: '150-250 TL', sure: '15-30 dk' },
            { guzergah: 'Bakirkoy → Basaksehir', ucret: '250-400 TL', sure: '25-45 dk' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-semibold text-gray-900 text-sm mb-2">{item.guzergah}</p>
              <p className="text-yellow-700 font-bold text-lg">{item.ucret}</p>
              <p className="text-gray-500 text-xs mt-1">{item.sure}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Taksi ile ulasim, ozellikle kalabalik aile gruplari veya agir esya (pasta, hediye, dekorasyon malzemesi) tasiyanlar icin pratik bir secenektir. Ancak Istanbul'un yogun trafigi göz onune alindiginda, kisa mesafeler icin bile yolculuk suresi ve maliyeti beklenmedik sekilde artabilir. Bu nedenle mumkun oldugunda toplu tasima tercih edilmeli, taksi ise son care olarak degerlendirilmelidir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        <Link to="/organizasyonlar/palyaco-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline">Palyaco kiralama hizmetimizde</Link> ekibimiz tum ekipmanlari organizasyon mekanina kendisi getirir. Dolayisiyla misafirlerinizin agir esya tasima derdi olmaz, sadece kendileri ve hediyeleri ile gelmeleri yeterlidir. Bu da ulasim planlamasini cok daha kolay hale getirir.
      </p>

      {/* Organizasyon Gunu Ipuclari */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">Organizasyon Gunu Ulasim Ipuclari</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold text-lg">1.</span>
              <p className="text-gray-700 text-sm"><strong>Davetiyede ulasim bilgisi verin:</strong> En yakin metro duragi, metrobus hatti ve yuruyus mesafesini belirtin.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold text-lg">2.</span>
              <p className="text-gray-700 text-sm"><strong>Google Maps linki paylasin:</strong> Mekanin konumunu harita linki olarak WhatsApp grubunda paylasin.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold text-lg">3.</span>
              <p className="text-gray-700 text-sm"><strong>Alternatif rota belirleyin:</strong> Ana guzergahta aksama olmasi durumunda alternatif bir hat onerun.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold text-lg">4.</span>
              <p className="text-gray-700 text-sm"><strong>Otopark bilgisi verin:</strong> Aracla gelecek misafirler icin en yakin otopark veya AVM park alani bilgisini ekleyin.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold text-lg">5.</span>
              <p className="text-gray-700 text-sm"><strong>Erken gelin uyanisi:</strong> Misafirlerinizden 15-20 dakika erken gelmelerini rica edin, Istanbul trafiginde gecikme olabilir.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold text-lg">6.</span>
              <p className="text-gray-700 text-sm"><strong>Istanbulkart hatirlatmasi:</strong> Toplu tasima ile gelecek misafirlerinize Istanbulkart bakiyelerini kontrol etmelerini hatırlatin.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hizmet CTA */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">Organizasyonunuzun Tum Detaylarini Bize Birakin!</h4>
        <p className="text-gray-700 text-sm mb-4">
          BestEvent olarak Istanbul Avrupa Yakasi'nin her bölgesinde profesyonel dogum gunu organizasyonu hizmeti sunuyoruz. Mekan seciminden ulasim koordinasyonuna, dekorasyondan gösteri hizmetine kadar her seyi biz planlıyoruz. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-600 hover:text-blue-700 font-semibold underline">Full paket organizasyon hizmetimiz</Link> ile tek yapmaniz gereken gelmek ve eglenmektir!
        </p>
        <Link
          to="/organizasyonlar/full-paket-organizasyon"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Full Paket Organizasyon Hizmetimiz →
        </Link>
      </div>

      {/* SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        10. Sik Sorulan Sorular
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Sonuc CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Istanbul Avrupa Yakasi'nda Dogum Gunu Organizasyonu Icin Bize Ulasin!</h3>
        <p className="mb-6 leading-relaxed">
          Bakirkoy'den Beylikduzu'ne, Sisli'den Basaksehir'e kadar Avrupa Yakasi'nin her kosesinde profesyonel dogum gunu organizasyonu, palyaco kiralama, sihirbaz gosterisi ve daha fazla hizmet sunuyoruz. Ekibimiz tum ekipmanlari ve gosterileri organizasyon mekanınıza getirir; misafirleriniz sadece gelsin ve eğlensin! Ulasim koordinasyonu da dahil tum detaylarla biz ilgileniyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Ara: 0530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Avrupa%20Yakas%C4%B1%20do%C4%9Fum%20g%C3%BCn%C3%BC%20organizasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl text-center"
          >
            WhatsApp ile Yazin
          </a>
        </div>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="avrupa-yakasi-ulasim-rehberi"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/full-paket-organizasyon"
      relatedServiceName="Dogum Gunu Organizasyonu"
    />
  )
}

export default AvrupaYakasiUlasimRehberi
