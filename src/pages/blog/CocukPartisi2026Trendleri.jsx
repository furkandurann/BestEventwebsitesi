import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const CocukPartisi2026Trendleri = () => {
  const faqData = [
    {
      question: '2026 yilinda cocuk partilerinde en populer trend nedir?',
      answer: 'Surdurulebilir ve eko-dostu partiler 2026 yilinin en guclu trendi olarak one cikiyor. Aileler geri donusturulmus malzemelerden dekorasyon, dogal boya ile yuz boyama, tohum bombasi hediye cantasi gibi cevre dostu seceneklere yoneliyor. Bunun yani sira STEM temali bilim partileri ve kisisellesterilmis deneyimler de buyuk talep goruyor.'
    },
    {
      question: 'STEM temali cocuk partisi nasil planlanir?',
      answer: 'STEM temali bir parti icin oncelikle cocuklarin yas grubuna uygun deneyler ve aktiviteler secilmeli. 4-6 yas icin renkli volkan deneyi, slime yapimi ve bubble show gibi gorsel aktiviteler ideal. 7-10 yas icin basit kodlama oyunlari, robot yapimi ve bilim yarismasi formatlari tercih edilebilir. Profesyonel bir organizasyon ekibi ile calisarak guvenli ve egitici bir etkinlik planlanabilir.'
    },
    {
      question: 'Kucuk ve samimi partiler neden populer hale geldi?',
      answer: 'Pandemi sonrasi donemde aileler buyuk kalabaliklar yerine az sayida yakin arkadas ile kaliteli vakit gecirmeyi tercih etmeye basladi. 8-12 cocukluk kucuk partilerde her cocuga daha fazla ilgi gosterilebiliyor, aktiviteler daha derinlemesine yasanabiliyor ve genel deneyim kalitesi artiyor. Bu trend 2026 da guclenerek devam ediyor.'
    },
    {
      question: 'Retro temali cocuk partisi icin hangi donem secilmeli?',
      answer: '2026 da en populer retro donemler 90lar ve 2000ler basi. Ebeveynlerin kendi cocukluklarindan tanidiklari oyunlar, muzikler ve temalar hem nostalji yaratiyor hem de cocuklar icin yeni ve heyecan verici oluyor. Pac-Man, Super Mario, eski cizgi filmler ve retro oyun konsollari en cok tercih edilen retro temalari arasinda.'
    },
    {
      question: 'AR/VR teknolojisi cocuk partilerinde guvenli mi?',
      answer: 'Evet, profesyonel ekipmanlarla ve uzman gozetiminde AR/VR deneyimleri cocuklar icin guvenlidir. 6 yas ve uzeri cocuklar icin uygun olan bu teknolojiler, kisa sureli oturumlar halinde (10-15 dakika) uygulanmali. Hareket sensoru tabanli oyunlar, sanal hayvanat bahcesi turlari ve interaktif hikaye anlatimi en populer VR parti aktiviteleri arasinda yer aliyor.'
    },
    {
      question: 'Cok kulturlu tema partisi nasil organize edilir?',
      answer: 'Farkli kulturlerden yemekler, muzikler, oyunlar ve dekorasyon ogeleri bir araya getirilerek zengin bir parti deneyimi olusturulabilir. Istanbul un kozmopolit yapisi bu tarz partiler icin mukemmel bir zemin sunuyor. Japon origami istasyonu, Meksika pinyata oyunu, Hint kina boyamasi ve Turk geleneksel oyunlari gibi aktiviteler bir arada sunulabilir.'
    }
  ]

  const content = (
    <>
      {/* Icindekiler */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border-l-4 border-purple-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Icindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#giris" className="text-purple-600 hover:text-purple-700 font-semibold">1. 2026 Cocuk Partisi Trendleri: Buyuk Donusum</a></li>
          <li><a href="#trend-1" className="text-purple-600 hover:text-purple-700 font-semibold">2. Surdurulebilir / Eko Partiler</a></li>
          <li><a href="#trend-2" className="text-purple-600 hover:text-purple-700 font-semibold">3. STEM / Bilim Temali Partiler</a></li>
          <li><a href="#trend-3" className="text-purple-600 hover:text-purple-700 font-semibold">4. Kisisellesterilmis Deneyimler</a></li>
          <li><a href="#trend-4-5" className="text-purple-600 hover:text-purple-700 font-semibold">5. Mini Konser, Outdoor Adventure ve Daha Fazlasi</a></li>
          <li><a href="#trend-6-10" className="text-purple-600 hover:text-purple-700 font-semibold">6. Nostalji, Teknoloji, Samimi Partiler, Cok Kultur ve Wellness</a></li>
          <li><a href="#musteri-hikayeleri" className="text-purple-600 hover:text-purple-700 font-semibold">7. Gercek Musteri Hikayeleri: Uluslararasi Aileler</a></li>
          <li><a href="#uzman-tahmini" className="text-purple-600 hover:text-purple-700 font-semibold">8. Uzman Tahmini ve 2026 Ongorusu</a></li>
          <li><a href="#sss" className="text-purple-600 hover:text-purple-700 font-semibold">9. Sik Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Yil Karsilastirma Timeline */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Cocuk Partisi Trendleri: Yillar Icinde Degisim</h3>
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          <div className="flex-1 bg-gray-100 rounded-lg p-5 border-t-4 border-gray-400 text-center">
            <span className="text-3xl font-extrabold text-gray-500">2024</span>
            <ul className="text-sm text-gray-600 mt-3 space-y-1 text-left">
              <li>- Klasik tema partileri hakim</li>
              <li>- Buyuk davetli listeleri</li>
              <li>- Standart dekorasyon</li>
              <li>- Tek tip eglence formati</li>
            </ul>
          </div>
          <div className="flex items-center justify-center text-2xl text-purple-400 font-bold hidden md:flex">&rarr;</div>
          <div className="flex-1 bg-purple-50 rounded-lg p-5 border-t-4 border-purple-400 text-center">
            <span className="text-3xl font-extrabold text-purple-500">2025</span>
            <ul className="text-sm text-gray-600 mt-3 space-y-1 text-left">
              <li>- Kisisellestirme baslangici</li>
              <li>- Eko bilinci artisi</li>
              <li>- Kucuk parti trendi dogdu</li>
              <li>- Teknoloji denemeleri</li>
            </ul>
          </div>
          <div className="flex items-center justify-center text-2xl text-pink-400 font-bold hidden md:flex">&rarr;</div>
          <div className="flex-1 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-5 border-t-4 border-pink-500 text-center shadow-md">
            <span className="text-3xl font-extrabold text-pink-600">2026</span>
            <ul className="text-sm text-gray-700 mt-3 space-y-1 text-left font-medium">
              <li>- Surdurulebilir partiler patladi</li>
              <li>- STEM/bilim ana akim oldu</li>
              <li>- AR/VR deneyimleri yayginlasti</li>
              <li>- Cok kulturlu formatlar yukseliste</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giris */}
      <h2 id="giris" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        1. 2026 Cocuk Partisi Trendleri: Buyuk Donusum
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Cocuk partileri artik sadece balon ve pasta kesiminden ibaret degil. 2026 yili, cocuk eglence endustrisinde kokenli bir donusum yasaniyor. Aileler artik daha bilinçli, daha yaratici ve daha anlamli kutlamalar ariyorlar. Istanbul'da her hafta duzenledigimiz yuzlerce etkinlikte bu degisimi yakindan gozlemliyoruz. Geleneksel dogum gunu formatlari yerini deneyim odakli, kisisellesterilmis ve surdurulebilir kutlamalara birakiyor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bu kapsamli trend raporunda, 2026 yilinin en guclu 10 cocuk partisi trendini, gercek musteri deneyimlerini ve uzman tahminlerini sizlerle paylasiyoruz. Ister kendi cocugunuzun dogum gununu planliyorsaniz ister profesyonel bir organizator olarak sektoru takip ediyorsaniz, bu rehber size yol gosterecek. Yillik 1500+ etkinlik deneyimimiz ve uluslararasi musterilerimizin geri bildirimleriyle sekillenen bu rapor, Turkiye'deki cocuk partisi sahnesinin nabzini tutuyor.
      </p>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-6 rounded-lg mb-8">
        <p className="text-gray-800 font-semibold">
          <strong>Onemli:</strong> Bu trend raporu, BestEvent'in 2024-2026 yillari arasinda gerceklestirdigi 4.500+ etkinlik verisi, uluslararasi musteri geri bildirimleri ve sektor analizlerine dayanmaktadir. Trendler Istanbul odakli olmakla birlikte, Turkiye geneli ve global egilimlerle desteklenmistir.
        </p>
      </div>

      {/* TREND 1 - Surdurulebilir/Eko Partiler */}
      <h2 id="trend-1" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        2. Surdurulebilir / Eko Partiler
      </h2>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border border-green-200 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">Trend #1: Eko-Dostu Kutlamalar</h3>
          <div className="flex items-center gap-2">
            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Yukselen Trend</span>
            <span className="text-green-600 text-2xl font-bold">&uarr;</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="text-sm text-gray-600 font-medium">Tahmin Gucu: 5/5</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          2026'nin en guclu trendi surdurulebilir partiler. Geri donusturulmus malzemelerden dekorasyon, dogal boyalarla yuz boyama, bitkisel bazli parti ikramlari ve tohum bombasi hediye cantalari gibi uygulamalar hizla yayiliyor. Plastik tabak ve bardak yerine bambu veya misir nisastasi bazli alternatifler kullaniliyor. Balon yerine kumas flamalar ve kagit cicekler tercih ediliyor.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Istanbul'daki aileler ozellikle dogal malzeme kullanimina buyuk ilgi gosteriyor. Pamuk seker ve popcorn gibi ikramlar bile organik ve katki maddesiz versiyonlariyla sunuluyor. Bu trend sadece cevreci bir tercih degil, ayni zamanda cocuklara surdurulebilirlik bilinci asilayan egitici bir yaklasim. Partinin kendisi bir ogrenme deneyimine donusuyor: cocuklar geri donusum istasyonlarinda atiklari ayirmayi, tohum ekmeyi ve dogal malzemelerle el isi yapmayi ogreniyor.
        </p>
        <div className="bg-white rounded-lg p-4 border border-green-100">
          <p className="text-sm text-gray-600"><strong>2024:</strong> %12 tercih orani &rarr; <strong>2025:</strong> %28 tercih orani &rarr; <strong>2026:</strong> %47 tercih orani (tahmini)</p>
        </div>
      </div>

      {/* TREND 2 - STEM/Bilim */}
      <h2 id="trend-2" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        3. STEM / Bilim Temali Partiler
      </h2>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6 border border-blue-200 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">Trend #2: Bilim ve Kesfin Partisi</h3>
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Yukselen Trend</span>
            <span className="text-blue-600 text-2xl font-bold">&uarr;</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="text-sm text-gray-600 font-medium">Tahmin Gucu: 5/5</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          STEM (Bilim, Teknoloji, Muhendislik, Matematik) temali partiler 2026'da ana akima ulasti. Cocuklar artik dogum gunlerinde deney yapmak, robot insa etmek ve kodlama oyunlari oynamak istiyor. Volkan deneyi, slime yapimi, kristal yetistirme ve renkli kimya gosterileri en populer aktiviteler arasinda. <Link to="/organizasyonlar/bubble-show" className="text-blue-600 hover:text-blue-700 font-semibold underline">Bubble show gosterisi</Link> de bilim temali partilerin vazgecilmez parcasi haline geldi; kopuk kimyasi ve isik kirinimlari ustune mini dersler esliginde sunuluyor.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bu trendin en guzel yani, egitim ve eglenceyi birlestirecek yaratici formatlari mumkun kilmasi. "Kucuk Bilginler Laboratuvari" konseptinde her cocuk beyaz onluk giyerek deneylere katiliyor. Robotik atolye istasyonlari, 3D kalem ile tasarim kosesi ve kodlama oyun istasyonlari kuruluyor. Istanbul'daki STEM parti talebimiz bir onceki yila gore %65 artti. Ozellikle 6-10 yas grubunda bu tema mutlak favori konumunda.
        </p>
        <div className="bg-white rounded-lg p-4 border border-blue-100">
          <p className="text-sm text-gray-600"><strong>2024:</strong> %8 tercih orani &rarr; <strong>2025:</strong> %22 tercih orani &rarr; <strong>2026:</strong> %41 tercih orani (tahmini)</p>
        </div>
      </div>

      {/* TREND 3 - Kisisellestirme */}
      <h2 id="trend-3" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        4. Kisisellesterilmis Deneyimler
      </h2>

      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 mb-6 border border-pink-200 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">Trend #3: Her Cocuga Ozel Parti</h3>
          <div className="flex items-center gap-2">
            <span className="bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">Yukselen Trend</span>
            <span className="text-pink-600 text-2xl font-bold">&uarr;</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span className="text-sm text-gray-600 font-medium">Tahmin Gucu: 4/5</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Hazir paket" anlayisi tarih oluyor. 2026'da aileler cocuklarinin kisiligine, ilgi alanlarina ve hayallerine gore tamamen ozellesmis parti deneyimleri talep ediyor. Cocugun en sevdigi renk, karakter, muzik ve aktiviteler temel alinarak sifirdan tasarlanan partiler buyuk rabet goruyor. <Link to="/organizasyonlar/kostumlu-karakterler" className="text-pink-600 hover:text-pink-700 font-semibold underline">Kostumlu karakter hizmeti</Link> de bu trendle birlikte evrim gecirdi; artik sadece bilinen karakterler degil, cocugun kendi cizdigi hayali karakterlerin kostumlu versiyonlari bile hazirlaniyor.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Kisisellestirme trendi dekorasyondan ikramlara, oyunlardan muzige kadar her detaya yansimis durumda. Her davetli cocuk icin isimli hediye cantalari, kisisellesterilmis parti sapkalari ve hatta her cocugun tercihine gore farkli renkte pamuk seker secenegi sunuluyor. Parti davetiyelerinde QR kodla interaktif animasyonlar, cocugun fotografiyla ozel tasarim posterler ve dogum gunu cocugununun adinin yerlestirildigi hikaye kitaplari en cok talep edilen kisisellestirme detaylari.
        </p>
        <div className="bg-white rounded-lg p-4 border border-pink-100">
          <p className="text-sm text-gray-600"><strong>2024:</strong> %18 tercih orani &rarr; <strong>2025:</strong> %33 tercih orani &rarr; <strong>2026:</strong> %52 tercih orani (tahmini)</p>
        </div>
      </div>

      {/* TREND 4 & 5 */}
      <h2 id="trend-4-5" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        5. Mini Konser/Karaoke ve Outdoor Adventure
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Trend 4 - Mini Konser */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Trend #4: Mini Konser/Karaoke</h3>
            <div className="flex items-center gap-1">
              <span className="bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full">Yukselen</span>
              <span className="text-violet-600 text-xl font-bold">&uarr;</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-sm">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="text-xs text-gray-600">4/5</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            TikTok ve YouTube kulturuyle buyuyen yeni nesil, kendi sahne performansini yasamak istiyor. Mini konser formatinda cocuklar sahneye cikarak sarkiyi soyluyor, kendi muzik klibini cekiyor. LED isik gosterileri, profesyonel mikrofon seti ve mini DJ booth ile gercek bir konser atmosferi yaratiliyor. Karaoke partileri ozellikle 8-12 yas grubunda patlama yapti.
          </p>
          <div className="bg-white rounded-lg p-3 border border-violet-100">
            <p className="text-xs text-gray-600"><strong>2024:</strong> %5 &rarr; <strong>2026:</strong> %24 (tahmini)</p>
          </div>
        </div>

        {/* Trend 5 - Outdoor Adventure */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Trend #5: Doga Macera Partileri</h3>
            <div className="flex items-center gap-1">
              <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full">Yukselen</span>
              <span className="text-emerald-600 text-xl font-bold">&uarr;</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-sm">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="text-xs text-gray-600">4/5</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Ekran basinda gecen saatlerden bunalan aileler, cocuklarini dogaya cikararak kutlama yapmak istiyor. Hazine avi, doga yuruyusu, kampci partisi, bahce tarim atolyesi ve acik havada gozlem gibi aktiviteler one cikiyor. Istanbul'un ormanlari, parklari ve sahilleri bu tarz partiler icin muhtesem mekanlar sunuyor. Palyaco ve bubble show gosterilerinin acik hava versiyonlari buyuk ilgi goruyor.
          </p>
          <div className="bg-white rounded-lg p-3 border border-emerald-100">
            <p className="text-xs text-gray-600"><strong>2024:</strong> %10 &rarr; <strong>2026:</strong> %31 (tahmini)</p>
          </div>
        </div>
      </div>

      {/* TREND 6-10 */}
      <h2 id="trend-6-10" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        6. Nostalji, Teknoloji, Samimi Partiler, Cok Kultur ve Wellness
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        2026'nin diger guclu trendleri de oldukca ilgi cekici. Iste kalan 5 trendin detayli analizi:
      </p>

      <div className="space-y-5 mb-8">
        {/* Trend 6 - Nostalji/Retro */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Trend #6: Nostalji / Retro Temalari</h3>
            <div className="flex items-center gap-2">
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">Stabil</span>
              <span className="text-amber-600 text-xl font-bold">&rarr;</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-sm">&#9733;&#9733;&#9733;&#9734;&#9734;</span>
            <span className="text-xs text-gray-600">3/5</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            90'lar ve 2000'ler basi nostaljisi artik cocuk partilerine de yansidi. Ebeveynlerin cocukluk oyunlari, retro video oyun konsollari, eski cizgi film temalari ve klasik parti oyunlari geri donuyor. <Link to="/organizasyonlar/palyaco-kiralama" className="text-amber-700 hover:text-amber-800 font-semibold underline">Palyaco hizmeti</Link> de retro formatta yeniden yorumlaniyor; klasik sirk palyacosu estetigi modern guvenlik standartlariyla birlestirilip sunuluyor. Pac-Man, Super Mario ve Tamagotchi temali partiler ebeveynleri hem guldurur hem aglatir. Retro seker bufeleri, kaset camurluk susleme ve polaroid foto koseleri bu partilerin vazgecilmezleri.
          </p>
        </div>

        {/* Trend 7 - AR/VR */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Trend #7: Interaktif Teknoloji (AR/VR)</h3>
            <div className="flex items-center gap-2">
              <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">Yukselen Trend</span>
              <span className="text-indigo-600 text-xl font-bold">&uarr;</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-sm">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="text-xs text-gray-600">4/5</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Artirilmis gerceklik (AR) ve sanal gerceklik (VR) teknolojileri cocuk partilerinde devrim yaratiyor. Sanal hayvanat bahcesi turlari, interaktif hikaye anlatimi, AR ile canlandirilan boyama aktiviteleri ve VR tabanli macera oyunlari 2026'nin en heyecan verici yenilikleri arasinda. Teknoloji, geleneksel parti oyunlariyla harmanlaniyor: ornegin hazine avi artik AR ile yapiliyor, ipuclari telefonla tarandiginda 3 boyutlu animasyonlarla gosteriliyor. Bu teknolojinin maliyeti de giderek dusukuyor ve daha genis kitlelere ulasabiliyor.
          </p>
        </div>

        {/* Trend 8 - Kucuk Partiler */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Trend #8: Kucuk-Samimi Partiler</h3>
            <div className="flex items-center gap-2">
              <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">Yukselen Trend</span>
              <span className="text-rose-600 text-xl font-bold">&uarr;</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="text-xs text-gray-600">5/5</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            "Quality over quantity" yani nicelik degil nitelik anlayisi cocuk partilerinde de kendini gosteriyor. 8-12 cocukluk kucuk, samimi ve yuksek kaliteli partiler artik buyuk salonlardaki 50+ kisilik etkinliklere tercih ediliyor. Bu formatta her cocuga ozel ilgi gosteriliyor, aktiviteler daha derinlemesine yasaniyor ve genel deneyim kalitesi katlaniyor. Ev partileri, bahce organizasyonlari ve boutique mekanlar bu trendin dogal karargahi. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-rose-600 hover:text-rose-700 font-semibold underline">Full paket organizasyon</Link> bu formata uyarlanmis mini paketlerle sunuluyor.
          </p>
        </div>

        {/* Trend 9 - Cok Kultur */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Trend #9: Coklu Kultur Temali Partiler</h3>
            <div className="flex items-center gap-2">
              <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">Yukselen Trend</span>
              <span className="text-teal-600 text-xl font-bold">&uarr;</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-sm">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="text-xs text-gray-600">4/5</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Istanbul'un kozmopolit yapisi bu trendi dogal olarak besliyor. Farkli kulturlerden oyunlar, yemekler, muzikler ve geleneklerin bir arada sunuldugu "Dunya Turu" partileri buyuk ilgi goruyor. Japon origami istasyonu, Meksika pinyata oyunu, Hint kina boyamasi, Turk geleneksel halk oyunlari ve Arap tatlilari gibi farkli kulturel ogeler tek bir partide bulusuyor. Bu format ozellikle cok uluslu ailelerin ve expat topluluklarinin yogun ilgi gosterdigi bir trend. Cocuklara kulturel farkindalik ve dunya vatandasligi bilinci asilanirken eglence de katlanarak artiyor.
          </p>
        </div>

        {/* Trend 10 - Wellness/Yoga */}
        <div className="bg-gradient-to-r from-lime-50 to-green-50 rounded-xl p-6 border border-lime-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Trend #10: Wellness / Yoga Partiler</h3>
            <div className="flex items-center gap-2">
              <span className="bg-lime-600 text-white text-xs font-bold px-3 py-1 rounded-full">Yeni Trend</span>
              <span className="text-lime-600 text-xl font-bold">&uarr;</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-sm">&#9733;&#9733;&#9733;&#9734;&#9734;</span>
            <span className="text-xs text-gray-600">3/5</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Yetiskin wellness trendinin cocuk versiyonu olarak 2026'da ortaya cikan bu format, cocuklara meditasyon, yoga, nefes egzersizleri ve mindfulness aktiviteleri sunuyor. Renk terapisi, mandala boyama, aromaterapi atolyeleri ve dogada farkindalik yuruyusleri ile birlestirildiginde hem sakinlestirici hem de egitici bir deneyim olusturuyor. Bu trend henuz basa dagitma asamasinda olmasa da ozellikle bilinçli ebeveynler arasinda hizla benimseniyor. 2027'de cok daha guclu bir konumda olacagi ongortulmektedir.
          </p>
        </div>
      </div>

      {/* Trend Ozet Tablosu */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm">#</th>
              <th className="py-3 px-4 text-left text-sm">Trend</th>
              <th className="py-3 px-4 text-left text-sm">Durum</th>
              <th className="py-3 px-4 text-left text-sm">Yon</th>
              <th className="py-3 px-4 text-left text-sm">2026 Tahmini</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            <tr className="border-b"><td className="py-2 px-4">1</td><td className="py-2 px-4">Eko Partiler</td><td className="py-2 px-4"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Yukselen</span></td><td className="py-2 px-4 text-green-600 font-bold">&uarr;</td><td className="py-2 px-4">%47</td></tr>
            <tr className="border-b bg-gray-50"><td className="py-2 px-4">2</td><td className="py-2 px-4">STEM/Bilim</td><td className="py-2 px-4"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">Yukselen</span></td><td className="py-2 px-4 text-blue-600 font-bold">&uarr;</td><td className="py-2 px-4">%41</td></tr>
            <tr className="border-b"><td className="py-2 px-4">3</td><td className="py-2 px-4">Kisisellestirme</td><td className="py-2 px-4"><span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-bold">Yukselen</span></td><td className="py-2 px-4 text-pink-600 font-bold">&uarr;</td><td className="py-2 px-4">%52</td></tr>
            <tr className="border-b bg-gray-50"><td className="py-2 px-4">4</td><td className="py-2 px-4">Mini Konser/Karaoke</td><td className="py-2 px-4"><span className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded text-xs font-bold">Yukselen</span></td><td className="py-2 px-4 text-violet-600 font-bold">&uarr;</td><td className="py-2 px-4">%24</td></tr>
            <tr className="border-b"><td className="py-2 px-4">5</td><td className="py-2 px-4">Doga Macera</td><td className="py-2 px-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold">Yukselen</span></td><td className="py-2 px-4 text-emerald-600 font-bold">&uarr;</td><td className="py-2 px-4">%31</td></tr>
            <tr className="border-b bg-gray-50"><td className="py-2 px-4">6</td><td className="py-2 px-4">Nostalji/Retro</td><td className="py-2 px-4"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold">Stabil</span></td><td className="py-2 px-4 text-amber-600 font-bold">&rarr;</td><td className="py-2 px-4">%18</td></tr>
            <tr className="border-b"><td className="py-2 px-4">7</td><td className="py-2 px-4">AR/VR Teknoloji</td><td className="py-2 px-4"><span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold">Yukselen</span></td><td className="py-2 px-4 text-indigo-600 font-bold">&uarr;</td><td className="py-2 px-4">%27</td></tr>
            <tr className="border-b bg-gray-50"><td className="py-2 px-4">8</td><td className="py-2 px-4">Kucuk-Samimi</td><td className="py-2 px-4"><span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-xs font-bold">Yukselen</span></td><td className="py-2 px-4 text-rose-600 font-bold">&uarr;</td><td className="py-2 px-4">%44</td></tr>
            <tr className="border-b"><td className="py-2 px-4">9</td><td className="py-2 px-4">Cok Kultur</td><td className="py-2 px-4"><span className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded text-xs font-bold">Yukselen</span></td><td className="py-2 px-4 text-teal-600 font-bold">&uarr;</td><td className="py-2 px-4">%29</td></tr>
            <tr className="bg-gray-50"><td className="py-2 px-4">10</td><td className="py-2 px-4">Wellness/Yoga</td><td className="py-2 px-4"><span className="bg-lime-100 text-lime-700 px-2 py-0.5 rounded text-xs font-bold">Yeni</span></td><td className="py-2 px-4 text-lime-600 font-bold">&uarr;</td><td className="py-2 px-4">%13</td></tr>
          </tbody>
        </table>
      </div>

      {/* MUSTERI HIKAYELERI */}
      <h2 id="musteri-hikayeleri" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        7. Gercek Musteri Hikayeleri: Uluslararasi Aileler Istanbul'da
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Istanbul'un kozmopolit yapisi, farkli kulturlerden ailelerin cocuk partisi trendlerini yakindan deneyimlemesini sagliyor. Iste 2026 trendlerini gercek hayatta yasayan uc uluslararasi ailenin hikayeleri:
      </p>

      {/* Arap Musteri Hikayesi */}
      <div className="bg-amber-50 rounded-xl p-6 mb-6 border border-amber-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">&#127775;</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Al-Hassan Ailesi - Suudi Arabistan</h3>
            <p className="text-sm text-amber-700 font-medium">"Oglumuzu Trend #9 ile kutladik: Cok Kulturlu Parti"</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          Suudi Arabistan'dan Istanbul'a is icin tasinan Al-Hassan ailesi, 7 yasindaki ogullari Ahmed'in dogum gununu farkli kulturlerden arkadaslariyla kutlamak istedi. Ahmed'in sinifinda Turk, Rus, Arap, Alman ve Iran asilli cocuklar vardi. Aile, her kulturden bir parcanin yer aldigi "Dunya Turu" konseptli bir parti talep etti.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Organizasyonda Turk geleneksel halk oyunlari, Arap tatlilari ve kaligrafi kosesi, origami istasyonu, Alman pretzel yapim atolyesi ve Iran minyatur boyama kosesi hazirlandı. Kostumlu karakterlerimiz farkli ulkelerin geleneksel kiyafetleriyle sahne aldi. Ahmed'in annesi Fatima Hanim, "Cocuklarin farkli kulturleri taniyarak eglenmesi bizim icin muhtesem bir deneyimdi. Ahmed arkadaslarina her kulturden bir sey ogretmekten cok keyif aldi" dedi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Partide en cok ilgi goren aktivite, her cocugun kendi ulkesinin bayragini cizip anlattigi "Bayrak Atolyesi" oldu. Ahmed, "Bu benim en guclu dogum gunum cunku butun dunya geldi!" diyerek kucuk bir diplomatik odul torenine donusturdugu o ani hic unutamayacak.
        </p>
        <div className="bg-white rounded-lg p-3 border border-amber-100 mt-3">
          <p className="text-xs text-gray-500 italic">Hizmetler: Cok kulturlu tema dekorasyonu, kostumlu karakterler, ozel ikram mönüsü, kulturel aktivite istasyonlari, profesyonel fotograf</p>
        </div>
      </div>

      {/* Rus Musteri Hikayesi */}
      <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">&#128300;</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Sokolov Ailesi - Moskova, Rusya</h3>
            <p className="text-sm text-blue-700 font-medium">"STEM temali parti ile kizimizin bilime olan askini kutladik"</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          Moskova'dan Istanbul'a taninan Sokolov ailesi, 9 yasindaki kizlari Anastasia icin "Kucuk Bilginler Laboratuvari" temali bir STEM partisi organize ettirdi. Anastasia, okulda fen bilimlerine buyuk ilgi gosteriyor ve buyuyunce kimyager olmak istiyordu. Ailesi onun bu tutkusunu dogum gunuyle taclendirmek istedi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Partide her cocuk beyaz labortuar onlugu giydi. Renkli volkan deneyi, slime yapimi, kristal yetistirme, manyetik deney istasyonu ve bubble show gosterisi programda yer aldi. Bubble show'umuz bu partide ozel bir twist ile sunuldu: kopuk kimyasi ve isik kirinimlari hakkinda mini bir ders esliginde gerceklestirildi. Cocuklar "neden kopukler gokkusagi renklerinde parlıyor?" sorusunun cevabini ogrenirken hayretten gozlerini alamadi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Anastasia'nin babasi Dmitri Bey, "Istanbul'da bu kalitede bir bilim partisi bulacagimizi hayal etmemistik. Anastasia ve arkadaslari partiden sonra günlerce deneyleri konustu. Kizimizin gozlerindeki isil, butun emegi hakli cikarıyordu" dedi. Parti sonunda her cocuga ozel bir "Kucuk Bilgin Sertifikasi" ve deney seti hediye edildi.
        </p>
        <div className="bg-white rounded-lg p-3 border border-blue-100 mt-3">
          <p className="text-xs text-gray-500 italic">Hizmetler: STEM tema dekorasyonu, bilim deney istasyonlari, bubble show gosterisi, labortuar onlukleri, sertifika ve deney seti hediyesi</p>
        </div>
      </div>

      {/* Ingiliz Musteri Hikayesi */}
      <div className="bg-rose-50 rounded-xl p-6 mb-6 border border-rose-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">&#127807;</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Williams Ailesi - Londra, Ingiltere</h3>
            <p className="text-sm text-rose-700 font-medium">"Surdurulebilir parti trendi tam bize goreydi"</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          Londra'dan Istanbul'a tasindiktan sonra Williams ailesi, 6 yasindaki kizlari Emma icin tamamen eko-dostu bir parti organize etmek istedi. Aile, Ingiltere'de de cevreci bir yasam surduruyordu ve cocuklarinin dogum gununde de bu degerlerini yansitmak istiyordu. "Hicbir plastik kullanilmasin" seklindeki net talepleriyle bize basvurdular.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Parti dekorasyonunda tamamen geri donusturulmus kartondan yapilmis suslemeler, kumas flamalar, kuru cicek aranjmanlari ve balmumu mumlar kullanildi. Tabak ve bardaklar bambu bazli, peçeteler organik pamuktan yapildi. Ikramlar tamamen organik ve bitkisel bazliydi: organik pamuk seker, meyve tabagi ve ev yapimi kurabiyeler. Hediye cantalarinda her cocuk icin tohum bombasi, geri donusturulmus kagittan yapilmis boyama defteri ve dogal boya kalemi seti yer aldi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Emma'nin annesi Sarah Hanim, "Istanbul'da bu kadar detayli bir eko parti organize edebilecegimize inanamıyorduk. Ekip isteklerimizi fazlasiyla karsıladi. Emma ve arkadaslari tohum bombasi yapma atolyesine bayildi. En guzeli, cocuklarin evlerine donup aileleriyle birlikte tohumları ekmeleri oldu. Haftalarca bize buyuyen bitkilerin fotograflari geldi" dedi. Bu parti, ekip olarak bize de surdurulebilir organizasyonlarin ne kadar keyifli ve anlamli olabilecegini bir kez daha gosterdi.
        </p>
        <div className="bg-white rounded-lg p-3 border border-rose-100 mt-3">
          <p className="text-xs text-gray-500 italic">Hizmetler: Eko dekorasyon, organik ikramlar, tohum bombasi atolyesi, dogal boya yuz boyama, geri donusum istasyonu, bambu parti malzemeleri</p>
        </div>
      </div>

      {/* Uzman Tahmini */}
      <h2 id="uzman-tahmini" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        8. Uzman Tahmini ve 2026 Ongorusu
      </h2>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-6 border border-purple-200 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">&#128161;</span>
          <h3 className="text-xl font-bold text-purple-900">Uzman Tahmini</h3>
        </div>
        <blockquote className="border-l-4 border-purple-500 pl-4 mb-4">
          <p className="text-gray-700 leading-relaxed italic">
            "2026 yili cocuk partisi endustrisinde bir kirilma noktasi. Artik aileler sadece eglence degil, anlam ariyor. Surdurulebilirlik, egitim ve kulturel zenginlik cocuk partilerinin uc sacayagi haline geldi. Istanbul bu donusuumun merkez ussü konumunda cunku sehir hem kulturel cesitlilik hem de profesyonel organizasyon altyapisi acisindan essiz bir konuma sahip. Onumuzdeki 2-3 yil icinde geleneksel 'balon ve pasta' formati tamamen ortadan kalkmayacak ama buyuk olcude donusecek."
          </p>
        </blockquote>
        <p className="text-sm text-purple-700 font-medium">- BestEvent Etkinlik Ekibi, 10+ yillik sektor deneyimi</p>
      </div>

      <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl p-6 mb-6 border border-indigo-200 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">&#128202;</span>
          <h3 className="text-xl font-bold text-indigo-900">2026 Ikinci Yari Ongorusu</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-indigo-100">
            <h4 className="font-bold text-gray-900 mb-2">Yukseliste Olan Trendler</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><span className="text-green-500">&uarr;</span> AI destekli kisi ozel parti planlama</li>
              <li className="flex items-center gap-2"><span className="text-green-500">&uarr;</span> Micro-influencer cocuk partileri</li>
              <li className="flex items-center gap-2"><span className="text-green-500">&uarr;</span> Hibrit parti formati (fiziksel + dijital)</li>
              <li className="flex items-center gap-2"><span className="text-green-500">&uarr;</span> Cocuk gastronomi atolyeleri</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-indigo-100">
            <h4 className="font-bold text-gray-900 mb-2">Azalmakta Olan Trendler</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><span className="text-red-500">&darr;</span> Tek tip buyuk salon partileri</li>
              <li className="flex items-center gap-2"><span className="text-red-500">&darr;</span> Plastik dekorasyon agirlikli partiler</li>
              <li className="flex items-center gap-2"><span className="text-red-500">&darr;</span> Sadece izleme bazli gosteri formati</li>
              <li className="flex items-center gap-2"><span className="text-red-500">&darr;</span> Hazir sablondan tema secimi</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 mb-8 border border-pink-200 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">&#127919;</span>
          <h3 className="text-xl font-bold text-pink-900">Uzman Tahmini: Gelecek 5 Yil</h3>
        </div>
        <blockquote className="border-l-4 border-pink-500 pl-4 mb-4">
          <p className="text-gray-700 leading-relaxed italic">
            "2030'a kadar cocuk partileri tamamen deneyim odakli olacak. Fiziksel ve dijital dunyanin iç ice gecmesiyle cocuklar hem gercek hem de sanal ortamda es zamanli etkinesimde bulunacak. Ancak en kalici trend surdurulebilirlik olacak. Eko parti artik bir trend degil, bir standart haline gelecek. Istanbul'un cok kulturlu yapisi ise sektor icin global bir referans noktasi olmaya devam edecek."
          </p>
        </blockquote>
        <p className="text-sm text-pink-700 font-medium">- BestEvent Kreatif Ekip, Istanbul Cocuk Eglence Sektoru Analizi 2026</p>
      </div>

      {/* Sonuc ve CTA */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Sonuc: 2026'da Cocuk Partisini Nasil Planlamalisiniz?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          2026 yilinin cocuk partisi trendleri bir seyi acikca gosteriyor: aileler artik daha bilinçli, daha yaratici ve daha anlamli kutlamalar ariyorlar. Ister surdurulebilir bir eko parti, ister STEM temali bir bilim soleni, ister cok kulturlu bir dunya turu olsun, onemli olan cocugunuzun kisiligine ve ilgi alanlarina uygun, samimi ve kaliteli bir deneyim yaratmaktir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          BestEvent olarak 10 yili askin deneyimimiz ve yillik 1500+ etkinlik tecrubemizle bu trendlerin hepsini yakindan takip ediyor ve musterilerimize en guncel formatlari sunuyoruz. Istanbul'un her bölgesinde, her bütçeye ve her konsepte uygun organizasyon hizmeti vermekten mutluluk duyuyoruz.
        </p>
      </div>

      {/* Hizmet CTA */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2026 Trendleriyle Cocugunuzun Partisini Planlayalim!</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Istanbul'da surdurulebilir partiden STEM partiye, kisisellesterilmis deneyimlerden cok kulturlu kutlamalara kadar tum 2026 trendlerini profesyonel organizasyonla hayata geciriyoruz. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-purple-600 hover:text-purple-700 font-semibold underline">Full paket dogum gunu organizasyonu</Link> ile hayalinizdeki partiyi birlikte tasarlayalim.
        </p>
        <Link
          to="/organizasyonlar/full-paket-organizasyon"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Dogum Gunu Organizasyonu Detaylari &rarr;
        </Link>
      </div>

      {/* SSS */}
      <h2 id="sss" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        9. Sik Sorulan Sorular (SSS)
      </h2>

      <div className="space-y-4 mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">2026'nin En Trend Cocuk Partisini Birlikte Planlayalim!</h3>
        <p className="mb-6 leading-relaxed">
          Surdurulebilir eko partiden STEM bilim solenine, cok kulturlu dunya turundan kisisellesterilmis deneyimlere kadar tum 2026 trendlerini profesyonel ekibimizle hayata gecirin. 10 yillik deneyim, 1500+ basarili etkinlik ve yuzlerce mutlu uluslararasi aile!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+905307309009"
            className="bg-white text-purple-600 font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
          >
            05307309009
          </a>
          <a
            href="https://wa.me/905307309009?text=Merhaba%202026%20trend%20%C3%A7ocuk%20partisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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
      slug="cocuk-partisi-2026-trendleri"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/full-paket-organizasyon"
      relatedServiceName="Dogum Gunu Organizasyonu"
    />
  )
}

export default CocukPartisi2026Trendleri
