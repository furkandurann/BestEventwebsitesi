import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const TopluTasimaEtkinlikUlasim = () => {
  const faqData = [
    {
      question: 'İstanbul\'da çocukla toplu taşıma kullanırken İstanbulkart zorunlu mu?',
      answer: 'Evet, İstanbul toplu taşıma ağında neredeyse tüm araçlarda İstanbulkart kullanımı zorunludur. 0-6 yaş arası çocuklar ücretsiz seyahat eder ancak yine de kucakta olmaları veya yanlarında yetişkin bulunması gerekir. 6 yaş üstü çocuklar için öğrenci İstanbulkart başvurusu yapabilirsiniz. Kartlar metro istasyonları, büfe ve İBB iletişim noktalarından temin edilebilir.'
    },
    {
      question: 'Bebek arabası ile metroya binebilir miyim?',
      answer: 'Evet, İstanbul metro hatlarının büyük çoğunluğunda asansör ve geniş turnike bulunmaktadır. M1, M2, M4, M7 ve Marmaray hatlarında asansör erişimi oldukça yaygındır. Bebek arabası ile binişlerde geniş turnikelerden geçebilirsiniz. Yoğun saatlerde (07:30-09:30 ve 17:00-19:30) seyahattan kaçınmanız, hem sizin hem de bebeğiniz için çok daha konforlu olacaktır.'
    },
    {
      question: 'Metrobüs ile etkinlik mekanlarına ulaşmak ne kadar sürer?',
      answer: 'Metrobüs hattı Beylikdüzü\'nden Söğütlüçeşme\'ye kadar yaklaşık 45-60 dakika arasında ulaşım sağlar. Ancak yoğun saatlerde bu süre 70-80 dakikaya çıkabilir. Etkinlik saatine göre en az 30 dakika erken çıkmanızı öneririz. Zincirlikuyu aktarma noktasından metro bağlantısı da mevcuttur.'
    },
    {
      question: 'Hafta sonu toplu taşıma sefer sıklığı nasıl?',
      answer: 'Hafta sonları metro hatlarında sefer aralığı 5-8 dakikaya, metrobüste ise 3-5 dakikaya çıkabilir. Tramvay hatlarında sefer sıklığı 7-10 dakika aralığındadır. Vapur seferleri ise 30-60 dakika aralıklarla düzenlenir. Etkinlik planlamasında hafta sonu sefer sıklığını göz önünde bulundurmanız, vaktinde ulaşmanız açısından önemlidir.'
    },
    {
      question: 'Doğum günü organizasyonu malzemeleriyle toplu taşıma kullanılabilir mi?',
      answer: 'Küçük çaplı malzemeler (balon, parti şapkaları, hediye çantaları) ile toplu taşıma kullanılabilir. Ancak büyük dekorasyon malzemeleri, pasta standı veya pamuk şeker makinesi gibi ekipmanlar için toplu taşıma uygun değildir. BestEvent olarak full paket organizasyonlarımızda tüm ekipman taşıma ve kurulum hizmetini biz üstleniyoruz.'
    },
    {
      question: 'Çocukla vapurla seyahat güvenli mi?',
      answer: 'Evet, İstanbul vapurları ve deniz otobüsleri çocuklar için oldukça güvenli ve keyifli bir ulaşım aracıdır. Tüm gemilerde can yelekleri ve güvenlik ekipmanları bulunur. Çocukların güvertede koşmasına izin vermemek ve iç salonda oturmalarını sağlamak önemlidir. Kapalı salonlar kış aylarında sıcak, yaz aylarında klimalıdır. Vapur yolculuğu çocuklar için ayrıca eğlenceli bir deneyim olabilir.'
    }
  ]

  const content = (
    <>
      {/* Icindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Icindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#giris" className="text-blue-600 hover:text-blue-700 font-semibold">1. Istanbul'da Cocukla Toplu Tasima Kullanimi</a></li>
          <li><a href="#metro-hatlari" className="text-red-600 hover:text-red-700 font-semibold">2. Metro Hatlari Ozeti</a></li>
          <li><a href="#metrobus-detay" className="text-orange-600 hover:text-orange-700 font-semibold">3. Metrobus Hatti Detayli Rehber</a></li>
          <li><a href="#tramvay-hatlari" className="text-blue-500 hover:text-blue-600 font-semibold">4. Tramvay Hatlari</a></li>
          <li><a href="#vapur-hatlari" className="text-teal-600 hover:text-teal-700 font-semibold">5. Vapur ve Deniz Otobusu Hatlari</a></li>
          <li><a href="#cocukla-seyahat" className="text-purple-600 hover:text-purple-700 font-semibold">6. Cocukla Seyahat Ipuclari</a></li>
          <li><a href="#istanbulkart" className="text-green-600 hover:text-green-700 font-semibold">7. Istanbulkart Bilgileri</a></li>
          <li><a href="#yogun-saatler" className="text-red-500 hover:text-red-600 font-semibold">8. Yogun Saatler ve Kacinilmasi Gereken Zamanlar</a></li>
          <li><a href="#ulasim-senaryolari" className="text-indigo-600 hover:text-indigo-700 font-semibold">9. Etkinlik Mekanlarina Ulasim Senaryolari</a></li>
        </ul>
      </div>

      {/* Giris */}
      <h2 id="giris" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. Istanbul'da Cocukla Toplu Tasima Kullanimi
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Istanbul, dunyanin en buyuk metropollerinden biri olarak muazzam bir toplu tasima agina sahiptir. Metro, metrobus, tramvay, vapur, deniz otobusu ve otobus hatlari sehrin her kosesini birbirine baglar. Ancak cocuklu aileler icin toplu tasima kullanmak, yetiskinlere kiyasla cok daha fazla planlama gerektirir. Bebek arabasi, cocuk cantasi, atistirmaliklar ve zamanlamayi dogru ayarlamak, yolculugu keyifli bir deneyime donusturebilecegi gibi plansiz bir seyahat buyuk bir stres kaynagi da olabilir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Ozellikle dogum gunu organizasyonlari, cocuk etkinlikleri ve aile bulusmalari icin etkinlik mekanlarina ulasim, organizasyonun en onemli parcalarindan biridir. Vaktinde varamamak, cocugun yorulup huysuzlanmasi veya yanlis aktarma yapmak tum gunu olumsuz etkileyebilir. Bu kapsamli rehberde, Istanbul'un tum toplu tasima seceneklerini cocuklu aileler perspektifinden inceliyoruz. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-600 hover:text-blue-700 font-semibold underline">Dogum gunu organizasyonu</Link> planlarken ulasim detaylarini onceden netlestimeniz, etkinlik gununun sorunsuz gecmesi icin kritik oneme sahiptir.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Onemli Bilgi:</strong> Istanbul toplu tasima aginda 0-6 yas arasi cocuklar ucretsiz seyahat eder. 6 yas ustu cocuklar icin ogrenci Istanbulkart ile indirimli seyahat mumkundur. Seyahate cikadan once Istanbulkart bakiyenizi kontrol etmeyi unutmayin.
        </p>
      </div>

      {/* Bolum 2 - Metro Hatlari */}
      <h2 id="metro-hatlari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Metro Hatlari Ozeti
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul metrosu, sehrin en hizli ve en guvenilir toplu tasima aracidir. Trafikten bagimsiz calismasi, ozellikle cocuklu aileler icin buyuk bir avantajdir. Asansor ve engelli erisim imkanlari sayesinde bebek arabasi ile de rahatca kullanilabiir. Asagida Istanbul'un temel metro hatlarini ve etkinlik mekanlarina ulasim acisindan onemli duraklari bulabilirsiniz.
      </p>

      {/* M1 */}
      <div className="bg-red-50 rounded-xl p-6 mb-6 border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm">M1</span>
          <h3 className="text-xl font-bold text-gray-900">Yenikapi - Ataturk Havalimani - Kirazli</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Avrupa yakasinin en eski metro hatti. Aksaray, Zeytinburnu, Bakirkoy, Bahcelievler ve Ataturk Havalimani bolgesine ulasim saglar. Zeytinburnu'nda T1 tramvay hattina aktarma yapilabilir.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Bakirkoy (avm ve parti salonlari), Aksaray (merkezi bulusma noktasi), Zeytinburnu (tramvay aktarmasi)</p>
      </div>

      {/* M2 */}
      <div className="bg-red-50 rounded-xl p-6 mb-6 border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm">M2</span>
          <h3 className="text-xl font-bold text-gray-900">Yenikapi - Haciosman</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Sehrin en yogun kullanilan hatti. Taksim, Sisli, Levent, 4. Levent ve Maslak bolgesine ulasim saglar. Taksim'de funikuler, Yenikapi'da Marmaray bagantisi vardir.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Taksim (kultur merkezleri), Levent (avm parti salonlari), Sisli (merkezi etkinlik mekanlari)</p>
      </div>

      {/* M4 */}
      <div className="bg-red-50 rounded-xl p-6 mb-6 border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm">M4</span>
          <h3 className="text-xl font-bold text-gray-900">Kadikoy - Tavsantepe</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Anadolu yakasinin ana metro hatti. Kadikoy'den baslayarak Kartal, Maltepe ve Pendik'e kadar uzanir. Kadikoy'de vapur iskelesi ve Marmaray bagantisi saglar.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Kadikoy (cafe ve etkinlik mekanlari), Kartal (avm ve parti salonlari), Maltepe (sahil etkinlik alanlari)</p>
      </div>

      {/* M5 */}
      <div className="bg-red-50 rounded-xl p-6 mb-6 border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm">M5</span>
          <h3 className="text-xl font-bold text-gray-900">Uskudar - Cekmekoy</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Surucusuz metro hatti olarak hizmet veren M5, Uskudar'dan baslayarak Umraniye, Atasehir ve Cekmekoy'e ulasim saglar. Tamamen otomatik calismasi sayesinde sefer sikligi yuksektir.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Uskudar (sahil mekanlari), Umraniye (avm parti salonlari), Atasehir (modern etkinlik alanlari)</p>
      </div>

      {/* M7 */}
      <div className="bg-red-50 rounded-xl p-6 mb-6 border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm">M7</span>
          <h3 className="text-xl font-bold text-gray-900">Mecidiyekoy - Mahmutbey</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Avrupa yakasinin kuzey kesimini baglayan hat. Mecidiyekoy'de M2 hattina, metrobus hattina ve otobus terminaline aktarma imkani sunar. Basenaksehir ve Basaksehir yonune ulasim saglar.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Mecidiyekoy (merkezi aktarma), Mahmutbey (yeni yerlesim bolgeleri ve etkinlik mekanlari)</p>
      </div>

      {/* Marmaray */}
      <div className="bg-red-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm">MR</span>
          <h3 className="text-xl font-bold text-gray-900">Marmaray (Halkali - Gebze)</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Istanbul Bogazinin altindan gecen ve iki kitayi birlestiren hat. Yenikapi, Sirkeci, Uskudar ve Ayrilikcemsesi gibi kritik aktarma noktalarini barindirrir. Cocuklu aileler icin bogaz gecisi en konforlu sekilde Marmaray ile yapilir.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Sirkeci (Sultanahmet ve tarihi yarimada), Uskudar (sahil), Ayrilikcemsesi (Kadikoy merkez)</p>
      </div>

      {/* Bolum 3 - Metrobus Detay */}
      <h2 id="metrobus-detay" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. Metrobus Hatti Detayli Rehber
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul metrobus hatti, sehrin en yogun ve en uzun toplu tasima gunaergahidir. Beylikduzu'nden baslayip Sogutlucesme'ye kadar uzanan hat, gunluk milyonlarca yolcu tasiir. Metrobus, E-5 (D-100) karayolu uzerinde ozel serit kullanarak trafikten bagimsiz bir ulasim saglar. Cocuklu aileler icin metrobus yogun saatlerde zorlu olabilir ancak dogru saatlerde tercih edildiginde hizli ve ekonomik bir ulasim araci olarak one cikar.
      </p>

      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">&#9200;</span>
          <h4 className="font-bold text-orange-800 text-lg">Seyahat Suresi Bilgisi</h4>
        </div>
        <p className="text-gray-700">
          <strong>Beylikduzu - Sogutlucesme:</strong> Normal saatlerde 45-60 dakika, yogun saatlerde 70-80 dakika. Metrobus 7/24 calisiyor ancak gece seferleri daha seyrek araliklidir. Etkinliginize en az 30 dakika once varacak sekilde yola cikin.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Avrupa Yakasi Duraklari</h3>

      <p className="text-gray-700 leading-relaxed mb-6">
        Metrobusun Avrupa yakasi guzergahi, Beylikduzu'nden baslayarak Istanbul'un bati kesiminden merkeze dogru ilerler. Her durak farkli semtlere ve etkinlik mekanlarina kapi ackar. Asagida Avrupa yakasi duraklarini ve her birinin etkinlik ulasimi acisindan onemini detayli olarak bulabilirsiniz.
      </p>

      <div className="space-y-3 mb-8">
        {/* Beylikduzu Sondurak */}
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-xs">1</span>
            <div>
              <h4 className="font-bold text-gray-900">Beylikduzu Sondurak</h4>
              <p className="text-gray-600 text-sm">Metrobus hattinin batis baslangic noktasi. Beylikduzu Migros AVM, Beylikduzu Yasam Vadisi ve cevreedeki parti salonlarina yuruyus mesafesindedir. Hafta sonlari park ve bahce etkinlikleri icin ideal bir cikis noktasidir.</p>
            </div>
          </div>
        </div>

        {/* Haramidere */}
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-300">
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded-full text-xs">2</span>
            <div>
              <h4 className="font-bold text-gray-900">Haramidere</h4>
              <p className="text-gray-600 text-sm">Esenyurt ve Beylikduzu sinirinda yer alir. Marmara Park AVM ve cevre parti salonlarina erisim icin kullanisli bir duraktir.</p>
            </div>
          </div>
        </div>

        {/* Avcilar */}
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-xs">3</span>
            <div>
              <h4 className="font-bold text-gray-900">Avcilar</h4>
              <p className="text-gray-600 text-sm">Avcilar merkez ve universete kampuslerine yakin. Bolgede cocuk etkinlik mekanlari ve acik hava alanlari bulunur. Avcilar sahil parkina otobus baglantisi mevcuttur.</p>
            </div>
          </div>
        </div>

        {/* Kucukcekmece */}
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-300">
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded-full text-xs">4</span>
            <div>
              <h4 className="font-bold text-gray-900">Kucukcekmece</h4>
              <p className="text-gray-600 text-sm">Kucukcekmece golu ve cevre parklar yakinindadir. Acik hava etkinlikleri ve piknik organizasyonlari icin tercih edilen bolgeye ulasim saglar.</p>
            </div>
          </div>
        </div>

        {/* Halkali */}
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-300">
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded-full text-xs">5</span>
            <div>
              <h4 className="font-bold text-gray-900">Halkali</h4>
              <p className="text-gray-600 text-sm">Halkali tren istasyonuna yakindir. Marmaray baglantisi ile Anadolu yakasina gecis imkani sunar. Cevredeki site icin etkinlik alanlarina erisim saglar.</p>
            </div>
          </div>
        </div>

        {/* Sefakoy */}
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-xs">6</span>
            <div>
              <h4 className="font-bold text-gray-900">Sefakoy</h4>
              <p className="text-gray-600 text-sm">Sefakoy Carsi ve cevre AVM'lere yakindir. Parti salon yogunlugunun yuksek oldugu bolgelerden biridir. Florya sahiline otobus baglantisi mevcuttur.</p>
            </div>
          </div>
        </div>

        {/* Yenibosna */}
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-300">
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded-full text-xs">7</span>
            <div>
              <h4 className="font-bold text-gray-900">Yenibosna</h4>
              <p className="text-gray-600 text-sm">CNR Expo ve fuar alanlarina yakin konumu ile ozellikle buyuk etkinlikler icin onemlii bir duraktir.</p>
            </div>
          </div>
        </div>

        {/* Bahcelievler */}
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-xs">8</span>
            <div>
              <h4 className="font-bold text-gray-900">Bahcelievler</h4>
              <p className="text-gray-600 text-sm">Yogun konut bolgesi ve cocuk etkinlik mekanlari acisindan zengin bir semt. Merkezi konumu sayesinde hem bati hem dogu yonune kolay erisim saglar.</p>
            </div>
          </div>
        </div>

        {/* Sirinevler */}
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-xs">9</span>
            <div>
              <h4 className="font-bold text-gray-900">Sirinevler</h4>
              <p className="text-gray-600 text-sm">Onemli bir aktarma noktasi. Otobus baglantilari yogundur. Bakirkoy ve Bahcelievler merkezlerine kolay ulasim saglar. Bolgede cok sayida parti salonu ve cocuk oyun alani bulunur.</p>
            </div>
          </div>
        </div>

        {/* Merter */}
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-300">
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded-full text-xs">10</span>
            <div>
              <h4 className="font-bold text-gray-900">Merter</h4>
              <p className="text-gray-600 text-sm">Alisveris merkezi ve is merkezlerinin yogun oldugu bolge. Forum Istanbul'a otobus baglantisi mevcuttur.</p>
            </div>
          </div>
        </div>

        {/* Topkapi */}
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-300">
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded-full text-xs">11</span>
            <div>
              <h4 className="font-bold text-gray-900">Topkapi</h4>
              <p className="text-gray-600 text-sm">T1 tramvay hattina aktarma noktasi. Tarihi yarimada ve Sultanahmet bolgesine tramvay ile ulasim saglanabilir. Otogar baglantisi da mevcuttur.</p>
            </div>
          </div>
        </div>

        {/* Cevizlibag */}
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-300">
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded-full text-xs">12</span>
            <div>
              <h4 className="font-bold text-gray-900">Cevizlibag</h4>
              <p className="text-gray-600 text-sm">T1 tramvay hattina ve M1 metro hattina aktarma imkani sunan onemli bir kesisim noktasidir.</p>
            </div>
          </div>
        </div>

        {/* Edirnekapi */}
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-300">
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded-full text-xs">13</span>
            <div>
              <h4 className="font-bold text-gray-900">Edirnekapi</h4>
              <p className="text-gray-600 text-sm">Tarihi sur icine yakin konumu ile kultur ve sanat etkinliklerine ulasim icin kullanislidir. Feshane ve cevre kultur merkezlerine erisim saglar.</p>
            </div>
          </div>
        </div>

        {/* Ayvansaray */}
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-300">
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded-full text-xs">14</span>
            <div>
              <h4 className="font-bold text-gray-900">Ayvansaray</h4>
              <p className="text-gray-600 text-sm">Halic kiyisinda yer alir. Miniaturk ve cevre turistik alanlara yakindir. Cocuklu aileler icin Miniaturk ziyareti planlaniyorsa ideal bir inis noktasidir.</p>
            </div>
          </div>
        </div>

        {/* Zincirlikuyu */}
        <div className="bg-orange-100 rounded-lg p-5 border-l-4 border-orange-600">
          <div className="flex items-center gap-3">
            <span className="bg-orange-600 text-white font-bold px-3 py-1 rounded-full text-xs">15</span>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Zincirlikuyu (Ana Aktarma Noktasi)</h4>
              <p className="text-gray-700 text-sm"><strong>Kritik durak!</strong> M2 metro hattina (Yenikapi-Haciosman), sehirlerarasi otobus terminaline ve cok sayida otobus hattina aktarma yapilabilir. Besiktas, Levent ve Maslak yonune ulasim icin en onemli aktarma noktasidir. Etkinlik mekanlarina giderken bu durakta inis yaparak metro ile devam etmeniz cogu zaman daha hizli olacaktir.</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Anadolu Yakasi Duraklari</h3>

      <p className="text-gray-700 leading-relaxed mb-6">
        Metrobus hatti, Bogazici Koprusu'nu (15 Temmuz Sehitler Koprusu) geceerek Anadolu yakasina ulasir. Anadolu tarafindaki durak sayisi daha az olmasina ragmen, onemli aktarma noktalarini icerir.
      </p>

      <div className="space-y-3 mb-8">
        {/* Sogutlucesme */}
        <div className="bg-orange-100 rounded-lg p-5 border-l-4 border-orange-600">
          <div className="flex items-center gap-3">
            <span className="bg-orange-600 text-white font-bold px-3 py-1 rounded-full text-xs">16</span>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Sogutlucesme (Son Durak - Anadolu)</h4>
              <p className="text-gray-700 text-sm"><strong>Metrobus hattinin Anadolu yakasi son duragi.</strong> Kadikoy'e otobus baglantisi, Marmaray Sogutlucesme istasyonuna yuruyus mesafesindedir. Kadikoy merkeze ulasim icin otobus veya dolmus kullanilabilir. Bolgede etkinlik mekanlari ve kafe alanlar yogundir.</p>
            </div>
          </div>
        </div>

        {/* Uzuncayir */}
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-xs">17</span>
            <div>
              <h4 className="font-bold text-gray-900">Uzuncayir</h4>
              <p className="text-gray-600 text-sm">Kadikoy ve Uskudar arasinda yer alir. Bolgeden M4 metro hattina ve cevre semtlere otobus baglantisi mevcuttur. Camlica bolgesine ulasim icin ara nokta olarak kullanilabilir.</p>
            </div>
          </div>
        </div>

        {/* Acibadem */}
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-xs">18</span>
            <div>
              <h4 className="font-bold text-gray-900">Acibadem</h4>
              <p className="text-gray-600 text-sm">Kadikoy ile Uskudar arasinda konut agirliki bir bolge. Cevre parklara ve site ici etkinlik alanlarina ulasim saglar.</p>
            </div>
          </div>
        </div>

        {/* Kavacik */}
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-xs">19</span>
            <div>
              <h4 className="font-bold text-gray-900">Kavacik</h4>
              <p className="text-gray-600 text-sm">FSM Koprusu Anadolu cikisina yakindir. Kavacik Ticaret Merkezi ve cevreedeki etkinlik alanlarina ulasim saglar. Beykoz yonune otobus baglantisi mevcuttur.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-8 border border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3 text-xl">Metrobus Pratik Bilgiler</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-orange-700 mb-1">Calisma Saatleri</p>
            <p className="text-gray-600 text-sm">7/24 hizmet verir. Gece seferlerinde araliklar 10-15 dakikaya cikar.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-orange-700 mb-1">Sefer Araligi</p>
            <p className="text-gray-600 text-sm">Yogun saatlerde 30 saniye - 2 dakika, normal saatlerde 3-5 dakika.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-orange-700 mb-1">Ucret</p>
            <p className="text-gray-600 text-sm">Istanbulkart ile tek binis ucreti uygulanir. Aktarma indirimi gecerlidir.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-orange-700 mb-1">Bebek Arabasi</p>
            <p className="text-gray-600 text-sm">Metrobuste bebek arabasi tasimak mumkundur ancak yogun saatlerde zor olabilir.</p>
          </div>
        </div>
      </div>

      {/* Bolum 4 - Tramvay Hatlari */}
      <h2 id="tramvay-hatlari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Tramvay Hatlari
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul tramvay hatlari, ozellikle tarihi yarimada ve sehir merkezlerinde yuzey ulasimi saglar. Cocuklu aileler icin tramvay, duraklarin yol seviyesinde olmasi nedeniyle bebek arabasiyla binis kolayligi sunar. Asagida aktif tramvay hatlarini ve etkinlik ulasimi acisindan degerlerini inceliyoruz.
      </p>

      {/* T1 */}
      <div className="bg-blue-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full text-sm">T1</span>
          <h3 className="text-xl font-bold text-gray-900">Kabatas - Bagcilar</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Istanbul'un en populer tramvay hatti. Kabatas, Eminonu, Sultanahmet, Beyazit, Laleli, Aksaray, Zeytinburnu ve Bagcilar guzergahinda calisiir. Tarihi yarimadanin tum onemli noktalarini birbirine baglar.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Sultanahmet (acik hava etkinlikleri), Eminonu (vapur iskelesi), Kabatas (funikuler ve sahil), Zeytinburnu (metro aktarmasi)</p>
      </div>

      {/* T3 */}
      <div className="bg-blue-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full text-sm">T3</span>
          <h3 className="text-xl font-bold text-gray-900">Kadikoy - Moda</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Kadikoy'un nostaljik tramvayi. Kisa bir hat olmakla birlikte Moda sahili ve Kadikoy merkez arasinda keyifli bir yolculuk sunar. Cocuklar icin nostaljik tramvay deneyimi basli basina bir etkinlik olarak degererlendirilebilir.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Moda sahili (acik hava piknik ve etkinlikler), Kadikoy merkez (cafe ve etkinlik mekanlari)</p>
      </div>

      {/* T4 */}
      <div className="bg-blue-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full text-sm">T4</span>
          <h3 className="text-xl font-bold text-gray-900">Topkapi - Mescidi Selam</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Eyup, Alibeykoyu ve Sultangazi bolgesine ulasim saglar. Eyup Sultan ve Pierre Loti'ye ulasim icin kullanilabilir. Cocuklu aileler icin Eyup Sultan ve teleferik kombinasyonu populer bir rota olusturur.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Eyupsultan (tarihi mekan ziyaretleri, teleferik), Alibeykoyu (park alanlari)</p>
      </div>

      {/* T5 */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full text-sm">T5</span>
          <h3 className="text-xl font-bold text-gray-900">Cibali - Eminonu</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Halic kiyisi boyunca calisan hat. Eminonu ve Cibali arasinda kisa bir guzergaha sahiptir. Halic kiyisi yuruuyus parkuru ve kultur merkezlerine ulasim saglar.
        </p>
        <p className="text-gray-600 text-sm"><strong>Etkinlik noktalari:</strong> Eminonu (vapur baglantisi), Halic kiyisi (yuruyus ve acik hava etkinlikleri)</p>
      </div>

      {/* Bolum 5 - Vapur ve Deniz Otobusu */}
      <h2 id="vapur-hatlari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Vapur ve Deniz Otobusu Hatlari
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul'da deniz ulasimi, hem ulaastirma araci hem de essiz bir deneyim sunar. Cocuklu aileler icin vapur yolculugu, seyahatin kendisini bir etkinlige donustururebilir. Martilara simit atma, bogaz manzarasi ve acik havada keyifli bir yolculuk, cocuklarin cok sevdigi aktiviteler arasindadir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Kadikoy Iskelesi */}
        <div className="bg-teal-50 rounded-xl p-5 border-l-4 border-teal-500">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="bg-teal-500 text-white px-2 py-1 rounded text-xs">VAPUR</span>
            Kadikoy Iskelesi
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            Anadolu yakasinin en yogun iskele noktasi. Eminonu, Besiktas ve Adalar'a duzenli seferler yapilir. M4 metro ve T3 tramvay baglantisi mevcuttur.
          </p>
          <p className="text-teal-700 text-xs font-semibold">Hatlar: Kadikoy-Eminonu, Kadikoy-Besiktas, Kadikoy-Adalar</p>
        </div>

        {/* Uskudar Iskelesi */}
        <div className="bg-teal-50 rounded-xl p-5 border-l-4 border-teal-500">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="bg-teal-500 text-white px-2 py-1 rounded text-xs">VAPUR</span>
            Uskudar Iskelesi
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            Besiktas ve Eminonu'ne sik sefer yapan onemli bir iskele. M5 metro baglantisi ve Marmaray erisimi bulunur. Kiz Kulesi motor seferleri de buradan kalkar.
          </p>
          <p className="text-teal-700 text-xs font-semibold">Hatlar: Uskudar-Besiktas, Uskudar-Eminonu, Uskudar-Kabatas</p>
        </div>

        {/* Besiktas Iskelesi */}
        <div className="bg-teal-50 rounded-xl p-5 border-l-4 border-teal-500">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="bg-teal-500 text-white px-2 py-1 rounded text-xs">VAPUR</span>
            Besiktas Iskelesi
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            Avrupa yakasindaki en populer iskelelerden biri. Uskudar ve Kadikoy'e seferler yapilir. Barbaros Bulvari uzerinden Besiktas merkezine yuruyus mesafesindedir. Bogaz turu seferleri de bu iskeleden kalkar.
          </p>
          <p className="text-teal-700 text-xs font-semibold">Hatlar: Besiktas-Uskudar, Besiktas-Kadikoy, Bogaz hatlari</p>
        </div>

        {/* Eminonu Iskelesi */}
        <div className="bg-teal-50 rounded-xl p-5 border-l-4 border-teal-500">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="bg-teal-500 text-white px-2 py-1 rounded text-xs">VAPUR</span>
            Eminonu Iskelesi
          </h4>
          <p className="text-gray-700 text-sm mb-2">
            Istanbul'un en buyuk iskele kompleksi. Kadikoy, Uskudar, Adalar ve Bogaz turuu seferleri yapilir. T1 tramvay duragi hemen yanindadir. Cocuklar icin Balik Ekmek ve Misir deneyimi ile kombine edilebilir.
          </p>
          <p className="text-teal-700 text-xs font-semibold">Hatlar: Eminonu-Kadikoy, Eminonu-Uskudar, Eminonu-Adalar, Bogaz hatlari</p>
        </div>
      </div>

      <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">&#9200;</span>
          <h4 className="font-bold text-teal-800 text-lg">Deniz Ulasimi Seyahat Ipucu</h4>
        </div>
        <p className="text-gray-700">
          Vapur seferleri hava kosullarina bagli olarak iptal edilebilir. Siddetli firtina ve yogun sis kosullarinda seferler durdurulur. Etkinlik gununuzde deniz ulasimi planliyorsaniz, yola cikmadan once <strong>ibb.istanbul</strong> veya <strong>sehirhatlari.istanbul</strong> uzerinden sefer durumunu kontrol edin. Alternatif olarak Marmaray veya metrobus guzergahini B plani olarak hazir tutun.
        </p>
      </div>

      {/* Bolum 6 - Cocukla Seyahat Ipuclari */}
      <h2 id="cocukla-seyahat" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Bebek Arabasi ve Cocukla Seyahat Ipuclari
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Cocukla toplu tasima kullanmak, dogru planlama ile rahat ve keyifli bir deneyime donusebilir. Asagidaki ipuclari, seyahatinizi kolaylastirmaniz icin derlenmistir. Ozellikle <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-600 hover:text-blue-700 font-semibold underline">dogum gunu organizasyonu</Link> icin bir mekana giderken bu onerilere dikkat etmeniz buyuk fayda saglar.
      </p>

      {/* Asansor ve Erisim */}
      <div className="bg-purple-50 rounded-xl p-6 mb-6 border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Asansor ve Engelli Erisim</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-1">&#8226;</span>
            <span>Istanbul metro istasyonlarinin buyuk cogunlugunda asansor bulunmaktadir. Ancak bazi eski istasyonlarda asansor arizali olabilir. Yola cikmadan once IBB Cep Trafik uygulamasindan kontrol edin.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-1">&#8226;</span>
            <span>Tramvay duraklari yol seviyesinde oldugu icin bebek arabasiyla binis en kolayidir. T1 hattinda tum duraklarda duz erisim mevcuttur.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-1">&#8226;</span>
            <span>Metrobus durakkirinda yuruyus mesafeleri uzun olabilir. Bebek arabasyi ile tasinan aileler, yukselen rampalara ve uzun koridorlara hazirlikli olmalidir.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-1">&#8226;</span>
            <span>Vapurlarda alt katta bebek arabasi alani mevcuttur. Personelden yardim isteyebilirsiniz.</span>
          </li>
        </ul>
      </div>

      {/* Bebek Arabasi Ozel Ipuclari */}
      <div className="bg-purple-50 rounded-xl p-6 mb-6 border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Bebek Arabasi ile Pratik Ipuclari</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-purple-700 mb-1">Katlanabilir Araba Tercih Edin</p>
            <p className="text-gray-600 text-sm">Toplu tasimada tek elle katlanabilir bebek arabalari hayat kurtaricidir. Yogun saatlerde arabaiyi katlayip kucakta tasimak gerekebilir.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-purple-700 mb-1">Genis Turnike Kullanin</p>
            <p className="text-gray-600 text-sm">Metro ve metrobus girislerinde engelli/bebek arabasi turnikeleri bulunur. Bu turnikelerden gecmek icin Istanbulkart'inizi okutmaniiz yeterlidir.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-purple-700 mb-1">Asansor Konumlarini Bilin</p>
            <p className="text-gray-600 text-sm">Istasyon girislerinde asansor konum haritalari bulunur. Genellikle peronun baas veya son kismina yakin konumlandirilmistir.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-purple-700 mb-1">Yedek Malzeme Tasiyin</p>
            <p className="text-gray-600 text-sm">Bez, islak mendil, atistirmalik ve yedek kiyafet mutlaka yaniniizda bulunsun. Uzun yolculuklarda bunlar olmazsa olmazdir.</p>
          </div>
        </div>
      </div>

      {/* Cocuklarla Genel Ipuclari */}
      <div className="bg-purple-50 rounded-xl p-6 mb-8 border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Genel Cocukla Seyahat Onerileri</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-1">&#8226;</span>
            <span><strong>Oyalanma malzemesi hazirlayin:</strong> Tablet, boyama kitabi veya kucuk oyuncaklar, uzun yolculuklarda cocugun dikkatini dagitmak icin idealdir.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-1">&#8226;</span>
            <span><strong>Tuvalet planlamasi yapin:</strong> Metro ve metrobus duraklarinda tuvalet sayisi sinirlidir. Yola cikmadan once tuvalet ihtiyacini karsilayin. AVM'ler ve cami tuvaletleri alternatif olarak kullanilabilir.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-1">&#8226;</span>
            <span><strong>Cocugun elini birakmayin:</strong> Kalabalik istasyonlarda ve arac icinde cocugunuzun elinizi veya arabanin kolunu tutmasini saglayin. Kapanma aninda kapilara dikkat edin.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-1">&#8226;</span>
            <span><strong>Iletisim bilgisi tasitin:</strong> Kucuk cocuklarin cebine veya bilekligine telefon numaranizi yazip koymak, kaybolma durumunda hayat kurtarici olabilir.</span>
          </li>
        </ul>
      </div>

      {/* Bolum 7 - Istanbulkart Bilgileri */}
      <h2 id="istanbulkart" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Istanbulkart Bilgileri
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul toplu tasimasinda Istanbulkart kullanimi zorunludur. Farkli kart turleri farkli indiriimler sunar. Etkinlige gitmeden once kart bakiyenizi kontrol etmek, durakta zaman kaybetmemeniz icin onemlidir.
      </p>

      <div className="bg-green-50 rounded-xl p-6 mb-8 border border-green-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Istanbulkart Turleri ve Avantajlari</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-1">Anonim Istanbulkart (Mavi Kart)</h4>
            <p className="text-gray-600 text-sm">Herkese acik standart kart. Metro istasyonlari, gazete bayileri ve bufeleerden temin edilir. Tam ucret uygullannir. Ailenin tum bireyleri tek kartla seyahat edebilir (sirrayla okutarak).</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 mb-1">Ogrenci Istanbulkart</h4>
            <p className="text-gray-600 text-sm">6 yas ustu ogrenciler icin indirimli kart. Okuldan alinan ogrenci belgesi ile IBB iletisim noktalarindan basvuru yapilabilir. Tam ucretin yaklasik yarisini odersiniz.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 mb-1">Cocuk Kart (0-6 Yas)</h4>
            <p className="text-gray-600 text-sm">0-6 yas arasi cocuklar toplu tasimada ucretsiz seyahat eder. Ayri bir kart cikarttirmaya gerek yoktur ancak yanlarinda yetiskin bulunmasi zorunludur.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-700 mb-1">Aktarma Indirimi</h4>
            <p className="text-gray-600 text-sm">Istanbulkart ile yapilan seyahatlerde aktarma indirimi uygulanir. Ilk binisten sonra yapilan aktarmaliarda indirimli ucret odersiniz. Bu ozellikle metro-metrobus veya metro-otobus aktarmalarinida tasarruf saglar.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Pratik Bilgi:</strong> Istanbulkart bakiyenizi IBB Cep Trafik uygulamasi, Istanbulkart uygulamasi veya NFC ozellikli telefonunuz ile kontrol edebilirsiniz. Metro istasyonlarindaki dolum makinelerinden nakit veya banka karti ile yuklleme yapabilirsiniz. Etkinlik gunu icin en az 100 TL bakiye bulundurmanizi oneririz.
        </p>
      </div>

      {/* Bolum 8 - Yogun Saatler */}
      <h2 id="yogun-saatler" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        8. Yogun Saatler ve Kacinilmasi Gereken Zamanlar
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul toplu tasimasinda yogun saatler, cocuklu aileler icin en buyuk zorluk kaynagindir. Kalabalik araclar, uzun bekleme sureleri ve stresli ortam, ozellikle kucuk cocuklari olumsuz etkiler. Asagidaki bilgiler, etkinlik planlamanizda zamanlamayi dogru yapmaniz icin yol gosteerici olacaktir.
      </p>

      {/* Yogun Saatler Uyari Kutusu */}
      <div className="bg-red-50 rounded-xl p-6 mb-6 border-2 border-red-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">&#9888;</span>
          <h3 className="text-xl font-bold text-red-700">Yogun Saat Uyarisi</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-red-200">
            <p className="font-semibold text-red-700 mb-2">Sabah Yogunlugu</p>
            <p className="text-gray-700 text-sm"><strong>07:30 - 09:30</strong> arasi tum hatlar cok yogundur. Is ve okul saati baslangici nedeniyle metro, metrobus ve otobuslerde ayakta yolculuk kacinilmaz olur. Bu saatlerde cocukla seyahatten kesinlikle kacinin.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-200">
            <p className="font-semibold text-red-700 mb-2">Aksam Yogunlugu</p>
            <p className="text-gray-700 text-sm"><strong>17:00 - 19:30</strong> arasi is cikisi yogunlugu yasanir. Ozellikle metrobus hatti bu saatlerde asiri kalabaliktir. Cocuklu aileler icin bu saat araliginda metrobus kullanmak tavsiye edilmez.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-xl p-6 mb-8 border-2 border-green-300">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">&#9989;</span>
          <h3 className="text-xl font-bold text-green-700">Ideal Seyahat Zamanlari</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-semibold text-green-700 mb-1">Sabah Erken</p>
            <p className="text-gray-600 text-sm">06:00 - 07:30 arasi araclar bos ve rahattir. Erken baslayan etkinlikler icin ideal.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-semibold text-green-700 mb-1">Ogle Arasi</p>
            <p className="text-gray-600 text-sm">10:00 - 16:00 arasi en konforlu zaman dilimidir. Cocuklu aileler icin en uygun seyahat penceresidir.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-semibold text-green-700 mb-1">Hafta Sonu</p>
            <p className="text-gray-600 text-sm">Hafta sonlari genel olarak daha sakindirr. Ancak ogle saatlerinde AVM bolgeleri yogunlasabilir.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">&#9200;</span>
          <h4 className="font-bold text-yellow-800 text-lg">Etkinlik Zamanlama Onerisi</h4>
        </div>
        <p className="text-gray-700">
          Cocuk dogum gunu organizasyonlari ve etkinlikler icin en ideal saat araligi <strong>11:00 - 15:00</strong> arasidiir. Bu zaman diliminde hem toplu tasima daha rahat kullanilir hem de cocuklarin enerji seviyesi yuksek olur. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-yellow-700 hover:text-yellow-800 font-semibold underline">Full paket dogum gunu organizasyonu</Link> planliyorsaniz, bu saat araligini secmeniz hem sizin hem de davetlilerinizin ulasimini kolaylastiracaktir.
        </p>
      </div>

      {/* Bolum 9 - Ulasim Senaryolari */}
      <h2 id="ulasim-senaryolari" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        9. Etkinlik Mekanlarina Ulasim Senaryolari
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Asagida Istanbul'un farkli bolgeleerindeki etkinlik mekanlarina toplu tasima ile ulasim icin ornek senaryolar hazirladik. Bu senaryolar, gercek hayatta sikca karsilasilan rotalari yansitmaktadir. Her senaryo icin alternatif guzergahlar da belirtilmistir.
      </p>

      {/* Senaryo 1 */}
      <div className="bg-indigo-50 rounded-xl p-6 mb-6 border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">Rota 1</span>
          Beylikduzu'nden Kadikoy Etkinlik Mekanina
        </h3>
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-gray-700 mb-2"><strong>Baslangic:</strong> Beylikduzu Sondurak (Metrobus)</p>
          <p className="text-gray-700 mb-2"><strong>Hedef:</strong> Kadikoy Merkez (Etkinlik mekan/parti salonu)</p>
          <p className="text-gray-700 mb-2"><strong>Tahmini Sure:</strong> 70-90 dakika</p>
        </div>
        <div className="space-y-2 text-gray-700">
          <p><strong>Adim 1:</strong> Beylikduzu Sondurak'tan metrobuse binin. Sogutlucesme yonune gidin.</p>
          <p><strong>Adim 2:</strong> Sogutlucesme'de inin. Buradan Kadikoy yonune giden otobus veya minibuse binin (yaklasik 10-15 dakika).</p>
          <p><strong>Alternatif:</strong> Zincirlikuyu'da inin, M2 metro ile Yenikapi'ya gidin. Yenikapi'dan Marmaray ile Ayrilikcemsesi'ne gecin ve Kadikoy'e yuruyin.</p>
        </div>
        <div className="bg-indigo-100 rounded-lg p-3 mt-4">
          <p className="text-indigo-700 text-sm"><strong>Ipucu:</strong> Hafta sonu bu rotayi kullanacaksaniiz, 10:00-14:00 arasi yola cikmaniz en rahat seyahat deneyimini sunar. <Link to="/organizasyonlar/palyaco-kiralama" className="text-indigo-700 hover:text-indigo-800 font-semibold underline">Palyaco kiralama</Link> hizmetimizde ekibimiz etkinlik mekanina zamaninda ulasimi kendisi koordine eder.</p>
        </div>
      </div>

      {/* Senaryo 2 */}
      <div className="bg-indigo-50 rounded-xl p-6 mb-6 border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">Rota 2</span>
          Umraniye'den Besiktas Sahil Etkinligine
        </h3>
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-gray-700 mb-2"><strong>Baslangic:</strong> Umraniye (M5 Metro)</p>
          <p className="text-gray-700 mb-2"><strong>Hedef:</strong> Besiktas Sahil (Acik hava etkinlik alani)</p>
          <p className="text-gray-700 mb-2"><strong>Tahmini Sure:</strong> 45-60 dakika</p>
        </div>
        <div className="space-y-2 text-gray-700">
          <p><strong>Adim 1:</strong> Umraniye istasyonundan M5 metro ile Uskudar'a gidin (yaklasik 15 dakika).</p>
          <p><strong>Adim 2:</strong> Uskudar iskellesinden Besiktas vapuruna binin (yaklasik 15-20 dakika).</p>
          <p><strong>Adim 3:</strong> Besiktas iskelesinden sahil etkinlik alanina yuruyun (5-10 dakika).</p>
          <p><strong>Alternatif:</strong> Uskudar'dan Marmaray ile Yenikapi'ya, Yenikapi'dan M2 metro ile Taksim'e, Taksim'den funikuler ile Kabatas'a ve Kabatas'tan yuruyerek Besiktas'a ulasabilirsiniz.</p>
        </div>
        <div className="bg-indigo-100 rounded-lg p-3 mt-4">
          <p className="text-indigo-700 text-sm"><strong>Ipucu:</strong> Vapur seyahati cocuklar icin keyifli bir deneyimdir. Etkinlik oncesi bogaz manzarasi esliginde keyifli bir yolculuk, cocugun moralini yukseltir.</p>
        </div>
      </div>

      {/* Senaryo 3 */}
      <div className="bg-indigo-50 rounded-xl p-6 mb-8 border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">Rota 3</span>
          Bakirkoy'den Atasehir Parti Salonuna
        </h3>
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-gray-700 mb-2"><strong>Baslangic:</strong> Bakirkoy (M1 Metro / Metrobus)</p>
          <p className="text-gray-700 mb-2"><strong>Hedef:</strong> Atasehir (Parti salonu / Etkinlik merkezi)</p>
          <p className="text-gray-700 mb-2"><strong>Tahmini Sure:</strong> 50-70 dakika</p>
        </div>
        <div className="space-y-2 text-gray-700">
          <p><strong>Adim 1:</strong> Bakirkoy'den M1 metro ile Yenikapi'ya gidin (yaklasik 15 dakika).</p>
          <p><strong>Adim 2:</strong> Yenikapi'dan Marmaray ile Uskudar'a gecin (yaklasik 15 dakika).</p>
          <p><strong>Adim 3:</strong> Uskudar'dan M5 metro ile Atasehir istasyonuna gidin (yaklasik 10-15 dakika).</p>
          <p><strong>Alternatif:</strong> Sirinevler metrobus duragindan metrobuse binip Uzuncayir'da inin, buradan Atasehir yonune otobus kullanabilirsiniz.</p>
        </div>
        <div className="bg-indigo-100 rounded-lg p-3 mt-4">
          <p className="text-indigo-700 text-sm"><strong>Ipucu:</strong> Bu rota iki kita arasinda gecis gerektirir. Marmaray gecisi en hizli ve en konforlu yontemdir. Bebek arabasiyla seyahatte Marmaray asansorleri kullanislidir.</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Etkinlik Ulasimi Konusunda Endiselenmleyin!</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Istanbul'da toplu tasima ile etkinlik mekanlarina ulasim, dogru planlama ile oldukca pratik ve ekonomiktir. Ancak etkinligin kendisi icin profesyonel bir destek almak isterseniz, BestEvent olarak <Link to="/organizasyonlar/full-paket-organizasyon" className="text-blue-600 hover:text-blue-700 font-semibold underline">full paket dogum gunu organizasyonu</Link> hizmetimizle tum sureciizi yonetiyoruz. Dekorasyon, gosteriler, ikram ve eglence dahil her detayi biz planliyoruz, siz sadece keyfini cikarin.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Ayrica <Link to="/organizasyonlar/palyaco-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline">palyaco kiralama</Link> hizmetimizde ekibimiz belirlenen etkinlik mekanina kendi ulasimini organize eder. Siz sadece cocugunuzun mutluluguna odaklanin, geri kalanini bize birakin.
        </p>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="toplu-tasima-etkinlik-ulasim"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/full-paket-organizasyon"
      relatedServiceName="Dogum Gunu Organizasyonu"
    />
  )
}

export default TopluTasimaEtkinlikUlasim
