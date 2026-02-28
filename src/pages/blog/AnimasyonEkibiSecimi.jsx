import { Link } from 'react-router-dom'
import BlogDetail from '../../components/BlogDetail'

const AnimasyonEkibiSecimi = () => {
  const faqData = [
    {
      question: 'Animasyon ekibi seçerken en önemli kriter nedir?',
      answer: 'Animasyon ekibi seçerken en önemli kriter deneyim ve referanslardır. En az 3 yıllık profesyonel deneyime sahip, geçmiş etkinliklerden video ve fotoğraf paylaşabilen, müşteri yorumları olumlu olan ekipleri tercih edin. Ayrıca ekibin çocuk psikolojisi konusunda eğitim almış olması, yaş grubuna uygun program hazırlayabilmesi ve sigorta kapsamında hizmet sunması da kritik faktörler arasındadır.'
    },
    {
      question: 'Animasyon ekibini ne kadar önceden rezerve etmeliyim?',
      answer: 'Animasyon ekibini en az 2-3 hafta önceden rezerve etmeniz önerilir. Hafta sonu etkinlikleri ve özellikle mayıs-haziran ile eylül-ekim gibi yoğun sezon dönemlerinde 1 ay önceden rezervasyon yapılması idealdir. Yılbaşı, 23 Nisan ve bayram dönemlerinde ise en az 6 hafta önceden planlamak gerekir. Erken rezervasyon, istediğiniz tarihi garantilemek ve olası fiyat artışlarından korunmak açısından avantajlıdır.'
    },
    {
      question: 'Animasyon programı kaç dakika olmalı?',
      answer: 'Standart bir animasyon programı 60-90 dakika arasında olmalıdır. 3-5 yaş grubu için 45-60 dakika ideal olurken, 6-10 yaş grubu için 60-90 dakikalık program uygulanabilir. 90 dakikayı aşan programlarda çocukların dikkati dağılabilir. Program süresi; oyunlar, gösteri, müzikli dans, balon şekillendirme ve pasta zamanı gibi bölümlere dengeli şekilde dağıtılmalıdır.'
    },
    {
      question: 'Animasyon ekibinin sigorta kapsamı neden önemli?',
      answer: 'Animasyon ekibinin mesleki sorumluluk sigortası olması, hem çocukların hem de organizatörün güvenliği açısından kritiktir. Profesyonel ekipler, etkinlik sırasında oluşabilecek kazalara karşı sigorta kapsamında hizmet verir. Sigorta; çocuklara yönelik olası yaralanmaları, mekan hasarlarını ve ekipman arızalarından kaynaklanan sorunları kapsar. Sigortasız çalışan ekiplerden kesinlikle uzak durmalısınız.'
    },
    {
      question: 'Fiyata neler dahil, neler ek ücretli?',
      answer: 'Profesyonel animasyon paketine genellikle animatör ücreti, temel oyun materyalleri, müzik sistemi, sosis balon malzemesi ve program planlaması dahildir. Ek ücretli olabilecek kalemler: yüz boyama, pamuk şeker makinesi, popcorn makinesi, ekstra animatör, kostümlü karakter, özel tema dekorasyonu ve uzatma süreleridir. Sözleşme aşamasında dahil olan ve olmayan hizmetlerin detaylı listesini mutlaka yazılı olarak talep edin.'
    },
    {
      question: 'Animasyon ekibinin hijyen protokolü nasıl olmalı?',
      answer: 'Profesyonel bir animasyon ekibinin hijyen protokolü kapsamında şunlar olmalıdır: Her etkinlik öncesi tüm materyallerin dezenfekte edilmesi, yüz boyama malzemelerinin dermatolojik test sertifikalı olması, kostümlerin her kullanım sonrası anti-bakteriyel işleme tabi tutulması, ekip üyelerinin sağlık raporlarının güncel olması ve etkinlik esnasında el dezenfektanı bulundurulması. Özellikle çocuklarla temas eden her malzemenin hijyen standartlarına uygun olması zorunludur.'
    }
  ]

  const content = (
    <>
      {/* Icindekiler */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-indigo-600">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Icindekiler</h2>
        <ul className="space-y-2">
          <li><a href="#giris" className="text-indigo-600 hover:text-indigo-700 font-semibold">1. Neden Dogru Sorular Sormak Bu Kadar Onemli?</a></li>
          <li><a href="#deneyim-referans" className="text-indigo-600 hover:text-indigo-700 font-semibold">2. Deneyim ve Referans Sorulari (Soru 1-3)</a></li>
          <li><a href="#program-icerik" className="text-indigo-600 hover:text-indigo-700 font-semibold">3. Program ve Icerik Sorulari (Soru 4-6)</a></li>
          <li><a href="#lojistik-teknik" className="text-indigo-600 hover:text-indigo-700 font-semibold">4. Lojistik ve Teknik Sorular (Soru 7-10)</a></li>
          <li><a href="#profesyonellik" className="text-indigo-600 hover:text-indigo-700 font-semibold">5. Profesyonellik ve Standart Sorulari (Soru 11-13)</a></li>
          <li><a href="#fiyat-odeme" className="text-indigo-600 hover:text-indigo-700 font-semibold">6. Fiyat ve Odeme Sorulari (Soru 14-15)</a></li>
          <li><a href="#degerlendirme-karti" className="text-indigo-600 hover:text-indigo-700 font-semibold">7. Nihai Degerlendirme Puan Karti</a></li>
          <li><a href="#sss" className="text-indigo-600 hover:text-indigo-700 font-semibold">8. Sik Sorulan Sorular</a></li>
        </ul>
      </div>

      {/* Giris */}
      <div id="giris">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Cocugunuzun dogum gunu icin animasyon ekibi ararken, internette onlarca secenekle karsilasirsiniz. Hepsi guzel fotograflar paylasiyor, hepsi "profesyonel" oldugunu iddia ediyor, hepsi "en iyi fiyati" sunuyor. Peki gercekten profesyonel olanlari, isini ciddi yapanlardan ayiran nedir? Cevap basit: dogru soruları sormak. Bu rehberde, animasyon ekibi secerken mutlaka sormaniz gereken 15 kritik soruyu, her sorunun neden onemli oldugunu, hangi cevaplarin guven verdigi ve hangi cevaplarin alarm zili caldirmasi gerektigini detayli sekilde ele alacagiz.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Bir animasyon ekibi secmek, sadece fiyat karsilastirmasi yapmak degildir. Cocugunuzun en ozel gununde guvenle teslim edebileceginiz, profesyonel, deneyimli ve guvenilir bir ekip bulmak icin sistematik bir degerlendirme sureci izlemeniz gerekir. Bu yazidaki 15 soru ve degerlendirme karti, size bu surecte rehberlik edecek ve en dogru karari vermenize yardimci olacaktir.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg mb-8">
          <p className="text-gray-800 font-semibold">
            <strong>Onemli Not:</strong> Bu rehberdeki sorulari, animasyon ekibiyle ilk gorusmenizde sirayla sorun. Cevaplari not alin ve yazinin sonundaki degerlendirme kartina gore puanlayin. Birden fazla ekiple goruserek karsilastirma yapin.
          </p>
        </div>
      </div>

      {/* ===== BOLUM 1: Deneyim ve Referans ===== */}
      <h2 id="deneyim-referans" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Deneyim ve Referans Sorulari
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Bir animasyon ekibinin gercek kalitesini anlamanin en etkili yolu, deneyimini ve gecmis performansini sorgulamaktir. Asagidaki uc soru, ekibin profesyonellik seviyesini olcmenize yardimci olacaktir.
      </p>

      {/* Soru 1 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 1</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Kac yillik deneyiminiz var?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Deneyim, animasyon sektorunde en onemli kalite gostergelerinden biridir. Yillar icinde yuzerle, hatta binlerce etkinlik yonetmis bir ekip, her turlu surprize hazirdir. Aglayan cocuktan elektrik kesintisine, mekan degisikliginden program akisinin bozulmasina kadar her durumda cozum uretebilirler.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Deneyimli bir ekip, farkli yas gruplarinin nasil tepki verdigini bilir. 3 yasindaki bir cocugun dikkat suresi ile 8 yasindaki bir cocugun beklentileri tamamen farklıdır. Tecrubeli animatorler, programi anlik olarak ayarlayabilir ve her cocugun etkinlige dahil olmasini saglar. <Link to="/organizasyonlar/palyaco-kiralama" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">Profesyonel palyaco kiralama</Link> hizmetlerinde bu deneyim farki net bir sekilde hissedilir.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"5 yildir profesyonel olarak animasyon hizmeti veriyoruz."</li>
            <li>"Bu yil 300. etkinligimizi tamamladik."</li>
            <li>"Ekibimizde ortalama 4 yil deneyimli animatorler var."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Yeni basladik ama cok yetenekliyiz."</li>
            <li>"Deneyimimiz onemli degil, onemli olan enerji."</li>
            <li>"Kac yildir yaptigimizi tam hatirlamiyorum."</li>
          </ul>
        </div>
      </div>

      {/* Soru 2 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 2</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Referanslariniz var mi?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Referanslar, bir animasyon ekibinin gercek performansini gosterir. Profesyonel bir ekip, gecmis etkinliklerinden memnun musteri yorumlari, video kayitlari ve fotograflar paylasmaktan cekinmez. Google yorumlari, sosyal medya degerlendirmeleri ve agizdan agiza tavsiyeler, en guvenilir referans kaynaklaridir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Referanslari kontrol ederken sadece olumlu yorumlara degil, ekibin olumsuz yorumlara nasil yanit verdigine de bakin. Profesyonel bir ekip, elestiriye yapici sekilde yaklasir ve cozum odakli yanitlar verir. Ayrica, mumkunse referans olarak verilen aileleri arayarak dogrudan gorsu alin.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-3">Referans Kontrol Listesi</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Google Business yorumlari kontrol edildi (en az 4.5 yildiz)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Instagram/sosyal medya hesaplari incelendi</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Gecmis etkinlik videolari izlendi</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">En az 2 referans ailesiyle gorusuldu</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Olumsuz yorumlara verilen yanitlar incelendi</span>
          </div>
        </div>
      </div>

      {/* Soru 3 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 3</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Sigorta kapsaminiz nedir?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Sigorta konusu, cogu ailenin goz ardi ettigi ama en kritik konulardan biridir. Profesyonel bir animasyon ekibi, mesleki sorumluluk sigortasi kapsaminda calisir. Bu sigorta; etkinlik sirasinda cocuklara veya mekana gelebilecek hasarlari, ekipman arizalarindan kaynaklanabilecek kazalari ve olasi yaralanmalari kapsar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sigortasiz bir ekiple calismanin riskleri cok buyuktur. Etkinlik sirasinda bir cocuk dusup yaralanirsa, bir ekipman arizasi mekana zarar verirse veya balon patlamasi gibi beklenmedik bir durum yasanirsa, tum sorumluluk dogrudan sizin ustunuze kalir. Bu nedenle sigorta belgesi gormeden hicbir ekiple anlasma yapmamalisiniz.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Mesleki sorumluluk sigortamiz mevcut, belgesini paylasabiliriz."</li>
            <li>"Her etkinlik icin ayrica etkinlik sigortasi yaptiriyoruz."</li>
            <li>"Sigorta kapsamimiz cocuklari ve mekani da kapsiyor."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Sigortaya gerek yok, simdi ye kadar hicbir sorun yasanmadi."</li>
            <li>"Sigorta maliyetleri cok yuksek, o yuzden yaptirmiyoruz."</li>
            <li>"Ne sigortasi? Bu is icin sigorta mi olur?"</li>
          </ul>
        </div>
      </div>

      {/* ===== BOLUM 2: Program ve Icerik ===== */}
      <h2 id="program-icerik" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Program ve Icerik Sorulari
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Animasyon programinin icerigi, etkinligin basarisini dogrudan belirler. Yas grubuna uygun aktiviteler, dengeli bir zaman plani ve esnek bir program yapisi olmazsa olmazdir. Bu bolumde programin icerigini sorgulamanizi saglayacak sorulari bulacaksiniz.
      </p>

      {/* Soru 4 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 4</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Hangi yas gruplariyla calisiyorsunuz?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Farkli yas gruplari, tamamen farkli yaklasimlar gerektirir. 2-3 yas grubu icin yumusak, sakin ve gorsel agirlikli bir program gerekir; bu yastaki cocuklar yuksek sesten ve ani hareketlerden korkabilir. 4-6 yas grubu icin enerjik ama kontrol altinda, interaktif oyunlar ve basit yarislar idealdir. 7-10 yas grubu ise daha karmasik oyunlar, takim yarismari ve gosterilere ilgi duyar. 11-13 yas grubu icin ise modern dans, TikTok yarismasi ve interaktif gosteri formatlari daha uygundur.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Profesyonel bir ekip, etkinliginize katilacak cocuklarin yas araligini oner ve programa ozel uyarlama yapar. Karisik yas gruplari icin farkli seviyelerde oyunlar hazirlayarak herkesi dahil eder. Bir animasyon ekibinin "her yasa calisiyoruz" demesi yetmez; her yas icin nasil bir program uyguladiklarini detayli aciklamalari gerekir.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"3-12 yas araliginda uzmaniz, her yas grubu icin ayri program yapimiz var."</li>
            <li>"Karisik yas gruplari icin kademeli oyun sistemi uyguluyoruz."</li>
            <li>"Etkinlik oncesi cocuklarin yas bilgilerini aliriz."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Her yasla calisiyoruz, sorun olmaz."</li>
            <li>"Cocuk cocuktur, hepsi ayni oyunlari sever."</li>
            <li>"Yas onemli degil, biz eglendiririz."</li>
          </ul>
        </div>
      </div>

      {/* Soru 5 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 5</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Program suresi ne kadar?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Program suresi, etkinligin kalitesini dogrudan etkiler. Cok kisa bir program cocuklari tatmin etmezken, cok uzun bir program da dikkatin dagılmasina neden olur. Ideal program suresi yas grubuna ve etkinlik turune gore degisir. Ancak genellikle 60-90 dakika arasi en verimli zaman dilimidir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Profesyonel bir ekip, programin dakikasi dakikasina nasil akmasi gerektigini bilir. Ornegin; ilk 10 dakika tanisma ve isioma oyunlari, sonraki 20 dakika aktif oyunlar, 15 dakika gösteri (sihirbazlik, bubble show vb.), 10 dakika serbest dans ve muzik, son 10 dakika odul dagitimi ve pasta zamani gibi net bir akis sunabilmelidir. <Link to="/organizasyonlar/magic-show" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">Sihirbaz gosterisi</Link> gibi profesyonel gosteriler, programin en etkileyici bolumu olabilir.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-3">Ideal Program Akisi Kontrol Listesi</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Tanisma ve isioma oyunlari (10 dk)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Interaktif grup oyunlari (20 dk)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Profesyonel gosteri bolumu (15 dk)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Muzikli dans ve serbest aktivite (10 dk)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Odul dagitimi ve pasta zamani (10 dk)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Esnek sure tampon plani mevcut (15 dk)</span>
          </div>
        </div>
      </div>

      {/* Soru 6 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 6</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Yedek planiniz var mi? (hastalik, teknik ariza)</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Animasyon ekibinizin yedek plani olup olmadigini sormak, profesyonellik testinin en onemli parcasidir. Hayatta her sey planlandigi gibi gitmez: Animatorunuz hastalanabilir, ses sistemi arizalanabilir, hava kosullari degisebilir veya cocuk sayisi beklenenden farkli olabilir. Profesyonel bir ekibin tum bu senaryolar icin hazir planlari olmalidir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yedek plan kapsaminda sormaniz gerekenler: Animatorun hastalanmasi durumunda yerine gelecek kisi var mi? Ses sistemi bozulursa alternatif ekipman mevcut mu? Acik hava etkinliginde yagmur yagmasi durumunda ne olacak? Elektrik kesintisine karsi jenerator veya sarjli hoparlor var mi? Bu sorulara net cevap veremeyen bir ekip, profesyonel degildir.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Her animatorumuzun yedegi hazir, 2 saat icinde degisim yapabiliriz."</li>
            <li>"Yedek ses sistemi ve ekipman aracimizda her zaman bulunur."</li>
            <li>"Acik hava etkinlikleri icin B plani olarak ic mekan alternatifimiz var."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Simdiye kadar oyle bir sey yasamadik."</li>
            <li>"Hastalanma durumunda iptal ederiz."</li>
            <li>"Teknik ariza olursa telefondan muzik acabilirsiniz."</li>
          </ul>
        </div>
      </div>

      {/* ===== BOLUM 3: Lojistik ve Teknik ===== */}
      <h2 id="lojistik-teknik" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Lojistik ve Teknik Sorular
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Bir animasyon ekibinin teknik altyapisi ve lojistik plani, etkinligin sorunsuz gecmesini saglar. Ses sistemi, materyal kalitesi, mekan uyumu ve iptal politikasi gibi konularda net bilgi almalisiniz. Bu bolumde 4 kritik lojistik soruyu ele alacagiz.
      </p>

      {/* Soru 7 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 7</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Hangi materyaller dahil?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Animasyon programina dahil olan materyaller, hizmetin kalitesini ve fiyatinin adil olup olmadigini gosterir. Profesyonel bir ekip, kullanacagi tum materyalleri onceden listeler: sosis balonlar, yuz boyama malzemeleri, oyun aksesuarlari, odul hediyeleri, parti sapkalari, duzduklerin hepsi detayli sekilde bildirilmelidir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ozellikle dikkat etmeniz gereken materyaller sunlardir: Balonlarin kalitesi (latex alerji riski), yuz boyama malzemelerinin dermatolojik olarak test edilmis olmasi, cocuklara dagitilacak odul ve hediyelerin yas grubuna uygun ve guvenligi olmasi. Ucuz ve kalitesiz materyaller hem cocuklarin sagligini riske atar hem de etkinligin kalitesini dusurur.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"200 adet sosis balon, 20 kisilik yuz boyama seti ve 30 adet odul hediyesi dahil."</li>
            <li>"Tum malzemelerimiz CE sertifikali ve cocuk guvenligine uygundur."</li>
            <li>"Materyal listesini yazili olarak paylasiyoruz."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Bir seyler getiririz, merak etmeyin."</li>
            <li>"Materyalleri siz temin ederseniz daha uygun olur."</li>
            <li>"Ne gerekirse etkinlikte ayarlariz."</li>
          </ul>
        </div>
      </div>

      {/* Soru 8 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 8</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Ses sistemi sagliyor musunuz?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Ses sistemi, animasyon programinin belkemigi nitefindedir. Muzik olmadan dans yarismasi, mikrofon olmadan 30 cocuga hitap etmek, ses efektleri olmadan gosterinin etkisini yaratmak mumkun degildir. Profesyonel bir ekip, kendi ses sistemini getirir ve mekana uygun ses ayari yapar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sormaniz gereken alt sorular: Hoparlor gucu kac watt? Kablosuz mikrofon var mi? Bluetooth baglantisi mevcut mu? Yedek hoparlor veya sarjli sistem var mi? Mekanin akustigine gore onceden ayar yapiliyor mu? Ozellikle acik hava etkinliklerinde ruzgara dayanikli mikrofon sistemi ve yeterli gucu olan hoparlor kritik onem tasir.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Profesyonel JBL ses sistemi ve kablosuz mikrofon getiriyoruz."</li>
            <li>"Mekana gore ses ayari icin 30 dakika erken geliyoruz."</li>
            <li>"Yedek hoparlor ve sarjli mikrofon her zaman yanımizda."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Ses sistemi ek ucretlidir."</li>
            <li>"Mekanin ses sistemini kullaniriz."</li>
            <li>"Telefondan Bluetooth hoparlore baglariz."</li>
          </ul>
        </div>
      </div>

      {/* Soru 9 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 9</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Mekan kesfi yapiyor musunuz?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Mekan kesfi, profesyonel bir animasyon ekibinin olmazsa olmaz adimlarindan biridir. Her mekan farklidir: bahceli bir villa, bir apartman dairesi, bir restoran salonu veya bir acik hava parki tamamen farkli yaklasimlar gerektirir. Profesyonel bir ekip, etkinlikten once mekani ya fiziksel olarak ziyaret eder ya da video/fotograf uzerinden detayli inceleme yapar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mekan kesfinde degerlendirilmesi gereken unsurlar: Alan buyuklugu ve cocuk kapasitesi, elektrik prizi konumlari, aydinlatma durumu, akustik ozellikleri, guvenlik riskleri (merdivenler, sivri koseler, havuz vb.), park yeri durumu, yukleme-bosaltma alani ve acil cikis guzergahlari. Bu degerlendirmeyi yapan bir ekip, etkinlik gunu surpriz yasamaz ve programi mekana ozel olarak uyarlar.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Etkinlikten 1 hafta once mekan ziyareti yapiyoruz."</li>
            <li>"Video gorusme ile online mekan kesfi de yapabiliyoruz."</li>
            <li>"Mekan raporuna gore program ve ekipman ayarliyoruz."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Mekan kesfi yapmiyoruz, etkinlik gunune ayarlariz."</li>
            <li>"Her mekanda ayni programi uyguluyoruz."</li>
            <li>"Adres verin, biz geliriz, hallederiz."</li>
          </ul>
        </div>
      </div>

      {/* Soru 10 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 10</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Iptal/degisiklik politikaniz nedir?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Hayatta beklenmedik durumlar her zaman yasanabilir: Cocugunuz hastalanabilir, aile ici acil bir durum cikabilir veya mekan degisikligi gerekebilir. Bu durumlarda animasyon ekibinin iptal ve degisiklik politikasini bilmek, sizi maddi kayiptan korur.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Profesyonel bir ekibin iptal politikasi acik ve adil olmalidir. Genellikle su yapilar kabul gorur: 7 gundem fazla onceki iptallerde tam iade, 3-7 gun onceki iptallerde yuzde 50 iade veya tarih degisikligi hakki, 3 gunden az suredeki iptallerde kapora iadesi yapilmaz ancak tarih degisikligi hakki sunulur. Bu kosullarin sozlesmede yazili olmasi sarttir.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-3">Iptal Politikasi Kontrol Listesi</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Iptal kosullari yazili sozlesmede belirtilmis</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Tarih degisikligi hakki en az 1 kez taninmis</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Kapora miktari ve iade kosullari netlesmis</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Ekip tarafindan iptal durumunda tam iade garantisi var</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Mucbir sebep kosullari tanimlanmis</span>
          </div>
        </div>
      </div>

      {/* ===== BOLUM 4: Profesyonellik ===== */}
      <h2 id="profesyonellik" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Profesyonellik ve Standart Sorulari
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Bir animasyon ekibinin profesyonellik duzeyi, sadece sahne performansindan ibaret degildir. Ekip buyuklugu, kiyafet standartlari ve hijyen protokolleri de profesyonelligin onemli gostergeleridir. Bu bolumde bu konulardaki sorulari ele alacagiz.
      </p>

      {/* Soru 11 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 11</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Ekibiniz kac kisi?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Ekip buyuklugu, etkinligin kalitesini dogrudan etkiler. Genel kural olarak her 10-15 cocuk icin 1 animatorum olmalidir. 20 cocukluk bir doğum gunu icin tek bir animatorun gelmesi, hem cocuklarin kontrol altinda tutulmasini zorlastirir hem de programin kalitesini dusurur. 2-3 kisilik bir ekip ise gorevleri paylasarak cok daha etkili bir program sunar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Profesyonel bir ekipte gorev dagilimi su sekilde olmalidir: Ana animator (program yonetimi ve gosteri), yardimci animator (cocuk kontrolu ve oyun yonetimi), teknik personel (ses sistemi, muzik ve lojistik). Buyuk etkinliklerde fotografci ve guvenlik personeli de ekibe dahil olabilir. Ekibin kac kisi gelecegini ve her birinin gorevini onceden ogrenin.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"20 cocuk icin 2 animator ve 1 teknik personel, toplam 3 kisi gelecek."</li>
            <li>"Cocuk sayisina gore ekip buyuklugunu ayarliyoruz."</li>
            <li>"Her ekip uyemizin gorevi onceden belirlenmis durumda."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Ben tek basima hallederim, sorun olmaz."</li>
            <li>"Cocuk sayisi fark etmez, 1 kisi yeterli."</li>
            <li>"Ekstra kisi isterseniz ek ucret odersiniz."</li>
          </ul>
        </div>
      </div>

      {/* Soru 12 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 12</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Kostum/kiyafet standariniz nedir?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Animasyon ekibinin kiyafet ve kostum standardi, hem gorsek profesyonellik hem de hijyen acisindan son derece onemlidir. Profesyonel ekipler, temiz, bakimli ve tema ile uyumlu kiyafetler giyer. Palyaco kostumu solmamis, lekesiz ve tam takimi olmalidir. Karakter kostumleri orijinal gorunumde, deformasyonsuz ve temiz olmalidir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Kiyafet standardini degerlendirirken su unsurlara dikkat edin: Kostumler yeni mi yoksa yipranmis mi gorünuyor? Makyaj malzemeleri profesyonel mi? Aksesuarlar tam mi? Ekip uyeleri duzgun ve bakimli mi? Fotograflardaki kostumlerle gercekte gelen kostumler ayni mi? Bu sorulari sormak, etkinlik gununde hayal kikligi yasamamaniz icin sart.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Kostumlerimiz yilda 2 kez yenilenir, her kullanim sonrasi dezenfekte edilir."</li>
            <li>"Profesyonel sahne makyaji uyguluyoruz."</li>
            <li>"Kostum ve kiyafet fotograflarini onceden paylasabiliriz."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Kiyafet onemli degil, onemli olan performans."</li>
            <li>"Kostumler biraz eski ama is gorur."</li>
            <li>"Ne giyecegimizi etkinlik gunune birakin."</li>
          </ul>
        </div>
      </div>

      {/* Soru 13 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 13</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Hijyen protokolunuz nedir?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Cocuklarla dogrudan temas eden bir hizmet olan animasyonda hijyen protokolleri hayati onem tasir. Ozellikle yuz boyama, balon sekillendirme ve interaktif oyunlarda cocuklarla yakin temas kacinilmazdir. Bu nedenle ekibin hijyen konusundaki standartlari en az performans kalitesi kadar onemlidir.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Profesyonel bir animasyon ekibinin hijyen protokolu sunlari icermelidir: Her etkinlik oncesi tum materyallerin dezenfekte edilmesi, yuz boyama malzemelerinin dermatolojik olarak test edilmis olmasi ve her cocuk icin ayri firca/sunger kullanilmasi, kostümlerin her kullanim sonrasi antibakteriyel islem gormesi, ekip uyelerinin duzenli saglik kontrolunden gecmesi ve etkinlik sirasinda el dezenfektani bulundurulmasi. Bu konularda net cevap veremeyen bir ekiple cocuklarinizi riske atmayin.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-3">Hijyen Standartlari Kontrol Listesi</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Materyaller her etkinlik oncesi dezenfekte ediliyor</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Yuz boyama malzemeleri dermatolojik test sertifikali</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Her cocuk icin ayri firca ve sunger kullaniliyor</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Kostumler her kullanim sonrasi antibakteriyel islem goruyor</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Ekip uyelerinin guncel saglik raporlari mevcut</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Etkinlik esnasinda el dezenfektani bulunduruluyor</span>
          </div>
        </div>
      </div>

      {/* ===== BOLUM 5: Fiyat ve Odeme ===== */}
      <h2 id="fiyat-odeme" className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        Fiyat ve Odeme Sorulari
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Fiyat konusu, animasyon ekibi seciminde en hassas konularin basinda gelir. Ucuz olan her zaman kalitesiz, pahali olan her zaman kaliteli degildir. Onemli olan, odediginiz ucretin karsillginda ne aldiginizi net olarak bilmektir. Son iki sorumuz bu konuyu aydinlatacaktir.
      </p>

      {/* Soru 14 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 14</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Fiyata neler dahil, neler haric?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Bu soru, tum sureci en cok etkileyen ve en cok anlasmzlige neden olan konudur. Bazi ekipler dusuk bir fiyat soyleerek ilgi cekerler, ardindan yuz boyama, ses sistemi, ekstra balon ve uzatma suresi gibi her sey icin ek ucret talep ederler. Sonucta baslangic fiyatinin 2-3 kati bir tutar odersiniz.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Profesyonel bir ekip, fiyat teklifinde tum dahil ve haric kalemleri acikca belirtir. Animator ucreti, ses sistemi, temel materyaller (balonlar, odul hediyeleri vb.), ulasim ucreti, program planlama ve mekan kesfi genellikle dahil olmalidir. Ek ucretli olabilecek kalemler: Ekstra animtor, ozel kostumlu karakter, pamuk seker/popcorn makinesi, profesyonel fotograf cekimi ve sure uzatmasi seklinde listelenir. <Link to="/organizasyonlar/full-paket-organizasyon" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">Full paket organizasyon</Link> secenekleri, tum bu kalemleri tek bir fiyatta birlesttirerek surpriz maliyetleri ortadan kaldirir.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Detayli fiyat teklifi gonderiyorum, dahil ve haric her kalem yazili."</li>
            <li>"Ses sistemi, materyaller ve ulasim fiyata dahil."</li>
            <li>"Gizli ucret yok, ne soylediysek o, sozlesmede yazili."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Fiyati simdi soylerim ama detaylari etkinlikte konusuruz."</li>
            <li>"Temel paket su kadar, gerisi ek ucretli."</li>
            <li>"Fiyat listelemesi yapiyoruz ama her etkinlikte degisir."</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-3">Fiyat Seffafligi Kontrol Listesi</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Yazili fiyat teklifi alindi</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Dahil kalemler tek tek listelenmis</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Haric kalemler ve ek ucretleri belirtilmis</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Ulasim ucreti dahil mi ayri mi netlesmis</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-indigo-400 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-sm font-bold">&#10004;</span>
            </div>
            <span className="text-gray-700 text-sm">Sure uzatma ucreti belirtilmis</span>
          </div>
        </div>
      </div>

      {/* Soru 15 */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-4 relative">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Soru 15</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Odeme planiniz nasil?</h3>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          Odeme plani, hem sizin hem de ekibin guvenligini saglayan onemli bir detaydir. Profesyonel ekipler genellikle su odeme yapisini uygular: Rezervasyon sirasinda yuzde 30-50 arasinda kapora, kalan tutar etkinlik gununde odenir. Tum odemenin onceden yapilmasini talep eden veya sadece nakit kabul eden ekiplere dikkatli yaklasin.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Odeme yontemleri de onemlidir. Profesyonel bir ekip, banka havale/EFT, kredi karti, nakit gibi birden fazla odeme secenegi sunar. Fatura veya makbuz verip vermeyecegini de sorun. Tum odeme detaylarinin sozlesmede yer almalik onemlidir: kapora tutari, kalan odeme zamani, iade kosullari ve odeme yontemi mutlaka yazili olmalidir.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600 text-xl">&#10004;</span>
            <h4 className="font-bold text-green-800">Bu Cevap Guven Verir!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Yuzde 30 kapora, kalan tutari etkinlik gunu aliyoruz."</li>
            <li>"Havale, EFT ve kredi karti ile odeme yapabilirsiniz."</li>
            <li>"Fatura kesiyoruz, tum odemeler kayit altinda."</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 text-xl">&#10008;</span>
            <h4 className="font-bold text-red-800">Bu Cevabi Alirsaniz Kacin!</h4>
          </div>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>"Tum ucreti pesin istiyoruz."</li>
            <li>"Sadece nakit kabul ediyoruz, fatura kesmiyoruz."</li>
            <li>"Kapora iade edilmez, kosulsuz sartsiz."</li>
          </ul>
        </div>
      </div>

      {/* ===== DEGERLENDIRME KARTI ===== */}
      <h2 id="degerlendirme-karti" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
        Nihai Degerlendirme Puan Karti
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Asagidaki puan kartini kullanarak gorustugunuz her animasyon ekibini degerlendirebilirsiniz. Her soru icin 1-10 arasi puan verin. Toplam puanina gore kararinizi yapin. Bu sistematik yaklasim, duygusal karar vermek yerine veriye dayali bir secim yapmanizi saglar.
      </p>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-8 border border-indigo-200 shadow-lg">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Animasyon Ekibi Degerlendirme Formu</h3>
        <div className="space-y-3">
          {[
            { no: 1, soru: 'Deneyim Yili', aciklama: '5+ yil = 10 puan' },
            { no: 2, soru: 'Referanslar', aciklama: '4.5+ yildiz, video var = 10 puan' },
            { no: 3, soru: 'Sigorta Kapsami', aciklama: 'Tam sigorta belgeli = 10 puan' },
            { no: 4, soru: 'Yas Grubu Uzmanligi', aciklama: 'Yas bazli program var = 10 puan' },
            { no: 5, soru: 'Program Suresi ve Akisi', aciklama: 'Detayli dakika plani = 10 puan' },
            { no: 6, soru: 'Yedek Plan', aciklama: 'Her senaryo icin plan var = 10 puan' },
            { no: 7, soru: 'Materyal Kalitesi', aciklama: 'CE sertifikali, yazili liste = 10 puan' },
            { no: 8, soru: 'Ses Sistemi', aciklama: 'Profesyonel + yedek = 10 puan' },
            { no: 9, soru: 'Mekan Kesfi', aciklama: 'Onceden ziyaret/video = 10 puan' },
            { no: 10, soru: 'Iptal Politikasi', aciklama: 'Yazili ve adil kosullar = 10 puan' },
            { no: 11, soru: 'Ekip Buyuklugu', aciklama: '10-15 cocuk basina 1 animator = 10 puan' },
            { no: 12, soru: 'Kostum Standardi', aciklama: 'Yeni, temiz, profesyonel = 10 puan' },
            { no: 13, soru: 'Hijyen Protokolu', aciklama: 'Tam protokol ve sertifika = 10 puan' },
            { no: 14, soru: 'Fiyat Seffafligi', aciklama: 'Yazili teklif, gizli ucret yok = 10 puan' },
            { no: 15, soru: 'Odeme Plani', aciklama: 'Esnek odeme, fatura kesme = 10 puan' }
          ].map((item) => (
            <div key={item.no} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-indigo-100">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">{item.no}</span>
              </div>
              <div className="flex-1">
                <span className="font-semibold text-gray-900 text-sm">{item.soru}</span>
                <span className="text-gray-500 text-xs ml-2">({item.aciklama})</span>
              </div>
              <div className="flex-shrink-0 w-16 text-right">
                <span className="text-indigo-600 font-bold text-sm">__ /10</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t-2 border-indigo-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-indigo-900">TOPLAM PUAN:</span>
            <span className="text-2xl font-bold text-indigo-600">__ /150</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-green-100 rounded-lg p-3 border border-green-300">
              <span className="text-green-700 text-lg font-bold flex-shrink-0">120-150 Puan:</span>
              <span className="text-green-800 text-sm">Mukemmel! Bu ekiple guvenle calisabilirsiniz. Hemen rezervasyon yapin.</span>
            </div>
            <div className="flex items-center gap-3 bg-yellow-100 rounded-lg p-3 border border-yellow-300">
              <span className="text-yellow-700 text-lg font-bold flex-shrink-0">90-119 Puan:</span>
              <span className="text-yellow-800 text-sm">Iyi ama eksikler var. Dusuk puan aldiginiz konularda ek sorular sorun.</span>
            </div>
            <div className="flex items-center gap-3 bg-orange-100 rounded-lg p-3 border border-orange-300">
              <span className="text-orange-700 text-lg font-bold flex-shrink-0">60-89 Puan:</span>
              <span className="text-orange-800 text-sm">Riskli. Baska ekiplerle de gorusmenizi kesinlikle oneririz.</span>
            </div>
            <div className="flex items-center gap-3 bg-red-100 rounded-lg p-3 border border-red-300">
              <span className="text-red-700 text-lg font-bold flex-shrink-0">0-59 Puan:</span>
              <span className="text-red-800 text-sm">Uzak durun! Bu ekiple calismak buyuk risk tasir.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Kapanış */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Son Soz</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cocugunuzun dogum gunu, yilda bir kez yasanan ve unutulmaz olmasi gereken ozel bir gundur. Dogru animasyon ekibini secmek, bu gunun basarili gecmesinin en onemli anahtaridir. Bu rehberdeki 15 soruyu sirayla sorun, cevaplari not alin ve degerlendirme kartini kullanin. Birden fazla ekiple goruserek karsilastirma yapin ve en yuksek puani alan ekibi secin.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Unutmayin: En ucuz ekip en iyi ekip degildir. Ayni sekilde en pahali ekip de en iyi ekip olmayabilir. Onemli olan, profesyonel, deneyimli, guvenilir ve cocugunuzun yasina uygun program sunabilen bir ekip bulmaktir. Bu rehber, size o ekibi bulmaniz icin gereken tum araclari sundur. Iyi bir secim yapmaniz dilefine!
        </p>
      </div>
    </>
  )

  return (
    <BlogDetail
      slug="animasyon-ekibi-secimi"
      content={content}
      faqData={faqData}
      relatedServicePath="/organizasyonlar/palyaco-kiralama"
      relatedServiceName="Palyaco Kiralama"
    />
  )
}

export default AnimasyonEkibiSecimi
