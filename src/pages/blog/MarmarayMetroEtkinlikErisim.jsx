import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const MarmarayMetroEtkinlikErisim = () => {
  const faqData = [
    {
      question: 'Marmaray ile Avrupa\'dan Anadolu\'ya geçiş kaç dakika sürüyor?',
      answer: 'Marmaray ile Sirkeci\'den Üsküdar\'a denizaltı geçişi yaklaşık 4 dakika sürer. Yenikapı\'dan Üsküdar\'a toplam süre ise yaklaşık 8-10 dakikadır. Bu, İstanbul Boğazı\'nı geçmenin en hızlı ve güvenilir yoludur. Özellikle etkinlik günlerinde köprü trafiğinden kaçınmak isteyen aileler için Marmaray ideal bir tercih olarak öne çıkar.'
    },
    {
      question: 'Çocuklu aileler Marmaray\'da hangi vagonu tercih etmelidir?',
      answer: 'Çocuklu aileler için orta vagonlar en uygun tercihdir. Bu vagonlarda kalabalık nispeten daha azdır ve durakta iniş-biniş daha rahat yapılır. Ayrıca ilk ve son vagonlar peronda uzak kalabilir. Bebek arabalı aileler için geniş kapılı vagonlar ve engelli erişim alanları tercih edilebilir. Hafta sonu 10:00-16:00 arası saatler en rahat yolculuk zamanlarıdır.'
    },
    {
      question: 'Marmaray\'da çocuklar için bilet ücreti var mı?',
      answer: '6 yaş altı çocuklar Marmaray\'da ücretsiz seyahat eder ve bilet gerektirmez. 6-12 yaş arası çocuklar için indirimli öğrenci kartı kullanılabilir. Aileler İstanbulkart kullanarak toplu taşıma indirimlerinden faydalanabilir. Bir İstanbulkart ile birden fazla kişi geçiş yapabilir, bu da aileler için büyük kolaylık sağlar.'
    },
    {
      question: 'Metro aktarma noktalarında bekleme süreleri ne kadar?',
      answer: 'Yenikapı aktarma noktasında M1, M2 ve Marmaray arasında ortalama bekleme süresi 3-5 dakikadır. Üsküdar\'da M5 metro hattına aktarma yaklaşık 2-4 dakika sürer. Kadıköy-Ayrılıkçeşme\'de M4 hattına geçiş 3-5 dakika arasında değişir. Hafta içi yoğun saatlerde seferler daha sık olduğundan bekleme süreleri kısalır. Tüm aktarma noktalarında yönlendirme tabelaları mevcuttur.'
    },
    {
      question: 'Etkinlik günü Marmaray ile ulaşım planlaması nasıl yapılmalı?',
      answer: 'Etkinlik saatinden en az 45-60 dakika önce yola çıkmanız önerilir. İstanbul raylı sistem uygulamalarından (Metro İstanbul, Trafi gibi) gerçek zamanlı sefer bilgilerini takip edebilirsiniz. Hafta sonu etkinlikleri için seferlerin hafta içine göre daha seyrek olduğunu unutmayın. Aktarma noktalarında ek 5-10 dakika bekleyeceğinizi hesaba katın. Organizasyon firmanızla paylaşacağınız ulaşım bilgisi, etkinliğin sorunsuz başlamasını sağlar.'
    },
    {
      question: 'Marmaray ve metro ile ulaşılamayan etkinlik bölgeleri var mı?',
      answer: 'Beylikdüzü, Sarıyer, Beykoz, Çekmeköy ve Silivri gibi bölgelere doğrudan Marmaray veya metro hattı bulunmamaktadır. Bu bölgelere ulaşmak için metrobüs, otobüs veya minibüs aktarması gerekir. Ancak 2026 genişleme planları kapsamında yeni hatlar devreye girecek ve bu bölgelere erişim kolaylaşacaktır. Şu an için bu lokasyonlardaki etkinlikler için araçlı ulaşım veya servis planlaması yapmanızı öneririz.'
    }
  ]

  const content = (
    <>
      {/* Icindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Icindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#giris" className="text-orange-600 hover:text-orange-700 font-semibold">1. Marmaray'in Istanbul Ulasimindaki Devrim</a></li>
          <li><a href="#marmaray-hatti" className="text-orange-600 hover:text-orange-700 font-semibold">2. Marmaray Hatti Detay: Halkali'dan Gebze'ye Tum Duraklar</a></li>
          <li><a href="#aktarma-noktalari" className="text-orange-600 hover:text-orange-700 font-semibold">3. Metro Aktarma Noktalari: Baglanti Merkezleri</a></li>
          <li><a href="#sure-tablosu" className="text-orange-600 hover:text-orange-700 font-semibold">4. Populer Etkinlik Bolgelerine Sure Tablosu</a></li>
          <li><a href="#sefer-sikligi" className="text-orange-600 hover:text-orange-700 font-semibold">5. Hafta Sonu vs Hafta Ici Sefer Sikligi</a></li>
          <li><a href="#cocuklu-aileler" className="text-orange-600 hover:text-orange-700 font-semibold">6. Cocuklu Aileler Icin Marmaray Ipuclari</a></li>
          <li><a href="#genisleme" className="text-orange-600 hover:text-orange-700 font-semibold">7. Istanbul Metro Agi 2026 Genisleme Planlari</a></li>
          <li><a href="#ulasim-sablonu" className="text-orange-600 hover:text-orange-700 font-semibold">8. Etkinlik Gunu Ulasim Planlama Sablonu</a></li>
          <li><a href="#sss" className="text-orange-600 hover:text-orange-700 font-semibold">9. Sik Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Bolum 1 - Giris */}
      <h2 id="giris" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Marmaray'in Istanbul Ulasimindaki Devrim
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Istanbul, iki kitayi birbirine baglayan dunyanin en benzersiz metropolu. Ancak bu benzersizlik, ulasim soz konusu oldugunda ciddi zorluklar da beraberinde getiriyor. Yillardir kopru trafigi, vapur kuyruklari ve saatlerce suren yolculuklar Istanbul'lularin hayatinin bir parcasiydi. Ta ki Marmaray gelene kadar. 2013 yilinda hizmete giren Marmaray, Istanbul Bogazi'nin altindan gecen tunel sistemiyle sehir ulasiminda gercek bir devrim yaratti. Bugün Halkali'dan Gebze'ye uzanan hat, her gun milyonlarca yolcuyu tasiyarak Istanbul'un nabzini tutuyor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Peki Marmaray ve Istanbul metro agi, cocuk etkinligi ve dogum gunu organizasyonu planlayan aileler icin ne anlama geliyor? Cevap cok basit: zamandan tasarruf, trafik stresinden kurtulus ve etkinlige zamaninda varabileceginizin garantisi. Ozellikle hafta sonu dogum gunu organizasyonlari, cocuk gosterileri ve ozel gun kutlamalari icin ulasim planlamasi kritik oneme sahiptir. Bu rehberde, Marmaray hatti ve Istanbul metro agini kullanarak etkinlik lokasyonlarina nasil en hizli ve konforlu sekilde ulasabileceginizi detayli olarak anlatacagiz.
      </p>

      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Biliyor muydunuz?</strong> Marmaray, dunya uzerindeki en derin denizalti demiryolu tunellerinden biridir. Bogaz'in 60 metre altindan gecen tunel sayesinde Avrupa'dan Anadolu'ya sadece 4 dakikada ulasabilirsiniz. Bu, kopru trafiginde ortalama 45-90 dakika harcayan aileler icin devasa bir zaman kazancidir.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Cocugunuzun dogum gunu organizasyonunu Kadikoy'de planladiniz ama siz Bakirköy'de mi oturuyorsunuz? Marmaray ile yaklasik 25 dakikada orada olabilirsiniz. Ya da Pendik'ten kalkip Taksim'deki bir parti salonuna gitmek mi istiyorsunuz? Metro aktarmali rota ile 55 dakikada hedefinize ulasirsiniz. Iste bu rehber, tam olarak bu senaryolar icin hazırlandi. Dogum gunu organizasyonu, palyaco gosterisi, sihirbaz etkinligi veya bubble show icin planlama yaparken ulasim detaylarini bilmeniz, gununuzun sorunsuz gecmesini saglar.
      </p>

      {/* Bolum 2 - Marmaray Hatti Detay */}
      <h2 id="marmaray-hatti" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Marmaray Hatti Detay: Halkali'dan Gebze'ye Tum Duraklar
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Marmaray hatti, Istanbul'un Avrupa yakasindaki Halkali istasyonundan baslayarak Bogaz'in altindan gecip Anadolu yakasindaki Gebze istasyonuna kadar uzanir. Toplam 76,6 km uzunlugundaki bu hat, Istanbul'un omurgasi niteligindedir. Simdi her bolgeyi ayri ayri inceleyelim.
      </p>

      {/* Marmaray Hat Gorsellestirmesi - Avrupa Yakasi */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6 shadow-sm">
        <div className="bg-orange-600 text-white p-4">
          <h3 className="text-xl font-bold text-center">Marmaray Hatti - Avrupa Yakasi Duraklari</h3>
        </div>
        <div className="p-6">
          <div className="relative">
            {/* Hat Cizgisi */}
            <div className="absolute top-6 left-0 right-0 h-2 bg-orange-400 rounded-full"></div>
            {/* Duraklar */}
            <div className="relative flex justify-between items-start">
              {['Halkali', 'K.cekmece', 'Florya', 'Yesilkoy', 'Bakirkoy', 'Yenikapi', 'Sirkeci'].map((durak, index) => (
                <div key={index} className="flex flex-col items-center z-10">
                  <div className={`w-5 h-5 rounded-full border-3 border-white shadow-md ${
                    durak === 'Yenikapi' || durak === 'Sirkeci'
                      ? 'bg-red-600 ring-2 ring-red-300'
                      : 'bg-orange-500'
                  }`}></div>
                  <span className={`text-xs mt-2 text-center font-medium max-w-[60px] leading-tight ${
                    durak === 'Yenikapi' || durak === 'Sirkeci'
                      ? 'text-red-700 font-bold'
                      : 'text-gray-700'
                  }`}>
                    {durak}
                  </span>
                  {(durak === 'Yenikapi' || durak === 'Sirkeci') && (
                    <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded-full mt-1 font-semibold">
                      Aktarma
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bogaz Gecisi Ozel Bolum */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-xl p-6 mb-6 shadow-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">Bogaz Gecisi: Denizalti Tuneli</h3>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold">S</span>
              </div>
              <span className="text-sm font-semibold">Sirkeci</span>
              <span className="block text-xs text-blue-200">Avrupa</span>
            </div>
            <div className="flex-1 relative">
              <div className="border-t-2 border-dashed border-white/50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-blue-700 px-4 py-2 rounded-full font-bold text-sm shadow-lg whitespace-nowrap">
                ~4 dk | 60m derinlik
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold">U</span>
              </div>
              <span className="text-sm font-semibold">Uskudar</span>
              <span className="block text-xs text-blue-200">Anadolu</span>
            </div>
          </div>
          <p className="text-blue-100 text-sm">
            Istanbul Bogazi'nin altindan gecen tunel ile iki kita arasinda sadece 4 dakikada yolculuk yapin.
            Kopru trafigine takilmadan, cocuklarinizla guvenle karsiya gecin.
          </p>
        </div>
      </div>

      {/* Marmaray Hat Gorsellestirmesi - Anadolu Yakasi */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8 shadow-sm">
        <div className="bg-orange-600 text-white p-4">
          <h3 className="text-xl font-bold text-center">Marmaray Hatti - Anadolu Yakasi Duraklari</h3>
        </div>
        <div className="p-6">
          <div className="relative">
            {/* Hat Cizgisi */}
            <div className="absolute top-6 left-0 right-0 h-2 bg-orange-400 rounded-full"></div>
            {/* Duraklar */}
            <div className="relative flex justify-between items-start">
              {['Uskudar', 'Sogutlucesme', 'Goztepe', 'Bostanci', 'Kartal', 'Pendik', 'Gebze'].map((durak, index) => (
                <div key={index} className="flex flex-col items-center z-10">
                  <div className={`w-5 h-5 rounded-full border-3 border-white shadow-md ${
                    durak === 'Uskudar' || durak === 'Sogutlucesme'
                      ? 'bg-red-600 ring-2 ring-red-300'
                      : 'bg-orange-500'
                  }`}></div>
                  <span className={`text-xs mt-2 text-center font-medium max-w-[70px] leading-tight ${
                    durak === 'Uskudar' || durak === 'Sogutlucesme'
                      ? 'text-red-700 font-bold'
                      : 'text-gray-700'
                  }`}>
                    {durak}
                  </span>
                  {durak === 'Uskudar' && (
                    <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded-full mt-1 font-semibold">
                      M5 Aktarma
                    </span>
                  )}
                  {durak === 'Sogutlucesme' && (
                    <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded-full mt-1 font-semibold">
                      M4 yakin
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Marmaray hattinin Avrupa yakasindaki duraklari, Istanbul'un bati kesiminden gelen yolcular icin buyuk kolaylik saglar. Halkali'dan binerek dogrudan Bogaz'in altindan gecip Anadolu'ya ulasabilirsiniz. Bakirkoy, ozellikle cocuk etkinlikleri icin populer bir bolge olup Marmaray ile dogrudan erisilebilir. Yenikapi ise Istanbul'un en buyuk ulasim aktarma noktasidir; burada M1 (Yenikapi-Ataturk Havalimani), M2 (Yenikapi-Haciosman) metro hatlarina ve Marmaray'a gecis yapabilirsiniz.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Anadolu yakasinda ise Uskudar, Kadikoy bolgesine yakin konumuyla kritik bir duraktir. Sogutlucesme'den Kadikoy'e yuruyerek veya otobusle kisa surede ulasabilirsiniz. Bostanci, Kartal ve Pendik duraklari ise Anadolu yakasinin dogu kesimindeki etkinlik mekanlarina erisim saglar. Gebze ise hattin en ucundaki duraktir ve Kocaeli sinirindaki ailelerin Istanbul etkinliklerine katilmasini kolaylastirir.
      </p>

      {/* Bolum 3 - Metro Aktarma Noktalari */}
      <h2 id="aktarma-noktalari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Metro Aktarma Noktalari: Baglanti Merkezleri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Marmaray hattinin gercek gucu, Istanbul metro agi ile entegrasyonunda gizlidir. Dort kritik aktarma noktasi, sehrin farkli koselerine erisimi mumkun kilar. Bu aktarma noktalarini iyi bilmek, etkinlik gunu ulasim surelerinizi yarisina indirebilir.
      </p>

      {/* Aktarma Noktalari Kartlari */}
      <div className="space-y-6 mb-8">
        {/* Yenikapi */}
        <div className="bg-white border-2 border-red-200 rounded-xl overflow-hidden shadow-md">
          <div className="bg-red-600 text-white p-4 flex items-center justify-between">
            <h4 className="text-lg font-bold">Yenikapi Aktarma Merkezi</h4>
            <div className="flex gap-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">M1</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">M2</span>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">Marmaray</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Baglanan Hatlar:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">M1</span>
                    Yenikapi - Ataturk Havalimani - Kirazli
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">M2</span>
                    Yenikapi - Taksim - Levent - Haciosman
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold">MR</span>
                    Marmaray (Halkali - Gebze)
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Etkinlik Erisimi:</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Taksim'e: M2 ile ~12 dk</li>
                  <li>Levent'e: M2 ile ~18 dk</li>
                  <li>Ataturk Havalimani bolgesine: M1 ile ~20 dk</li>
                  <li>Bakirkoy'e: Marmaray ile ~8 dk</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-red-50 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>Onemli Not:</strong> Yenikapi, Istanbul'un en yogun aktarma noktasidir. Hafta ici 08:00-09:30 ve 17:00-19:00 saatlerinde cok kalabalik olabilir. Cocuklu aileler bu saatleri mumkunse kacinmalidir.
              </p>
            </div>
          </div>
        </div>

        {/* Uskudar */}
        <div className="bg-white border-2 border-purple-200 rounded-xl overflow-hidden shadow-md">
          <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
            <h4 className="text-lg font-bold">Uskudar Aktarma Merkezi</h4>
            <div className="flex gap-2">
              <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">M5</span>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">Marmaray</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Baglanan Hatlar:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold">M5</span>
                    Uskudar - Umraniye - Cekmekoy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold">MR</span>
                    Marmaray (Halkali - Gebze)
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Etkinlik Erisimi:</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Umraniye'ye: M5 ile ~18 dk</li>
                  <li>Cekmekoy'e: M5 ile ~30 dk</li>
                  <li>Atasehir'e: M5 ile ~12 dk</li>
                  <li>Sirkeci'ye: Marmaray ile ~6 dk</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-purple-50 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>Ipucu:</strong> Uskudar duragi, Anadolu yakasinin kalbine acilan kapıdır. M5 hatti ile Umraniye ve Cekmekoy'e dogrudan erisim saglar. Ayrıca Uskudar meydaninda vapur iskeleleri de bulunmaktadir.
              </p>
            </div>
          </div>
        </div>

        {/* Kadikoy / Ayrilikçesme */}
        <div className="bg-white border-2 border-green-200 rounded-xl overflow-hidden shadow-md">
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <h4 className="text-lg font-bold">Kadikoy - Ayrilikçesme Aktarma Noktasi</h4>
            <div className="flex gap-2">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">M4</span>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">Marmaray</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Baglanan Hatlar:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">M4</span>
                    Kadikoy - Kartal - Tavşantepe - Sabiha Gokcen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold">MR</span>
                    Marmaray (Sogutlucesme yakin)
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Etkinlik Erisimi:</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Kartal'a: M4 ile ~20 dk</li>
                  <li>Maltepe'ye: M4 ile ~12 dk</li>
                  <li>Pendik'e: M4 ile ~28 dk</li>
                  <li>Kadikoy merkezine: yuruyus ~5 dk</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-green-50 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>Ipucu:</strong> Kadikoy, Istanbul'un en populer cocuk etkinligi bolgelerinden biridir. Moda sahili, Bagdat Caddesi ve cevresindeki parti salonlari icin M4 hatti ve Marmaray kombinasyonu idealdir.
              </p>
            </div>
          </div>
        </div>

        {/* Sirkeci */}
        <div className="bg-white border-2 border-blue-200 rounded-xl overflow-hidden shadow-md">
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <h4 className="text-lg font-bold">Sirkeci Aktarma Noktasi</h4>
            <div className="flex gap-2">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">T1</span>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">Marmaray</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Baglanan Hatlar:</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">T1</span>
                    Kabatas - Sultanahmet - Eminonu - Zeytinburnu
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold">MR</span>
                    Marmaray (Halkali - Gebze)
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Etkinlik Erisimi:</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Sultanahmet'e: T1 ile ~3 dk</li>
                  <li>Kabatas'a: T1 ile ~10 dk</li>
                  <li>Zeytinburnu'na: T1 ile ~15 dk</li>
                  <li>Eminonu meydanina: yuruyus ~5 dk</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>Ipucu:</strong> Sirkeci, tarihi yarimada'daki etkinlik mekanlarina erisim icin idealdir. Ayrica T1 tramvay hatti ile Kabatas'a gecip funikuler ile Taksim'e ulasabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Baglanti Hub Diagrami */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Baglanti Hub Diagrami: Hangi Hatlar Nerede Bulusuyor?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-red-100">
            <div className="text-2xl font-bold text-red-600 mb-1">3</div>
            <div className="text-xs text-gray-600 font-semibold">Yenikapi</div>
            <div className="flex justify-center gap-1 mt-2">
              <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">M1</span>
              <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded">M2</span>
              <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded">MR</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-purple-100">
            <div className="text-2xl font-bold text-purple-600 mb-1">2</div>
            <div className="text-xs text-gray-600 font-semibold">Uskudar</div>
            <div className="flex justify-center gap-1 mt-2">
              <span className="bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded">M5</span>
              <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded">MR</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-green-100">
            <div className="text-2xl font-bold text-green-600 mb-1">2</div>
            <div className="text-xs text-gray-600 font-semibold">Ayrilikçesme</div>
            <div className="flex justify-center gap-1 mt-2">
              <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded">M4</span>
              <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded">MR</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-blue-100">
            <div className="text-2xl font-bold text-blue-600 mb-1">2</div>
            <div className="text-xs text-gray-600 font-semibold">Sirkeci</div>
            <div className="flex justify-center gap-1 mt-2">
              <span className="bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded">T1</span>
              <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded">MR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bolum 4 - Sure Tablosu */}
      <h2 id="sure-tablosu" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Populer Etkinlik Bolgelerine Sure Tablosu
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Etkinlik gunu en cok merak edilen soru: "Oraya kac dakikada giderim?" Asagidaki sure hesaplama kartlari, Istanbul'un farkli noktalarindaki populer etkinlik bolgelerine Marmaray ve metro ile tahmini ulasim surelerini gostermektedir. Bu sureler aktarma beklemeleri dahil ortalama degerlerdir.
      </p>

      {/* Sure Hesaplama Kartlari */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {/* Kart 1 */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full font-bold">Sure Hesaplama</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-100 rounded-lg px-3 py-2 text-center">
              <span className="text-sm font-bold text-orange-800">Kadikoy</span>
            </div>
            <div className="flex-1 border-t-2 border-dashed border-orange-300 relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-orange-600 text-xs font-bold">Marmaray + T1</span>
            </div>
            <div className="bg-orange-100 rounded-lg px-3 py-2 text-center">
              <span className="text-sm font-bold text-orange-800">Besiktas</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-orange-700">~25</span>
            <span className="text-sm text-orange-600 ml-1">dakika</span>
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">
            Sogutlucesme &rarr; Sirkeci (Marmaray) &rarr; Kabatas (T1) &rarr; Besiktas
          </p>
        </div>

        {/* Kart 2 */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">Sure Hesaplama</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-100 rounded-lg px-3 py-2 text-center">
              <span className="text-sm font-bold text-purple-800">Pendik</span>
            </div>
            <div className="flex-1 border-t-2 border-dashed border-purple-300 relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-purple-600 text-xs font-bold">Marmaray + M2</span>
            </div>
            <div className="bg-purple-100 rounded-lg px-3 py-2 text-center">
              <span className="text-sm font-bold text-purple-800">Taksim</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-purple-700">~55</span>
            <span className="text-sm text-purple-600 ml-1">dakika</span>
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">
            Pendik &rarr; Yenikapi (Marmaray) &rarr; Taksim (M2)
          </p>
        </div>

        {/* Kart 3 */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-bold">Sure Hesaplama</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-100 rounded-lg px-3 py-2 text-center">
              <span className="text-sm font-bold text-green-800">Bakirkoy</span>
            </div>
            <div className="flex-1 border-t-2 border-dashed border-green-300 relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-green-600 text-xs font-bold">Marmaray + M5</span>
            </div>
            <div className="bg-green-100 rounded-lg px-3 py-2 text-center">
              <span className="text-sm font-bold text-green-800">Umraniye</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-green-700">~45</span>
            <span className="text-sm text-green-600 ml-1">dakika</span>
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">
            Bakirkoy &rarr; Uskudar (Marmaray) &rarr; Umraniye (M5)
          </p>
        </div>

        {/* Kart 4 */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">Sure Hesaplama</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-100 rounded-lg px-3 py-2 text-center">
              <span className="text-sm font-bold text-blue-800">Uskudar</span>
            </div>
            <div className="flex-1 border-t-2 border-dashed border-blue-300 relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-blue-600 text-xs font-bold">Marmaray + Metrobus</span>
            </div>
            <div className="bg-blue-100 rounded-lg px-3 py-2 text-center">
              <span className="text-sm font-bold text-blue-800">Beylikduzu</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-blue-700">~70</span>
            <span className="text-sm text-blue-600 ml-1">dakika</span>
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">
            Uskudar &rarr; Yenikapi (Marmaray) &rarr; Zeytinburnu (M1) &rarr; Beylikduzu (Metrobus)
          </p>
        </div>
      </div>

      {/* Genisletilmis Sure Tablosu */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8 shadow-sm">
        <div className="bg-orange-600 text-white p-4">
          <h3 className="text-xl font-bold text-center">Detayli Sure Tablosu: Marmaray + Metro Kombinasyonlari</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Nereden</th>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Nereye</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Sure</th>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Rota</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-800">Bakirkoy</td>
                <td className="px-4 py-3 text-gray-700">Kadikoy</td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold text-xs">~25 dk</span>
                </td>
                <td className="px-4 py-3 text-gray-600 text-xs">Marmaray dogrudan</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">Taksim</td>
                <td className="px-4 py-3 text-gray-700">Uskudar</td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold text-xs">~20 dk</span>
                </td>
                <td className="px-4 py-3 text-gray-600 text-xs">M2 &rarr; Yenikapi &rarr; Marmaray</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-800">Levent</td>
                <td className="px-4 py-3 text-gray-700">Kartal</td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold text-xs">~50 dk</span>
                </td>
                <td className="px-4 py-3 text-gray-600 text-xs">M2 &rarr; Yenikapi &rarr; Marmaray</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">Gebze</td>
                <td className="px-4 py-3 text-gray-700">Yenikapi</td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold text-xs">~75 dk</span>
                </td>
                <td className="px-4 py-3 text-gray-600 text-xs">Marmaray dogrudan</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-800">Atasehir</td>
                <td className="px-4 py-3 text-gray-700">Bakirkoy</td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold text-xs">~35 dk</span>
                </td>
                <td className="px-4 py-3 text-gray-600 text-xs">M5 &rarr; Uskudar &rarr; Marmaray</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">Halkali</td>
                <td className="px-4 py-3 text-gray-700">Bostanci</td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold text-xs">~55 dk</span>
                </td>
                <td className="px-4 py-3 text-gray-600 text-xs">Marmaray dogrudan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Bu sureler, normal trafik kosullarinda ortalama degerleri gostermektedir. Hafta sonu ve resmi tatil gunlerinde sefer araliklari degisebilecegi icin ek 5-10 dakika bekleyeceginizi planlamaniz faydali olacaktir. Ozellikle <Link to="/organizasyonlar/full-paket-organizasyon" className="text-orange-600 hover:text-orange-700 font-semibold underline">dogum gunu organizasyonu</Link> planlarken, etkinlik saatinden en az 1 saat once yola cikmanizi oneriririz. Boylece aktarma beklemeleri ve olasi gecikmeler icin yeterli tampon sureye sahip olursunuz.
      </p>

      {/* Bolum 5 - Sefer Sikligi */}
      <h2 id="sefer-sikligi" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Hafta Sonu vs Hafta Ici Sefer Sikligi
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Etkinliklerin buyuk cogunlugu hafta sonlarina denk gelir. Bu nedenle hafta sonu sefer sikligini bilmek, ulasim planlamasinda kritik oneme sahiptir. Marmaray ve metro hatlari, hafta ici ve hafta sonu farkli programlarla calisir.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-900 mb-3">Hafta Ici (Pazartesi - Cuma)</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Sabah Yogun Saatler (07:00-09:30):</strong> Her 2-3 dakikada bir sefer</li>
            <li><strong>Gun Ici (09:30-17:00):</strong> Her 5-7 dakikada bir sefer</li>
            <li><strong>Aksam Yogun Saatler (17:00-19:30):</strong> Her 2-3 dakikada bir sefer</li>
            <li><strong>Gece (19:30-00:00):</strong> Her 8-10 dakikada bir sefer</li>
          </ul>
          <div className="mt-3 bg-blue-100 rounded p-2">
            <p className="text-xs text-blue-800 font-semibold">Son sefer: ~00:00 | Ilk sefer: ~06:00</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
          <h4 className="font-bold text-gray-900 mb-3">Hafta Sonu (Cumartesi - Pazar)</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Sabah (07:00-10:00):</strong> Her 8-10 dakikada bir sefer</li>
            <li><strong>Gun Ici (10:00-18:00):</strong> Her 5-8 dakikada bir sefer</li>
            <li><strong>Aksam (18:00-22:00):</strong> Her 7-10 dakikada bir sefer</li>
            <li><strong>Gece (22:00-00:00):</strong> Her 10-15 dakikada bir sefer</li>
          </ul>
          <div className="mt-3 bg-amber-100 rounded p-2">
            <p className="text-xs text-amber-800 font-semibold">Onemli: Hafta sonu seferleri hafta icine gore daha seyrek!</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Pratik Ipucu:</strong> Hafta sonu dogum gunu partiniz saat 14:00'te basliyorsa ve 30 dakikalik bir Marmaray yolculugunuz varsa, en gec 12:45'te evden cikmaniz gerekir. 30 dakika yolculuk + 10 dakika aktarma bekleme + 5 dakika yurume = 45 dakika. Guvende olmak icin 12:30'da yola cikmanizi oneriririz.
        </p>
      </div>

      {/* Bolum 6 - Cocuklu Aileler */}
      <h2 id="cocuklu-aileler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Cocuklu Aileler Icin Marmaray Ipuclari
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Cocuklarla toplu tasima kullanmak bazi zorluklar icerebilir ancak dogru planlama ile hem konforlu hem de eglenceli bir yolculuk yapabilirsiniz. Iste Marmaray ve metro ile seyahat eden aileler icin pratik ipuclari ve detayli oneriler.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
          <h4 className="font-bold text-gray-900 mb-3">Bebek Arabalı Aileler</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Asansor Kullanimi:</strong> Tum Marmaray istasyonlarinda asansor mevcuttur. Perona asansorle inin, merdiven tasimayin.</li>
            <li><strong>Genis Alanlar:</strong> Vagonlarin orta kisimlarinda engelli ve bebek arabasi icin ayrilmis genis alanlar bulunur.</li>
            <li><strong>Yoğun Saatlerden Kacinin:</strong> 08:00-09:30 ve 17:00-19:00 arasi bebek arabasiyla yolculuk zor olabilir.</li>
            <li><strong>Rampa Erisimi:</strong> Istasyon girislerinde rampalar mevcuttur, takviye yardim icin istasyon personelini arayabilirsiniz.</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
          <h4 className="font-bold text-gray-900 mb-3">3-6 Yas Grubu Cocuklar</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>El Tutma:</strong> Peronda ve vagon ici gecislerde cocugunuzun elini mutlaka tutun.</li>
            <li><strong>Pencere Keyfini Cikarin:</strong> Bogaz gecisi sirasinda cocuklara "simdi denizin altindayiz" diye anlatmak harika bir deneyim olabilir.</li>
            <li><strong>Atistirmalik Bulundurun:</strong> Uzun aktarmali yolculuklarda kucuk atistirmaliklar cocuklari sakin tutar.</li>
            <li><strong>Oyun Planlayın:</strong> "Kac durak kaldi?" sayma oyunu veya istasyon isimlerini okuma oyunu yolculugu eglenceli kilar.</li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
          <h4 className="font-bold text-gray-900 mb-3">7-12 Yas Grubu Cocuklar</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Harita Inceleme:</strong> Metro haritasini birlikte inceleyin, aktarma noktalarini gosterin. Bu hem egitici hem eglencelidir.</li>
            <li><strong>Sorumluluk Verin:</strong> "Sonraki duragimiz hangisi?" diye sorarak cocugu yolculuga dahil edin.</li>
            <li><strong>Guvenlik Kurallari:</strong> Sari cizginin gerisinde beklemek, kapilara yaslanmamak gibi kurallari ogretin.</li>
            <li><strong>Istanbulkart Kullanimi:</strong> Cocugunuza kendi kartini kullanmayi ogretmek, bagimsizlik duygusunu gelistirir.</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-8 border border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">Gercek Senaryo: 5 Yas Dogum Gunu - Bakirköy'den Kadıköy'e</h4>
        <p className="text-gray-700 text-sm mb-4">
          Eda Hanim, oglu Can'in 5 yas dogum gunu partisi icin Kadikoy'deki bir parti salonunu tercih etmisti. Bakirkoy'de oturuyorlardi. Arac kullanmak yerine Marmaray'i denemeye karar verdiler. Bakirkoy istasyonundan bindiler, 25 dakika sonra Sogutlucesme'de indiler ve kisa bir yuruyusle parti salonuna ulastilar. Can, Bogaz'in altindan gecmenin heyecanini hala anlatiyor. "Trafik yoktu, stres yoktu, hatta yolculuk partinin bir parcasi gibi oldu" diyor Eda Hanim.
        </p>
        <p className="text-gray-600 text-xs italic">
          -- Ulasim planlamasi, etkinlik gununun stresini azaltmanin en etkili yoludur.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Cocuklu aileler icin bir diger onemli nokta da <Link to="/organizasyonlar/palyaco-kiralama" className="text-orange-600 hover:text-orange-700 font-semibold underline">palyaco kiralama</Link> hizmeti gibi eve gelen etkinlik seceneklerini degerlendirmektir. Eger buyuk bir grupla ulasim planlamak zor geliyorsa, profesyonel gosterici ekibinin size gelmesini tercih edebilirsiniz. Bu durumda ulasim sorununu tamamen ortadan kaldirmis olursunuz.
      </p>

      {/* Bolum 7 - Genisleme Planlari */}
      <h2 id="genisleme" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Istanbul Metro Agi 2026 Genisleme Planlari
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul'un rayli sistem agi her yil genisliyor. 2026 yili itibariyle planlanan ve devam eden projeler, sehrin ulasim dinamiklerini koklü bir sekilde degistirecek. Bu genislemeler, etkinlik planlayan aileler icin yeni ulasim alternatifleri sunacak ve daha once ulasimi zor olan bölgelere erisimi kolaylastiracak.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-900 mb-3">Devam Eden ve Planlanan Projeler</h4>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              <strong>M7 Kabatas - Mecidiyekoy Hatti:</strong> Bu hat tamamlandiginda Kabatas'tan Mecidiyekoy'e dogrudan erisim mumkun olacak. Besiktas, Nisantasi ve Sisli bolgelerindeki etkinlik mekanlarına ulasim buyuk olcude kolaylasacak. Yenikapi ve Sisli aktarma secenekleri genisleyecek.
            </li>
            <li>
              <strong>M12 Gayrettepe - Istanbul Havalimani Hatti:</strong> Istanbul Havalimani bolgesi ve Basaksehir'e metro ile erisim, ozellikle sehir disından gelen davetliler icin büyük kolaylık saglayacak. Basaksehir'deki buyuk etkinlik mekanlarına dogrudan ulasim olanagı dogacak.
            </li>
            <li>
              <strong>M9 Atakoy - Ikitelli Hatti:</strong> Bakirkoy ve Bahcelievler bolgesindeki ulasim agini guclendirecek bu hat, Avrupa yakasinin bati kesimindeki etkinlik lokasyonlarına erisimi iyilestirecek.
            </li>
            <li>
              <strong>Halkali - Ispartakule Uzatmasi:</strong> Marmaray hattinin bati ucunun uzatilmasiyla Basaksehir ve Esenyurt bolgelerine rayli erisim mumkun hale gelecek.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">2026 Rayli Sistem Genisleme Etkisi: Etkinlik Ulasimi Nasil Degisecek?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-1">+50 km</div>
            <div className="text-sm text-gray-600">Yeni hat uzunlugu</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-1">+35</div>
            <div className="text-sm text-gray-600">Yeni istasyon</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-1">%20</div>
            <div className="text-sm text-gray-600">Tahmini ulasim suresi azalmasi</div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Bu genislemeler tamamlandiginda, Istanbul'da hemen hemen her noktaya rayli sistem ile ulasim mumkun hale gelecektir. Ozellikle Beylikduzu, Basaksehir ve Esenyurt gibi nufusu hizla artan bolgeler, metro agiyla dogrudan baglanacak. Bu da bu bolgelerdeki aileler icin etkinlik lokasyonlarina ulasimin cok daha kolay ve hizli olmasi anlamina geliyor. Cocuk dogum gunu organizasyonlari, parti salonlari ve ozel etkinlik mekanlarina erisim sorun olmaktan cikacak.
      </p>

      {/* Bolum 8 - Ulasim Planlama Sablonu */}
      <h2 id="ulasim-sablonu" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        8. Etkinlik Gunu Ulasim Planlama Sablonu
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Etkinlik gununun sorunsuz gecmesi icin ulasim planlamasini onceden yapmaniz buyuk onem tasir. Asagidaki sablonu kullanarak kendi etkinliginiz icin adim adim planlama yapabilirsiniz. Bu sablon, hem bireysel ailelerin kendi ulasimlarini planlamalari hem de davetlilere ulasim bilgisi paylasmak icin kullanilabilir.
      </p>

      <div className="bg-white border-2 border-orange-200 rounded-xl overflow-hidden mb-8 shadow-md">
        <div className="bg-orange-600 text-white p-4">
          <h3 className="text-xl font-bold text-center">Etkinlik Gunu Ulasim Planlama Sablonu</h3>
        </div>
        <div className="p-6 space-y-6">
          {/* Adim 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h5 className="font-bold text-gray-900 mb-1">Etkinlik Lokasyonunu Belirleyin</h5>
              <p className="text-sm text-gray-700">Etkinlik mekaninin adresi ve en yakin metro/Marmaray istasyonunu tespit edin. Google Haritalar uzerinden toplu tasima rotasini kontrol edin.</p>
            </div>
          </div>

          {/* Adim 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h5 className="font-bold text-gray-900 mb-1">Aktarma Noktalarini Planlayın</h5>
              <p className="text-sm text-gray-700">Kaç aktarma yapmaniz gerektigini ve her aktarma icin +5 dakika ek sure eklemeniz gerektigini hesaplayin. Yenikapi, Uskudar, Ayrilikçesme ve Sirkeci aktarma noktalarini bu rehberden kontrol edin.</p>
            </div>
          </div>

          {/* Adim 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h5 className="font-bold text-gray-900 mb-1">Toplam Sureyi Hesaplayin</h5>
              <p className="text-sm text-gray-700">Yolculuk suresi + aktarma bekleme suresi + istasyondan mekana yurume suresi = toplam sure. Bu toplamın uzerine %20 guvenlik marji ekleyin.</p>
            </div>
          </div>

          {/* Adim 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h5 className="font-bold text-gray-900 mb-1">Cikis Saatini Belirleyin</h5>
              <p className="text-sm text-gray-700">Etkinlik batis saatinden toplam sureyi (guvenlik marji dahil) cikararak evden cikis saatinizi belirleyin. Ornek: Etkinlik 14:00'te, toplam sure 50 dk ise, 12:45'te evden cikin.</p>
            </div>
          </div>

          {/* Adim 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h5 className="font-bold text-gray-900 mb-1">Davetlilere Bilgi Paylasin</h5>
              <p className="text-sm text-gray-700">Davetiye veya WhatsApp grubunda etkinlik mekaninin adresini, en yakin metro durağını ve tavsiye edilen rotayi paylasin. Ozellikle karşı yakadan gelecekler icin Marmaray rotasini belirtin.</p>
            </div>
          </div>

          {/* Adim 6 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
            <div>
              <h5 className="font-bold text-gray-900 mb-1">B Planı Hazirlayin</h5>
              <p className="text-sm text-gray-700">Metro arizasi veya sefer iptali durumunda alternatif ulasim yollarini (otobus, taksi, dolmus) onceden belirleyin. Taksi uygulamalarini telefonunuza indirin.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sure Hesaplama Araci Gorunumlu Kart */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 mb-8 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-center">Hizli Sure Hesaplama Formulu</h3>
        <div className="bg-white/10 rounded-lg p-4 mb-4">
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">Toplam Ulasim Suresi =</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="bg-orange-500 px-3 py-1 rounded font-bold">Marmaray suresi</span>
              <span className="text-gray-400">+</span>
              <span className="bg-purple-500 px-3 py-1 rounded font-bold">Metro suresi</span>
              <span className="text-gray-400">+</span>
              <span className="bg-green-500 px-3 py-1 rounded font-bold">Aktarma (5 dk x sayi)</span>
              <span className="text-gray-400">+</span>
              <span className="bg-blue-500 px-3 py-1 rounded font-bold">Yuruyus</span>
              <span className="text-gray-400">+</span>
              <span className="bg-red-500 px-3 py-1 rounded font-bold">%20 guvenlik</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">0</div>
            <div className="text-xs text-gray-300">aktarma = +0 dk</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">1</div>
            <div className="text-xs text-gray-300">aktarma = +5 dk</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs text-gray-300">aktarma = +10 dk</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-gray-300">aktarma = +15 dk</div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ulasim planlamasi, basarili bir etkinlik gununun gorunmeyen kahramanidir. Ozellikle Istanbul gibi trafik yogunlugunun cok yuksek oldugu bir sehirde, toplu tasima alternatiflerini bilmek buyuk avantaj saglar. Marmaray ve metro agini kullanarak cocugunuzun dogum gunu partisine, cocuk gosterisine veya ozel etkinligine stressiz bir sekilde ulasabilirsiniz.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        <Link to="/organizasyonlar/full-paket-organizasyon" className="text-orange-600 hover:text-orange-700 font-semibold underline">Full paket dogum gunu organizasyonu</Link> hizmetimizde, ulasim planlamasi da dahil olmak uzere tum detaylarla ilgileniyoruz. Davetlilerinize en uygun ulasim rotalarini iceren davetiye bilgilendirmesi, etkinlik gunu koordinasyonu ve mekan seciminde toplu tasima erisim kolayligini da goz onunde bulunduruyoruz. Profesyonel bir organizasyonun ilk adimi, dogru ulasim planlamasıyla baslar.
      </p>

      {/* SSS Bolumu */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        9. Sik Sorulan Sorular
      </h2>

      <div className="space-y-4 mb-8">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Sonuc CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Etkinliginizi Planlayin, Ulasimi Bize Birakin!</h3>
        <p className="mb-6 leading-relaxed">
          Istanbul'un neresinde olursaniz olun, Marmaray ve metro agi ile etkinlik lokasyonlarina kolayca ulasabilirsiniz. BestEvent olarak etkinlik planlama surecinde ulasim tavsiyeleri de dahil olmak uzere her konuda size destek sunuyoruz. Dogum gunu organizasyonu, palyaco gosterisi, sihirbaz kiralama ve daha fazlasi icin bize ulasin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-orange-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            Hemen Arayin: 0530 730 90 09
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%20Etkinlik%20ula%C5%9F%C4%B1m%20planlamas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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
      slug="marmaray-metro-etkinlik-erisim"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/full-paket-organizasyon"
      relatedServiceName="Dogum Gunu Organizasyonu"
    />
  )
}

export default MarmarayMetroEtkinlikErisim
